import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const query = getQuery(event);

  const likeId = {
    userId: query.userId as string,
    commentId: query.commentId as string,
  };

  try {
    if (likeId) {
      const like = await prisma.likes.findUnique({
        where: {
          userId_commentId: likeId,
        },
      });

      if (like) return true;
      else return false;
    }
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
});
