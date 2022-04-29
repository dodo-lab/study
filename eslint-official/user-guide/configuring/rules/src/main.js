/* eslint quotes: "off", semi: ["error", "always"]
 -------------------------------------------------------------------------
 * '.eslintrc.js'の設定を「クオーテーションOFF」「セミコロン必須」の構成コメントで上書き.
 */
const singleQuote = 'AAA'
const doubleQuote = "BBB";


// -----------------------------------------------------------------------
// ルールを一時的に無効化（本来はセミコロン未指定のエラーが出る）
/* eslint-disable */
const disable = ''
/* eslint-enable */


// -----------------------------------------------------------------------
// 特定行のすべてのルールを無効化
const currentLineDisable = ''   // eslint-disable-line
const currentLineDisable2 = ''   /* eslint-disable-line */

// eslint-disable-next-line
const nextLineDisable = ''
/* eslint-disable-next-line */
const nextLineDisable2 = ''

// -----------------------------------------------------------------------
// 特定行の特定ルールを無効化
const currentLineDisableRule = ''   // eslint-disable-line semi
