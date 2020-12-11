const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

const btnSmiley = document.querySelector('.btn-smiley');
const quoteLeft = document.querySelector('.quote-left');
const btnAngry = document.querySelector('.btn-angry');
const quoteRight = document.querySelector('.quote-right');

const motivate = [
  '🤗🤗🤗',
  'How can I help?',
  'Is there something I can do for you?',
  'I believe in you… You’re awesome!',
  'I’m here if you want to talk.',
  'You’re not alone in this',
  'Just do the best you can',
  "It's okay to not be okay",
  'Keep going',
  'You can do it',
  'Love what you do',
  'You are amazing',
];

const keep = [
  '👏👏👏',
  '👍👍👍',
  '✨✨✨',
  '💯💯💯',
  '🏆🏆🏆',
  '🥇🥇🥇',
  '🎉🎉🎉',
  '🎊🎊🎊',
];

left.addEventListener('mouseenter', () =>
  container.classList.add('hover-left')
);
left.addEventListener('mouseleave', () => {
  container.classList.remove('hover-left');
  quoteLeft.innerText = '';
});

btnSmiley.addEventListener('click', () => {
  let quote = keep[Math.floor(Math.random() * keep.length)];
  quoteLeft.innerText = quote;
});

right.addEventListener('mouseenter', () =>
  container.classList.add('hover-right')
);

right.addEventListener('mouseleave', () => {
  container.classList.remove('hover-right');
  quoteRight.innerText = '';
});

btnAngry.addEventListener('click', () => {
  var quote = motivate[Math.floor(Math.random() * motivate.length)];
  quoteRight.innerText = quote;
});
