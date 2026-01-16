// Abrir Modal com a imagem clicada
function abrirModal(imagem) {
    const modal = document.getElementById('modalInstagram');
    const modalImagem = document.getElementById('modalImagem');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalDescricao = document.getElementById('modalDescricao');
    
    // Pegar título e descrição dos atributos data-
    const titulo = imagem.getAttribute('data-title') || 'Cosplay';
    const descricao = imagem.getAttribute('data-descricao') || 'Descrição não disponível';
    
    // Definir a imagem, título e descrição no modal
    modalImagem.src = imagem.src;
    modalImagem.alt = imagem.alt;
    modalTitulo.textContent = titulo;
    modalDescricao.textContent = descricao;
    
    // Mostrar o modal
    modal.style.display = 'block';
    
    // Impedir scroll da página
    document.body.style.overflow = 'hidden';
}

// Fechar Modal
function fecharModal() {
    const modal = document.getElementById('modalInstagram');
    modal.style.display = 'none';
    
    // Permitir scroll da página novamente
    document.body.style.overflow = 'auto';
}

// Fechar modal ao clicar fora (na área preta)
window.onclick = function(event) {
    const modal = document.getElementById('modalInstagram');
    
    if (event.target == modal) {
        fecharModal();
    }
}

// Fechar modal com a tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
});
