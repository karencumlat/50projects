const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2500);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1604697763166-0cc2965ff303?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="" />';
  title.innerHTML = ' I show my fluffy belly';
  excerpt.innerHTML =
    "I show my fluffy belly but it's a trap! if you pet it i will tear up your hand inspect anything brought into the house chase ball of string";
  profile_img.innerHTML =
    ' <img src="http://placekitten.com/45/45" alt="" class="profile-image" />';
  name.innerHTML = 'Cat Ipsum';
  date.innerHTML = 'Dec 27, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
