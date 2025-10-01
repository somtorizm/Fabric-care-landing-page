// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// TESTIMONIAL SLIDER
// ============================================
const testimonialSlider = () => {
    const track = document.querySelector('.testimonial-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.slider-dot');

    function updateSlider() {
        // Update slides
        slides.forEach((slide, index) => {
            slide.classList.remove('active');
            if (index === currentIndex) {
                slide.classList.add('active');
            }
        });

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });

        // Move track
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-play slider
    let autoplayInterval = setInterval(nextSlide, 6000);

    // Pause on hover
    track.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });

    track.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(nextSlide, 6000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
};

// ============================================
// STATS COUNTER ANIMATION
// ============================================
const animateStats = () => {
    const stats = document.querySelectorAll('.stat-number');

    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;

                const updateCount = () => {
                    current += increment;
                    if (current < target) {
                        entry.target.textContent = Math.floor(current);
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target;
                    }
                };

                updateCount();
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
};

// Initialize testimonial slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    testimonialSlider();
    animateStats();
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQ items
        faqItems.forEach(faq => {
            faq.classList.remove('active');
        });

        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
    bookingForm.addEventListener('submit', async (e) => {
        // Get form data for validation
        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!validateBookingForm(data)) {
            e.preventDefault();
            return;
        }

        // Show loading state
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Note: Form will submit to Formspree automatically
        // The loading state will show briefly before redirect
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        // Get form data for validation
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!validateContactForm(data)) {
            e.preventDefault();
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Note: Form will submit to Formspree automatically
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1000);
    });
}

// Form Validation Functions
function validateBookingForm(data) {
    if (!data.name || data.name.trim().length < 2) {
        showNotification('Please enter a valid name', 'error');
        return false;
    }

    if (!data.phone || !isValidPhone(data.phone)) {
        showNotification('Please enter a valid phone number', 'error');
        return false;
    }

    if (!data.address || data.address.trim().length < 5) {
        showNotification('Please enter a valid address', 'error');
        return false;
    }

    if (!data.service) {
        showNotification('Please select a service', 'error');
        return false;
    }

    if (!data.datetime) {
        showNotification('Please select a date and time', 'error');
        return false;
    }

    // Check if datetime is in the future
    const selectedDate = new Date(data.datetime);
    const now = new Date();

    if (selectedDate <= now) {
        showNotification('Please select a future date and time', 'error');
        return false;
    }

    if (!data.payment) {
        showNotification('Please select a payment method', 'error');
        return false;
    }

    return true;
}

function validateContactForm(data) {
    if (!data.name || data.name.trim().length < 2) {
        showNotification('Please enter a valid name', 'error');
        return false;
    }

    if (!data.email || !isValidEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }

    if (!data.message || data.message.trim().length < 10) {
        showNotification('Please enter a message (at least 10 characters)', 'error');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Remove spaces, dashes, and parentheses
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    // Check if it's a valid Nigerian phone number
    return /^(\+?234|0)[7-9][0-1]\d{8}$/.test(cleanPhone) || /^\d{10,14}$/.test(cleanPhone);
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    const styles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            background-color: white;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            z-index: 9999;
            animation: slideIn 0.3s ease;
            max-width: 400px;
            font-weight: 500;
        }

        .notification-success {
            border-left: 4px solid #10B981;
            color: #065F46;
        }

        .notification-error {
            border-left: 4px solid #EF4444;
            color: #991B1B;
        }

        .notification-info {
            border-left: 4px solid #3B82F6;
            color: #1E40AF;
        }

        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }

        @media (max-width: 768px) {
            .notification {
                right: 10px;
                left: 10px;
                max-width: calc(100% - 20px);
            }
        }
    `;

    // Add styles to document if not already present
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = styles;
        document.head.appendChild(styleSheet);
    }

    // Add to document
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Simulate API Call (replace with actual API integration)
function simulateAPICall(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                console.log('Form submitted:', data);
                resolve({ success: true });
            } else {
                reject(new Error('Submission failed'));
            }
        }, 1500);
    });
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.feature-card, .service-card, .pricing-card, .review-card, .faq-item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Set minimum datetime for booking form
const datetimeInput = document.getElementById('datetime');
if (datetimeInput) {
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    datetimeInput.min = now.toISOString().slice(0, 16);
}

// Service Price Calculator (Optional Enhancement)
const serviceSelect = document.getElementById('service');
if (serviceSelect) {
    const prices = {
        'self-service': '₦800 per load',
        'drop-off': '₦1,200 per 5kg',
        'pickup-delivery': '₦1,500 per 5kg',
        'dry-cleaning': 'From ₦2,000 per item'
    };

    serviceSelect.addEventListener('change', (e) => {
        const selectedService = e.target.value;
        if (selectedService && prices[selectedService]) {
            showNotification(`Selected service: ${prices[selectedService]}`, 'info');
        }
    });
}

// Add active state to current nav link based on scroll position
function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - navbar.offsetHeight - 100) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

console.log('Fabricare Laundromat - Landing Page Loaded Successfully!');