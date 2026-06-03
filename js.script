// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Suave para os links de navegação
    const links = document.querySelectorAll('nav ul li a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // 2. Simulação de Dados IoT (Painel de Monitoramento)
    // Se houver elementos de monitoramento, eles atualizarão sozinhos
    const updateSensorData = () => {
        const humidity = Math.floor(Math.random() * (60 - 40) + 40);
        const energy = (Math.random() * (5.0 - 4.2) + 4.2).toFixed(1);
        
        const humidityEl = document.getElementById('val-humidity');
        const energyEl = document.getElementById('val-energy');

        if(humidityEl) humidityEl.innerText = `${humidity}%`;
        if(energyEl) energyEl.innerText = `${energy} kWh`;
    };

    setInterval(updateSensorData, 3000); // Atualiza a cada 3 segundos

    // 3. Efeito de Revelação ao Scroll (Scroll Reveal)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Seleciona cards e seções para animar
    document.querySelectorAll('.card, .impact-item, .section-title').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});