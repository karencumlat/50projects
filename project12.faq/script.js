const produce = [
  {
    month: 'January',
    items:
      'Rutabagas, Turnips, Beets, Carrots, Cabbage, Red Onions, Garlic, Leeks, Potatoes, Squash, Sweet Potatoes',
  },
  {
    month: 'February',
    items:
      'Rutabagas, Turnips, Beets, Carrots, Cabbage, Red Onions, Garlic, Leeks, Potatoes, Squash, Sweet Potatoes',
  },
  {
    month: 'March',
    items:
      'Rutabagas,  Turnips, Beets, Carrots, Cabbage, Red Onions, Garlic, Leeks, Potatoes, Squash, Sweet Potatoes',
  },
  {
    month: 'April',
    items:
      'Asparagus, Radishes, Fiddleheads, Spinach, Fava Beans,  Rhubarb, Peppers (greenhouse), Tomatoes (greenhouse)',
  },

  {
    month: 'May',
    items:
      'Asparagus, Radishes, Fiddleheads, Spinach, Rhubarb, Kale, Salad Greens, Morel Mushrooms, Arugula, Swiss Chard, Green Onions, Peas, Cherries,',
  },
  {
    month: 'June',
    items:
      'Asparagus, Radishes, Spinach, Rhubarb, Kale, Salad Greens, Arugula, Beets, Lettuce, Green Onions, Gooseberries, Saskatoon Berries, Strawberries, Broccoli, Celery, Swiss Chard, Garlic (Fresh), Peas, Summer Squash, Tomatoes, Turnips, Zucchini, Fennel, Cherries',
  },
  {
    month: 'July',
    items:
      'Gooseberries, Saskatoon Berries, Strawberries, Raspberries, Currants, Cherries, Blackberries, Apricots, Nectarines, Green Beans, Broccoli, Carrots, Cauliflower,  Celery, Swiss Chard, Cucumber, Garlic (Fresh), Leeks,  Lettuce, Green Onions, Peas, Peppers, Potatoes (New), Radishes, Rhubarb, Salad Greens, Spinach, Summer Squash, Tomatoes, Turnips,  Zucchini, Beets, Peaches, Watermelon, Kale',
  },
  {
    month: 'August',
    items:
      'Raspberries, Currants, Cherries, Blackberries, Apricots, Apples, Crab Apples, Blueberries, Gooseberries, Melons, Nectarines, Pears, Plums, Prunes, Strawberries, Artichokes, Green Beans, Broccoli, Cabbage, Carrots, Cauliflower,  Celery, Swiss Chard,  Corn, Cucumber, Garlic (Fresh),  Leeks,  Lettuce, Green Onions, Parsnips,  Peppers,  Potatoes (New), Radishes, Rhubarb, Rutabagas,  Salad Greens, Shallots, Spinach, Summer Squash,  Tomatoes, Turnips,  Zucchini, Beets, Eggplants, Grapes,  Peaches, Watermelon, Kale, Pears',
  },
  {
    month: 'September',
    items:
      'Cranberries, Apples, Crab Apples, Blueberries, Grapes, Melons, Pears, Plums, Prunes, Artichokes, Green Beans, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower,  Celery, Swiss Chard, Corn, Cucumber, Garlic (Fresh),  Leeks,  Lettuce, Green Onions, Onions, Parsnips,  Peppers,  Potatoes (New), Pumpkin, Radishes, Rutabagas, Salad Greens, Spinach, Tomatoes, Turnips,  Zucchini, Beets, Eggplants, Nectarines, Watermelon, Kale',
  },
  {
    month: 'October',
    items:
      'Cranberries, Apples, Crab Apples, Pears, Quince, Artichokes, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower,  Celery, Swiss Chard, Corn, Garlic (Fresh),  Leeks,  Lettuce, Green Onions, Onions, Parsnips,  Peppers, Potatoes, Pumpkin, Radishes, Rutabagas, Salad Greens, Spinach, Turnips, Beets, Eggplants, Kale',
  },
  {
    month: 'November',
    items:
      'Cranberries, Pears, Quince, Broccoli, Brussels Sprouts, Cabbage, Carrots, Cauliflower,  Leeks, Onions, Parsnips, Potatoes, Pumpkin, Radishes, Rutabagas, Turnips, Apples, Beets',
  },
  {
    month: 'December',
    items:
      'Pears, Brussels Sprouts, Rutabagas / Turnips, Beets, Carrots, Cabbage, Red Onions, Garlic, Leeks, Potatoes, Squash, Sweet Potatoes, Pears',
  },
];

produce.forEach((item) => {
  const faqDiv = document.createElement('div');
  faqDiv.classList.add('faq');

  const faqTitle = document.createElement('h3');
  faqTitle.classList.add('faq-title');
  faqTitle.innerText = `What's in Season in ${item.month}`;

  const faqText = document.createElement('p');
  faqText.classList.add('faq-text');
  faqText.innerText = `${item.items}`;

  const btn = document.createElement('button');
  btn.classList.add('faq-toggle');

  const down = document.createElement('i');
  down.classList.add('fas');
  down.classList.add('fa-chevron-down');

  const times = document.createElement('i');
  times.classList.add('fas');
  times.classList.add('fa-times');

  btn.appendChild(down);
  btn.appendChild(times);

  faqDiv.appendChild(faqTitle);
  faqDiv.appendChild(faqText);
  faqDiv.appendChild(btn);

  document.querySelector('.faq-container').appendChild(faqDiv);

  console.log('hhh');
});

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
