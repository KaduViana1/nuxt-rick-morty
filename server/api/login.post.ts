import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const body = await readBody(event);
  const { email, password } = body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid Credentials',
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      return { user };
    } else {
      throw createError({
        statusCode: 400,
        statusMessage: 'Invalid Credentials',
      });
    }
  } catch (err) {
    return err;
  }
});
