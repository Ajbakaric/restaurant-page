export default function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const image = document.createElement('img');
  image.src = '/home/austinbakaric/Desktop/restaurant-page/src/images/pexels-reneterp-1581384.jpg';
  image.alt = 'Restaurant';

  const headline = document.createElement('h1');
  headline.textContent = "Welcome to Our Restaurant!";

  const description = document.createElement('p');
  description.textContent = "Experience the finest dining with a touch of elegance and a menu full of exquisite dishes.";

  content.appendChild(image);
  content.appendChild(headline);
  content.appendChild(description);
}
