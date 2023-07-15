import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const query = getQuery(event);

  const like = {
    userId: query.userId as string,
    commentId: query.commentId as string,
  };

  try {
    if (like) {
      await prisma.likes.delete({
        where: {
          userId_commentId: like,
        },
      });
      return { success: true };
    }
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
});
