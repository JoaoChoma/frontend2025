const catalogContainer = document.getElementById('product-catalog');

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    renderProducts(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    catalogContainer.innerHTML = '<p>Erro ao carregar produtos. Tente novamente mais tarde.</p>';
  }
}

function renderProducts(products) {
  catalogContainer.innerHTML = ''; // Limpa o container

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-price">R$ ${product.price.toFixed(2)}</p>
      <p class="product-description">${product.description}</p>
    `;

    catalogContainer.appendChild(productCard);
  });
}

fetchProducts();