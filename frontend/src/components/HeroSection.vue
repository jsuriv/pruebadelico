<template>
  <header class="hero section">
    <nav class="navbar container">
      <div class="logo">Nocturne.</div>
      
      <!-- Mobile menu button -->
      <button class="mobile-menu-btn" @click="isMobileMenuOpen = !isMobileMenuOpen">
        ☰
      </button>

      <ul class="nav-links" :class="{ 'nav-open': isMobileMenuOpen }">
        <li><router-link :to="{ path: '/', hash: '#about' }" @click="isMobileMenuOpen = false">Sobre Nosotros</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#products' }" @click="isMobileMenuOpen = false">Catálogo</router-link></li>
        <li><router-link :to="{ path: '/', hash: '#contact' }" @click="isMobileMenuOpen = false">Contacto</router-link></li>
        
        <!-- Conditional Auth Navigation -->
        <template v-if="userRole === 'user'">
          <li><router-link to="/user" class="icon-link" @click="isMobileMenuOpen = false">👤 Mi Cuenta</router-link></li>
          <li><a href="#products" class="icon-link" @click="isMobileMenuOpen = false">🛒 Carrito <span class="badge">0</span></a></li>
          <li><a href="#" @click.prevent="logout" class="logout-link">Salir</a></li>
        </template>
        <template v-else-if="userRole === 'admin'">
          <li><router-link to="/admin" class="icon-link text-gold" @click="isMobileMenuOpen = false">⚙️ Panel Admin</router-link></li>
          <li><a href="#" @click.prevent="logout" class="logout-link">Salir</a></li>
        </template>
        <template v-else>
          <li><router-link to="/login" class="login-link" @click="isMobileMenuOpen = false">Acceder</router-link></li>
        </template>
      </ul>
    </nav>
    <div class="hero-content text-center container">
      <p class="subtitle text-gold">Licores Exclusivos y Colecciones Privadas</p>
      <h1 class="title">El Arte de<br/>Saber Elegir</h1>
      <router-link :to="{ path: '/', hash: '#products' }" class="btn">Explorar Colección</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userRole = ref(null);
const isMobileMenuOpen = ref(false);

onMounted(() => {
  userRole.value = localStorage.getItem('role');
});

const logout = () => {
  localStorage.removeItem('role');
  userRole.value = null;
  isMobileMenuOpen.value = false;
  router.push('/login');
};
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
  position: relative;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-accent);
  font-weight: 700;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--color-accent);
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-links a {
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 1px;
}

.login-link {
  border: 1px solid var(--color-accent);
  padding: 0.5rem 1.5rem;
  border-radius: 2px;
}

.login-link:hover {
  background-color: var(--color-accent);
  color: var(--color-bg);
}

.icon-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.badge {
  background-color: var(--color-accent);
  color: #000;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  font-weight: bold;
}

.logout-link {
  color: #888;
}
.logout-link:hover {
  color: #fff;
}

.hero-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.subtitle {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 5rem;
  line-height: 1.1;
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 3.5rem;
  }
  
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: rgba(5, 5, 5, 0.95);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-bottom: 1px solid #333;
    z-index: 999;
  }

  .nav-links.nav-open {
    display: flex;
  }
}
</style>
