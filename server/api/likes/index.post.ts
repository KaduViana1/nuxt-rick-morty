import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const body = await readBody(event);
  const { userId, commentId } = body;

  try {
    const newLike = await prisma.likes.create({ data: { userId, commentId } });
    return newLike;
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
});
