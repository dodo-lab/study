/**
 * デジタル時計の実装
 * 時分秒と午前／午後が表示される
 * 時分秒はそれぞれ２桁の数値で表現、かつ毎秒更新される
 */

const compose =
  (...fns) =>
  (arg) =>
    fns.reduce((composed, f) => f(composed), arg);

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = (message) => console.log(message);

const serializeClockTime = (date) => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
});

const civilanHours = (clockTime) => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours,
});

const appendAMPM = (clockTime) => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? 'PM' : 'AM',
});

const display = (target) => (time) => target(time);

const formatClock = (format) => (time) =>
  format
    .replace('hh', time.hours)
    .replace('mm', time.minutes)
    .replace('ss', time.seconds)
    .replace('tt', time.ampm);

const prependZero = (key) => (clockTime) => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key],
});

const convertToCivilanTime = (clockTime) => compose(appendAMPM, civilanHours)(clockTime);

const doubleDigits = (civilanTime) =>
  compose(prependZero('hours'), prependZero('minutes'), prependZero('seconds'))(civilanTime);

const startTicking = () =>
  setInterval(
    compose(
      clear,
      getCurrentTime,
      serializeClockTime,
      convertToCivilanTime,
      doubleDigits,
      formatClock('hh:mm:ss tt'),
      display(log)
    ),
    oneSecond()
  );

startTicking();
