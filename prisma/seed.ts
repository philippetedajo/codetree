import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const ben = await prisma.user.create({
    data: {
      name: "Ben Wolf",
      email: "ben@wolf.com",
      projects: {
        create: [
          {
            title: "Learn C",
            description: "An introduction to C programming language",
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
            description: "An introduction to data structure and algorithms",
          },
          {
            title: "Learn Typescript",
            description: "Everyone should learn Typescript",
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
