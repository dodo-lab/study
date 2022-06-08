const setButton = document.getElementById('btn');
const titleInput = document.getElementById('title');
setButton.addEventListener('click', () => {
  const title = titleInput.value;
  window.electronAPI.setTitle(title);
});

const fileOpenButton = document.getElementById('fileOpenBtn');
const filePathElement = document.getElementById('filePath');
fileOpenButton.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile();
  filePathElement.innerText = filePath;
});
