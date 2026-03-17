        // Sample Products Data (30+ products)
        const products = [
            // Necklaces
            { id: 1, name: 'Elegant Gold Chain Necklace', category: 'necklaces', price: 899, image: 'https://i.pinimg.com/1200x/b7/98/6c/b7986cb5b5640be907ca3e4b1b5f9dee.jpg', metal: 'Gold', description: 'Timeless 18K gold chain necklace, perfect for everyday elegance.' },
            { id: 2, name: 'Diamond Pendant Necklace', category: 'necklaces', price: 1299, image: 'https://i.pinimg.com/1200x/a8/dc/7a/a8dc7a614f3c02d237d9e7d79d513d9e.jpg', metal: 'Gold', description: 'Stunning diamond pendant on 14K gold chain.' },
            { id: 3, name: 'Silver Layered Necklace Set', category: 'necklaces', price: 349, image: 'https://i.pinimg.com/1200x/fe/da/a5/fedaa5e043a4a814cbde9ac163dbebbd.jpg', metal: 'Silver', description: 'Three-piece layered silver necklace set.' },
            { id: 4, name: 'Pearl Choker Necklace', category: 'necklaces', price: 599, image: 'https://i.pinimg.com/736x/99/1f/2c/991f2c4a1b3c57b3248245ba7eb178eb.jpg', metal: 'Gold', description: 'Classic freshwater pearl choker with gold clasp.' },
            { id: 5, name: 'Rose Gold Bar Necklace', category: 'necklaces', price: 449, image: 'https://i.pinimg.com/1200x/ab/36/08/ab360888f6e56f1054c55eebffde7cbd.jpg', metal: 'Rose Gold', description: 'Minimalist rose gold bar necklace.' },
            { id: 6, name: 'Vintage Locket Necklace', category: 'necklaces', price: 679, image: 'https://i.pinimg.com/1200x/41/dd/4d/41dd4dd52b9299534b7f5f02cd5b0715.jpg', metal: 'Gold', description: 'Antique-style gold locket necklace.' },
            { id: 7, name: 'Gemstone Statement Necklace', category: 'necklaces', price: 1599, image: 'https://i.pinimg.com/736x/36/dc/71/36dc71af1ca7f5c4a8fdfe73bbb688b1.jpg', metal: 'Gold', description: 'Bold statement necklace with mixed gemstones.' },
            { id: 8, name: 'Infinity Symbol Necklace', category: 'necklaces', price: 329, image: 'https://i.pinimg.com/1200x/a5/f6/d2/a5f6d204746279a2dfe78b97ee1f9f83.jpg', metal: 'Silver', description: 'Delicate infinity symbol necklace in sterling silver.' },

            // Rings
            { id: 9, name: 'Classic Diamond Solitaire Ring', category: 'rings', price: 2499, image: 'https://i.pinimg.com/736x/80/18/e5/8018e5e5ee7989d7d10497361483fd14.jpg', metal: 'Gold', description: '1 carat diamond solitaire in platinum setting.' },
            { id: 10, name: 'Gold Band Ring', category: 'rings', price: 599, image: 'https://i.pinimg.com/1200x/77/45/3a/77453a4d42a7936e4eb7f9342b0e6eb7.jpg', metal: 'Gold', description: 'Timeless 14K gold wedding band.' },
            { id: 11, name: 'Sapphire Halo Ring', category: 'rings', price: 1899, image: 'https://i.pinimg.com/1200x/ab/2f/25/ab2f254769cbeaf9a9fd1b862a50769b.jpg', metal: 'Gold', description: 'Blue sapphire surrounded by diamond halo.' },
            { id: 12, name: 'Stackable Silver Rings Set', category: 'rings', price: 249, image: 'https://i.pinimg.com/736x/65/f2/63/65f2638abcb72aa008aab615d60ba57d.jpg', metal: 'Silver', description: 'Set of three stackable sterling silver rings.' },
            { id: 13, name: 'Emerald Cut Diamond Ring', category: 'rings', price: 3299, image: 'https://i.pinimg.com/1200x/f9/41/ea/f941ea9705d69eab99c51d0281c62be2.jpg', metal: 'Platinum', description: '2 carat emerald cut diamond ring.' },
            { id: 14, name: 'Rose Gold Twist Ring', category: 'rings', price: 429, image: 'https://i.pinimg.com/1200x/3d/2f/d3/3d2fd383c14e7779246cd0b64c9b40ec.jpg', metal: 'Rose Gold', description: 'Modern twisted rose gold band.' },
            { id: 15, name: 'Vintage Ruby Ring', category: 'rings', price: 1549, image: 'https://i.pinimg.com/736x/69/a9/15/69a9157890be5bd8e615e8c10fdacce5.jpg', metal: 'Gold', description: 'Art deco inspired ruby and diamond ring.' },
            { id: 16, name: 'Moonstone Cocktail Ring', category: 'rings', price: 799, image: 'https://i.pinimg.com/736x/fb/eb/bb/fbebbbb05aa536a9925ec1d852cf6cba.jpg', metal: 'Silver', description: 'Statement moonstone ring in sterling silver.' },

            // Earrings
            { id: 17, name: 'Diamond Stud Earrings', category: 'earrings', price: 1799, image: 'https://i.pinimg.com/1200x/b9/2a/a3/b92aa39aac6056f81b9a6681b922ea89.jpg', metal: 'Gold', description: 'Classic 1 carat total weight diamond studs.' },
            { id: 18, name: 'Gold Hoop Earrings', category: 'earrings', price: 399, image: 'https://i.pinimg.com/1200x/aa/59/05/aa59057f200a5e7a308af5ddac011adc.jpg', metal: 'Gold', description: 'Medium-sized 14K gold hoop earrings.' },
            { id: 19, name: 'Pearl Drop Earrings', category: 'earrings', price: 549, image: 'https://i.pinimg.com/1200x/95/69/39/9569391ad152988ca8102aa4e5e95241.jpg', metal: 'Gold', description: 'Freshwater pearl drop earrings with gold hooks.' },
            { id: 20, name: 'Silver Dangle Earrings', category: 'earrings', price: 279, image: 'https://i.pinimg.com/1200x/d9/3f/17/d93f1740544486593d1c153beb53d874.jpg', metal: 'Silver', description: 'Bohemian-style silver dangle earrings.' },
            { id: 21, name: 'Sapphire Stud Earrings', category: 'earrings', price: 899, image: 'https://i.pinimg.com/1200x/df/02/20/df022017c65800cd6b549d020af362f7.jpg', metal: 'Gold', description: 'Blue sapphire studs in white gold.' },
            { id: 22, name: 'Chandelier Earrings', category: 'earrings', price: 1299, image: 'https://i.pinimg.com/1200x/57/2f/a6/572fa68ab87ef6ef2e175e5e36d221b4.jpg', metal: 'Gold', description: 'Statement chandelier earrings with crystals.' },
            { id: 23, name: 'Minimalist Bar Earrings', category: 'earrings', price: 199, image: 'https://i.pinimg.com/736x/48/9d/02/489d0288839e2d47e6f6c21962b62310.jpg', metal: 'Gold', description: 'Sleek gold bar stud earrings.' },
            { id: 24, name: 'Emerald Drop Earrings', category: 'earrings', price: 1549, image: 'https://i.pinimg.com/1200x/ee/8e/f4/ee8ef495449b449a923e175aacc17d20.jpg', metal: 'Gold', description: 'Luxurious emerald and diamond drop earrings.' },

            // Bracelets
            { id: 25, name: 'Gold Tennis Bracelet', category: 'bracelets', price: 2199, image: 'https://i.pinimg.com/1200x/7e/ed/cb/7eedcb5ea9722460afa7aa6eb693fe08.jpg', metal: 'Gold', description: 'Classic diamond tennis bracelet in yellow gold.' },
            { id: 26, name: 'Silver Charm Bracelet', category: 'bracelets', price: 299, image: 'https://i.pinimg.com/1200x/36/35/7b/36357ba983100dfaa579f35ca80289b8.jpg', metal: 'Silver', description: 'Sterling silver charm bracelet with 5 charms.' },
            { id: 27, name: 'Leather Wrap Bracelet', category: 'bracelets', price: 179, image: 'https://i.pinimg.com/736x/bf/e8/d0/bfe8d029a4583959507b410bee4c779f.jpg', metal: 'Silver', description: 'Brown leather wrap bracelet with silver accents.' },
            { id: 28, name: 'Rose Gold Bangle', category: 'bracelets', price: 649, image: 'https://i.pinimg.com/736x/32/3c/e1/323ce1b95fe4809b32789083628ec7ad.jpg', metal: 'Rose Gold', description: 'Polished rose gold bangle bracelet.' },
            { id: 29, name: 'Diamond Link Bracelet', category: 'bracelets', price: 3499, image: 'https://i.pinimg.com/1200x/a2/fd/9a/a2fd9a6d847202e0f13fb11fb08ee608.jpg', metal: 'Platinum', description: 'Platinum link bracelet with diamonds.' },
            { id: 30, name: 'Beaded Stone Bracelet', category: 'bracelets', price: 149, image: 'https://i.pinimg.com/1200x/1b/17/d1/1b17d15446c9274785934f177f515d31.jpg', metal: 'Mixed', description: 'Natural gemstone beaded bracelet.' },
            { id: 31, name: 'Gold Chain Bracelet', category: 'bracelets', price: 799, image: 'https://i.pinimg.com/1200x/be/ef/8a/beef8aa442392febe487196d7a0903c9.jpg', metal: 'Gold', description: '18K gold curb chain bracelet.' },
            { id: 32, name: 'Pearl Bracelet', category: 'bracelets', price: 449, image: 'https://i.pinimg.com/736x/aa/59/01/aa590141571d598ac2cecaeecdab868c.jpg', metal: 'Gold', description: 'Freshwater pearl bracelet with gold clasp.' }
        ];


        // State Management
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        let currentSlide = 0;
        let currentFilter = 'all';

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            initializeProducts();
            updateCartBadge();
            updateWishlistBadge();
            updateAuthUI();
            initializeTheme();
            initializeSlideshow();
            initializeMobileMenu();
            initializeAuth();
        });

        // Products
        function initializeProducts() {
            renderProducts(currentFilter);
        }

        function renderProducts(filter) {
            const grid = document.getElementById('productGrid');
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(p => p.category === filter);
            
            grid.innerHTML = filteredProducts.map(product => `
                <div class="product-card rounded-xl overflow-hidden relative" style="background: rgb(var(--color-card)); border: 1px solid rgb(var(--color-border));">
                    <button onclick="toggleWishlist(${product.id})" class="wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}">
                        <svg class="w-5 h-5" fill="${isInWishlist(product.id) ? 'rgb(var(--color-accent))' : 'none'}" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 md:h-64 object-cover cursor-pointer" onclick="openProductModal(${product.id})">
                    <div class="p-4 md:p-6">
                        <h3 class="font-bold text-base md:text-lg mb-2" style="color: rgb(var(--color-foreground));">${product.name}</h3>
                        <p class="text-xs md:text-sm mb-4" style="color: rgb(var(--color-muted-foreground));">${product.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-lg md:text-xl font-bold" style="color: rgb(var(--color-primary));">$${product.price.toLocaleString()}</span>
                            <button onclick="addToCart(${product.id})" class="px-3 md:px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105" style="background: rgb(var(--color-primary)); color: white;">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        

        function filterProducts(category) {
            currentFilter = category;
            renderProducts(category);
            
            // Update filter button styles
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.style.background = 'rgb(var(--color-muted))';
                btn.style.color = 'rgb(var(--color-foreground))';
            });
            event.target.style.background = 'rgb(var(--color-primary))';
            event.target.style.color = 'white';
        }

        // Cart Functions
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
            showNotification('Added to cart!');
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartBadge();
            renderCart();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    localStorage.setItem('cart', JSON.stringify(cart));
                    renderCart();
                }
            }
        }

        function updateCartBadge() {
            const badge = document.getElementById('cartBadge');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            if (totalItems > 0) {
                badge.textContent = totalItems;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }

        function openCart() {
            document.getElementById('cartModal').classList.add('active');
            renderCart();
        }

        function closeCart() {
            document.getElementById('cartModal').classList.remove('active');
        }

        function renderCart() {
            const cartItemsContainer = document.getElementById('cartItems');
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="text-center py-8">
                        <svg class="w-16 h-16 mx-auto mb-4" style="color: rgb(var(--color-muted-foreground));" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <p style="color: rgb(var(--color-muted-foreground));">Your cart is empty</p>
                    </div>
                `;
                document.getElementById('cartSubtotal').textContent = '$0.00';
                document.getElementById('cartTotal').textContent = '$0.00';
                return;
            }
            
            cartItemsContainer.innerHTML = cart.map(item => `
                <div class="flex gap-4 p-4 rounded-lg" style="background: rgb(var(--color-muted));">
                    <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1" style="color: rgb(var(--color-foreground));">${item.name}</h3>
                        <p class="text-sm mb-2" style="color: rgb(var(--color-primary));">$${item.price.toLocaleString()}</p>
                        <div class="flex items-center gap-3">
                            <button onclick="updateQuantity(${item.id}, -1)" class="w-6 h-6 rounded-full flex items-center justify-center" style="background: rgb(var(--color-border));">-</button>
                            <span class="text-sm font-medium">${item.quantity}</span>
                            <button onclick="updateQuantity(${item.id}, 1)" class="w-6 h-6 rounded-full flex items-center justify-center" style="background: rgb(var(--color-border));">+</button>
                        </div>
                    </div>
                    <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            `).join('');
            
            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('cartSubtotal').textContent = `$${subtotal.toLocaleString()}`;
            document.getElementById('cartTotal').textContent = `$${subtotal.toLocaleString()}`;
        }

        function checkout() {
            if (!currentUser) {
                closeCart();
                openLoginModal();
                showNotification('Please login to checkout');
                return;
            }
            
            if (cart.length === 0) {
                showNotification('Your cart is empty');
                return;
            }
            
            showNotification('Checkout functionality - Coming soon!');
        }

        // Wishlist Functions
        function toggleWishlist(productId) {
            const index = wishlist.indexOf(productId);
            
            if (index > -1) {
                wishlist.splice(index, 1);
                showNotification('Removed from wishlist');
            } else {
                wishlist.push(productId);
                showNotification('Added to wishlist!');
            }
            
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            updateWishlistBadge();
            renderProducts(currentFilter);
        }

        function isInWishlist(productId) {
            return wishlist.includes(productId);
        }

        function updateWishlistBadge() {
            const badge = document.getElementById('wishlistBadge');
            
            if (wishlist.length > 0) {
                badge.textContent = wishlist.length;
                badge.style.display = 'flex';
            } else {
                badge.style.display = 'none';
            }
        }

        function openWishlist() {
            document.getElementById('wishlistModal').classList.add('active');
            renderWishlist();
        }

        function closeWishlist() {
            document.getElementById('wishlistModal').classList.remove('active');
        }

        function renderWishlist() {
            const wishlistContainer = document.getElementById('wishlistItems');
            const wishlistProducts = products.filter(p => wishlist.includes(p.id));
            
            if (wishlistProducts.length === 0) {
                wishlistContainer.innerHTML = `
                    <div class="text-center py-8">
                        <svg class="w-16 h-16 mx-auto mb-4" style="color: rgb(var(--color-muted-foreground));" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <p style="color: rgb(var(--color-muted-foreground));">Your wishlist is empty</p>
                    </div>
                `;
                return;
            }
            
            wishlistContainer.innerHTML = wishlistProducts.map(product => `
                <div class="flex gap-4 p-4 rounded-lg" style="background: rgb(var(--color-muted));">
                    <img src="${product.image}" alt="${product.name}" class="w-20 h-20 object-cover rounded-lg">
                    <div class="flex-1">
                        <h3 class="font-semibold mb-1" style="color: rgb(var(--color-foreground));">${product.name}</h3>
                        <p class="text-sm mb-2" style="color: rgb(var(--color-muted-foreground));">${product.description}</p>
                        <p class="text-lg font-bold mb-2" style="color: rgb(var(--color-primary));">$${product.price.toLocaleString()}</p>
                        <button onclick="addToCart(${product.id}); toggleWishlist(${product.id}); renderWishlist();" class="px-4 py-1 rounded-lg text-sm font-semibold" style="background: rgb(var(--color-primary)); color: white;">
                            Move to Cart
                        </button>
                    </div>
                    <button onclick="toggleWishlist(${product.id}); renderWishlist();" class="text-red-500 hover:text-red-700">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            `).join('');
        }

        // Authentication Functions
        function initializeAuth() {
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');
            
            loginForm.addEventListener('submit', handleLogin);
            signupForm.addEventListener('submit', handleSignup);
        }

        function handleLogin(e) {
            e.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Simple authentication (in production, use proper backend)
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                currentUser = { name: user.name, email: user.email };
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                updateAuthUI();
                closeLoginModal();
                showNotification(`Welcome back, ${user.name}!`);
            } else {
                showNotification('Invalid email or password');
            }
        }

        function handleSignup(e) {
            e.preventDefault();
            
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            
            if (users.find(u => u.email === email)) {
                showNotification('Email already registered');
                return;
            }
            
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            currentUser = { name, email };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateAuthUI();
            closeLoginModal();
            showNotification(`Welcome, ${name}!`);
        }

        function logout() {
            currentUser = null;
            localStorage.removeItem('currentUser');
            updateAuthUI();
            showNotification('Logged out successfully');
        }

        function updateAuthUI() {
            const loginBtn = document.getElementById('loginBtn');
            const logoutBtn = document.getElementById('logoutBtn');
            const mobileLoginBtn = document.getElementById('mobileLoginBtn');
            const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');
            
            if (currentUser) {
                loginBtn.style.display = 'none';
                logoutBtn.style.display = 'block';
                logoutBtn.textContent = currentUser.name;
                mobileLoginBtn.style.display = 'none';
                mobileLogoutBtn.style.display = 'block';
                mobileLogoutBtn.textContent = `Logout (${currentUser.name})`;
            } else {
                loginBtn.style.display = 'block';
                logoutBtn.style.display = 'none';
                mobileLoginBtn.style.display = 'block';
                mobileLogoutBtn.style.display = 'none';
            }
        }

        function openLoginModal() {
            document.getElementById('loginModal').classList.add('active');
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('signupForm').style.display = 'none';
        }

        function closeLoginModal() {
            document.getElementById('loginModal').classList.remove('active');
        }

        function switchToSignup() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('signupForm').style.display = 'block';
        }

        function switchToLogin() {
            document.getElementById('signupForm').style.display = 'none';
            document.getElementById('loginForm').style.display = 'block';
        }

        // Product Modal
        function openProductModal(productId) {
            const product = products.find(p => p.id === productId);
            const modal = document.getElementById('productModal');
            const content = document.getElementById('productModalContent');
            
            content.innerHTML = `
                <div class="grid md:grid-cols-2 gap-8">
                    <img src="${product.image}" alt="${product.name}" class="w-full rounded-lg">
                    <div>
                        <h2 class="text-3xl font-bold mb-4" style="font-family: 'Playfair Display', serif; color: rgb(var(--color-foreground));">${product.name}</h2>
                        <p class="text-2xl font-bold mb-6" style="color: rgb(var(--color-primary));">$${product.price.toLocaleString()}</p>
                        <p class="text-lg mb-6 leading-relaxed" style="color: rgb(var(--color-muted-foreground));">${product.description}</p>
                        <div class="flex gap-4">
                            <button onclick="addToCart(${product.id}); closeProductModal();" class="flex-1 btn-primary">Add to Cart</button>
                            <button onclick="toggleWishlist(${product.id}); renderProducts('${currentFilter}'); closeProductModal();" class="px-6 py-3 rounded-lg border-2 hover:bg-gray-50 transition-all" style="border-color: rgb(var(--color-primary)); color: rgb(var(--color-primary));">
                                ${isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            modal.classList.add('active');
        }

        function closeProductModal() {
            document.getElementById('productModal').classList.remove('active');
        }

        // Slideshow
        function initializeSlideshow() {
            setInterval(() => {
                changeSlide(1);
            }, 5000);
        }

        function changeSlide(direction) {
            const slides = document.querySelectorAll('.slide');
            slides[currentSlide].classList.remove('active');
            
            currentSlide = (currentSlide + direction + slides.length) % slides.length;
            
            slides[currentSlide].classList.add('active');
            updateSlideIndicators();
        }

        function goToSlide(index) {
            const slides = document.querySelectorAll('.slide');
            slides[currentSlide].classList.remove('active');
            currentSlide = index;
            slides[currentSlide].classList.add('active');
            updateSlideIndicators();
        }

        function updateSlideIndicators() {
            const indicators = document.querySelectorAll('.slide-indicator');
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.style.background = 'white';
                } else {
                    indicator.style.background = 'rgba(255, 255, 255, 0.5)';
                }
            });
        }

        // Theme Toggle
        function initializeTheme() {
            const themeToggle = document.getElementById('themeToggle');
            const sunIcon = document.getElementById('sunIcon');
            const moonIcon = document.getElementById('moonIcon');
            
            const currentTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', currentTheme);
            
            if (currentTheme === 'dark') {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
            
            themeToggle.addEventListener('click', () => {
                const theme = document.documentElement.getAttribute('data-theme');
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                
                document.documentElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                sunIcon.classList.toggle('hidden');
                moonIcon.classList.toggle('hidden');
            });
        }

        // Mobile Menu
        function initializeMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Utility Functions
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        function showNotification(message) {
            // Simple notification (you can enhance this with a proper toast system)
            const notification = document.createElement('div');
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: rgb(var(--color-primary));
                color: white;
                padding: 1rem 2rem;
                border-radius: 0.5rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                z-index: 10000;
                animation: slideIn 0.3s ease-out;
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease-out';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }

        // Close modals when clicking outside
        window.onclick = function(event) {
            if (event.target.classList.contains('modal')) {
                event.target.classList.remove('active');
            }
        }
