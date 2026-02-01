import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const teas = [
  {
    name: 'Jasmine Green Milk Tea (Bo Ya Jue Xian)',
    nameZh: '伯牙绝弦',
    brand: 'Chagee',
    brandZh: '霸王茶姬',
    description: 'A refreshing jasmine green tea with fresh milk, known for its strong floral aroma.',
    descriptionZh: '清新的茉莉花茶搭配鲜奶，以其浓郁的花香而闻名。',
    ingredients: '- Jasmine Green Tea base\n- Fresh Whole Milk\n- Syrup (to taste)\n- Ice',
    ingredientsZh: '- 茉莉花茶底\n- 鲜牛奶\n- 糖浆\n- 冰块',
    steps: '1. Brew jasmine tea strong (1:30 ratio) for 7 mins.\n2. Mix 200ml tea with 150ml fresh milk.\n3. Add syrup.\n4. Shake with ice.',
    stepsZh: '1. 泡茉莉花茶（1:30比例）7分钟。\n2. 将200毫升茶与150毫升鲜奶混合。\n3. 加入糖浆。\n4. 加冰摇匀。'
  },
  {
    name: 'Snow Top Oolong',
    nameZh: '寻香山茶',
    brand: 'Molly Tea',
    brandZh: '茉莉奶白',
    description: 'Oolong tea topped with whipped cream and pecans.',
    descriptionZh: '乌龙茶顶上铺满鲜奶油和碧根果碎。',
    ingredients: '- Oolong Tea\n- Whipping Cream\n- Pecans\n- Sugar',
    ingredientsZh: '- 乌龙茶\n- 淡奶油\n- 碧根果\n- 糖',
    steps: '1. Brew Oolong tea.\n2. Whip cream with sugar until soft peaks.\n3. Pour tea into cup.\n4. Top with whipped cream and crushed pecans.',
    stepsZh: '1. 泡乌龙茶。\n2. 淡奶油加糖打发至湿性发泡。\n3. 将茶倒入杯中。\n4. 顶上铺满奶油和碧根果碎。'
  },
  {
    name: 'Brown Sugar Pearl Milk',
    nameZh: '黑糖珍珠鲜奶',
    brand: 'Generic',
    brandZh: '通用配方',
    description: 'Classic favorite with warm boba and cold milk.',
    descriptionZh: '经典的温热珍珠搭配冷鲜奶。',
    ingredients: '- Tapioca Pearls\n- Brown Sugar\n- Fresh Milk',
    ingredientsZh: '- 珍珠\n- 黑糖\n- 鲜奶',
    steps: '1. Cook pearls for 30 mins, simmer for 20 mins.\n2. Mix cooked pearls with brown sugar syrup.\n3. Coat cup with syrup.\n4. Add pearls, ice, and milk.',
    stepsZh: '1. 煮珍珠30分钟，焖20分钟。\n2. 将煮好的珍珠与黑糖浆混合。\n3. 杯壁挂糖。\n4. 加入珍珠、冰块和鲜奶。'
  }
];

async function main() {
  console.log('Start seeding ...');
  // Clear existing data to avoid duplicates
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
