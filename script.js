const languageData = {
    pt: {
        heroTitle: "Bem-vindo ao Meu Portfolio",
        heroDescription: "Desenvolvedor Full Stack resolvendo problemas e criando soluções desde 2022",
        projectsButton: "Veja Meus Projetos",
        resumeButton: "Baixar Currículo",
        projectsTitle: "Meus Projetos",
        project1Title: "API Gajoyland",
        project1Description: "REST API da plataforma principal da Gajoyland desenvolvida em NodeJS com TypeScript, PostgreSQL, Principios SOLID e MVC",
        project1Button: "Codigo Fonte",
        project2Title: "Five FPS",
        project2Description: "Landing page desenvolvida para apresentação de produto de otimização de software",
        project2Button: "Acessar Site",
        project3Title: "Contas a pagar",
        project3Description: "Controle financeiro de contas a pagar desenvolvido em PHP utilizando programação orientada a objetos (POO) com arquitetura MVC",
        project3Button: "Codigo Fonte"
    },
    es: {
        heroTitle: "Bienvenido a mi Portafolio",
        heroDescription: "Desarrollador Full Stack resolviendo problemas y creando soluciones desde 2022",
        projectsButton: "Ver Mis Proyectos",
        resumeButton: "Descargar Currículum",
        projectsTitle: "Mis Proyectos",
        project1Title: "API Gajoyland",
        project1Description: "API REST de la plataforma principal de Gajoyland desarrollada en NodeJS con TypeScript, PostgreSQL, Principios SOLID y MVC",
        project1Button: "Código Fuente",
        project2Title: "Five FPS",
        project2Description: "Página de aterrizaje desarrollada para la presentación de producto de optimización de software",
        project2Button: "Acceder al Sitio",
        project3Title: "Cuentas por pagar",
        project3Description: "Control financiero de cuentas por pagar desarrollado en PHP utilizando programación orientada a objetos (POO) con arquitectura MVC",
        project3Button: "Código Fuente"
    },
    en: {
        heroTitle: "Welcome to My Portfolio",
        heroDescription: "Full Stack Developer solving problems and creating solutions since 2022",
        projectsButton: "See My Projects",
        resumeButton: "Download Resume",
        projectsTitle: "My Projects",
        project1Title: "API Gajoyland",
        project1Description: "Main platform REST API of Gajoyland developed in NodeJS with TypeScript, PostgreSQL, SOLID Principles, and MVC",
        project1Button: "Source Code",
        project2Title: "Five FPS",
        project2Description: "Landing page developed for software optimization product presentation",
        project2Button: "Visit Site",
        project3Title: "Accounts Payable",
        project3Description: "Accounts payable financial control system developed in PHP using object-oriented programming (OOP) with MVC architecture",
        project3Button: "Source Code"
    }
};

function updateLanguage() {
    const selectedLanguage = document.getElementById('language-select').value;
    document.getElementById('hero-title').textContent = languageData[selectedLanguage].heroTitle;
    document.getElementById('hero-description').textContent = languageData[selectedLanguage].heroDescription;
    document.getElementById('projects-title').textContent = languageData[selectedLanguage].projectsTitle;
    document.getElementById('hero-projects-button').textContent = languageData[selectedLanguage].projectsButton;
        document.getElementById('hero-resume-button').textContent = languageData[selectedLanguage].resumeButton;
    document.querySelectorAll('.project-item').forEach((item, index) => {
        const projectTitle = item.querySelector('.project-title');
        const projectDescription = item.querySelector('.project-description');
        const projectButton = item.querySelector('.project-button');
        switch (index) {
            case 0:
                projectTitle.textContent = languageData[selectedLanguage].project1Title;
                projectDescription.textContent = languageData[selectedLanguage].project1Description;
                projectButton.textContent = languageData[selectedLanguage].project1Button;
                break;
            case 1:
                projectTitle.textContent = languageData[selectedLanguage].project2Title;
                projectDescription.textContent = languageData[selectedLanguage].project2Description;
                projectButton.textContent = languageData[selectedLanguage].project2Button;
                break;
            case 2:
                projectTitle.textContent = languageData[selectedLanguage].project3Title;
                projectDescription.textContent = languageData[selectedLanguage].project3Description;
                projectButton.textContent = languageData[selectedLanguage].project3Button;
                break;
            default:
                break;
        }
    });
}

function changeLanguage() {
    updateLanguage();
}

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

const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode'); // Aplica uma classe no body para estilização dark mode
});

updateLanguage();