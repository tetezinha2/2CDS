// Aguarda o documento HTML ser completamente carregado para executar o script
document.addEventListener("DOMContentLoaded", () => {

  // --- LÓGICA PARA O EFEITO MÁQUINA DE ESCREVER ---

  const tituloAnimado = document.querySelector('#titulo-animado');
  const textoOriginal = "Os truqueiros 2025";

  // Função que "digita" o texto letra por letra
  function efeitoMaquinaEscrever(elemento, texto) {
    const letras = texto.split('');
    elemento.innerHTML = ''; // Limpa o conteúdo do elemento
    
    letras.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 100 * i); // Intervalo de 100ms entre cada letra
    });
  }

  // Configura o "observador" para disparar a animação quando o título estiver visível
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Se o elemento (título) está na tela
      if (entry.isIntersecting) {
        // Inicia a animação
        efeitoMaquinaEscrever(tituloAnimado, textoOriginal);
        // Para de observar o elemento para a animação não repetir
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // A animação começa quando 50% do título estiver visível

  // Inicia a observação do elemento do título
  observer.observe(tituloAnimado);

});