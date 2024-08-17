import './styles.css';

// Rest of your JavaScript code
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function init() {
  document.getElementById('home').addEventListener('click', loadHome);
  document.getElementById('menu').addEventListener('click', loadMenu);
  document.getElementById('contact').addEventListener('click', loadContact);

  loadHome(); // Load the home page by default
}

document.addEventListener('DOMContentLoaded', init);
