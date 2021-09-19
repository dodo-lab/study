/**
 * デストラクチャリング（分割代入）
 */
const animals = ['Horse', 'Mouse', 'Cat'];
// １番目の要素を取り出す
const [firstAnimal] = animals;
// ３番目の要素を取り出す
const [, , thirdAnimal] = animals;

console.log(firstAnimal);
console.log(thirdAnimal);
