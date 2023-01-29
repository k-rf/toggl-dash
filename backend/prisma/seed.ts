import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

const main = async () => {
  client.$transaction([
    client.togglConfig.create({
      data: {
        key: "toggl_api_url",
        value: "api.track.toggl.com/api/v9",
      },
    }),
  ]);
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
