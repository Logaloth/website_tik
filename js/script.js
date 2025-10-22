// ========================================
// MODAL MANAGEMENT FUNCTIONS
// ========================================

let lastFocusedElement = null;

/**
 * Membuka modal berdasarkan tipe (login/register)
 * @param {string} type - Tipe modal: 'login' atau 'register'
 */
function openModal(type) {
    const modal = document.getElementById(type + 'Modal');
    lastFocusedElement = document.activeElement;
    modal.classList.add('active');
    const focusable = modal.querySelector('input, button, [href], [tabindex]:not([tabindex="-1"])');
    if (focusable) focusable.focus();
}

/**
 * Menutup modal berdasarkan tipe
 * @param {string} type - Tipe modal: 'login' atau 'register'
 */
function closeModal(type) {
    const modal = document.getElementById(type + 'Modal');
    modal.classList.remove('active');
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
        lastFocusedElement.focus();
    }
}

/**
 * Berpindah dari satu modal ke modal lain
 * @param {string} from - Modal yang akan ditutup
 * @param {string} to - Modal yang akan dibuka
 */
function switchModal(from, to) {
    closeModal(from);
    openModal(to);
}

// ========================================
// FORM HANDLERS
// ========================================

/**
 * Handler untuk form login
 * @param {Event} e - Event object dari form submission
 */
function handleLogin(e) {
    e.preventDefault();
    
    // Ambil nilai input
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Validasi email format
    if (!validateEmail(email)) {
        document.getElementById('loginEmail').setAttribute('aria-invalid', 'true');
        showNotification('Format email tidak valid!', false);
        return;
    } else {
        document.getElementById('loginEmail').removeAttribute('aria-invalid');
    }

    // Validasi password minimal 6 karakter
    if (password.length < 6) {
        document.getElementById('loginPassword').setAttribute('aria-invalid', 'true');
        showNotification('Password minimal 6 karakter!', false);
        return;
    }
    document.getElementById('loginPassword').removeAttribute('aria-invalid');

    // Simulasi login berhasil
    showNotification('Login berhasil! Selamat datang ');
    closeModal('login');
    
    // Reset form
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}

/**
 * Handler untuk form register
 * @param {Event} e - Event object dari form submission
 */
function handleRegister(e) {
    e.preventDefault();
    
    // Ambil nilai input
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Validasi email format
    if (!validateEmail(email)) {
        document.getElementById('regEmail').setAttribute('aria-invalid', 'true');
        showNotification('Format email tidak valid!', false);
        return;
    } else {
        document.getElementById('regEmail').removeAttribute('aria-invalid');
    }

    // Validasi password minimal 8 karakter
    if (password.length < 8) {
        document.getElementById('regPassword').setAttribute('aria-invalid', 'true');
        showNotification('Password minimal 8 karakter!', false);
        return;
    }
    document.getElementById('regPassword').removeAttribute('aria-invalid');

    // Simulasi pembelian tiket berhasil
    const ticketType = document.getElementById('ticketType').value;
    const ticketName = ticketType === 'regular' ? 'Regular' : ticketType === 'vip' ? 'VIP' : 'VVIP';
    showNotification(`Tiket ${ticketName} berhasil dibeli! Check email untuk konfirmasi 🎸`);
    closeModal('register');
    
    // Reset form
    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
    document.getElementById('ticketType').value = '';
}

// ========================================
// NOTIFICATION SYSTEM
// ========================================

/**
 * Menampilkan notifikasi ke user
 * @param {string} message - Pesan yang akan ditampilkan
 * @param {boolean} success - Status notifikasi (true=sukses, false=error)
 */
function showNotification(message, success = true) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    
    // Set warna berdasarkan status
    notification.style.background = success 
        ? 'linear-gradient(135deg, #10b981, #059669)' 
        : 'linear-gradient(135deg, #ef4444, #dc2626)';
    
    // Tampilkan notifikasi
    notification.classList.add('show');

    // Auto-hide setelah 3 detik
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// ========================================
// SMOOTH SCROLL FUNCTION
// ========================================

/**
 * Smooth scroll ke section tertentu
 * @param {string} id - ID section yang dituju
 */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// ========================================
// EVENT LISTENERS
// ========================================

/**
 * Close modal ketika klik di luar modal content
 */
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
}

/**
 * Navbar shrink effect saat scroll
 */
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '0.5rem 5%';
    } else {
        nav.style.padding = '1rem 5%';
    }
});

// ========================================
// INTERSECTION OBSERVER (Animate on Scroll)
// ========================================

/**
 * Setup Intersection Observer untuk animasi scroll
 */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tambahkan animasi fade-in saat element terlihat
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// ========================================
// INITIALIZATION (DOMContentLoaded)
// ========================================

/**
 * Inisialisasi semua fungsi setelah DOM loaded
 */
document.addEventListener('DOMContentLoaded', () => {
    // Setup animasi untuk feature cards dan speaker cards
    const animatedElements = document.querySelectorAll('.feature-card, .speaker-card');
    
    animatedElements.forEach(el => {
        // Set initial state untuk animasi
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        
        // Observe element untuk trigger animasi
        observer.observe(el);
    });

    // Log untuk debugging
    console.log('🎸 Rebellion Rose Concert 2025 - Website Loaded Successfully! 🎸');
    console.log('🎤 Total animated elements:', animatedElements.length);
    console.log('📍 Location: Polinema Kediri');
    console.log('📅 Date: 25 Desember 2025');

    // Data attribute handlers (ganti inline onclick)
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', () => openModal(btn.getAttribute('data-open-modal')));
    });

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close-modal')));
    });

    document.querySelectorAll('[data-switch-from][data-switch-to]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const from = link.getAttribute('data-switch-from');
            const to = link.getAttribute('data-switch-to');
            switchModal(from, to);
        });
    });

    document.querySelectorAll('[data-scroll-to]').forEach(btn => {
        btn.addEventListener('click', () => scrollToSection(btn.getAttribute('data-scroll-to')));
    });
});

// ========================================
// UTILITY FUNCTIONS
// ========================================

/**
 * Format tanggal ke format Indonesia
 * @param {Date} date - Object Date
 * @returns {string} Tanggal terformat
 */
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('id-ID', options);
}

/**
 * Validasi format email
 * @param {string} email - Email yang akan divalidasi
 * @returns {boolean} Valid atau tidak
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Generate random ID untuk keperluan tertentu
 * @returns {string} Random ID
 */
function generateId() {
    return 'id_' + Math.random().toString(36).substr(2, 9);
}

// ========================================
// MOBILE MENU
// ========================================

/**
 * Toggle mobile menu
 */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

// Open mobile menu
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
}

// Close mobile menu when clicking close button
if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking overlay
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMobileMenu);
}

// Close mobile menu when clicking nav link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeMobileMenu();
        // Smooth scroll to section
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

/**
 * Close mobile menu function
 */
function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close mobile menu with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================

/**
 * Close modal dengan tombol Escape
 */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Tutup semua modal yang aktif
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => {
            modal.classList.remove('active');
        });
    }
});

// ========================================
// FORM VALIDATION HELPERS
// ========================================

/**
 * Real-time validation untuk password strength
 */
const regPasswordInput = document.getElementById('regPassword');
if (regPasswordInput) {
    regPasswordInput.addEventListener('input', (e) => {
        const password = e.target.value;
        
        // Cek kekuatan password
        if (password.length < 8) {
            e.target.style.borderColor = '#ef4444'; // Red
        } else if (password.length < 12) {
            e.target.style.borderColor = '#f59e0b'; // Orange
        } else {
            e.target.style.borderColor = '#10b981'; // Green
        }
    });
}

// ========================================
// COUNTDOWN TIMER (Optional Feature)
// ========================================

/**
 * Countdown timer untuk event
 * Uncomment untuk mengaktifkan
 */
/*
function startCountdown() {
    const eventDate = new Date('2025-11-15T09:00:00');
    
    setInterval(() => {
        const now = new Date();
        const diff = eventDate - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
            
            console.log(`Event dimulai dalam: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }
    }, 1000);
}

// Jalankan countdown
// startCountdown();
*/

// ========================================
// ANALYTICS & TRACKING (Optional)
// ========================================

/**
 * Track button clicks untuk analytics
 */
function trackEvent(eventName, eventData) {
    console.log('Event tracked:', eventName, eventData);
    // Implementasi tracking (Google Analytics, dll)
}

// Track registrasi button clicks
const registerButtons = document.querySelectorAll('[data-open-modal="register"]');

registerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('register_button_clicked', {
            location: btn.textContent.trim()
        });
    });
});

// ========================================
// ERROR HANDLING
// ========================================

/**
 * Global error handler
 */
window.addEventListener('error', (e) => {
    console.error('Error occurred:', e.message);
    // Tampilkan notifikasi error ke user jika perlu
    // showNotification('Terjadi kesalahan, silakan refresh halaman', false);
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// ========================================
// PERFORMANCE OPTIMIZATION
// ========================================

/**
 * Lazy loading untuk images (jika ada)
 */
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ========================================
// LOCAL STORAGE (Optional Feature)
// ========================================

/**
 * Save user preferences ke localStorage
 */
function saveUserPreferences(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.warn('LocalStorage not available:', e);
    }
}

/**
 * Load user preferences dari localStorage
 */
function loadUserPreferences(key) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    } catch (e) {
        console.warn('LocalStorage not available:', e);
        return null;
    }
}

// ========================================
// EXPORT FUNCTIONS (untuk module)
// ========================================

// Jika menggunakan ES6 modules, uncomment dibawah ini:
/*
export {
    openModal,
    closeModal,
    switchModal,
    handleLogin,
    handleRegister,
    showNotification,
    scrollToSection,
    validateEmail,
    formatDate
};
*/
