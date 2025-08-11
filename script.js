// Tab functionality
function showTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to selected tab button
    const selectedButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
    
    // Scroll to content section
    const contentSection = document.querySelector('.content');
    if (contentSection) {
        contentSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// FAQ functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    const allFaqItems = document.querySelectorAll('.faq-item');
    allFaqItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // If this item wasn't active, open it
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Contact functionality
function contactUs(method) {
    switch(method) {
        case 'email':
        case 'simple':
            window.location.href = 'mailto:partnerships@cadance.music?subject=Artist Partnership Inquiry&body=Hello,%0D%0A%0D%0AI am interested in partnering with Cadance for artwork usage in your app store marketing materials.%0D%0A%0D%0APlease find my details below:%0D%0A%0D%0AArtist/Band Name: %0D%0AGenre: %0D%0AWebsite: %0D%0AiTunes/Spotify Link: %0D%0A%0D%0AThank you for your time.%0D%0A%0D%0ABest regards';
            break;
        case 'phone':
            alert('Please message us at +61 420 746 675 or email partnerships@cadance.music to schedule a call.');
            break;
        case 'location':
            alert('We are based in Sydney Australia. Please contact us via email for specific meeting arrangements.');
            break;
        case 'support':
            window.location.href = 'mailto:support@cadance.music?subject=Support Inquiry';
            break;
        default:
            contactUs('email');
    }
}

// Download agreement functionality
function downloadAgreement() {
    // Create a simple partnership agreement document
    const agreementContent = `
CADANCE ARTIST PARTNERSHIP AGREEMENT

This agreement outlines the terms for using artist artwork in Cadance app marketing materials.

TERMS:
1. Limited usage rights for app store marketing only
2. No modification of original artwork
3. Full attribution and credit in all uses
4. Right to withdraw permission with 30 days notice
5. No distribution of actual music files

USAGE:
- App store screenshots
- Marketing materials
- Promotional images
- Website demonstrations

ARTIST BENEFITS:
- Exposure to dance teacher community
- Professional attribution
- Direct links to purchase music where possible
- International reach

CONTACT:
partnerships@cadance.music
+61 420 746 675

For detailed legal terms, please contact us directly.
    `;
    
    // Create and download the file
    const blob = new Blob([agreementContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Cadance_Partnership_Agreement.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Initialize with partnership tab active
    showTab('partnership');
    
    // Add click handlers for contact buttons in header
    const contactBtns = document.querySelectorAll('.contact-btn');
    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => contactUs('email'));
    });
    
    // Add smooth scrolling to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.benefit-card, .testimonial, .contact-method, .legal-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add keyboard navigation for tabs
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' && e.target.classList.contains('tab-btn')) {
        e.preventDefault();
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = tabs.indexOf(e.target);
        let nextIndex;
        
        if (e.shiftKey) {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
        } else {
            nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
        }
        
        tabs[nextIndex].focus();
    }
    
    if (e.key === 'Enter' && e.target.classList.contains('tab-btn')) {
        const tabName = e.target.getAttribute('data-tab');
        if (tabName) {
            showTab(tabName);
        }
    }
});

// Add form validation if needed
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading states for buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Loading...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Add click tracking for analytics (placeholder)
function trackClick(action, label) {
    // Placeholder for analytics tracking
    console.log(`Action: ${action}, Label: ${label}`);
    
    // Example: Google Analytics tracking
    // gtag('event', action, {
    //     event_category: 'Partnership',
    //     event_label: label
    // });
}

// Add event listeners for tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track tab clicks
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            trackClick('tab_click', tabName);
        });
    });
    
    // Track button clicks
    const primaryButtons = document.querySelectorAll('.btn-primary');
    primaryButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            trackClick('button_click', this.textContent.trim());
        });
    });
    
    // Track FAQ interactions
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const questionText = this.querySelector('h4').textContent;
            trackClick('faq_click', questionText);
        });
    });
});

// Add responsive menu functionality (if needed for mobile)
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile-open');
}

// Add scroll-to-top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll-to-top button when scrolling down
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Add copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        const message = document.createElement('div');
        message.textContent = 'Copied to clipboard!';
        message.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 2rem;
            border-radius: 8px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .mobile-open {
        /* Mobile menu styles if needed */
    }
    
    .scroll-to-top {
        position: fixed;
        bottom: calc(20px + env(safe-area-inset-bottom));
        right: calc(20px + env(safe-area-inset-right));
        background: var(--brand);
        color: #00110f;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        display: none;
        z-index: 1000;
        transition: all 0.3s ease;
    }
    
    .scroll-to-top:hover {
        background: #49c4b9;
        transform: translateY(-2px);
    }
`;
document.head.appendChild(style);

// Add scroll-to-top button to page
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '↑';
    scrollButton.onclick = scrollToTop;
    scrollButton.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollButton);
});

