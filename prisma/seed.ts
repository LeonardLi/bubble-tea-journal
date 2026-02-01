import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const teas = [
  {
    name: 'Jasmine Green Milk Tea (伯牙绝弦)',
    brand: 'Chagee (霸王茶姬)',
    description: 'A refreshing jasmine green tea with fresh milk, known for its strong floral aroma. 清新的茉莉花茶搭配鲜奶，以其浓郁的花香而闻名。',
    ingredients: '- Jasmine Green Tea base (茉莉花茶底)\n- Fresh Whole Milk (鲜牛奶)\n- Syrup (to taste) (糖浆)\n- Ice (冰块)',
    steps: '1. Brew jasmine tea strong (1:30 ratio) for 7 mins.\n2. Mix 200ml tea with 150ml fresh milk.\n3. Add syrup.\n4. Shake with ice.'
  },
  {
    name: 'Snow Top Oolong (寻香山茶)',
    brand: 'Molly Tea (茉莉奶白)',
    description: 'Oolong tea topped with whipped cream and pecans. 乌龙茶顶上铺满鲜奶油和碧根果碎.',
    ingredients: '- Oolong Tea (乌龙茶)\n- Whipping Cream (淡奶油)\n- Pecans (碧根果)\n- Sugar (糖)',
    steps: '1. Brew Oolong tea.\n2. Whip cream with sugar until soft peaks.\n3. Pour tea into cup.\n4. Top with whipped cream and crushed pecans.'
  },
  {
    name: 'Brown Sugar Pearl Milk (黑糖珍珠鲜奶)',
    brand: 'Generic (通用)',
    description: 'Classic favorite with warm boba and cold milk. 经典的温热珍珠搭配冷鲜奶.',
    ingredients: '- Tapioca Pearls (珍珠)\n- Brown Sugar (黑糖)\n- Fresh Milk (鲜奶)',
    steps: '1. Cook pearls for 30 mins, simmer for 20 mins.\n2. Mix cooked pearls with brown sugar syrup.\n3. Coat cup with syrup.\n4. Add pearls, ice, and milk.'
  }
];

async function main() {
  console.log('Start seeding ...');
  // Clear existing data to avoid duplicates if re-running (optional, mostly for dev)
  await prisma.review.deleteMany();
  await prisma.tea.deleteMany();

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