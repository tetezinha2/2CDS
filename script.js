// Aguarda todo o conteúdo da página ser carregado para executar o script
document.addEventListener("DOMContentLoaded", () => {

  // --- LÓGICA PARA O EFEITO PARALLAX NO BANNER ---
  const banner = document.getElementById('banner-parallax');
  
  if (banner) { // Verifica se o banner existe para não dar erro
    window.addEventListener('scroll', () => {
      let scrollPos = window.pageYOffset;
      // O '0.5' controla a velocidade do efeito. Ajuste conforme sua preferência.
      banner.style.backgroundPositionY = scrollPos * 0.5 + 'px';
    });
  }


  // --- LÓGICA PARA ANIMAR ELEMENTOS AO APARECEREM NA TELA ---
  const elementosParaAnimar = document.querySelectorAll('.estudante-div');

  // Configurações do "observador"
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25 // A animação dispara quando 25% do elemento estiver visível
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Se o elemento está na tela (intersecting)
      if (entry.isIntersecting) {
        // Adiciona a classe '.is-visible' para ativar a animação do CSS
        entry.target.classList.add('is-visible');
        
        // Para de "observar" o elemento depois que a animação ocorreu uma vez
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Inicia a observação para cada um dos cards de estudante
  elementosParaAnimar.forEach(elemento => {
    observer.observe(elemento);
  });

});