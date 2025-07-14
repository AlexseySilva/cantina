// Mostrar botão voltar ao topo ao rolar
window.onscroll = function() {
    var btn = document.getElementById('topo');
    if (btn) {
        btn.classList.toggle('show', window.scrollY > 200);
    }
};

// Exemplo de função para menu responsivo (hambúrguer)
// (Necessário adicionar botão .menu-toggle no HTML para funcionar)
function toggleMenu() {
    var nav = document.querySelector('.header-right');
    if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    }
} 