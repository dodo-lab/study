export default function MergeCross() {
  console.log('[合併型と交差型]');

  type Cat = { name: string; purrs: boolean };
  type Dog = { name: string; barks: boolean; wags: boolean };
  type CatOrDogsOrBoth = Cat | Dog;
  type CatAndDogs = Cat & Dog;
  const cat: CatOrDogsOrBoth = { name: 'CatOrDogsOrBoth_Cat', purrs: true };
  const dog: CatOrDogsOrBoth = {
    name: 'CatOrDogsOrBoth_Dog',
    barks: true,
    wags: true,
  };
  const both: CatOrDogsOrBoth = {
    name: 'CatOrDogsOrBoth_Both',
    purrs: true,
    barks: true,
    wags: true,
  };
  const catAndDog: CatAndDogs = {
    name: 'CatAndDogs',
    purrs: true,
    barks: true,
    wags: false,
  };

  console.log(cat);
  console.log(dog);
  console.log(both);
  console.log(catAndDog);
}
