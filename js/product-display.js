// Display Product Modal
function showProductModal(productId) {
    const product = sneakers.find(p => p.id === productId);
    if (!product) return;

    modalContent.innerHTML = `
        <div class="modal-gallery">
            <div class="main-image-container">
                <img src="${product.colors[0].images[0]}" 
                     id="main-product-image"
                     class="main-image">
            </div>
            
            <div class="color-options scrollable">
                ${product.colors.map((color, index) => `
                    <div class="color-option ${index === 0 ? 'active' : ''}" 
                         data-color="${color.name}"
                         onclick="changeColor('${color.name}', ${productId})">
                        ${color.name}
                    </div>
                `).join('')}
            </div>
            
            <div class="image-thumbnails scrollable">
                ${product.colors[0].images.map((img, i) => `
                    <img src="${img}" 
                         class="thumbnail ${i === 0 ? 'active' : ''}" 
                         onclick="changeMainImage('${img}')">
                `).join('')}
            </div>
        </div>
        
        <div class="product-details">
            <h2>${product.title} - <span id="current-color">${product.colors[0].name}</span></h2>
            <p class="price-range">${product.priceRange}</p>
            <p class="description">${product.description}</p>
            
            <div class="buy-options">
                <h3>Purchase Options:</h3>
                ${product.links.map(link => `
                    <a href="${link.url}" 
                       target="_blank" 
                       class="buy-link">
                       <span>${link.site}</span>
                       <span class="price">${link.price}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'block';
}

// Color Change Function (simplified)
function changeColor(colorName, productId) {
    const product = sneakers.find(p => p.id === productId);
    const color = product.colors.find(c => c.name === colorName);
    
    // Update main image
    document.getElementById('main-product-image').src = color.images[0];
    
    // Update thumbnails
    document.querySelector('.image-thumbnails').innerHTML = color.images.map((img, i) => `
        <img src="${img}" 
             class="thumbnail ${i === 0 ? 'active' : ''}" 
             onclick="changeMainImage('${img}')">
    `).join('');
    
    // Update active color
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.toggle('active', option.dataset.color === colorName);
    });
    
    // Update displayed color name
    document.getElementById('current-color').textContent = colorName;
}