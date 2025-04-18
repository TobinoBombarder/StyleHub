// Category Data
const categories = [
    { name: "Sneakers", image: "../assets/images/categories/sneakers.jpg", link: "sneakers.html" },
    { name: "Hoodies & Sweaters", image: "../assets/images/categories/hoodies.jpg", link: "hoodies.html" },
    { name: "T-Shirts & Shirts", image: "assets/images/categories/tshirts.jpg", link: "tshirts.html" },
    { name: "Jackets", image: "assets/images/categories/jackets.jpg", link: "jackets.html" },
    { name: "Jeans", image: "assets/images/categories/trousers.jpg", link: "trousers.html" },
    { name: "Shorts & Cargos", image: "assets/images/categories/shorts.jpg", link: "shorts.html" },
    { name: "Football Jerseys", image: "assets/images/categories/jerseys.jpg", link: "jerseys.html" },
    { name: "Accessories", image: "assets/images/categories/accessories.jpg", link: "accessories.html" },
    { name: "Hats & Caps", image: "assets/images/categories/hats.jpg", link: "hats.html" }
];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load categories
    const categoryGrid = document.querySelector('.category-grid');
    categories.forEach(category => {
        categoryGrid.innerHTML += `
            <div class="category-card" onclick="window.location.href='${category.link}'">
                <img src="${category.image}" alt="${category.name}" class="category-img">
                <div class="category-name">${category.name}</div>
            </div>
        `;
    });

    // Platform icon click handlers
    document.querySelectorAll('.platform-icon').forEach(icon => {
        icon.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link && link !== '#') {
                window.open(link, '_blank');
            }
        });
    });

    // Search functionality
    document.getElementById('search-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const query = prompt("Search products...");
        if (query) {
            alert(`Searching for: ${query}\nThis will be implemented with your product database.`);
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});