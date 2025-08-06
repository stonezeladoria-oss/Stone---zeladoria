document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
    
    // Header scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Dados dos serviços
    const servicesData = [
        {
            icon: '<i class="fas fa-shield-alt"></i>',
            title: 'Zeladoria Patrimonial',
            description: 'Cuidado completo do seu patrimônio com profissionais qualificados e experientes.',
            features: ['Manutenção preventiva', 'Supervisão de obras', 'Gestão de pessoal']
        },
        {
            icon: '<i class="fas fa-user-shield"></i>',
            title: 'Portaria e Recepção',
            description: 'Controle de acesso com foco principal em assegurar o patrimônio do cliente.',
            features: ['Controle de acesso rigoroso', 'Proteção patrimonial', 'Segurança 24 horas']
        },
        {
            icon: '<i class="fas fa-broom"></i>',
            title: 'Limpeza e Conservação',
            description: 'Serviço de limpeza com foco na manutenção do ambiente limpo.',
            features: ['Prevenção de infecções', 'Conservação de equipamentos', 'Manutenção de mobiliários']
        },
        {
            icon: '<i class="fas fa-leaf"></i>',
            title: 'Jardinagem',
            description: 'Serviço de paisagismo e manutenção de áreas verdes executado por profissional formado.',
            features: ['Paisagismo profissional', 'Supervisão de um Engenheiro Agrônomo', 'Planejamento técnico']
        },
        {
            icon: '<i class="fas fa-video"></i>',
            title: 'Monitoramento 24h',
            description: 'Sistema de monitoramento contínuo para garantir a segurança do seu patrimônio.',
            features: ['Câmeras de segurança', 'Central de monitoramento', 'Resposta rápida']
        },
        {
            icon: '<i class="fas fa-fire-extinguisher"></i>',
            title: 'Bombeiro Civil',
            description: 'Profissional treinado e capacitado para atuar na prevenção e combate a incêndios.',
            features: ['Prevenção de incêndios', 'Combate a emergências', 'Segurança patrimonial']
        }
    ];
    
    // Renderizar serviços
    const servicesGrid = document.querySelector('.services-grid');
    
    servicesData.forEach(service => {
        const featuresList = service.features.map(feature => `<li>${feature}</li>`).join('');
        
        servicesGrid.innerHTML += `
            <div class="service-card">
                <div class="service-icon">${service.icon}</div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul class="service-features">${featuresList}</ul>
            </div>
        `;
    });
    
    // Dados dos depoimentos
    const testimonialsData = [
        {
            quote: "A Stone Zeladoria transformou nossa fazenda. Excelente trabalho de zeladoria e paisagismo. Equipe muito profissional e dedicada.",
            author: "Fazenda São Sebastião",
            role: "Cliente Satisfeito"
        },
        {
            quote: "O Haras JRA está extremamente satisfeito com os serviços de zeladoria e paisagismo da Stone Zeladoria. Profissionalismo e atenção aos detalhes que fazem a diferença!",
            author: "Haras JRA",
            role: "Cliente Satisfeito"
        },
        {
            quote: "Serviços de alta qualidade! A manutenção das nossas áreas verdes ficou impecável. Recomendamos a Stone Zeladoria.",
            author: "Fazenda Dengosa",
            role: "Cliente Satisfeito"
        },
        {
            quote: "A equipe da Stone Zeladoria é extremamente competente. Nossas instalações estão sempre impecáveis e seguras.",
            author: "Fazenda Roseira",
            role: "Cliente Satisfeito"
        },
        {
            quote: "Profissionalismo e dedicação definem a Stone Zeladoria. A segurança e a limpeza do nosso condomínio melhoraram significativamente.",
            author: "Fazenda Rio Pardo",
            role: "Cliente Satisfeito"
        },
        {
            quote: "A zeladoria do Edifício HADOCK Lobo está em ótimas mãos. A Stone Zeladoria superou nossas expectativas em todos os aspectos.",
            author: "Edifício HADOCK Lobo",
            role: "Cliente Satisfeito"
        }
    ];
    
    // Renderizar depoimentos
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    
    testimonialsData.forEach(testimonial => {
        testimonialsGrid.innerHTML += `
            <div class="testimonial-card">
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <p>"${testimonial.quote}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    // Formulário de contato
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            // Simular envio
            setTimeout(() => {
                // Para envio real, descomente a linha abaixo
                // this.submit();
                
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animar elementos ao rolar
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .stat, .testimonial-card');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementPosition < windowHeight - elementVisible) {
                element.classList.add('fade-in-up');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
});