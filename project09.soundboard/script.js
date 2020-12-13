const sounds = [
  {
    tag: 'byeautumn',
    title: 'Bye, Autumn',
  },
  {
    tag: 'canon',
    title: 'Canon',
  },
  {
    tag: 'likeawildflower',
    title: 'Like a Wild Flower',
  },
  {
    tag: 'sameskydifferentworld',
    title: 'Same Sky Different World',
  },
  {
    tag: 'stillfightingit',
    title: 'Still Fighting It',
  },
  {
    tag: 'theseasonofus',
    title: 'The Season of Us',
  },
];

sounds.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');

  btn.innerText = `${sound.title}.`;

  btn.addEventListener('click', () => {
    stopSongs();
    document.getElementById(sound.tag).play();
  });

  document.getElementById('buttons').appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound.tag);

    song.pause();
    song.currentTime = 0;
  });
}
