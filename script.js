document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SCROLL SUAVE ACESSÍVEL
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
                
                // Gerencia o foco do teclado de forma nativa e limpa por acessibilidade
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus({ preventScroll: true });
            }
        });
    });

    // 2. CONTROLE DE EVENTO DO ACORDEÃO (BOTÕES DE EXPLICAÇÃO)
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
            const panelId = trigger.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            const arrow = trigger.querySelector('.arrow');

            // Altera o estado binário de acessibilidade
            trigger.setAttribute('aria-expanded', !isExpanded);
            
            // Alterna a visualização real do contêiner oculto e rotaciona o ícone de indicação
            if (isExpanded) {
                panel.setAttribute('hidden', '');
                if (arrow) arrow.style.transform = 'rotate(0deg)';
            } else {
                panel.removeAttribute('hidden');
                if (arrow) arrow.style.transform = 'rotate(180deg)';
                
                // Desloca suavemente a visão do usuário para focar no conteúdo aberto
                panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        });
    });

    // 3. SIMULAÇÃO DE TRANSMISSÃO DE DADOS IOT (TELEMETRIA)
    const updateSensorData = () => {
        // Gera valores randômicos controlados simulando flutuações reais de campo
        const humidity = Math.floor(Math.random() * (58 - 42) + 42);
        const energy = (Math.random() * (4.9 - 4.1) + 4.1).toFixed(1);
        
        const humidityEl = document.getElementById('val-humidity');
        const energyEl = document.getElementById('val-energy');

        if (humidityEl) humidityEl.innerText = `${humidity}%`;
        if (energyEl) energyEl.innerText = `${energy} kWh`;
    };

    // Executa imediatamente no carregamento e atualiza a cada 4 segundos
    updateSensorData();
    setInterval(updateSensorData, 4000); 

    // 4. INTERSECTION OBSERVER (REVEAL AO SCROLL)
    const observerOptions = {
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Cessa o rastreio do elemento após concluir o efeito de entrada
            }
        });
    }, observerOptions);

    // Vincula a animação nas estruturas textuais principais e cards de impacto
    document.querySelectorAll('.impact-item, .section-title, .center-text, .accordion-container').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});