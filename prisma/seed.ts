import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // clean db before seed : ONLY IN DEV MODE
  await prisma.user.deleteMany({});
  await prisma.project.deleteMany({});

  // seed db
  const ben = await prisma.user.create({
    data: {
      name: "Ben Wolf",
      email: "ben@wolf.com",
      projects: {
        create: [
          {
            title: "Learn C",
          },
        ],
      },
    },
  });

  const lucy = await prisma.user.create({
    data: {
      name: "Lucy Snow",
      email: "lucy@snow.com",
      projects: {
        create: [
          {
            title: "Basic Data structure and algorithms",
          },
          {
            title: "Learn Typescript",
          },
          {
            title: "Dynamic Programming",
          },
        ],
      },
    },
  });

  console.log({ ben, lucy });
};

main()
  .catch((err) => {
    console.log(err);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());
