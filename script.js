
window.onload = function() {
    const logoText = document.querySelector('.logo');
    const logoContent = logoText.innerText;
    logoText.innerHTML = '';

    for (let i = 0; i < logoContent.length; i++) {
        const span = document.createElement('span');
        span.textContent = logoContent[i];
        logoText.appendChild(span);
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    // Adicionar o evento de clique no botão
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});
