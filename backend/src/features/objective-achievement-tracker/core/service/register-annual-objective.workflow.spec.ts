import { Test } from "@nestjs/testing";
import { match } from "ts-pattern";

import { AnnualObjectiveInMemoryRepository } from "../../infrastructure/annual-objective.in-memory.repository";
import { AnnualObjective, AnnualObjectiveId } from "../domain/annual-objective";
import { AnnualObjectiveRepository } from "../domain/annual-objective/annual-objective.repository";

import { annualObjectiveFixture } from "./fixture";
import { RegisterAnnualObjectiveWorkflow } from "./register-annual-objective.workflow";
import { RegisterAnnualObjectiveWorkflowInput } from "./register-annual-objective.workflow.input";
import { RegisterAnnualObjectiveWorkflowOutput } from "./register-annual-objective.workflow.output";

describe("RegisterAnnualObjectiveWorkflow", () => {
  let sut: RegisterAnnualObjectiveWorkflow;

  let repository: AnnualObjectiveRepository;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      providers: [
        RegisterAnnualObjectiveWorkflow,
        { provide: AnnualObjectiveRepository, useClass: AnnualObjectiveInMemoryRepository },
      ],
    }).compile();

    sut = moduleFixture.get(RegisterAnnualObjectiveWorkflow);

    repository = moduleFixture.get(AnnualObjectiveRepository);
  });

  it("年次目標を登録することができる", async () => {
    // 準備
    const input = new RegisterAnnualObjectiveWorkflowInput(annualObjectiveFixture.dataModel);

    // 実行
    const actual = await sut.handle(input);

    // ビジネスロジックの検証
    expect(actual).toStrictEqual(
      new RegisterAnnualObjectiveWorkflowOutput({
        ...annualObjectiveFixture.dataModel,
        id: expect.any(String),
      })
    );

    // 永続化の検証
    const result = await repository.findById(new AnnualObjectiveId(actual.id));
    match(result)
      .with({ ok: true }, ({ value }) => {
        expect(value).toStrictEqual(
          new AnnualObjective.Builder({
            ...annualObjectiveFixture.domainModel,
            id: new AnnualObjectiveId(actual.id),
          }).build()
        );
      })
      .otherwise(() => {
        fail();
      });
  });
});
