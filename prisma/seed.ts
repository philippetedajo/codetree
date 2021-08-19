import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // ======= Clean db
  await prisma.user.deleteMany({});
  await prisma.post.deleteMany({});

  // ======= Seed db
  const ben = await prisma.user.create({
    data: {
      name: "Ben Wolf",
      email: "ben@wolf.com",
      posts: {
        create: [
          {
            title: "Learn C",
            content: "An introduction to C programming language",
            published: false,
          },
        ],
      },
    },
  });

  const lucy = await prisma.user.create({
    data: {
      name: "Lucy Snow",
      email: "lucy@snow.com",
      posts: {
        create: [
          {
            title: "Basic Data structure and algorithms",
            content: "An introduction to data structure and algorithms",
            published: false,
          },
          {
            title: "Learn Typescript",
            content: "Everyone should learn Typescript",
            published: false,
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
