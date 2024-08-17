export default function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';
  
    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    content.appendChild(headline);
  
    const phone = document.createElement('p');
    phone.textContent = "Phone: 123-456-7890";
    content.appendChild(phone);
  
    const address = document.createElement('p');
    address.textContent = "Address: 123 Main St, Hometown, USA";
    content.appendChild(address);
  }
  