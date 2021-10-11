export default function Enum() {
  console.log('[列挙型]');

  enum Language {
    English,
    Spanish,
    Russian,
  }
  const firstLanguage = Language.English;
  const socondLanguage = Language['Spanish'];
  console.log(firstLanguage, socondLanguage);

  function language(lang: Language) {
    console.log('language : ', lang);
  }

  language(Language.English);
  language(Language.Russian);
  language(12); // ★enumの中に１つでも数値があれば定義外のパラメータが指定可能になり、安全ではなくなる

  const enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050,
    White = 255,
  }
  const red = Color.Red;
  const pink = Color.Pink;
  // 逆引き参照はエラーになる
  // const white = Color[255];
  console.log(red, pink);
}
