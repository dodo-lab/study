const wdio = require('webdriverio');

const options = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: './android/app/build/outputs/apk/release/app-release.apk',
    automationName: 'UiAutomator2',
  },
};

async function sleep(msec) {
  return new Promise(resolve => setTimeout(resolve, msec));
}

async function main() {
  // アプリ起動
  const client = await wdio.remote(options);

  // アプリが完全に起動するまで待機
  await sleep(2000);

  // スクリーンショット保存
  await client.saveScreenshot('./test.png');

  // テスト終了
  await client.deleteSession();
}

main();
