// Controle do preloader
const greetings = ["•Olá", "•Hi", "•Ciao", "•Salut", "•Hej", "•Hola", "•Aloha", "•Привет", "•你好", "•こんにちは", "•Bonjour"];
let currentGreetingIndex = 0;
const greetingElement = document.querySelector('#preloader h1');

const interval = setInterval(() => {
    currentGreetingIndex++;
    if (currentGreetingIndex < greetings.length) {
        greetingElement.textContent = greetings[currentGreetingIndex];
    } else {
        clearInterval(interval);
        gsap.to("#preloader", {
            opacity: 0,
            duration: 0.4,
            onComplete: () => {
                console.log('Preloader finalizado. Ocultando...');
                document.getElementById('preloader').style.display = 'none';

                // Mostrar o footer
                const footer = document.querySelector('footer');
                if (footer) {
                    footer.style.display = 'block'; // Mostra o footer
                    // Usar um pequeno timeout para garantir que a transição ocorra
                    setTimeout(() => {
                        footer.style.opacity = '1'; // Aplica a transição de opacidade
                    }, 10);
                }

                const content = document.getElementById('content');
                content.style.display = 'block'; // Torna o conteúdo visível
                gsap.fromTo(content, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.4 });
            }
        });
    }
}, 100);

const habilidadesBtn = document.querySelector('.habilidades-btn');
const habilidadesSection = document.querySelector('.skills-section');
habilidadesSection.style.display = 'none';

habilidadesBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Botão de habilidades clicado.');
    if (habilidadesSection.style.display === 'none' || habilidadesSection.style.display === '') {
        habilidadesSection.style.display = 'block';
        gsap.fromTo(habilidadesSection, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
    } else {
        gsap.to(habilidadesSection, { opacity: 0, y: 20, duration: 0.4, onComplete: () => {
            habilidadesSection.style.display = 'none';
        }});
    }
    habilidadesSection.scrollIntoView({ behavior: 'smooth' });
});

// ReloadPage "© Luis"
function reloadPage() {
    location.reload();
}

function checkTextVisibility() {
    const developerIntro = document.querySelector('.hero-text');
    const circleButton = document.getElementById('aboutButton');
    const rect = developerIntro.getBoundingClientRect();
    const isNotVisible = rect.bottom < 0 || rect.top > window.innerHeight;

    // Mostrar ou ocultar o botão com base na visibilidade da seção hero
    if (isNotVisible) {
        circleButton.style.display = 'flex'; // Torna o botão visível
        gsap.fromTo(circleButton, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.4 });
    } else {
        gsap.to(circleButton, { opacity: 0, scale: 0.5, duration: 0.4, onComplete: () => {
            circleButton.style.display = 'none';
        }});
    }
    console.log('Verificação de visibilidade do texto. Botão visível:', !isNotVisible);
}

window.addEventListener('scroll', checkTextVisibility);
window.addEventListener('resize', checkTextVisibility);
document.addEventListener('DOMContentLoaded', checkTextVisibility);

// Adicionando log no botão "Sobre Mim"
document.getElementById('aboutButton').addEventListener('click', () => {
    console.log('Clicou no botão "Sobre". Rolando para a seção...');
    const heroHeader = document.querySelector('.hero-header');
    if (heroHeader) {
        console.log('Rolando para a seção "Hero Header".');
        heroHeader.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Erro: Seção "Hero Header" não encontrada.');
    }
});

// Código do modal de habilidades
const skills = document.querySelectorAll('.skill');
const skillInfo = document.createElement('div'); // Criação do elemento skillInfo
skillInfo.classList.add('skill-info'); // Adiciona a classe ao skillInfo
const closePreviewBtn = document.createElement('div');
closePreviewBtn.classList.add('close-preview');
closePreviewBtn.textContent = 'Fechar';
const previewModal = document.createElement('div');
previewModal.classList.add('skill-preview');
const previewContent = document.createElement('div');
previewContent.classList.add('preview-content');
previewContent.innerHTML = '<h3>Detalhes da Habilidade</h3>';
previewModal.appendChild(previewContent);
previewContent.appendChild(skillInfo);
previewContent.appendChild(closePreviewBtn);
document.body.appendChild(previewModal); // Adiciona o modal ao corpo

let isPreviewVisible = false; // Flag para controle de visibilidade do modal

skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        if (!isPreviewVisible) {
            const skillDescription = skill.querySelector('.skill-description').innerHTML;
            skillInfo.innerHTML = skillDescription; // Atualiza o conteúdo da skill
            console.log('Mostrando modal para a habilidade:', skillDescription);
            previewModal.style.display = 'flex'; // Exibe o modal
            previewModal.style.opacity = '1'; // Torna visível
            isPreviewVisible = true; // Marca como visível
        }
    });

    skill.addEventListener('mouseleave', () => {
        // Oculte o modal apenas se ele estiver visível e se o mouse não estiver sobre o modal
        if (isPreviewVisible && !previewModal.matches(':hover')) {
            console.log('Ocultando modal da habilidade.');
            previewModal.style.opacity = '0'; // Torna invisível
            setTimeout(() => {
                previewModal.style.display = 'none'; // Oculta o modal após a animação
                isPreviewVisible = false; // Marca como invisível
            }, 500); // Tempo para coincidir com a transição
        }
    });
});

// Fechar o modal ao clicar no botão
closePreviewBtn.addEventListener('click', () => {
    console.log('Fechando modal ao clicar no botão.');
    previewModal.style.opacity = '0'; // Torna invisível
    setTimeout(() => {
        previewModal.style.display = 'none'; // Oculta o modal
        isPreviewVisible = false; // Marca como invisível
    }, 500);
});

// Toggle para o menu
const togglebtn = document.querySelector(".togglebtn");
const nav = document.querySelector(".navlinks");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        console.log('Menu aberto.');
        nav.style.display = 'block';
        gsap.fromTo(nav, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4 });
    } else {
        console.log('Menu fechado.');
        gsap.to(nav, { opacity: 0, y: -10, duration: 0.4, onComplete: () => {
            nav.style.display = 'none';
        }});
    }
});

// Ocultar o menu ao clicar em qualquer link apenas se estiver visível na lateral
const navLinks = document.querySelectorAll('.navlinks a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains("open")) {
            console.log('Link do menu clicado. Fechando o menu.');
            gsap.to(nav, { opacity: 0, y: -10, duration: 0.4, onComplete: () => {
                nav.style.display = 'none';
                nav.classList.remove("open");
                togglebtn.classList.remove("click");
            }});
        }
    });
});

// Typed.js para efeito de digitação
const typed = new Typed(".input", {
    strings: ["Freelancer", "Backend Developer", "Web Developer"],
    typedSpeed: 20,
    backSpeed: 50,
    loop: true,
});

// Função para alternar a visibilidade da seção de contato
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.querySelector('a[href="#contact-section"]'); // Link de contato
    const contactSection = document.querySelector('#contact-section'); // Seção de contato

    // Verifica se o link e a seção de contato existem
    if (!contactButton || !contactSection) {
        console.error('Elemento de contato não encontrado');
        return; // Se não encontrar os elementos, evita o erro
    }

    // Certifique-se de que a seção de contato está inicialmente oculta
    contactSection.style.display = 'none';

    // Evento de clique no botão "Contact"
    contactButton.addEventListener('click', function(event) {
        // Não chamamos preventDefault() para permitir a navegação
        // event.preventDefault(); // Remover esta linha

        // Exibe a seção de contato com animação
        contactSection.style.display = 'flex'; // Torna a seção visível
        gsap.fromTo(contactSection, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 }); // Animação de entrada

        // Rolagem suave até a seção de contato
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
