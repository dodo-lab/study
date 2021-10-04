function gnar() {
  const [nickname, setNickname] = useState('dude');

  setNickname('hoge');

  return nickname;
}

gnar();
