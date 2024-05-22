import 'regenerator-runtime'; 
import '../styles/main.css';
import './components/AppBar.js';
import './components/Footer.js';
import './components/HeroElement.js';
import { displayRestaurants } from './components/RestoData.js'; 
import '../public/data/DATA.json';

document.addEventListener("DOMContentLoaded", async function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navlinks = document.querySelector('.nav-links');

  try {
    // Ambil data JSON menggunakan fetch
    const response = await fetch('../public/data/DATA.json');
    const data = await response.json();
    
    
    if (data && data.restaurants) {
      const restaurantsData = data.restaurants; 
      displayRestaurants(restaurants)
    } else {
      console.error('Error: Invalid JSON data format'); 
    }
  } catch (error) {
    console.error('Error fetching JSON data:', error);
  }

  if (hamburgerMenu && navlinks) {
    hamburgerMenu.addEventListener('click', function() {
      navlinks.classList.toggle('show');
    });
  } else {
    console.error('Error: Hamburger menu or nav links not found'); 
  }
});
