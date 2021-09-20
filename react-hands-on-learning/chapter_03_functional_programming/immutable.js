// 関数型プログラミングはイミュータブル（不変）なデータを意識する
// 具体的には、引数で受け取ったオブジェクトを直接変更せず、コピー後に変更したデータを戻り値として返す

// オブジェクトの例
{
  let color_lawn = {
    title: 'lawn',
    color: '#00ff00',
    rating: 0,
  };

  // 可変例
  function mutableRateColor(color, rating) {
    color.rating = rating;
    return color;
  }
  console.log('- オブジェクトの可変例');
  console.log(mutableRateColor(color_lawn, 5));
  console.log(color_lawn);

  // 不変例
  function immutableRateColor(color, rating) {
    return {
      ...color,
      rating,
    };
  }
  console.log('- オブジェクトの不変例');
  console.log(immutableRateColor(color_lawn, 10));
  console.log(color_lawn);
}

// 配列の例
{
  let list = [{ title: 'Rad Red' }, { title: 'Lawn' }, { title: 'Party Pink' }];

  // 可変例
  const mutableAddColor = function (title, colors) {
    colors.push({ title });
    return colors;
  };
  console.log('- 配列の可変例');
  console.log(mutableAddColor('Glam Green', list));
  console.log(list);

  // 不変例
  const immutableAddColor = (title, colors) => [...colors, { title }]; // colors.concat({title})でもOK
  console.log('- 配列の不変例');
  console.log(immutableAddColor('Black', list));
  console.log(list);
}
