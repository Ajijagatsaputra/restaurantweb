import 'regenerator-runtime'; 
import '../styles/main.css';
import './components/AppBar.js';
import './components/Footer.js';
import './components/HeroElement.js';
import { displayRestaurants } from './components/RestoData.js'; 
import data from '../public/data/DATA.json';

document.addEventListener("DOMContentLoaded", async function() {
  const hamburgerMenu = document.querySelector('.hamburgermenu');
  const navlinks = document.querySelector('.nav__links');

  try {
    // Using imported data directly instead of fetch
    if (data && data.restaurants) {
      displayRestaurants(data.restaurants);  // Pass the correct data array
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
