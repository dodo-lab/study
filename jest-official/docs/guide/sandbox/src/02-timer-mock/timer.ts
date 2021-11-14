export function timerGame(callback?: () => void) {
  console.log('Ready.....go!');

  setTimeout(() => {
    console.log("Time's up -- stop!");
    callback?.();
  }, 1000);
}

export function infinityTimerGame(callback?: () => void) {
  console.log('Ready.....go!');

  setTimeout(() => {
    console.log("Time's up! 10 seconds before the next game starts...");
    callback?.();

    setTimeout(() => {
      infinityTimerGame(callback);
    }, 10000);
  }, 1000);
}
