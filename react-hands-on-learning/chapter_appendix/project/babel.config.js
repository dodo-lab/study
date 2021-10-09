module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  // グローバルマーケットシェア0.5%以上のブラウザ、かつ直近の２バージョンを対象とする
  // ただし、24ヶ月以上リリースが止まっているものは除外
  targets: '> 0.5%, last 2 versions, not dead'
}