const darkModeToggle = document.getElementById('dark-mode-toggle');
const languageSelect = document.getElementById('language-select');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode'); // Aplica uma classe no body para estilização dark mode
});

languageSelect.addEventListener('change', () => {
    const selectedLang = languageSelect.value;
    // Lógica para mudar o idioma da página
    console.log(`Selecionado: ${selectedLang}`);
});