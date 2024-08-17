export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const headline = document.createElement('h1');
  headline.textContent = "Our Menu";

  const menuList = document.createElement('div');
  menuList.classList.add('menu-list');

  const items = [
    { 
      name: "Grilled Salmon", 
      price: "$25", 
      image: "/home/austinbakaric/Desktop/restaurant-page/src/images/pexels-vanmalidate-842142.jpg",
      description: "Perfectly grilled salmon fillet, lightly seasoned and served with a zesty lemon dill sauce. Flaky and tender, it's a delightful blend of fresh flavors." 
    },
    { 
      name: "Steak Frites", 
      price: "$30", 
      image: "/home/austinbakaric/Desktop/restaurant-page/src/images/pexels-gonzalo-guzman-391363-3997609.jpg",
      description: "Juicy, grilled to perfection, and served with your choice of sauce. This succulent steak is rich and flavorful, offering a satisfying experience for meat lovers." 
    },
    { 
      name: "Caesar Salad", 
      price: "$12", 
      image: "/home/austinbakaric/Desktop/restaurant-page/src/images/pexels-dana-tentis-118658-1213710.jpg",
      description: "A crisp and refreshing mix of seasonal greens, colorful vegetables, and a light, tangy vinaigrette. Garnished with your choice of toppings for a burst of flavor and crunch." 
    }
  ];

  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    const name = document.createElement('h2');
    name.textContent = item.name;

    const price = document.createElement('p');
    price.textContent = item.price;

    const description = document.createElement('p');
    description.textContent = item.description;
    description.classList.add('menu-item-description'); // Optional: add a class for styling

    menuItem.appendChild(img);
    menuItem.appendChild(name);
    menuItem.appendChild(price);
    menuItem.appendChild(description);

    menuList.appendChild(menuItem);
  });

  content.appendChild(headline);
  content.appendChild(menuList);
}
