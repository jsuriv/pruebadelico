<template>
  <div class="dashboard user-dashboard">
    <nav class="navbar container">
      <router-link to="/" class="logo">Nocturne.</router-link>
      <div class="user-menu">
        <span>Hola, Cliente Privilegiado</span>
        <button @click="logout" class="btn">Salir</button>
      </div>
    </nav>
    
    <div class="container dashboard-content">
      <aside class="sidebar">
        <ul>
          <li class="active">Mis Pedidos</li>
          <li>Mi Cava Virtual</li>
          <li>Suscripción Premium</li>
          <li>Ajustes de Perfil</li>
        </ul>
      </aside>
      
      <main class="main-panel">
        <h2 class="text-gold">Mis Pedidos Recientes</h2>
        
        <div class="order-list">
          <div class="order-card">
            <div class="order-header">
              <span>Pedido #NOC-8821</span>
              <span class="status text-gold">Entregado</span>
            </div>
            <div class="order-body">
              <p>1x The Nocturne 25 Años</p>
              <p class="price">$450.00</p>
            </div>
          </div>
          
          <div class="order-card">
            <div class="order-header">
              <span>Pedido #NOC-7430</span>
              <span class="status text-gold">En tránsito a Cava</span>
            </div>
            <div class="order-body">
              <p>2x Château Noir 2005</p>
              <p class="price">$640.00</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  router.push('/login');
};
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-accent);
  font-weight: 700;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.dashboard-content {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 4rem;
  flex-grow: 1;
}

.sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar li {
  padding: 1rem;
  border-left: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #aaa;
}

.sidebar li:hover, .sidebar li.active {
  color: var(--color-accent);
  border-left-color: var(--color-accent);
  background-color: rgba(194, 158, 94, 0.05);
}

.main-panel h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.order-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.order-card {
  background-color: rgba(10, 10, 10, 0.8);
  border: 1px solid #333;
  padding: 1.5rem;
  transition: border-color 0.3s ease;
}

.order-card:hover {
  border-color: #555;
}

.order-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #222;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  font-family: var(--font-body);
  font-weight: 600;
}

.order-body {
  display: flex;
  justify-content: space-between;
  color: #ccc;
}

.price {
  font-family: var(--font-heading);
  font-size: 1.2rem;
  color: #fff;
}

@media (max-width: 768px) {
  .dashboard-content {
    grid-template-columns: 1fr;
  }
}
</style>
