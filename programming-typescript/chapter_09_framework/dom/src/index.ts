// グローバルなwindowオブジェクトからプロパティを読み込む
const model = {
  url: window.location.href,
};
console.log(model);

// input要素を作成
const input = document.createElement('input');

// input要素にCSSを付与
input.classList.add('Input', 'URLInput');

// ユーザーが入力した情報を取得
input.addEventListener('change', () => console.log(input.value));

// input要素をDOMに挿入
document.body.appendChild(input);
