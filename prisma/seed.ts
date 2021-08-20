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
            description:
              "Like most procedural languages in the ALGOL tradition, C has facilities for structured programming and allows lexical variable scope and recursion. Its static type system prevents unintended operations.",
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
            description:
              "In computer science, a data structure is a data organization, management, and storage format that enables efficient access and modification.",
          },
          {
            title: "Learn Typescript",
            description:
              "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. TypeScript is designed for the development of large applications and transcompiles to JavaScript.",
          },
          {
            title: "Dynamic Programming",
            description:
              "Dynamic Programming (DP) is an algorithmic technique for solving an optimization problem by breaking it down into simpler subproblems and utilizing the fact that the optimal solution to the overall problem depends upon the optimal solution to its subproblems.",
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
