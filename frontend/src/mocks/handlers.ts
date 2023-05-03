import { graphql } from "msw";

import {
  DeleteDashButtonDocument,
  DeleteDashButtonMutation,
  GetTogglClientsDocument,
  GetTogglClientsQuery,
  GetTogglProjectsByClientDocument,
  GetTogglProjectsByClientQuery,
  RegisterAnnualObjectiveDocument,
  RegisterAnnualObjectiveMutation,
} from "../graphql";

export const handlers = [
  graphql.query<GetTogglClientsQuery>(GetTogglClientsDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        togglClientAll: [
          { id: 1, name: "Client 1" },
          { id: 2, name: "Client 2" },
          { id: 3, name: "Client 3" },
        ],
      })
    );
  }),
  graphql.query<GetTogglProjectsByClientQuery>(
    GetTogglProjectsByClientDocument,
    (req, res, ctx) => {
      return res(
        ctx.data({
          togglProjectByClient: [
            { id: 1, name: "Project 1" },
            { id: 2, name: "Project 2" },
            { id: 3, name: "Project 3" },
          ],
        })
      );
    }
  ),
  graphql.mutation<DeleteDashButtonMutation>(DeleteDashButtonDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        deleteDashButton: true,
      })
    );
  }),
  graphql.mutation<RegisterAnnualObjectiveMutation>(
    RegisterAnnualObjectiveDocument,
    (req, res, ctx) => {
      return res(
        ctx.data({
          registerAnnualObjective: true,
        })
      );
    }
  ),
];
