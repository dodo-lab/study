function Image() {
  // アクセシビリティ観点として、alt属性の指定を促すエラーが出る
  return <img src="/img.png" />;
}

Image();
