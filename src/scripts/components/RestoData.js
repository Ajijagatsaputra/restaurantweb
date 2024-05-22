export function displayRestaurants(restaurants) {
  const container = document.getElementById('restaurant-list');
  container.innerHTML = ''; // Clear previous content
  restaurants.forEach(restaurant => {
    const restaurantElement = document.createElement('div');
    restaurantElement.classList.add('restaurant-item');

    restaurantElement.innerHTML = `
      <img src="${restaurant.pictureId}" alt="${restaurant.name}" class="restaurant-image">
      <div class="restaurant-content">
        <h3 class="restaurant-name">${restaurant.name}</h3>
        <p class="restaurant-description">${restaurant.description}</p>
        <p class="restaurant-city">City: ${restaurant.city}</p>
        <p class="restaurant-rating">Rating: ${restaurant.rating}</p>
      </div>
    `;

    container.appendChild(restaurantElement);
  });
}

// Menampilkan data restoran saat dokumen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
  displayRestaurants(restaurantsData.restaurants);
});