import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const body = await readBody(event);
  const { content, episode, authorId, parentId } = body;

  try {
    if (parentId) {
      const newComment = await prisma.comment.create({
        data: { content, episode, authorId, parentId },
      });
      return newComment;
    } else {
      const newComment = await prisma.comment.create({
        data: { content, episode, authorId },
      });
      return newComment;
    }
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
});
