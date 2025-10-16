// Aguarda o documento HTML ser completamente carregado para executar o script
document.addEventListener("DOMContentLoaded", () => {

  // Seleciona todos os elementos que queremos animar (todos os cards de estudante)
  const elementosParaAnimar = document.querySelectorAll('.estudante-div');

  // Configurações do Intersection Observer
  // rootMargin: uma "margem" extra para o viewport. "-100px" significa
  // que a animação vai começar quando o elemento estiver a 100px de entrar na tela.
  const observerOptions = {
    root: null, // null significa que o viewport do navegador é a área de observação
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1 // A animação dispara quando 10% do elemento estiver visível
  };

  // Cria o "observador" que executa uma função quando um elemento entra na tela
  const observer = new IntersectionObserver((entries, observer) => {
    // 'entries' é uma lista de todos os elementos que estão sendo observados
    entries.forEach(entry => {
      // 'isIntersecting' é 'true' se o elemento cruzou o limite e está na tela
      if (entry.isIntersecting) {
        // Adiciona a classe '.is-visible' para ativar a animação definida no CSS
        entry.target.classList.add('is-visible');
        
        // Opcional: Depois que a animação ocorreu uma vez, paramos de "observar" o elemento
        // para economizar recursos do navegador.
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Inicia a observação para cada um dos cards de estudante
  elementosParaAnimar.forEach(elemento => {
    observer.observe(elemento);
  });

});
