<template>
  <section id="about" class="section about-section">
    <div class="container">
      <div class="about-grid">
        <div class="about-text">
          <h2 class="text-gold">Nuestra Historia</h2>
          <p>
            Desde 1920, Nocturne ha sido el santuario de los conocedores. 
            Nos especializamos en curar una selección de los destilados más finos del mundo,
            añejados a la perfección y almacenados bajo condiciones óptimas en nuestras cavas centenarias.
          </p>
          <p>
            Cada botella en nuestra colección cuenta una historia de tradición, 
            pasión y una búsqueda incansable por la excelencia.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat">
            <h3 class="text-gold">100+</h3>
            <p>Años de Tradición</p>
          </div>
          <div class="stat">
            <h3 class="text-gold">5000+</h3>
            <p>Botellas Exclusivas</p>
          </div>
          <div class="stat">
            <h3 class="text-gold">50</h3>
            <p>Países de Origen</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(194, 158, 94, 0.2);
  border-bottom: 1px solid rgba(194, 158, 94, 0.2);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #ddd;
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.stat {
  border-left: 2px solid var(--color-accent);
  padding-left: 1.5rem;
}

.stat h3 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.stat p {
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #aaa;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
