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

});// ... (Seu código anterior do efeito máquina de escrever e DOMContentLoaded) ...

// A função deve estar disponível globalmente (fora do DOMContentLoaded) 
// para ser chamada pelo onclick no HTML.
function toggleLeiaMais() {
    // 1. Seleciona os elementos necessários
    const tresPontos = document.getElementById('tresPontos');
    const mostrarMais = document.getElementById('mostrarMais');
    const btnLeiaMais = document.getElementById('btnLeiaMais');

    // 2. Lógica de Alternância (Toggle)
    // Verifica se o texto extra está oculto (display é 'none' ou '')
    if (mostrarMais.style.display === 'none' || mostrarMais.style.display === '') {
        // Ação: MUDAR para "Leia Menos" (Expandir)
        mostrarMais.style.display = 'block'; // Mostra o conteúdo
        tresPontos.style.display = 'none';   // Esconde os '...'
        btnLeiaMais.innerHTML = 'Leia Menos'; // Altera o texto do botão
    } else {
        // Ação: MUDAR para "Leia Mais" (Recolher)
        mostrarMais.style.display = 'none';  // Oculta o conteúdo
        tresPontos.style.display = 'inline'; // Mostra os '...'
        btnLeiaMais.innerHTML = 'Leia Mais'; // Altera o texto do botão
    }
}

// Configuração inicial (Também pode ser feito dentro do DOMContentLoaded, mas funciona bem aqui)
document.addEventListener('DOMContentLoaded', () => {
    const mostrarMais = document.getElementById('mostrarMais');
    // Garante que o estado inicial seja oculto ao carregar
    if (mostrarMais) {
        mostrarMais.style.display = 'none'; 
    }
});