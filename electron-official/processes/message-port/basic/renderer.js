const setButton = document.getElementById('btn');
const messageInput = document.getElementById('message');
setButton.addEventListener('click', () => {
  const message = messageInput.value;
  window.electronAPI.postMessage(message);
});
