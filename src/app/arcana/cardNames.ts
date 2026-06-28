// Self-contained multilingual search index for the 78 Arcana cards.
// Languages covered: English, Spanish, French, German, Portuguese, Japanese,
// Mandarin (simplified + traditional), Arabic.
//
// The index is independent of the page text, so search keeps working even when
// the browser translates the page. Each card maps to a section id `section{num}`.

export interface SearchEntry {
  num: number;
  label: string; // English display label
  words: string[]; // normalized search words across all languages
}

// Lowercase, strip Latin/Arabic diacritics, and split symbols into spaces while
// keeping letters/numbers of every script (incl. CJK / Arabic).
export const normalize = (s: string): string =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Latin combining marks
    .replace(/[\u064b-\u0652\u0670\u0640]/g, '') // Arabic harakat + tatweel
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .trim();

// Major Arcana 1..22 (this deck numbers The Fool as 22).
const majors: string[][] = [
  ['The Magician', 'El Mago', 'Le Bateleur', 'Le Magicien', 'Der Magier', 'O Mago', '魔術師', '魔术师', 'الساحر'],
  ['The High Priestess', 'La Sacerdotisa', 'La Papesse', 'Die Hohepriesterin', 'Päpstin', 'A Sacerdotisa', 'A Papisa', '女教皇', '女祭司', 'الكاهنة', 'الحبرة'],
  ['The Empress', 'La Emperatriz', "L'Impératrice", 'Die Herrscherin', 'Die Kaiserin', 'A Imperatriz', '女帝', '皇后', 'الإمبراطورة'],
  ['The Emperor', 'El Emperador', "L'Empereur", 'Der Herrscher', 'Der Kaiser', 'O Imperador', '皇帝', 'الإمبراطور'],
  ['The Hierophant', 'The Pope', 'El Sumo Sacerdote', 'El Papa', 'Le Pape', 'Der Hierophant', 'Der Papst', 'O Hierofante', 'O Papa', '教皇', '祭司', 'الكاهن الأعظم', 'البابا'],
  ['The Lovers', 'Los Enamorados', 'Los Amantes', "L'Amoureux", 'Les Amoureux', 'Die Liebenden', 'Os Amantes', '恋人', '戀人', 'العاشقان', 'المحبون'],
  ['The Chariot', 'El Carro', 'Le Chariot', 'Le Char', 'Der Wagen', 'O Carro', '戦車', '战车', '戰車', 'العربة'],
  ['Justice', 'La Justicia', 'La Justice', 'Die Gerechtigkeit', 'A Justiça', '正義', '正义', 'العدل', 'العدالة'],
  ['The Hermit', 'El Ermitaño', "L'Ermite", 'Der Eremit', 'O Eremita', '隠者', '隐士', '隱者', 'الناسك'],
  ['The Wheel of Fortune', 'La Rueda de la Fortuna', 'La Roue de Fortune', 'Das Rad des Schicksals', 'Glücksrad', 'A Roda da Fortuna', '運命の輪', '命运之轮', '命運之輪', 'عجلة الحظ'],
  ['Strength', 'Fortitude', 'La Fuerza', 'La Force', 'Die Kraft', 'Die Stärke', 'A Força', '力', '力量', 'القوة'],
  ['The Hanged Man', 'El Colgado', 'El Ahorcado', 'Le Pendu', 'Der Gehängte', 'Der Gehenkte', 'O Enforcado', '吊された男', '吊るされた男', '倒吊人', '倒吊者', 'الرجل المعلق', 'المعلق'],
  ['Death', 'La Muerte', 'La Mort', 'Der Tod', 'A Morte', '死神', '死', 'الموت'],
  ['Temperance', 'La Templanza', 'La Tempérance', 'Die Mäßigkeit', 'Temperanz', 'A Temperança', '節制', '节制', 'الاعتدال'],
  ['The Devil', 'El Diablo', 'Le Diable', 'Der Teufel', 'O Diabo', '悪魔', '恶魔', '惡魔', 'الشيطان'],
  ['The Tower', 'La Torre', 'La Maison Dieu', 'La Tour', 'Der Turm', 'A Torre', '塔', '高塔', 'البرج'],
  ['The Star', 'La Estrella', "L'Étoile", 'Der Stern', 'A Estrela', '星', '星星', 'النجمة', 'النجم'],
  ['The Moon', 'La Luna', 'La Lune', 'Der Mond', 'A Lua', '月', '月亮', 'القمر'],
  ['The Sun', 'El Sol', 'Le Soleil', 'Die Sonne', 'O Sol', '太陽', '太阳', 'الشمس'],
  ['Judgement', 'Judgment', 'El Juicio', 'Le Jugement', 'Das Gericht', 'O Julgamento', 'O Juízo', '審判', '审判', 'الحكم', 'الدينونة'],
  ['The World', 'El Mundo', 'Le Monde', 'Die Welt', 'O Mundo', '世界', 'العالم'],
  ['The Fool', 'El Loco', 'Le Mat', 'Le Fou', 'Der Narr', 'O Louco', 'O Tolo', '愚者', '愚人', 'الأحمق', 'المغفل'],
];

const majorLabels: string[] = [
  'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant',
  'The Lovers', 'The Chariot', 'Justice', 'The Hermit', 'The Wheel of Fortune',
  'Strength', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower',
  'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World', 'The Fool',
];

// Minor Arcana suits (order matches sections: Wands, Cups, Swords, Pentacles).
const suitTerms: string[][] = [
  ['Wands', 'Wand', 'Batons', 'Rods', 'Staves', 'Staffs', 'Clubs', 'Bastos', 'Varas', 'Bâtons', 'Stäbe', 'Stab', 'Paus', 'Bastões', 'ワンド', '棒', '权杖', '權杖', '杖', 'الصولجانات', 'العصي', 'صولجان'],
  ['Cups', 'Cup', 'Chalices', 'Goblets', 'Hearts', 'Copas', 'Copa', 'Coupes', 'Coupe', 'Kelche', 'Kelch', 'Becher', 'Taças', 'カップ', '聖杯', '圣杯', '杯', 'الكؤوس', 'كأس', 'الكاسات'],
  ['Swords', 'Sword', 'Blades', 'Spades', 'Espadas', 'Espada', 'Épées', 'Épée', 'Schwerter', 'Schwert', 'ソード', '剣', '宝剑', '寶劍', '剑', '劍', 'السيوف', 'سيف'],
  ['Pentacles', 'Pentacle', 'Coins', 'Coin', 'Disks', 'Disk', 'Diamonds', 'Oros', 'Pentáculos', 'Monedas', 'Deniers', 'Denier', 'Pièces', 'Münzen', 'Münze', 'Scheiben', 'Ouros', 'Moedas', 'ペンタクル', 'コイン', '金貨', '星币', '星幣', '钱币', '錢幣', '金币', 'النجوم الخماسية', 'العملات', 'الدنانير'],
];

const suitLabels = ['Wands', 'Cups', 'Swords', 'Pentacles'];

// Ranks: Ace, Two..Ten, Page, Knight, Queen, King.
const rankTerms: string[][] = [
  ['Ace', 'One', '1', 'As', 'Uno', 'Un', 'Ass', 'Eins', 'Ás', 'Um', 'エース', '一', '王牌', 'آس', 'واحد'],
  ['Two', '2', 'Dos', 'Deux', 'Zwei', 'Dois', 'Duas', '二', 'اثنان'],
  ['Three', '3', 'Tres', 'Trois', 'Drei', 'Três', '三', 'ثلاثة'],
  ['Four', '4', 'Cuatro', 'Quatre', 'Vier', 'Quatro', '四', 'أربعة'],
  ['Five', '5', 'Cinco', 'Cinq', 'Fünf', '五', 'خمسة'],
  ['Six', '6', 'Seis', 'Sechs', 'Sei', '六', 'ستة'],
  ['Seven', '7', 'Siete', 'Sept', 'Sieben', 'Sete', '七', 'سبعة'],
  ['Eight', '8', 'Ocho', 'Huit', 'Acht', 'Oito', '八', 'ثمانية'],
  ['Nine', '9', 'Nueve', 'Neuf', 'Neun', 'Nove', '九', 'تسعة'],
  ['Ten', '10', 'Diez', 'Dix', 'Zehn', 'Dez', '十', 'عشرة'],
  ['Page', 'Jack', 'Knave', 'Sota', 'Paje', 'Valet', 'Bube', 'Valete', 'Pajem', 'ペイジ', '小姓', '侍从', '侍者', '页', 'الغلام', 'الصبي'],
  ['Knight', 'Caballo', 'Caballero', 'Cavalier', 'Ritter', 'Cavaleiro', 'ナイト', '騎士', '骑士', 'الفارس'],
  ['Queen', 'Reina', 'Reine', 'Dame', 'Königin', 'Rainha', 'クイーン', '女王', '王后', '皇后', 'الملكة'],
  ['King', 'Rey', 'Roi', 'König', 'Rei', 'キング', '王', '国王', '國王', 'الملك'],
];

const rankLabels = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Page', 'Knight', 'Queen', 'King'];

const toWords = (terms: string[]): string[] => {
  const set = new Set<string>();
  terms.forEach((term) => {
    normalize(term)
      .split(' ')
      .filter(Boolean)
      .forEach((w) => set.add(w));
  });
  return Array.from(set);
};

const buildIndex = (): SearchEntry[] => {
  const entries: SearchEntry[] = [];
  for (let n = 1; n <= 22; n++) {
    entries.push({ num: n, label: majorLabels[n - 1], words: toWords(majors[n - 1]) });
  }
  for (let n = 23; n <= 78; n++) {
    const suitIdx = Math.floor((n - 23) / 14);
    const rankIdx = (n - 23) % 14;
    entries.push({
      num: n,
      label: `${rankLabels[rankIdx]} of ${suitLabels[suitIdx]}`,
      words: toWords([...rankTerms[rankIdx], ...suitTerms[suitIdx]]),
    });
  }
  return entries;
};

export const searchIndex: SearchEntry[] = buildIndex();

// Connectors that appear inside names but should not constrain a search.
const STOPWORDS = new Set(['the', 'of', 'de', 'du', 'des', 'von', 'la', 'le', 'les', 'el', 'os', 'a', 'o']);

const isMeaningful = (token: string): boolean => {
  if (STOPWORDS.has(token)) return false;
  // Keep short non-Latin tokens (e.g. single CJK characters like 月, 力, 王).
  return token.length >= 2 || /[^\u0000-\u024f]/.test(token);
};

// Returns the cards whose names match every meaningful token in the query.
export const findMatches = (query: string, limit = 6): SearchEntry[] => {
  const tokens = normalize(query).split(' ').filter(isMeaningful);
  if (tokens.length === 0) return [];

  const matches = searchIndex.filter((entry) =>
    tokens.every((token) => entry.words.some((w) => w.startsWith(token))),
  );

  // Prefer entries with an exact word match (more specific) first.
  return matches
    .sort((a, b) => {
      const aExact = tokens.every((t) => a.words.includes(t)) ? 0 : 1;
      const bExact = tokens.every((t) => b.words.includes(t)) ? 0 : 1;
      return aExact - bExact || a.num - b.num;
    })
    .slice(0, limit);
};
