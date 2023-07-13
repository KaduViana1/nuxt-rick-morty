import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const body = await readBody(event);
  const { userId, commentId } = body;

  try {
    await prisma.likes.create({ data: { userId, commentId } });
  } catch (err) {
    console.log(err);
    return err;
  } finally {
    await prisma.$disconnect();
  }
});
