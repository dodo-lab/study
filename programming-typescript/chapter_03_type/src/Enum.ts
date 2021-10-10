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
