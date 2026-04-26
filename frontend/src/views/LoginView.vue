<template>
  <div class="login-view section">
    <nav class="navbar container">
      <router-link to="/" class="logo">Nocturne.</router-link>
    </nav>
    <div class="login-container">
      <div class="login-box">
        <h2 class="text-gold">Acceso Exclusivo</h2>
        <p class="subtitle">Ingresa a tu cuenta</p>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <input type="text" v-model="username" placeholder="Usuario (ej: admin o user)" required>
          </div>
          <div class="form-group">
            <input type="password" v-model="password" placeholder="Contraseña" required>
          </div>
          <button type="submit" class="btn btn-full">Ingresar</button>
        </form>
        
        <div class="login-footer">
          <p>Para probar, usa <strong>admin</strong> o <strong>user</strong>.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const handleLogin = () => {
  const role = username.value.toLowerCase();
  if (role === 'admin') {
    localStorage.setItem('role', 'admin');
    router.push('/admin');
  } else {
    localStorage.setItem('role', 'user');
    router.push('/');
  }
};
</script>

<style scoped>
.login-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
}

.navbar {
  width: 100%;
}

.logo {
  font-family: var(--font-heading);
  font-size: 2rem;
  color: var(--color-accent);
  font-weight: 700;
}

.login-container {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  background-color: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(10px);
  padding: 4rem;
  border: 1px solid #333;
  border-top: 2px solid var(--color-accent);
  width: 100%;
  max-width: 450px;
  text-align: center;
}

.login-box h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #aaa;
  margin-bottom: 3rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group input {
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  border: 1px solid #444;
  color: #fff;
  padding: 1rem;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: var(--color-accent);
}

.btn-full {
  width: 100%;
  margin-top: 1rem;
}

.login-footer {
  margin-top: 2rem;
  color: #666;
  font-size: 0.85rem;
}
</style>
