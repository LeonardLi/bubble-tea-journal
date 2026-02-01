import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const teas = [
  {
    name: 'Jasmine Green Milk Tea (Bo Ya Jue Xian)',
    brand: 'Chagee',
    description: 'A refreshing jasmine green tea with fresh milk, known for its strong floral aroma.',
    ingredients: '- Jasmine Green Tea base\n- Fresh Whole Milk\n- Syrup (to taste)\n- Ice',
    steps: '1. Brew jasmine tea strong (1:30 ratio) for 7 mins.\n2. Mix 200ml tea with 150ml fresh milk.\n3. Add syrup.\n4. Shake with ice.'
  },
  {
    name: 'Snow Top Oolong',
    brand: 'Molly Tea',
    description: 'Oolong tea topped with whipped cream and pecans.',
    ingredients: '- Oolong Tea\n- Whipping Cream\n- Pecans\n- Sugar',
    steps: '1. Brew Oolong tea.\n2. Whip cream with sugar until soft peaks.\n3. Pour tea into cup.\n4. Top with whipped cream and crushed pecans.'
  },
  {
    name: 'Brown Sugar Pearl Milk',
    brand: 'Generic',
    description: 'Classic favorite with warm boba and cold milk.',
    ingredients: '- Tapioca Pearls\n- Brown Sugar\n- Fresh Milk',
    steps: '1. Cook pearls for 30 mins, simmer for 20 mins.\n2. Mix cooked pearls with brown sugar syrup.\n3. Coat cup with syrup.\n4. Add pearls, ice, and milk.'
  }
];

async function main() {
  console.log('Start seeding ...');
  for (const tea of teas) {
    const result = await prisma.tea.create({
      data: tea,
    });
    console.log(`Created tea with id: ${result.id}`);
  }
  console.log('Seeding finished.');
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
