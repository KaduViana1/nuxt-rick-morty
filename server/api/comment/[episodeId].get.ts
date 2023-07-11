import { PrismaClient } from '@prisma/client';
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
      const comment = await prisma.comment.findMany({
        where: { episode: episodeId, parentId: null },
        orderBy: { createdAt: 'desc' },
        take: 10,
        skip,
      });

      return comment;
    }
  } catch (error) {
    return error;
  } finally {
    await prisma.$disconnect();
  }
});
