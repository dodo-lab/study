// types.ts に定義することで、importせずともToArrayが使える
let a: ToArray<string> = [];

a.push('foo');
a.push('bar');

a.forEach((v) => console.log(v));
