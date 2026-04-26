<template>
  <div class="app-container">
    <div class="moving-background"></div>
    <div class="content-overlay">
      <router-view />
    </div>

    <!-- Age Verification Modal -->
    <div v-if="!isVerified" class="age-modal">
      <div class="modal-content">
        <h2>Verificación de Edad</h2>
        <p>Debes ser mayor de 18 años para ingresar a este sitio web.</p>
        <div class="modal-buttons">
          <button class="btn" @click="verifyAge(true)">Tengo 18 o más</button>
          <button class="btn btn-outline" @click="verifyAge(false)">Soy menor</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isVerified = ref(false);

// Auto-verificar si ya estaba guardado en sessionStorage (opcional para desarrollo)
if (sessionStorage.getItem('ageVerified') === 'true') {
  isVerified.value = true;
}

const verifyAge = (isAdult) => {
  if (isAdult) {
    isVerified.value = true;
    sessionStorage.setItem('ageVerified', 'true');
  } else {
    alert("Lo sentimos, no puedes acceder a este sitio.");
    window.location.href = "https://google.com";
  }
};
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
}

/* Movable Background with CSS Animation and better legibility */
.moving-background {
  position: fixed;
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
  background-image: url('/bg.png');
  background-size: cover;
  background-position: center;
  z-index: 0;
  animation: panImage 30s linear infinite alternate;
  opacity: 0.15; /* Lower opacity for better text contrast */
  filter: blur(2px); /* Slight blur to make text pop */
}

@keyframes panImage {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-2%, -2%);
  }
}

.content-overlay {
  position: relative;
  z-index: 10;
  background: transparent;
}

/* Age Verification Modal */
.age-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95); /* Darker backdrop */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(8px);
}

.modal-content {
  background-color: #050505;
  padding: 3rem;
  border: 1px solid var(--color-accent);
  text-align: center;
  max-width: 500px;
  box-shadow: 0 0 40px rgba(194, 158, 94, 0.15);
}

.modal-content h2 {
  color: var(--color-accent);
  margin-bottom: 1rem;
}

.modal-content p {
  margin-bottom: 2rem;
  color: #ccc;
}

.modal-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-outline {
  border-color: #555;
  color: #ccc;
}
.btn-outline:hover {
  background-color: #555;
  color: #fff;
}
</style>
