document.addEventListener("DOMContentLoaded", () => {

  // --- LÓGICA PARA ANIMAR ELEMENTOS AO APARECEREM NA TELA ---
  const elementosParaAnimar = document.querySelectorAll('.estudante-div');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  elementosParaAnimar.forEach(elemento => {
    observer.observe(elemento);
  });

});