import { useCallback } from 'react';
import { gsap } from 'gsap';

const useGsapAnimations = () => {
  const animatePreloader = useCallback(() => {
    // Animação de entrada do preloader
    gsap.from('.preloader h1', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out'
    });

    // Array de saudações
    const greetings = ["•Olá", "•Hi", "•Ciao", "•Salut", "•Hej", "•Hola", "•Aloha", "•Привет", "•你好", "•こんにちは", "•Bonjour"];
    let currentGreetingIndex = 0;
    const greetingElement = document.querySelector('.preloader h1');

    // Alternar saudações
    const interval = setInterval(() => {
      currentGreetingIndex++;
      if (currentGreetingIndex < greetings.length) {
        greetingElement.textContent = greetings[currentGreetingIndex];
      } else {
        clearInterval(interval);
        // Animação de saída do preloader
        gsap.to(".preloader", {
          opacity: 0,
          duration: 0.4,
          onComplete: () => {
            document.getElementById('preloader').style.display = 'none';
            
            // Mostrar o conteúdo
            const content = document.getElementById('content');
            content.style.display = 'block';
            
            // Animar a entrada do conteúdo
            gsap.fromTo(content, 
              { opacity: 0, y: 50 }, 
              { opacity: 1, y: 0, duration: 0.4 }
            );
            
            // Mostrar o footer
            const footer = document.querySelector('footer');
            if (footer) {
              footer.style.display = 'block';
              setTimeout(() => {
                footer.style.opacity = '1';
              }, 10);
            }
          }
        });
      }
    }, 100);

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, []);

  const animateHeroSection = useCallback(() => {
    const tl = gsap.timeline();

    tl.from('.hero-pic', {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-text h5, .hero-text h1, .hero-text p', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.btn-group a, .social a', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.3');

    return tl;
  }, []);

  return {
    animatePreloader,
    animateHeroSection
  };
};

export default useGsapAnimations; 