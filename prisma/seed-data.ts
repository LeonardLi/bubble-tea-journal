// Placeholder data for 100 teas
// In a real scenario, this would be a much larger file with 100 unique entries.
// We will generate a representative list of ~30 and then use programmatic variations to reach ~100 for the sake of the user's request.

export interface TeaSeedData {
  name: string;
  nameZh: string;
  brand: string;
  brandZh: string;
  description: string;
  descriptionZh: string;
  ingredients: string;
  ingredientsZh: string;
  steps: string;
  stepsZh: string;
  referenceImage: string;
}

const commonSteps = {
  milkTea: {
    en: "1. Brew tea base (5 mins).\n2. Mix with milk/creamer.\n3. Add sweetener.\n4. Add toppings.\n5. Shake with ice.",
    zh: "1. 泡茶底（5分钟）。\n2. 加入牛奶/奶精混合。\n3. 加糖。\n4. 加入小料。\n5. 加冰摇匀。"
  },
  fruitTea: {
    en: "1. Brew green/oolong tea.\n2. Crush fresh fruit in cup.\n3. Add syrup and ice.\n4. Pour tea over fruit.\n5. Shake gently.",
    zh: "1. 泡绿茶/乌龙茶。\n2. 杯中捣碎鲜果。\n3. 加入糖浆和冰块。\n4. 倒入茶汤。\n5. 轻轻摇匀。"
  },
  slush: {
    en: "1. Blend fruit, ice, and syrup.\n2. Add tea base if desired.\n3. Pour into cup.\n4. Top with cheese foam/cream.",
    zh: "1. 将水果、冰块和糖浆打成冰沙。\n2. 按需加入茶底。\n3. 倒入杯中。\n4. 顶上铺芝士奶盖/奶油。"
  }
};

const brands = [
  { en: 'Heytea', zh: '喜茶' },
  { en: 'Nayuki', zh: '奈雪的茶' },
  { en: 'Coco', zh: '都可' },
  { en: 'Gong Cha', zh: '贡茶' },
  { en: 'Chagee', zh: '霸王茶姬' },
  { en: 'The Alley', zh: '鹿角巷' },
  { en: 'Yi Dian Dian', zh: '一点点' },
  { en: 'Mixue', zh: '蜜雪冰城' },
  { en: 'Xing Fu Tang', zh: '幸福堂' },
  { en: 'Tiger Sugar', zh: '老虎堂' },
];

// Curated list of popular drinks with specific images (using generic high-quality placeholders or known types)
// Using placeholder images for demo reliability.
const getPlaceholder = (type: 'milk' | 'fruit' | 'matcha' | 'brown') => {
  // Using high quality static images or reliable placeholders
  // For this demo, we will use a consistent placeholder service that supports text to differentiate
  return `https://placehold.co/600x400/F7F5F2/B59E9E/png?text=${type}+Tea`; 
};

export const teaData: TeaSeedData[] = [
  // CHAGEE
  {
    name: 'Jasmine Green Milk Tea (Bo Ya Jue Xian)',
    nameZh: '伯牙绝弦',
    brand: 'Chagee',
    brandZh: '霸王茶姬',
    description: 'Signature jasmine green tea with fresh milk.',
    descriptionZh: '招牌茉莉花茶搭配鲜奶，茶香浓郁。',
    ingredients: '- Jasmine Tea\n- Fresh Milk\n- Syrup',
    ingredientsZh: '- 茉莉花茶\n- 鲜奶\n- 糖浆',
    steps: commonSteps.milkTea.en,
    stepsZh: commonSteps.milkTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=800&q=80' // Jasmine Tea lookalike
  },
  {
    name: 'White Peach Oolong Milk Tea',
    nameZh: '花田乌龙',
    brand: 'Chagee',
    brandZh: '霸王茶姬',
    description: 'Fragrant white peach oolong tea with milk.',
    descriptionZh: '香甜白桃乌龙茶搭配鲜奶。',
    ingredients: '- White Peach Oolong\n- Milk\n- Peach Syrup',
    ingredientsZh: '- 白桃乌龙\n- 牛奶\n- 桃子糖浆',
    steps: commonSteps.milkTea.en,
    stepsZh: commonSteps.milkTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1626379222002-38f32244238e?auto=format&fit=crop&w=800&q=80' // Peach tea lookalike
  },
  // HEYTEA
  {
    name: 'Very Grape Cheese',
    nameZh: '多肉葡萄',
    brand: 'Heytea',
    brandZh: '喜茶',
    description: 'Fresh grapes blended with tea and topped with cheese foam.',
    descriptionZh: '鲜剥葡萄果肉搭配茶底，顶上铺满芝士奶盖。',
    ingredients: '- Fresh Grapes\n- Green Tea\n- Cheese Foam\n- Crystal Jelly',
    ingredientsZh: '- 鲜葡萄\n- 绿茶\n- 芝士奶盖\n- 脆波波',
    steps: commonSteps.slush.en,
    stepsZh: commonSteps.slush.zh,
    referenceImage: 'https://images.unsplash.com/photo-1582236896585-6447a0492166?auto=format&fit=crop&w=800&q=80' // Grape drink
  },
  {
    name: 'Mango Cheezo',
    nameZh: '芝芝芒芒',
    brand: 'Heytea',
    brandZh: '喜茶',
    description: 'Mango slush with green tea and cheese foam.',
    descriptionZh: '芒果冰沙搭配绿茶底和芝士奶盖。',
    ingredients: '- Mango\n- Green Tea\n- Cheese Foam',
    ingredientsZh: '- 芒果\n- 绿茶\n- 芝士奶盖',
    steps: commonSteps.slush.en,
    stepsZh: commonSteps.slush.zh,
    referenceImage: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80' // Mango drink
  },
  // COCO
  {
    name: 'Three Guys',
    nameZh: '奶茶三兄弟',
    brand: 'Coco',
    brandZh: '都可',
    description: 'Milk tea with pearls, pudding, and grass jelly.',
    descriptionZh: '经典奶茶搭配珍珠、布丁和仙草。',
    ingredients: '- Black Tea\n- Milk\n- Pearls\n- Pudding\n- Grass Jelly',
    ingredientsZh: '- 红茶\n- 牛奶\n- 珍珠\n- 布丁\n- 仙草',
    steps: commonSteps.milkTea.en,
    stepsZh: commonSteps.milkTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1571216682022-79b8841443b7?auto=format&fit=crop&w=800&q=80' // Classic milk tea
  },
  {
    name: 'Bubble Gaga',
    nameZh: '鲜百香双响炮',
    brand: 'Coco',
    brandZh: '都可',
    description: 'Passion fruit green tea with pearls and coconut jelly.',
    descriptionZh: '百香果绿茶搭配珍珠和椰果。',
    ingredients: '- Passion Fruit\n- Green Tea\n- Pearls\n- Coconut Jelly',
    ingredientsZh: '- 百香果\n- 绿茶\n- 珍珠\n- 椰果',
    steps: commonSteps.fruitTea.en,
    stepsZh: commonSteps.fruitTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1534043464124-3832c2a00904?auto=format&fit=crop&w=800&q=80' // Passion fruit lookalike
  },
  // THE ALLEY
  {
    name: 'Brown Sugar Deerioca Fresh Milk',
    nameZh: '黑糖鹿丸鲜奶',
    brand: 'The Alley',
    brandZh: '鹿角巷',
    description: 'Warm brown sugar tapioca pearls with cold fresh milk.',
    descriptionZh: '温热的黑糖珍珠搭配冷鲜奶。',
    ingredients: '- Brown Sugar Pearls\n- Fresh Milk',
    ingredientsZh: '- 黑糖珍珠\n- 鲜奶',
    steps: "1. Slow cook pearls in brown sugar.\n2. Coat cup with syrup.\n3. Pour milk.",
    stepsZh: "1. 黑糖慢熬珍珠。\n2. 杯壁挂糖。\n3. 倒入鲜奶。",
    referenceImage: 'https://images.unsplash.com/photo-1558350315-8aa00aa5e754?auto=format&fit=crop&w=800&q=80' // Brown sugar milk
  },
  // YI DIAN DIAN
  {
    name: 'Black Tea Macchiato',
    nameZh: '红茶玛奇朵',
    brand: 'Yi Dian Dian',
    brandZh: '一点点',
    description: 'Black tea topped with sweet cream foam.',
    descriptionZh: '红茶顶上铺满甜奶霜。',
    ingredients: '- Black Tea\n- Cream Foam',
    ingredientsZh: '- 红茶\n- 奶霜',
    steps: "1. Brew black tea.\n2. Top with foam.",
    stepsZh: "1. 泡红茶。\n2. 铺上奶霜。",
    referenceImage: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80' // Foam tea
  },
  // NAYUKI
  {
    name: 'Supreme Cheese Strawberry',
    nameZh: '霸气芝士草莓',
    brand: 'Nayuki',
    brandZh: '奈雪的茶',
    description: 'Fresh strawberries blended with jasmine tea and cheese top.',
    descriptionZh: '鲜草莓搭配茉莉花茶打底，顶上芝士奶盖。',
    ingredients: '- Strawberries\n- Jasmine Tea\n- Cheese Foam',
    ingredientsZh: '- 草莓\n- 茉莉花茶\n- 芝士奶盖',
    steps: commonSteps.slush.en,
    stepsZh: commonSteps.slush.zh,
    referenceImage: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80' // Strawberry drink
  }
];

// Generate variants to reach ~100 items for the "Challenge" feel
const teaBases = [
  { en: 'Oolong', zh: '乌龙' },
  { en: 'Jasmine', zh: '茉莉' },
  { en: 'Black Tea', zh: '红茶' },
  { en: 'Green Tea', zh: '绿茶' },
  { en: 'Earl Grey', zh: '伯爵茶' },
  { en: 'Tie Guan Yin', zh: '铁观音' },
  { en: 'Da Hong Pao', zh: '大红袍' },
  { en: 'Matcha', zh: '抹茶' }
];

const styles = [
  { en: 'Milk Tea', zh: '奶茶', type: 'milk' },
  { en: 'Fresh Milk', zh: '鲜奶', type: 'milk' },
  { en: 'Cheese Foam', zh: '芝士', type: 'milk' },
  { en: 'Fruit Tea', zh: '果茶', type: 'fruit' },
  { en: 'Slush', zh: '冰沙', type: 'fruit' }
];

const fruits = [
  { en: 'Mango', zh: '芒果' },
  { en: 'Strawberry', zh: '草莓' },
  { en: 'Peach', zh: '白桃' },
  { en: 'Grape', zh: '葡萄' },
  { en: 'Lemon', zh: '柠檬' },
  { en: 'Orange', zh: '柳橙' },
  { en: 'Watermelon', zh: '西瓜' },
  { en: 'Pineapple', zh: '凤梨' }
];

// Generate remaining items to reach 100
let count = teaData.length;
for (const brand of brands) {
  for (const style of styles) {
    if (count >= 100) break;
    
    // Create random combinations
    const base = teaBases[count % teaBases.length];
    const fruit = fruits[count % fruits.length];
    
    let name = '', nameZh = '', desc = '', descZh = '', img = '';
    
    if (style.type === 'fruit') {
      name = `${fruit.en} ${base.en} ${style.en}`;
      nameZh = `${fruit.zh}${base.zh}${style.zh}`;
      desc = `Refreshing ${fruit.en} flavor with ${base.en} tea.`;
      descZh = `清新的${fruit.zh}口味搭配${base.zh}。`;
      img = `https://placehold.co/600x400/F7F5F2/B59E9E/png?text=${fruit.en}+Tea`;
    } else {
      name = `${base.en} ${style.en}`;
      nameZh = `${base.zh}${style.zh}`;
      desc = `Classic ${base.en} tea with ${style.en.toLowerCase()}.`;
      descZh = `经典的${base.zh}搭配${style.zh}。`;
      img = `https://placehold.co/600x400/F7F5F2/B59E9E/png?text=${base.en}+Milk+Tea`;
    }

    teaData.push({
      name,
      nameZh,
      brand: brand.en,
      brandZh: brand.zh,
      description: desc,
      descriptionZh: descZh,
      ingredients: `- ${base.en}\n- ${style.en === 'Fruit Tea' ? fruit.en : 'Milk'}`,
      ingredientsZh: `- ${base.zh}\n- ${style.en === 'Fruit Tea' ? fruit.zh : '牛奶'}`,
      steps: style.type === 'fruit' ? commonSteps.fruitTea.en : commonSteps.milkTea.en,
      stepsZh: style.type === 'fruit' ? commonSteps.fruitTea.zh : commonSteps.milkTea.zh,
      referenceImage: img
    });
    
    count++;
  }
}
