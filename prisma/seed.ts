import { PrismaClient } from '@prisma/client';
import { teaData } from './seed-data';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding ...');
  // Clear existing data to avoid duplicates
  await prisma.review.deleteMany();
  await prisma.tea.deleteMany();

  for (const tea of teaData) {
    const result = await prisma.tea.create({
      data: tea,
    });
    console.log(`Created tea: ${result.name}`);
  }
  console.log(`Seeding finished. Created ${teaData.length} teas.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });