import * as bcrypt from 'bcrypt';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const body = await readBody(event);
  const { name, email, password } = body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: { name: name, email: email, password: hashedPassword },
    });
    return { user };
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      if (err.code === 'P2002') {
        throw createError({
          statusCode: 400,
          statusMessage: 'This email is already in use',
        });
      }
    }
  } finally {
    await prisma.$disconnect();
  }
});
