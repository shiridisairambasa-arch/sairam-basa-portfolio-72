// Smooth scrolling navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navHeight = document.getElementById('navbar').offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add smooth reveal animations for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-header, .about-content, .experience-card, .project-card, .skill-card, .cert-card');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        }
    }
}

// Add CSS for reveal animations
const style = document.createElement('style');
style.textContent = `
    .section-header,
    .about-content,
    .experience-card,
    .project-card,
    .skill-card,
    .cert-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .section-header.active,
    .about-content.active,
    .experience-card.active,
    .project-card.active,
    .skill-card.active,
    .cert-card.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    /* Stagger animations for card grids */
    .experience-card:nth-child(1) { transition-delay: 0.1s; }
    .experience-card:nth-child(2) { transition-delay: 0.2s; }
    
    .project-card:nth-child(1) { transition-delay: 0.1s; }
    .project-card:nth-child(2) { transition-delay: 0.2s; }
    
    .skill-card:nth-child(1) { transition-delay: 0.1s; }
    .skill-card:nth-child(2) { transition-delay: 0.2s; }
    .skill-card:nth-child(3) { transition-delay: 0.3s; }
    .skill-card:nth-child(4) { transition-delay: 0.1s; }
    .skill-card:nth-child(5) { transition-delay: 0.2s; }
    
    .cert-card:nth-child(1) { transition-delay: 0.1s; }
    .cert-card:nth-child(2) { transition-delay: 0.2s; }
    .cert-card:nth-child(3) { transition-delay: 0.3s; }
    .cert-card:nth-child(4) { transition-delay: 0.1s; }
    .cert-card:nth-child(5) { transition-delay: 0.2s; }
    .cert-card:nth-child(6) { transition-delay: 0.3s; }
    .cert-card:nth-child(7) { transition-delay: 0.1s; }
    .cert-card:nth-child(8) { transition-delay: 0.2s; }
`;
document.head.appendChild(style);

// Initialize scroll animations
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Add parallax effect to hero background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-img');
    if (heroBackground) {
        const speed = scrolled * 0.5;
        heroBackground.style.transform = `translateY(${speed}px)`;
    }
});

// Add click handlers for project buttons (placeholder)
document.addEventListener('DOMContentLoaded', function() {
    const projectButtons = document.querySelectorAll('.project-code-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add actual GitHub links here
            alert('Project repository will be available soon!');
        });
    });
});

// Add mobile menu toggle (for future enhancement)
function toggleMobileMenu() {
    // Implementation for mobile menu toggle
    // This can be enhanced later if needed
}

// Lazy loading for images
function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if supported
if ('IntersectionObserver' in window) {
    document.addEventListener('DOMContentLoaded', lazyLoad);
}

// Add form validation for contact forms (if added later)
function validateForm(form) {
    // Form validation logic
    return true;
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedReveal = debounce(revealOnScroll, 10);
window.removeEventListener('scroll', revealOnScroll);
window.addEventListener('scroll', debouncedReveal);

// Add smooth transitions for all interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    document.body.style.opacity = '0';
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    });
});

// Console greeting for developers
console.log('%c👋 Hello Developer!', 'color: #065fd3; font-size: 20px; font-weight: bold;');
console.log('%cInterested in the code? This portfolio showcases AI/ML engineering skills!', 'color: #666; font-size: 14px;');
console.log('%cContact: basasai77167@gmail.com', 'color: #065fd3; font-size: 14px;');