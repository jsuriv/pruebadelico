<template>
  <section id="products" class="section products-section">
    <div class="container text-center">
      <h2 class="text-gold">Colección Privada</h2>
      <p class="subtitle">Descubre nuestras reservas más exclusivas, seleccionadas por expertos.</p>

      <div class="filters">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          :class="['filter-btn', { active: activeCategory === cat }]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="products-grid">
        <div 
          v-for="product in filteredProducts" 
          :key="product.id"
          class="product-card"
        >
          <div class="img-container">
            <img :src="product.image" :alt="product.name" />
          </div>
          <div class="product-info">
            <span class="category">{{ product.category }}</span>
            <h3>{{ product.name }}</h3>
            <p class="price text-gold">${{ product.price.toFixed(2) }}</p>
            <button class="btn add-to-cart">Añadir al Carrito</button>
          </div>
        </div>
      </div>
      
      <div v-if="filteredProducts.length === 0" class="no-results">
        <p>No hay botellas disponibles en esta categoría.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeCategory = ref('Todos');
const categories = ['Todos', 'Whisky', 'Vino', 'Cognac', 'Tequila', 'Ron', 'Champagne'];

const products = ref([
  { id: 1, name: 'The Nocturne 25 Años', category: 'Whisky', price: 450.00, image: '/whisky.png' },
  { id: 2, name: 'Imperial Heritage XO', category: 'Cognac', price: 850.00, image: '/cognac.png' },
  { id: 3, name: 'Château Noir 2005', category: 'Vino', price: 320.00, image: '/wine.png' },
  { id: 4, name: 'Midnight Blend Reserve', category: 'Whisky', price: 210.00, image: '/whisky.png' },
  { id: 5, name: 'Lumière des Étoiles 2018', category: 'Vino', price: 180.00, image: '/wine.png' },
  { id: 6, name: 'Royal Essence VSOP', category: 'Cognac', price: 420.00, image: '/cognac.png' },
  { id: 7, name: 'Reserva Diamante Añejo', category: 'Tequila', price: 150.00, image: '/tequila.png' },
  { id: 8, name: 'Golden Cuvée Prestige', category: 'Champagne', price: 290.00, image: '/champagne.png' },
  { id: 9, name: 'Captain\'s Legacy 15', category: 'Ron', price: 120.00, image: '/rum.png' },
]);

const filteredProducts = computed(() => {
  if (activeCategory.value === 'Todos') return products.value;
  return products.value.filter(p => p.category === activeCategory.value);
});
</script>

<style scoped>
.products-section {
  padding-top: 6rem;
}

.products-section h2 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #aaa;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
}

.filter-btn {
  background: transparent;
  border: 1px solid #444;
  color: #ccc;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
  font-family: var(--font-body);
  border-radius: 20px;
}

.filter-btn:hover, .filter-btn.active {
  border-color: var(--color-accent);
  color: var(--color-accent);
  background: rgba(194, 158, 94, 0.1);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 3rem;
}

.product-card {
  background-color: rgba(5, 5, 5, 0.85);
  border: 1px solid #222;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-10px);
  border-color: rgba(194, 158, 94, 0.5);
  box-shadow: 0 15px 30px rgba(0,0,0,0.5);
}

.img-container {
  height: 380px;
  background: radial-gradient(circle at center, #1a1a1a 0%, #000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-bottom: 1px solid #111;
  padding: 2rem;
}

.img-container img {
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.5s ease;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.8));
}

.product-card:hover .img-container img {
  transform: scale(1.05);
}

.product-info {
  padding: 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.category {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #888;
  letter-spacing: 1.5px;
  margin-bottom: 0.5rem;
}

.product-info h3 {
  font-family: var(--font-body);
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.price {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.add-to-cart {
  margin-top: auto;
  width: 100%;
  text-align: center;
  padding: 0.8rem;
}

.no-results {
  margin-top: 4rem;
  color: #888;
  font-size: 1.2rem;
}
</style>
