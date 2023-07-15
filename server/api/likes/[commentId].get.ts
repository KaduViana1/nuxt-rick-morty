import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const commentId = event.context.params?.commentId;

  try {
    const count = await prisma.likes.count({
      where: {
        commentId,
      },
    });

    return count;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
});
