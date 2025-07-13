import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// loader: Get item from table by primary key
export async function loader(entityName: string, primId: string, primName: string): Promise<any | undefined> {
  try {
    // @ts-ignore - dynamic access
    const data = await prisma[entityName].findUnique({
      where: {
        [primName]: primId,
      },
    });

    if (!data) {
      console.log(`[Prisma] No data found in ${entityName} where ${primName} = ${primId}`);
      return undefined;
    }

    return data;
  } catch (err) {
    console.error(`[Prisma] Loader error: ${err}`);
    return undefined;
  }
}

// saver: Upsert (insert if not found, else update)
export async function saver(entityName: string, item: any, primId: string, primName: string): Promise<void> {
  try {
    // @ts-ignore - dynamic model access
    await prisma[entityName].upsert({
      where: {
        [primName]: primId,
      },
      update: item,
      create: item,
    });

    console.log(`[Prisma] Saved to ${entityName} where ${primName} = ${primId}`);
  } catch (err) {
    console.error(`[Prisma] Saver error: ${err}`);
  }
}
