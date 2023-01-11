import { graphql } from "msw";

import { GetTogglClientsDocument, GetTogglClientsQuery } from "../graphql";

export const handlers = [
  graphql.query<GetTogglClientsQuery>(GetTogglClientsDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        togglClientAll: [
          {
            id: 1,
            name: "Client 1",
          },
          {
            id: 2,
            name: "Client 2",
          },
        ],
      })
    );
  }),
];
