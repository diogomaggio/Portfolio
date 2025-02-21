document.addEventListener("DOMContentLoaded", () => {
    // Efeito de hover nos ícones
    const icons = document.querySelectorAll(".icon img");
    icons.forEach(icon => {
        icon.addEventListener("mouseenter", () => {
            icon.style.transform = "scale(1.1)";
            icon.style.transition = "transform 0.3s ease";
        });
        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });

    // Efeito de rolagem suave para os links do menu
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});

document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

function openLinkedIn() {
    window.open("https://www.linkedin.com/in/diogo-maggio-9b8195239/", "_blank");
}

function openGithub() {
    window.open("https://github.com/diogomaggio", "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os elementos de detalhes dos projetos e os esconde
    document.querySelectorAll(".detalhes-projeto").forEach((detalhe) => {
        detalhe.style.display = "none";
    });

    // Adiciona evento de clique para cada título do projeto
    document.querySelectorAll(".projeto-titulo").forEach((titulo) => {
        titulo.addEventListener("click", function () {
            let detalhes = this.nextElementSibling; // Pega o próximo elemento (os detalhes do projeto)

            // Alterna a visibilidade dos detalhes
            if (detalhes.style.display === "none" || detalhes.style.display === "") {
                detalhes.style.display = "block";
            } else {
                detalhes.style.display = "none";
            }
        });
    });
});

function openProjeto(projeto) {
    const links = {
        cadastroJS: "https://login-e-cadastro-js-html-e-css.vercel.app",
        Calculadora: "https://calculadora-simples-ashy-rho.vercel.app",
        Financeiro: "https://controle-financeiro-lime.vercel.app"
    };

    if (links[projeto]) {
        window.open(links[projeto], "_blank");
    } else {
        console.error("Projeto não encontrado!");
    }
}

function showDescription(tecnologia, elemento) {
    const descriptions = {
        "React": "React é uma biblioteca JavaScript para construção de interfaces de usuário. Tenho 3 meses de experiência utilizando essa biblioteca",
        "TypeScript": "TypeScript é um superconjunto do JavaScript que adiciona tipagem estática.",
        "JavaScript": "JavaScript é uma linguagem de programação para desenvolvimento web. Tenho 3 meses de experiência utilizando essa linguagem",
        "HTML": "HTML é a linguagem de marcação utilizada para estruturar páginas web. Tenho 3 meses de experiência utilizando essa linguagem",
        "CSS": "CSS é a linguagem de estilos usada para definir a aparência de páginas web. Tenho 3 meses de experiência utilizando essa linguagem",
        "Next.js": "Next.js é um framework React para criação de aplicações web rápidas.",
        "C#": "C# é uma linguagem de programação usada principalmente no desenvolvimento de aplicações .NET.",
        "PHP": "PHP é uma linguagem de programação para desenvolvimento web dinâmico.",
        "Python": "Python é uma linguagem versátil usada para desenvolvimento web, automação e mais.",
        "Git": "Git é um sistema de controle de versão distribuído para rastreamento de mudanças no código.",
        "Github": "Github é uma plataforma de hospedagem de código-fonte para colaboração e versionamento. Tenho 6 meses de experiência utilizando essa linguagem",
        "Vite": "Vite é uma ferramenta de build rápida para desenvolvimento moderno em JavaScript."
    };

    // Atualiza o texto da descrição
    document.getElementById("descricao-texto").innerText = descriptions[tecnologia];

    // Remove opacidade reduzida de todos os ícones
    document.querySelectorAll(".icon").forEach(icon => {
        icon.style.opacity = "0.5";
    });

    // Destaca o ícone clicado
    elemento.style.opacity = "1";
}

