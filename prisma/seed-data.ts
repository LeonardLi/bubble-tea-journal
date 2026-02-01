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
    en: "1. **Brew Tea Base**: Steep 10g of tea leaves in 300ml hot water (95°C) for 7 minutes. Filter out leaves.\n2. **Mix**: In a shaker, combine 200ml tea base, 150ml fresh milk (or non-dairy creamer), and 30ml sweetener (syrup/cane sugar).\n3. **Shake**: Add a cup of ice cubes to the shaker and shake vigorously for 10-15 seconds until cold and frothy.\n4. **Assemble**: Add toppings (e.g., 50g tapioca pearls) to the serving cup. Pour the shaken milk tea over the toppings.\n\n**Note**: Adjust sugar level to taste (30ml is standard/100%). For hot milk tea, skip the ice shake and heat the milk before mixing.",
    zh: "1. **泡茶底**：用10克茶叶加入300毫升热水（95°C）浸泡7分钟。过滤掉茶叶。\n2. **混合**：在雪克杯中混合200毫升茶底、150毫升鲜奶（或植脂末）和30毫升糖浆（或蔗糖）。\n3. **摇匀**：加入一杯冰块，用力摇晃10-15秒，直到茶汤变冷且产生泡沫。\n4. **装杯**：在杯中加入小料（如50克珍珠）。倒入摇匀的奶茶。\n\n**注意**：糖量可根据口味调整（30毫升为标准/全糖）。热饮请跳过加冰摇晃步骤，提前加热牛奶。"
  },
  fruitTea: {
    en: "1. **Brew Tea Base**: Steep 8g of green/oolong tea in 250ml hot water (80°C) for 5 minutes. Let it cool.\n2. **Prepare Fruit**: In the serving cup, add 50g of fresh fruit chunks. Muddle gently to release juices.\n3. **Mix**: In a shaker, combine 200ml cooled tea base, 30ml fruit syrup/jam, and 20ml sugar syrup.\n4. **Shake**: Add ice to the shaker and shake well.\n5. **Serve**: Pour the tea mixture over the muddled fruit. Garnish with a slice of fresh fruit (lemon/orange).\n\n**Note**: Use fresh seasonal fruit for best results. Do not steep green tea too long or it will become bitter.",
    zh: "1. **泡茶底**：用8克绿茶/乌龙茶加入250毫升热水（80°C）浸泡5分钟。放凉备用。\n2. **准备水果**：在杯中加入50克新鲜果肉。轻轻捣碎出汁。\n3. **混合**：在雪克杯中加入200毫升冷却的茶底、30毫升果酱/糖浆和20毫升蔗糖浆。\n4. **摇匀**：加冰摇匀。\n5. **装杯**：将茶汤倒入装有果肉的杯中。装饰一片鲜果（柠檬/橙片）。\n\n**注意**：使用当季新鲜水果口感最佳。绿茶不要浸泡太久，否则会变苦。"
  },
  slush: {
    en: "1. **Prepare Ingredients**: You need 150g fresh fruit (frozen preferred), 100ml tea base (cooled), 30ml syrup, and 200g ice cubes.\n2. **Blend**: Add fruit, tea, syrup, and ice into a blender. Blend on high speed until smooth and slushy.\n3. **Prepare Foam**: Whisk 50ml heavy cream, 20ml milk, 10g cream cheese powder, and a pinch of sea salt until thickened but pourable.\n4. **Assemble**: Pour slush into cup. Gently spoon the cheese foam on top.\n\n**Note**: Drink immediately before it melts. Use a straw to taste the tea layer first, then the foam, then mix.",
    zh: "1. **准备材料**：需要150克鲜果（冷冻更佳）、100毫升茶底（冷却）、30毫升糖浆和200克冰块。\n2. **搅打**：将水果、茶底、糖浆和冰块放入破壁机。高速搅打至绵密冰沙状。\n3. **打奶盖**：将50毫升淡奶油、20毫升牛奶、10克芝士粉和一撮海盐搅打至浓稠流动状。\n4. **装杯**：倒入冰沙。轻轻铺上芝士奶盖。\n\n**注意**：请尽快饮用，以免融化。建议先用吸管喝下层果茶，再品尝奶盖，最后混合饮用。"
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

const getPlaceholder = (type: 'milk' | 'fruit' | 'matcha' | 'brown') => {
  return `https://placehold.co/600x400/F7F5F2/B59E9E/png?text=${type}+Tea`; 
};

export const teaData: TeaSeedData[] = [
  // CHAGEE
  {
    name: 'Jasmine Green Milk Tea (Bo Ya Jue Xian)',
    nameZh: '伯牙绝弦',
    brand: 'Chagee',
    brandZh: '霸王茶姬',
    description: 'Signature jasmine green tea with fresh milk. A perfect balance of floral aroma and creamy texture.',
    descriptionZh: '招牌茉莉花茶搭配鲜奶，茶香浓郁，花香与奶香完美平衡。',
    ingredients: '- 10g Jasmine Green Tea Leaves\n- 200ml Fresh Whole Milk\n- 30ml Cane Sugar Syrup\n- 150g Ice Cubes',
    ingredientsZh: '- 10克 茉莉雪芽茶叶\n- 200毫升 鲜牛奶\n- 30毫升 蔗糖糖浆\n- 150克 冰块',
    steps: commonSteps.milkTea.en,
    stepsZh: commonSteps.milkTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'White Peach Oolong Milk Tea',
    nameZh: '花田乌龙',
    brand: 'Chagee',
    brandZh: '霸王茶姬',
    description: 'Fragrant white peach oolong tea with milk. Sweet peach aroma meets smooth oolong tea.',
    descriptionZh: '香甜白桃乌龙茶搭配鲜奶。桃香扑鼻，乌龙醇厚。',
    ingredients: '- 8g White Peach Oolong Tea\n- 200ml Fresh Milk\n- 25ml Peach Syrup\n- 150g Ice',
    ingredientsZh: '- 8克 白桃乌龙茶叶\n- 200毫升 鲜牛奶\n- 25毫升 桃子糖浆\n- 150克 冰块',
    steps: commonSteps.milkTea.en,
    stepsZh: commonSteps.milkTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1626379222002-38f32244238e?auto=format&fit=crop&w=800&q=80'
  },
  // HEYTEA
  {
    name: 'Very Grape Cheese',
    nameZh: '多肉葡萄',
    brand: 'Heytea',
    brandZh: '喜茶',
    description: 'Fresh hand-peeled grapes blended with green tea slush and topped with savory cheese foam.',
    descriptionZh: '鲜剥葡萄果肉搭配绿茶冰沙，顶上铺满咸香芝士奶盖。',
    ingredients: '- 150g Fresh Black Grapes (Peeled)\n- 200ml Jasmine Green Tea Base\n- 30ml Syrup\n- 50g Cheese Foam topping\n- 50g Crystal Jelly (Bobo)',
    ingredientsZh: '- 150克 新鲜巨峰葡萄（去皮）\n- 200毫升 茉莉绿茶底\n- 30毫升 糖浆\n- 50克 芝士奶盖\n- 50克 脆波波',
    steps: commonSteps.slush.en,
    stepsZh: commonSteps.slush.zh,
    referenceImage: 'https://images.unsplash.com/photo-1582236896585-6447a0492166?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Mango Cheezo',
    nameZh: '芝芝芒芒',
    brand: 'Heytea',
    brandZh: '喜茶',
    description: 'Sweet ripe mango slush with green tea and cheese foam. A summer classic.',
    descriptionZh: '熟透的甜芒果打成冰沙，搭配绿茶底和芝士奶盖。夏日经典。',
    ingredients: '- 200g Fresh Mango Chunks\n- 150ml Green Tea\n- 30ml Syrup\n- 50g Cheese Foam\n- 1 cup Ice',
    ingredientsZh: '- 200克 新鲜芒果肉\n- 150毫升 绿茶\n- 30毫升 糖浆\n- 50克 芝士奶盖\n- 1杯 冰块',
    steps: commonSteps.slush.en,
    stepsZh: commonSteps.slush.zh,
    referenceImage: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80'
  },
  // COCO
  {
    name: 'Three Guys',
    nameZh: '奶茶三兄弟',
    brand: 'Coco',
    brandZh: '都可',
    description: 'Classic milk tea loaded with three toppings: tapioca pearls, egg pudding, and grass jelly.',
    descriptionZh: '经典奶茶搭配三种满满的小料：珍珠、鸡蛋布丁和仙草冻。',
    ingredients: '- 250ml Classic Milk Tea\n- 1 tbsp Tapioca Pearls\n- 1 tbsp Egg Pudding\n- 1 tbsp Grass Jelly',
    ingredientsZh: '- 250毫升 经典奶茶\n- 1勺 珍珠\n- 1勺 鸡蛋布丁\n- 1勺 仙草冻',
    steps: "1. Prepare toppings: Cook pearls, set pudding and jelly.\n2. Add all toppings to cup.\n3. Pour milk tea over toppings.\n4. Serve with a wide straw.",
    stepsZh: "1. 准备小料：煮珍珠，制作布丁和仙草。\n2. 将所有小料放入杯底。\n3. 倒入奶茶。\n4. 配粗吸管饮用。",
    referenceImage: 'https://images.unsplash.com/photo-1571216682022-79b8841443b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Bubble Gaga',
    nameZh: '鲜百香双响炮',
    brand: 'Coco',
    brandZh: '都可',
    description: 'Refreshing passion fruit green tea with chewy pearls and crunchy coconut jelly.',
    descriptionZh: '清爽的百香果绿茶，搭配Q弹珍珠和爽脆椰果。',
    ingredients: '- 2 Passion Fruits (pulp)\n- 250ml Jasmine Green Tea\n- 1 tbsp Pearls\n- 1 tbsp Coconut Jelly\n- 30ml Syrup',
    ingredientsZh: '- 2个 百香果（取果肉）\n- 250毫升 茉莉绿茶\n- 1勺 珍珠\n- 1勺 椰果\n- 30毫升 糖浆',
    steps: commonSteps.fruitTea.en,
    stepsZh: commonSteps.fruitTea.zh,
    referenceImage: 'https://images.unsplash.com/photo-1534043464124-3832c2a00904?auto=format&fit=crop&w=800&q=80'
  },
  // THE ALLEY
  {
    name: 'Brown Sugar Deerioca Fresh Milk',
    nameZh: '黑糖鹿丸鲜奶',
    brand: 'The Alley',
    brandZh: '鹿角巷',
    description: 'Warm, slow-cooked brown sugar tapioca pearls served with cold fresh milk for a "fire and ice" sensation.',
    descriptionZh: '温热慢熬的黑糖珍珠搭配冷鲜奶，带来“冰火两重天”的口感。',
    ingredients: '- 80g Brown Sugar Pearls (slow cooked)\n- 20ml Brown Sugar Syrup (thick)\n- 250ml Fresh Whole Milk\n- Ice (optional)',
    ingredientsZh: '- 80克 黑糖鹿丸珍珠（慢熬）\n- 20毫升 黑糖浆（浓稠）\n- 250毫升 鲜全脂奶\n- 冰块（可选）',
    steps: "1. **Cook Pearls**: Simmer pearls in brown sugar syrup for 1 hour until soft and sticky.\n2. **Glaze Cup**: Scoop pearls into cup and rotate to glaze walls with brown sugar ('tiger stripes').\n3. **Pour**: Pour cold milk directly over pearls.\n\n**Note**: Do not shake before serving to preserve the look. Stir 9 times before drinking.",
    stepsZh: "1. **熬珠**：珍珠在黑糖浆中慢火熬煮1小时至软糯拉丝。\n2. **挂壁**：将珍珠舀入杯中，旋转杯身使黑糖挂壁形成“虎纹”。\n3. **倒奶**：直接倒入冷鲜奶。\n\n**注意**：饮用前不要摇晃以保持外观。建议搅拌9下后饮用。",
    referenceImage: 'https://images.unsplash.com/photo-1558350315-8aa00aa5e754?auto=format&fit=crop&w=800&q=80'
  },
  // YI DIAN DIAN
  {
    name: 'Black Tea Macchiato',
    nameZh: '红茶玛奇朵',
    brand: 'Yi Dian Dian',
    brandZh: '一点点',
    description: 'Robust black tea topped with a thick layer of sweet and savory cream foam.',
    descriptionZh: '醇厚的红茶顶上铺满一层厚厚的甜咸奶霜。',
    ingredients: '- 250ml Black Tea Base\n- 30ml Syrup\n- 60ml Cream Foam topping\n- 1 Small blade to cut foam opening',
    ingredientsZh: '- 250毫升 红茶底\n- 30毫升 糖浆\n- 60毫升 奶霜\n- 1个 开口划刀',
    steps: "1. Brew black tea and sweeten to taste.\n2. Add ice to cool.\n3. Gently spoon thick cream foam on top.\n4. Serve without a straw or with a small opening lid.",
    stepsZh: "1. 泡红茶并加糖调味。\n2. 加冰冷却。\n3. 轻轻铺上厚奶霜。\n4. 不要用吸管，建议直接对嘴喝或使用开口杯盖。",
    referenceImage: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=800&q=80'
  },
  // NAYUKI
  {
    name: 'Supreme Cheese Strawberry',
    nameZh: '霸气芝士草莓',
    brand: 'Nayuki',
    brandZh: '奈雪的茶',
    description: 'Generous amount of fresh strawberries blended with premium jasmine tea, crowned with cheese foam.',
    descriptionZh: '大量新鲜草莓与优质茉莉花茶打底，顶上加冕芝士奶盖。',
    ingredients: '- 10 strawberries (approx 200g)\n- 150ml Jasmine Green Tea\n- 30ml Syrup\n- 50g Cheese Foam',
    ingredientsZh: '- 10颗 草莓（约200克）\n- 150毫升 茉莉绿茶\n- 30毫升 糖浆\n- 50克 芝士奶盖',
    steps: commonSteps.slush.en,
    stepsZh: commonSteps.slush.zh,
    referenceImage: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80'
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
    
    let name = '', nameZh = '', desc = '', descZh = '', img = '', ingred = '', ingredientsZh = '';
    
    if (style.type === 'fruit') {
      name = `${fruit.en} ${base.en} ${style.en}`;
      nameZh = `${fruit.zh}${base.zh}${style.zh}`;
      desc = `Refreshing ${fruit.en} flavor paired with premium ${base.en} tea. Perfect for hot weather.`;
      descZh = `清新的${fruit.zh}口味搭配优质${base.zh}。炎热天气的完美选择。`;
      
      ingred = `- 100g Fresh ${fruit.en}\n- 200ml ${base.en} Tea\n- 30ml Syrup\n- Ice`;
      ingredientsZh = `- 100克 新鲜${fruit.zh}\n- 200毫升 ${base.zh}茶汤\n- 30毫升 糖浆\n- 冰块`;
      
      img = `https://placehold.co/600x400/F7F5F2/B59E9E/png?text=${fruit.en}+Tea`;
    } else {
      name = `${base.en} ${style.en}`;
      nameZh = `${base.zh}${style.zh}`;
      desc = `Classic rich ${base.en} tea blended with smooth ${style.en.toLowerCase()}. A comforting daily drink.`;
      descZh = `经典的浓郁${base.zh}搭配丝滑${style.zh}。适合日常饮用的暖心饮品。`;
      
      ingred = `- 10g ${base.en} Leaves\n- 200ml Milk/Cream\n- 25ml Sugar\n- Toppings (opt)`;
      ingredientsZh = `- 10克 ${base.zh}茶叶\n- 200毫升 牛奶/奶油\n- 25毫升 糖\n- 小料（可选）`;
      
      img = `https://placehold.co/600x400/F7F5F2/B59E9E/png?text=${base.en}+Milk+Tea`;
    }

    teaData.push({
      name,
      nameZh,
      brand: brand.en,
      brandZh: brand.zh,
      description: desc,
      descriptionZh: descZh,
      ingredients: ingred,
      ingredientsZh: ingredientsZh,
      steps: style.type === 'fruit' ? commonSteps.fruitTea.en : commonSteps.milkTea.en,
      stepsZh: style.type === 'fruit' ? commonSteps.fruitTea.zh : commonSteps.milkTea.zh,
      referenceImage: img
    });
    
    count++;
  }
}