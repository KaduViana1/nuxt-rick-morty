import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const id = event.context.params?.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        name: true,
      },
    });

    return user;
  } catch (err) {
    return err;
  } finally {
    await prisma.$disconnect();
  }
});
