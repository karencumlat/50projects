const kdrama = [
  { title: 'Autumn in My Heart', tag: 'autumninmyheart' },
  { title: 'Boys Over Flowers', tag: 'boysoverflowers' },
  { title: 'Chicago Typewriter', tag: 'chicagotypewriter' },
  { title: 'Dear My Friends', tag: 'dearmyfriends' },
  { title: 'Flower of Evil', tag: 'flowerofevil' },
  { title: 'Extracurricular', tag: 'extracurricular' },
  { title: 'Goblin', tag: 'goblin' },
  { title: 'Hospital Playlist', tag: 'hospitalplaylist' },
  { title: 'Itaewon Class', tag: 'itaewonclass' },
  { title: 'Jealousy Incarnate', tag: 'jealousyincarnate' },
  { title: 'The King 2 Hearts', tag: 'theking' },
  { title: 'Lovers in Paris', tag: 'loversinparis' },
  { title: 'Mr. Sunshine', tag: 'mrsunshine' },
  { title: 'Nokdu Flower', tag: 'nokduflower' },
  { title: 'Oh My Ghost', tag: 'ohmyghost' },
  { title: 'Prison Playbook', tag: 'prisonplaybook' },
  { title: 'Queen Seondeok', tag: 'queenseondeok' },
  { title: 'Reply 1988', tag: 'reply1988' },
  { title: 'Stranger', tag: 'stranger' },
  { title: 'Tunnel', tag: 'tunnel' },
  { title: 'The Uncanny Counter', tag: 'uncannyencounter' },
  { title: 'Voice', tag: 'voice' },
  { title: 'When the Camellia Blooms', tag: 'whenthecamelliablooms' },
  { title: 'You Are the Best!', tag: 'youarethebest' },
  { title: 'Zombie Detective', tag: 'zombiedetective' },
];

const cardGroup = document.querySelector('.card-group');

function renderCards() {
  kdrama.map((series) => {
    var tag = document.createElement('div');
    var title = document.createElement('h2');
    var text = document.createTextNode(series.title);
    title.appendChild(text);
    tag.appendChild(title);
    tag.style.backgroundImage = 'url(images/' + series.tag + '.jpg)';
    tag.classList.add('card');
    cardGroup.appendChild(tag);
  });
}

renderCards();

const boxes = document.querySelectorAll('.card');

window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    boxTop < triggerBottom
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
}
