import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const body = await readBody(event);
  const { content, episode, authorId } = body;

  if (content.length < 10) return;

  try {
    const newComment = await prisma.comment.create({
      data: { content, authorId, episode },
    });
    return newComment;
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
});
