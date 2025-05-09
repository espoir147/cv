document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle nav
        navLinks.classList.toggle('active');
        
        // Burger animation
        burger.classList.toggle('toggle');
    });

    // Close mobile menu when clicking a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll reveal animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            
            if (itemTop < triggerBottom) {
                item.classList.add('visible');
            }
        });
    }
    
    // Initial check
    checkScroll();
    
    // Check on scroll
    window.addEventListener('scroll', checkScroll);

    // Add animation to skill items on hover
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.skill-icon');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.skill-icon');
            icon.style.transform = 'rotate(0) scale(1)';
        });
    });

    // Add animation to sections when they come into view
    const sections = document.querySelectorAll('.section');
    
    function animateSections() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check
    animateSections();
    
    // Check on scroll
    window.addEventListener('scroll', animateSections);
});