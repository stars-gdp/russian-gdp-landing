export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  expandedDescription: string;
  imageUrl: string;
  tags?: string[];
  ctaText?: string;
  link?: string;
};

export const products: Product[] = [
  {
    id: "essential-man",
    name: "Essential Man",
    tagline: "Ежедневная поддержка для мужчин",
    description:
      "Комплекс с ключевыми компонентами для мужского рациона: бета-каротин, ликопин, селен и цинк.",
    expandedDescription:
      "- Бета-каротин\n" +
      "- Ликопин\n" +
      "- Селен (содиум селенит)\n" +
      "- Цинк (хелат аминокислот)",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/essential-man-thumb.jpg",
    tags: ["ежедневная поддержка"],
    link: "https://bhipone.com/eu/en/product/essential-man",
  },
  {
    id: "essential-woman",
    name: "Essential Woman",
    tagline: "Ежедневная поддержка для женщин",
    description:
      "Базовый комплекс, созданный для повседневного ритма и баланса.",
    expandedDescription:
      "- Фолиевая кислота\n" + "- Железо\n" + "- Изофлавоны\n" + "- Омега-3",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/essential-woman-thumb.jpg",
    tags: ["ежедневная поддержка"],
    link: "https://bhipone.com/eu/en/product/energy-woman",
  },
  {
    id: "energy-xtreme",
    name: "Energy X-treme",
    tagline: "Когда нужен фокус и драйв",
    description:
      "Формула с зелёной спирулиной, гуараной, экстрактом зелёного чая и витамином B2.",
    expandedDescription:
      "- Зелёная спирулина\n" +
      "- Порошок гуараны\n" +
      "- Зелёный чай\n" +
      "- Витамин B2 (рибофлавин)",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/energy-extreme-thumb.jpg",
    tags: ["энергия", "фокус"],
    link: "https://bhipone.com/eu/en/product/energy-xtreme",
  },
  {
    id: "noni-x",
    name: "Noni X",
    tagline: "Фруктовые экстракты и витамины",
    description:
      "Смесь с нони, экстрактом асаи и витаминами — для разнообразия рациона.",
    expandedDescription:
      "- Экстракт асаи\n" + "- Цитрат магния\n" + "- Нони\n" + "- Витамин D",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/noni-x-thumb-01.jpg",
    tags: ["экстракты фруктов"],
    link: "https://bhipone.com/eu/en/product/noni-x",
  },
  {
    id: "fusion-vanilla",
    name: "Fusion Vanilla",
    tagline: "Ванильный протеиновый коктейль",
    description:
      "Вкусный ванильный шейк с источниками белка и пищевыми волокнами.",
    expandedDescription:
      "- Порошок семян чиа\n" +
      "- Пиколинат хрома\n" +
      "- Гарциния камбоджийская\n" +
      "- Порошок MCT (триглицериды средней цепи)",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/fusion-vanilla-thumb-03.jpg",
    tags: ["протеин", "баланс"],
    link: "https://bhipone.com/eu/en/product/fusionx-vanilla-latam",
  },
  {
    id: "b-x",
    name: "B-X",
    tagline: "Баланс и поддержка",
    description:
      "Формула повседневной поддержки. Краткое описание без медицинских заявлений.",
    expandedDescription:
      "- Экстракт ашваганды\n" +
      "- Пиколинат хрома\n" +
      "- Гарциния камбоджийская\n" +
      "- Индийская крапива\n",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/b-x-thumb-01.jpg",
    tags: ["баланс"],
    link: "https://bhipone.com/eu/en/product/b-x",
  },
  {
    id: "b-yng",
    name: "B-YNG",
    tagline: "Для активного дня",
    description: "Лёгкое повседневное решение в поддержку бодрости.",
    expandedDescription:
      "- Гидролизованный коллаген Peptan® B (бычий)\n" +
      "- Семена винограда\n" +
      "- Гиалуронат натрия\n" +
      "- Витамин C\n",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/b-yng-thumb-01.jpg",
    tags: ["активность"],
    link: "https://bhipone.com/eu/en/product/b-yng",
  },
  {
    id: "gday",
    name: "GDAY",
    tagline: "Старт дня",
    description: "Утренний ритуал — мягкий и комфортный старт.",
    expandedDescription:
      "- Экстракт ашваганды\n" +
      "- Экстракт бакопы\n" +
      "- Гинкго билоба\n" +
      "- Женьшень\n",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/gday-thumb-01.jpg",
    tags: ["утро"],
    link: "https://bhipone.com/eu/en/product/gday",
  },
  {
    id: "gnight",
    name: "GNIGHT",
    tagline: "Спокойный вечер",
    description: "Вечерний ритуал — готовность к отдыху.",
    expandedDescription:
      "- Экстракт ромашки\n" +
      "- Экстракт мелиссы\n" +
      "- Экстракт пассифлоры\n" +
      "- Экстракт валерианы\n",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/gnight-thumb-01.jpg",
    tags: ["вечер"],
    link: "https://bhipone.com/eu/en/product/gnight",
  },
  {
    id: "x-grn",
    name: "X-Grn",
    tagline: "Смесь зелёных ингредиентов",
    description: "Зелёная формула для разнообразия рациона.",
    expandedDescription:
      "- Баобаб\n" + "- Каму-каму\n" + "- Хлорелла\n" + "- Спирулина\n",
    imageUrl:
      "https://admin.bhipone.com/assets/uploads/products/x-grn-thumb-01.jpg",
    tags: ["greens"],
    link: "https://bhipone.com/eu/en/product/x-grn",
  },
];
