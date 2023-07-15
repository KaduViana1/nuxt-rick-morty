import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const query = getQuery(event);

  const comment = {
    commentId: query.commentId as string,
  };

  try {
    if (comment) {
      await prisma.comment.delete({
        where: {
          id: comment.commentId,
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
