
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
