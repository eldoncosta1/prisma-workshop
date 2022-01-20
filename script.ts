import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  // const users = await prisma.user.findMany();
  // console.log(users);

  // const user = await prisma.user.create({
  //   data: {
  //     name: 'John Doe',
  //     email: 'jdoe@example.com'
  //   }
  // });

  // const user = await prisma.user.update({
  //   data: {
  //     name: 'John Tree'
  //   },
  //   where: {
  //     id: 4
  //   }
  // })

  // console.log(user);

  // await prisma.post.create({
  //   data: {
  //     title: 'teste'
  //   }
  // })

  // const post = await prisma.post.update({
  //   data: {
  //     author: {
  //       connect: {
  //         id: 2
  //       }
  //     }
  //   },
  //   where: {
  //     id: 2
  //   }
  // })

  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: 'eldon@teste2.com'
  //   }
  // })

  // const user = await prisma.user.findMany({
  //   select: {
  //     id: true,
  //     name: true
  //   }
  // })

  // const user = await prisma.user.findMany({
  //   include: {
  //     Post: {
  //       select: {
  //         id: true,
  //         title: true
  //       }
  //     }
  //   },
  // })

  // const user = await prisma.user.create({
  //   data: {
  //     email: 'teste2@teste.com',
  //     name: 'Teste',
  //     Post: {
  //       create: {
  //         title: 'Post teste'
  //       }
  //     }
  //   }
  // })

  // 11 - 
  // const user = await prisma.user.findMany({
  //   where: {
  //     name: {
  //       startsWith: 'B'
  //     }
  //   }
  // })

  // 12 - Escrever uma consulta com paginação
  const user = await prisma.user.findMany({
    skip: 1,
    take: 1
  })

  console.log(JSON.stringify(user, null, 1))
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
