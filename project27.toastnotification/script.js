const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const toast = [
  {
    type: 'info',
    message: 'Informative Title',
  },
  {
    type: 'success',
    message: 'Positive Title',
  },
  {
    type: 'warning',
    message: 'Warning Title',
  },
  {
    type: 'error',
    message: 'Error Title',
  },
];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const randomNotif = getRandomNotification();
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : randomNotif.type);

  notif.innerText = randomNotif.message;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomNotification() {
  return toast[Math.floor(Math.random() * toast.length)];
}
