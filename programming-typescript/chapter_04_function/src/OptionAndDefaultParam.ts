export default function OptionAndDefaultParam() {
  console.log('[オプションパラメータ／デフォルトパラメータ]');

  function optionParamFunc(message: string, userId?: string) {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId || 'Not signed in');
  }

  optionParamFunc('Page loaded');
  optionParamFunc('User signed in', 'user-001');

  function defaultParamFunc(message: string, userId = 'Not signed in') {
    const time = new Date().toLocaleTimeString();
    console.log(time, message, userId);
  }

  defaultParamFunc('User clicked on a button', 'user-002');
  defaultParamFunc('User signed out');
}
