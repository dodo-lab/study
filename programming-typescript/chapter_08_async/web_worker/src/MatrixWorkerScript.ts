onmessage = (command) => {
  console.log('[MatrixWorker]', command.data.command, command.data.args);
  postMessage(-2);
};
