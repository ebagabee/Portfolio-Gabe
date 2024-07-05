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

let currentSlide = 0;
const projectList = document.querySelector('.projects-list');
const projects = document.querySelectorAll('.project-item');
const totalProjects = projects.length;
const projectsPerPage = 3;
const totalPages = Math.ceil(totalProjects / projectsPerPage);

function scrollProjects(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalPages - 1;
    } else if (currentSlide >= totalPages) {
        currentSlide = 0;
    }
    const offset = -currentSlide * 100 / projectsPerPage;
    projectList.style.transform = `translateX(${offset}%)`;
}