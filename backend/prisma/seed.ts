import { PrismaClient } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

const client = new PrismaClient();

const main = async () => {
  await client.dashButton.createMany({
    data: [
      { id: uuidV4(), order: 0, summary: "Lunch" },
      { id: uuidV4(), order: 1, summary: "Sleep" },
      { id: uuidV4(), order: 2, summary: "Study" },
    ],
  });
};

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
