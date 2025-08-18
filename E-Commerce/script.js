// Product Data
const products = [
    // Sneakers - Adidas
    { id: 1, name: "Adidas Ultraboost", price: 180, category: "sneakers", brand: "Adidas", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", rating: 4.8, stock: 15, badge: "Premium" },
    { id: 2, name: "Adidas NMD R1", price: 130, category: "sneakers", brand: "Adidas", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400", rating: 4.6, stock: 20, badge: "New" },
    { id: 3, name: "Adidas Superstar", price: 90, category: "sneakers", brand: "Adidas", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400", rating: 4.5, stock: 30, badge: "Classic" },
    { id: 4, name: "Adidas Stan Smith", price: 85, category: "sneakers", brand: "Adidas", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400", rating: 4.4, stock: 25, badge: "Best Seller" },
    { id: 5, name: "Adidas Samba", price: 100, category: "sneakers", brand: "Adidas", image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=400", rating: 4.7, stock: 18, badge: "Limited" },
    { id: 6, name: "Adidas Gazelle", price: 95, category: "sneakers", brand: "Adidas", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400", rating: 4.5, stock: 22, badge: "Trending" },
    
    // Sneakers - Nike
    { id: 7, name: "Nike Air Force 1", price: 110, category: "sneakers", brand: "Nike", image: "https://images.unsplash.com/photo-1543508282-6c1f427f732f?w=400", rating: 4.9, stock: 40, badge: "Iconic" },
    { id: 8, name: "Nike Air Max 90", price: 150, category: "sneakers", brand: "Nike", image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400", rating: 4.7, stock: 35, badge: "Premium" },
    { id: 9, name: "Nike Dunk Low", price: 120, category: "sneakers", brand: "Nike", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400", rating: 4.8, stock: 28, badge: "Hot" },
    { id: 10, name: "Nike Blazer Mid", price: 105, category: "sneakers", brand: "Nike", image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400", rating: 4.6, stock: 32, badge: "Vintage" },
    
    // Mobiles - Apple
    { id: 11, name: "iPhone 15 Pro", price: 999, category: "mobiles", brand: "Apple", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", rating: 4.9, stock: 50, badge: "Latest" },
    { id: 12, name: "iPhone 15", price: 799, category: "mobiles", brand: "Apple", image: "https://images.unsplash.com/photo-1592286618771-82a8ae5d928a?w=400", rating: 4.8, stock: 45, badge: "New" },
    { id: 13, name: "iPhone 14 Pro", price: 899, category: "mobiles", brand: "Apple", image: "https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=400", rating: 4.7, stock: 30, badge: "Premium" },
    { id: 14, name: "iPhone 14", price: 699, category: "mobiles", brand: "Apple", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400", rating: 4.6, stock: 35, badge: "Popular" },
    
    // Mobiles - Samsung
    { id: 15, name: "Samsung Galaxy S24", price: 899, category: "mobiles", brand: "Samsung", image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", rating: 4.8, stock: 40, badge: "Flagship" },
    { id: 16, name: "Samsung Galaxy S24 Ultra", price: 1199, category: "mobiles", brand: "Samsung", image: "https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=400", rating: 4.9, stock: 25, badge: "Premium" },
    { id: 17, name: "Samsung Galaxy Z Fold 5", price: 1799, category: "mobiles", brand: "Samsung", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400", rating: 4.7, stock: 15, badge: "Innovative" },
    
    // Furniture
    { id: 18, name: "Modern Sofa", price: 1299, category: "furniture", brand: "IKEA", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", rating: 4.6, stock: 10, badge: "Luxury" },
    { id: 19, name: "Office Desk", price: 599, category: "furniture", brand: "Herman Miller", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400", rating: 4.7, stock: 12, badge: "Ergonomic" },
    { id: 20, name: "Dining Table", price: 899, category: "furniture", brand: "West Elm", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=400", rating: 4.5, stock: 8, badge: "Modern" },
    { id: 21, name: "Bookshelf", price: 349, category: "furniture", brand: "CB2", image: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=400", rating: 4.4, stock: 20, badge: "Minimalist" },
    { id: 22, name: "Coffee Table", price: 449, category: "furniture", brand: "Article", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400", rating: 4.6, stock: 15, badge: "Contemporary" }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = 'all';
let currentSort = 'default';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const searchInput = document.getElementById('searchInput');
const sortSelect = document.getElementById('sortSelect');
const categoryCards = document.querySelectorAll('.category-card');
const themeToggle = document.getElementById('themeToggle');
const overlay = document.getElementById('overlay');
const scrollToTopBtn = document.getElementById('scrollToTop');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderProducts();
    updateCartDisplay();
    initializeCountdown();
    initializeAnimations();
    initializeScrollEffects();
    initializeEventListeners();
});

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    showToast('Theme changed!', 'success');
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Product Rendering
function renderProducts() {
    let filteredProducts = filterProducts();
    filteredProducts = sortProducts(filteredProducts);
    
    productsGrid.innerHTML = '';
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
    
    // Add scroll animations
    observeElements();
}

function filterProducts() {
    let filtered = products;
    
    if (currentCategory !== 'all') {
        filtered = filtered.filter(p => p.category === currentCategory);
    }
    
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) ||
            p.brand.toLowerCase().includes(searchTerm)
        );
    }
    
    return filtered;
}

function sortProducts(products) {
    switch (currentSort) {
        case 'price-low':
            return [...products].sort((a, b) => a.price - b.price);
        case 'price-high':
            return [...products].sort((a, b) => b.price - a.price);
        case 'name':
            return [...products].sort((a, b) => a.name.localeCompare(b.name));
        default:
            return products;
    }
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card animate-on-scroll';
    card.innerHTML = `
        <div class="product-image-container">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            ${product.badge && `<span class="product-badge">${product.badge}</span>`}
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <div class="product-rating">
                <div class="stars">
                    ${generateStars(product.rating)}
                </div>
                <span>(${product.rating})</span>
            </div>
            <p class="product-stock">${product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                ${product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    `;
    
    // Add hover effects
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateX(5deg) rotateY(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
    
    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star star"></i>';
    }
    
    return stars;
}

// Cart Management
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock === 0) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        if (existingItem.quantity < product.stock) {
            existingItem.quantity += 1;
        } else {
            showToast('Maximum stock reached!', 'error');
            return;
        }
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartDisplay();
    showAddToCartAnimation(product);
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    showToast('Item removed from cart', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    const newQuantity = item.quantity + change;
    const product = products.find(p => p.id === productId);
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
    } else if (newQuantity <= product.stock) {
        item.quantity = newQuantity;
        saveCart();
        updateCartDisplay();
    } else {
        showToast('Maximum stock reached!', 'error');
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cartItems) {
        cartItems.innerHTML = '';
        
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty</p>';
            cartTotal.textContent = '0.00';
            return;
        }
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.name}</h4>
                    <p class="cart-item-price">$${item.price}</p>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = total.toFixed(2);
    }
}

// Cart UI
function openCart() {
    cartSidebar.classList.add('open');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    closeCart();
    openCheckout();
}

function openCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.add('show');
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

function handleCheckoutSubmit(e) {
    e.preventDefault();
    
    // Simulate order processing
    const submitBtn = e.target.querySelector('.submit-order-btn');
    submitBtn.innerHTML = '<span class="loading"></span> Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        closeCheckout();
        cart = [];
        saveCart();
        updateCartDisplay();
        showConfirmation();
        createConfetti();
    }, 2000);
}

function showConfirmation() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.classList.add('show');
    overlay.classList.add('show');
    
    setTimeout(() => {
        closeConfirmation();
    }, 5000);
}

function closeConfirmation() {
    const confirmationModal = document.getElementById('confirmationModal');
    confirmationModal.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Animations
function showAddToCartAnimation(product) {
    const cartIcon = document.querySelector('.cart-icon');
    const productCard = document.querySelector(`[onclick="addToCart(${product.id})"]`).closest('.product-card');
    
    const productImage = productCard.querySelector('.product-image');
    const flyingImage = productImage.cloneNode(true);
    
    flyingImage.style.position = 'fixed';
    flyingImage.style.zIndex = '9999';
    flyingImage.style.width = '50px';
    flyingImage.style.height = '50px';
    flyingImage.style.borderRadius = '50%';
    flyingImage.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    const startRect = productImage.getBoundingClientRect();
    const endRect = cartIcon.getBoundingClientRect();
    
    flyingImage.style.left = startRect.left + 'px';
    flyingImage.style.top = startRect.top + 'px';
    
    document.body.appendChild(flyingImage);
    
    setTimeout(() => {
        flyingImage.style.left = endRect.left + 'px';
        flyingImage.style.top = endRect.top + 'px';
        flyingImage.style.width = '20px';
        flyingImage.style.height = '20px';
        flyingImage.style.opacity = '0';
    }, 100);
    
    setTimeout(() => {
        flyingImage.remove();
        cartIcon.classList.add('bounce');
        setTimeout(() => cartIcon.classList.remove('bounce'), 300);
    }, 800);
}

function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Countdown Timer
function initializeCountdown() {
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 3);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate.getTime() - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.querySelector('.countdown-container').innerHTML = '<h3>Sale Ended!</h3>';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function changeSlide(direction) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function autoSlide() {
    changeSlide(1);
}

setInterval(autoSlide, 5000);

// Scroll Effects
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax effect for hero
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
        
        // Show/hide scroll to top
        if (scrolled > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
}

// Intersection Observer for animations
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth scrolling
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToCategories() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Event Listeners
function initializeEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Cart
    document.querySelector('.cart-icon').addEventListener('click', openCart);
    document.querySelector('.close-cart').addEventListener('click', closeCart);
    
    // Search
    searchInput.addEventListener('input', renderProducts);
    
    // Sort
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProducts();
    });
    
    // Categories
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            currentCategory = card.dataset.category;
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            renderProducts();
            scrollToProducts();
        });
    });
    
    // Checkout
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckoutSubmit);
    
    // Overlay
    overlay.addEventListener('click', () => {
        closeCart();
        closeCheckout();
        closeConfirmation();
    });
    
    // Scroll to top
    scrollToTopBtn.addEventListener('click', scrollToTop);
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCart();
            closeCheckout();
            closeConfirmation();
        }
    });
}

// Initialize animations
function initializeAnimations() {
    // Floating particles
    createFloatingParticles();
    
    // Add hover effects to buttons
    document.querySelectorAll('.btn-primary, .btn-secondary').forEach(btn => {
        btn.addEventListener('mouseenter', (e) => {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            btn.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

function createFloatingParticles() {
    const particlesContainer = document.querySelector('.floating-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
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

// Performance optimization
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

// Apply debounce to search
const debouncedSearch = debounce(renderProducts, 300);
searchInput.addEventListener('input', debouncedSearch);

// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Add CSS for mobile menu
const mobileMenuStyle = document.createElement('style');
mobileMenuStyle.textContent = `
    @media (max-width: 768px) {
        .nav-links.show {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            padding: 1rem;
            border-bottom: 1px solid var(--glass-border);
        }
    }
`;
document.head.appendChild(mobileMenuStyle);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Premium E-commerce initialized successfully!');
});
