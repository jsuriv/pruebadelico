<template>
  <div class="dashboard admin-dashboard">
    <!-- Top Bar -->
    <header class="topbar">
      <div class="logo-area">
        <router-link to="/" class="logo">Nocturne. <span class="admin-badge">ADMIN</span></router-link>
      </div>
      <div class="topbar-actions">
        <div class="search-bar">
          <input type="text" placeholder="Buscar pedido o botella...">
        </div>
        <div class="admin-profile">
          <span>Administrador Maestro</span>
          <button @click="logout" class="btn-icon" title="Cerrar sesión">⏻</button>
        </div>
      </div>
    </header>
    
    <div class="dashboard-body">
      <!-- Sidebar -->
      <aside class="sidebar">
        <ul>
          <li class="section-title">Principal</li>
          <li class="active">📊 Dashboard General</li>
          <li>🍷 Inventario</li>
          <li>📦 Pedidos</li>
          <li>👥 Clientes</li>
          <li class="section-title">Configuración</li>
          <li>⚙️ Ajustes del Sistema</li>
        </ul>
      </aside>
      
      <!-- Main Content -->
      <main class="main-panel">
        
        <!-- KPIs -->
        <div class="kpi-grid">
          <div class="kpi-card">
            <div class="kpi-title">Ingresos Mensuales</div>
            <div class="kpi-value text-gold">$24,500.00</div>
            <div class="kpi-trend positive">↑ +12.5% vs mes anterior</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-title">Pedidos Activos</div>
            <div class="kpi-value">15</div>
            <div class="kpi-trend">En proceso de envío</div>
          </div>
          <div class="kpi-card">
            <div class="kpi-title">Alertas de Stock</div>
            <div class="kpi-value stock-low">3</div>
            <div class="kpi-trend negative">Botellas por agotarse</div>
          </div>
        </div>

        <div class="content-header">
          <h2 class="text-gold">Inventario Reciente</h2>
          <button class="btn">+ Nueva Botella</button>
        </div>
        
        <!-- Advanced Table -->
        <div class="table-container">
          <table class="admin-table">
            <thead>
              <tr>
                <th><input type="checkbox"></th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><input type="checkbox"></td>
                <td class="product-cell">
                  <img src="/whisky.png" class="thumb" alt="Whisky">
                  <div>
                    <strong>The Nocturne 25 Años</strong>
                    <span class="sku">SKU: WHI-001</span>
                  </div>
                </td>
                <td>Whisky</td>
                <td>$450.00</td>
                <td class="stock-ok">12</td>
                <td><span class="status-badge active">Publicado</span></td>
                <td class="actions">
                  <button title="Editar">✏️</button>
                  <button title="Eliminar">🗑️</button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td class="product-cell">
                  <img src="/cognac.png" class="thumb" alt="Cognac">
                  <div>
                    <strong>Imperial Heritage XO</strong>
                    <span class="sku">SKU: COG-002</span>
                  </div>
                </td>
                <td>Cognac</td>
                <td>$850.00</td>
                <td class="stock-low">3</td>
                <td><span class="status-badge active">Publicado</span></td>
                <td class="actions">
                  <button title="Editar">✏️</button>
                  <button title="Eliminar">🗑️</button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td class="product-cell">
                  <img src="/tequila.png" class="thumb" alt="Tequila">
                  <div>
                    <strong>Reserva Diamante Añejo</strong>
                    <span class="sku">SKU: TEQ-001</span>
                  </div>
                </td>
                <td>Tequila</td>
                <td>$150.00</td>
                <td class="stock-ok">24</td>
                <td><span class="status-badge active">Publicado</span></td>
                <td class="actions">
                  <button title="Editar">✏️</button>
                  <button title="Eliminar">🗑️</button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td class="product-cell">
                  <img src="/champagne.png" class="thumb" alt="Champagne">
                  <div>
                    <strong>Golden Cuvée Prestige</strong>
                    <span class="sku">SKU: CHA-005</span>
                  </div>
                </td>
                <td>Champagne</td>
                <td>$290.00</td>
                <td class="stock-ok">15</td>
                <td><span class="status-badge active">Publicado</span></td>
                <td class="actions">
                  <button title="Editar">✏️</button>
                  <button title="Eliminar">🗑️</button>
                </td>
              </tr>
              <tr>
                <td><input type="checkbox"></td>
                <td class="product-cell">
                  <img src="/rum.png" class="thumb" alt="Ron">
                  <div>
                    <strong>Captain's Legacy 15</strong>
                    <span class="sku">SKU: RON-003</span>
                  </div>
                </td>
                <td>Ron</td>
                <td>$120.00</td>
                <td class="stock-low">2</td>
                <td><span class="status-badge active">Publicado</span></td>
                <td class="actions">
                  <button title="Editar">✏️</button>
                  <button title="Eliminar">🗑️</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('role');
  router.push('/login');
};
</script>

<style scoped>
.admin-dashboard {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #050505; /* Solid dark background, no moving bg here ideally */
  position: relative;
  z-index: 100; /* Above moving bg from App.vue */
}

/* Topbar */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #0a0a0a;
  border-bottom: 1px solid #222;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-accent);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.admin-badge {
  font-family: var(--font-body);
  font-size: 0.6rem;
  background-color: var(--color-accent);
  color: #000;
  padding: 0.2rem 0.4rem;
  border-radius: 2px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.search-bar input {
  background-color: #111;
  border: 1px solid #333;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  width: 300px;
}

.search-bar input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.admin-profile {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
}

.btn-icon {
  background: transparent;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 1.2rem;
}
.btn-icon:hover { color: #fff; }

/* Body Layout */
.dashboard-body {
  display: flex;
  flex-grow: 1;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background-color: #0a0a0a;
  border-right: 1px solid #222;
  padding: 2rem 0;
}

.sidebar ul {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.section-title {
  color: #555;
  text-transform: uppercase;
  font-size: 0.7rem;
  letter-spacing: 1px;
  padding: 1rem 1.5rem 0.5rem;
}

.sidebar li:not(.section-title) {
  padding: 0.8rem 1.5rem;
  border-left: 3px solid transparent;
  cursor: pointer;
  color: #ccc;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.sidebar li:not(.section-title):hover, .sidebar li.active {
  background-color: rgba(194, 158, 94, 0.1);
  color: var(--color-accent);
  border-left-color: var(--color-accent);
}

/* Main Panel */
.main-panel {
  flex-grow: 1;
  padding: 2rem 3rem;
  background-color: rgba(0,0,0,0.5); /* Slight transparency to let App.vue bg peek through dimly */
}

/* KPIs */
.kpi-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.kpi-card {
  background: linear-gradient(145deg, #111, #0a0a0a);
  border: 1px solid #222;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.kpi-title {
  color: #888;
  font-size: 0.85rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.kpi-value {
  font-size: 2.5rem;
  font-family: var(--font-heading);
  margin-bottom: 0.5rem;
}

.kpi-trend { font-size: 0.8rem; color: #aaa; }
.kpi-trend.positive { color: #4ade80; }
.kpi-trend.negative { color: #f87171; }

/* Table */
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.content-header h2 { font-size: 1.8rem; margin: 0; }

.table-container {
  background-color: #0a0a0a;
  border: 1px solid #222;
  border-radius: 8px;
  overflow: hidden;
}

.admin-table {
  width: 100%;
  border-collapse: collapse;
}

.admin-table th, .admin-table td {
  padding: 1rem 1.5rem;
  text-align: left;
  border-bottom: 1px solid #1a1a1a;
  font-size: 0.9rem;
}

.admin-table th {
  background-color: #111;
  color: #888;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.thumb {
  width: 40px;
  height: 40px;
  object-fit: contain;
  background-color: #1a1a1a;
  border-radius: 4px;
  padding: 0.2rem;
}

.sku {
  display: block;
  font-size: 0.7rem;
  color: #666;
}

.status-badge {
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
}
.status-badge.active { background-color: rgba(74, 222, 128, 0.2); color: #4ade80; }

.actions button {
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0.6;
  margin-right: 0.5rem;
}
.actions button:hover { opacity: 1; }

.stock-ok { color: #4ade80; }
.stock-low { color: #f87171; font-weight: bold; }
</style>
