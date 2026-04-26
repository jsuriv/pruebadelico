<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-wrapper">
        <div class="contact-info">
          <h2 class="text-gold">Visítanos</h2>
          <p>Experimenta el lujo en persona en nuestra cava subterránea.</p>
          <div class="info-block">
            <h4 class="text-gold">Dirección</h4>
            <p>123 Avenida Lujo, Distrito Financiero<br>Ciudadela, 10001</p>
          </div>
          <div class="info-block">
            <h4 class="text-gold">Horario</h4>
            <p>Mar - Sáb: 17:00 - 02:00<br>Dom - Lun: Cerrado</p>
          </div>
          <div class="info-block">
            <h4 class="text-gold">Contacto</h4>
            <p>reservas@nocturnestorage.com<br>+1 (555) 123-4567</p>
          </div>
        </div>
        <div class="contact-form">
          <form @submit.prevent>
            <div class="form-group">
              <input type="text" placeholder="Nombre Completo" required>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Correo Electrónico" required>
            </div>
            <div class="form-group">
              <textarea placeholder="Mensaje o Solicitud Especial" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: rgba(0, 0, 0, 0.8);
  border-top: 1px solid rgba(194, 158, 94, 0.2);
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
}

.contact-info h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.contact-info p {
  color: #aaa;
  margin-bottom: 2rem;
}

.info-block {
  margin-bottom: 1.5rem;
}

.info-block h4 {
  margin-bottom: 0.2rem;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.info-block p {
  margin-bottom: 0;
  color: #ddd;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #444;
  color: #fff;
  padding: 1rem 0;
  font-family: var(--font-body);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-bottom-color: var(--color-accent);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #666;
}

.contact-form .btn {
  align-self: flex-start;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
