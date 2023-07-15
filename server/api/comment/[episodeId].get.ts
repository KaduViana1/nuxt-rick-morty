import { PrismaClient } from '@prisma/client';
import { commonDark } from 'naive-ui';
const prisma = new PrismaClient();

export default eventHandler(async event => {
  const episodeId = event.context.params?.episodeId;
  const query = getQuery(event);
  let skip;
  if (query.skip) {
    skip = parseFloat(query.skip as string);
  }

  try {
    if (episodeId) {
      const data = await prisma.comment.findMany({
        where: { episode: episodeId },
        orderBy: { createdAt: 'desc' },
        take: 10,
        skip,
      });

      const count = await prisma.comment.count({
        where: { episode: episodeId },
      });

      const comment = { data, count };

      return comment;
    }
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
});
