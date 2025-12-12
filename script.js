    // ---------- CONFIG / SAMPLE PRODUCTS ----------
    // Replace or extend this list with your own catalogue. Each item needs id,title,price,img,desc
    const PRODUCTS = [
  {id:'p1', title:'Luna Chain Necklace', price:1499, img:'https://i.pinimg.com/736x/b7/98/6c/b7986cb5b5640be907ca3e4b1b5f9dee.jpg', desc:'Delicate chain...', cat:'necklaces'},

  {id:'p2', title:'Heart Hoop Earrings', price:999, img:'https://i.pinimg.com/1200x/9c/7b/a1/9c7ba14778dbabcdc700285dedb95af0.jpg', desc:'Classic hoop...', cat:'earrings'},

  {id:'p3', title:'Nova Ring Gold', price:799, img:'https://i.pinimg.com/1200x/c8/1b/e4/c81be42fe2da3aaa14c77e933cc6c6d9.jpg', desc:'Band...', cat:'rings'},

  {id:'p4', title:'Pearl Hoop Earrings', price:1299, img:'https://i.pinimg.com/1200x/6f/02/d9/6f02d972056774782f031ee6f7701e1a.jpg', desc:'Pearl...', cat:'earrings'},

  {id:'p5', title:'Solitaire Pendant', price:2299, img:'https://i.pinimg.com/736x/bb/b9/b1/bbb9b14c0f14332de0bae0ce2d67a529.jpg', desc:'Pendant...', cat:'necklaces'},

  {id:'p6', title:'Stackable Ring Set', price:1599, img:'https://i.pinimg.com/736x/2e/94/27/2e9427697fccd2e8d78fa3f45a3560cd.jpg', desc:'Stackable rings...', cat:'rings'},

  {id:'p7', title:'Horizon Bracelet', price:1899, img:'https://i.pinimg.com/1200x/78/7e/46/787e4684512cf5dcfd2826c0e3405587.jpg', desc:'Bracelet...', cat:'bracelets'},

  {id:'p8', title:'Natural Seashell Anklet', price:699, img:'https://i.pinimg.com/1200x/f7/1f/86/f71f86e9c4f989985f373dcb2f2ef4b3.jpg', desc:'Anklet...', cat:'anklets'}
];


    // ---------- RENDER PRODUCTS ----------
    const grid = document.getElementById('productGrid');
    function formatPrice(n){return '₹'+n.toLocaleString('en-IN')}

    PRODUCTS.forEach(p=>{
      const card = document.createElement('article');card.className='card';
      card.innerHTML = `
        <img src="${p.img}" alt="${p.title}">
        <div style="margin-top:10px">
          <div class="meta">
            <div class="title">${p.title}</div>
            <div class="price">${formatPrice(p.price)}</div>
          </div>
          <div class="small muted" style="margin-top:6px">${p.desc.slice(0,80)}${p.desc.length>80?'...':''}</div>
          <div class="actions">
            <button class="btn btn-ghost" data-id="${p.id}" data-action="view">View</button>
            <button class="btn btn-primary" data-id="${p.id}" data-action="add">Add</button>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });

    // ---------- CART LOGIC ----------
    let cart = JSON.parse(localStorage.getItem('cart_v1')||'{}');
    const cartCount = document.getElementById('cartCount');
    const cartItemsEl = document.getElementById('cartItems');
    const cartSubtotalEl = document.getElementById('cartSubtotal');
    const cartPanel = document.getElementById('cartPanel');

    function saveCart(){localStorage.setItem('cart_v1',JSON.stringify(cart));renderCart();}
    function addToCart(id,qty=1){cart[id] = (cart[id]||0) + qty; saveCart();}
    function removeFromCart(id){delete cart[id]; saveCart();}
    function setQty(id,qty){if(qty<=0) removeFromCart(id); else {cart[id]=qty; saveCart();}}

    function renderCart(){
      const entries = Object.entries(cart);
      cartCount.textContent = entries.reduce((s,[k,v])=>s+v,0);
      cartItemsEl.innerHTML = entries.length? '' : '<div class="muted">Your cart is empty</div>';
      let subtotal = 0;
      entries.forEach(([id,qty])=>{
        const p = PRODUCTS.find(x=>x.id===id);
        if(!p) return;
        subtotal += p.price * qty;
        const item = document.createElement('div');item.className='cart-item';
        item.innerHTML = `
          <img src="${p.img}" alt="${p.title}">
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between;align-items:center"><div style="font-weight:800">${p.title}</div><div class="price">${formatPrice(p.price*qty)}</div></div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px">
              <div class="qty">
                <button class="icon-btn" data-id="${id}" data-op="dec">−</button>
                <div style="min-width:22px;text-align:center">${qty}</div>
                <button class="icon-btn" data-id="${id}" data-op="inc">+</button>
              </div>
              <button class="icon-btn" data-id="${id}" data-op="del">🗑</button>
            </div>
          </div>
        `;
        cartItemsEl.appendChild(item);
      });
      cartSubtotalEl.textContent = formatPrice(subtotal);

      // attach buttons
      cartItemsEl.querySelectorAll('[data-op]').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const id = btn.getAttribute('data-id'); const op = btn.getAttribute('data-op');
          if(op==='inc') setQty(id, (cart[id]||0)+1);
          if(op==='dec') setQty(id, (cart[id]||0)-1);
          if(op==='del') removeFromCart(id);
        });
      });
    }

    renderCart();

    // ---------- UI EVENTS ----------
    document.getElementById('openCart').addEventListener('click',()=>{cartPanel.classList.add('open');});
    document.getElementById('openCartMobile').addEventListener('click',()=>{cartPanel.classList.add('open');});
    document.getElementById('closeCart').addEventListener('click',()=>{cartPanel.classList.remove('open');});

    // product buttons
    document.body.addEventListener('click',e=>{
      const el = e.target.closest('[data-action]');
      if(!el) return;
      const id = el.getAttribute('data-id'); const action = el.getAttribute('data-action');
      if(action==='add'){ addToCart(id,1); }
      if(action==='view'){ openModal(id); }
    });

    // checkout (dummy)
    document.getElementById('checkoutBtn').addEventListener('click',()=>{
      if(Object.keys(cart).length===0){ alert('Your cart is empty'); return; }
      const name = prompt('Enter your name for the demo checkout');
      if(!name) return;
      alert('Thanks '+name+'! This is a demo checkout. Integrate a payment gateway (Razorpay/Stripe) to complete orders.');
      // clear cart for demo
      cart = {}; saveCart(); cartPanel.classList.remove('open');
    });

    // ---------- MODAL / VIEW ----------
    const modal = document.getElementById('modalBackdrop');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalPrice = document.getElementById('modalPrice');
    const modalSku = document.getElementById('modalSku');
    const addToCartBtn = document.getElementById('addToCart');
    let modalQty = 1; let modalProductId = null;

    function openModal(id){
      const p = PRODUCTS.find(x=>x.id===id);
      if(!p) return;
      modalProductId = id; modalQty = 1;
      modalImg.src = p.img; modalTitle.textContent = p.title; modalDesc.textContent = p.desc; modalPrice.textContent = formatPrice(p.price); modalSku.textContent = 'SKU: '+p.id; document.getElementById('modalQty').textContent = modalQty;
      modal.classList.add('open');
      document.getElementById('modalBackdrop').classList.add('open');
    }
    document.getElementById('modalBackdrop').addEventListener('click',e=>{ if(e.target.id==='modalBackdrop'){ document.getElementById('modalBackdrop').classList.remove('open'); modal.classList.remove('open'); }});
    document.getElementById('increaseQty').addEventListener('click',()=>{ modalQty++; document.getElementById('modalQty').textContent = modalQty; });
    document.getElementById('decreaseQty').addEventListener('click',()=>{ if(modalQty>1) modalQty--; document.getElementById('modalQty').textContent = modalQty; });
    addToCartBtn.addEventListener('click',()=>{ if(modalProductId){ addToCart(modalProductId, modalQty); document.getElementById('modalBackdrop').classList.remove('open'); modal.classList.remove('open'); } });

    // misc
    document.getElementById('shopNow').addEventListener('click',()=>{ document.getElementById('products').scrollIntoView({behavior:'smooth'}); });
    document.getElementById('year').textContent = new Date().getFullYear();

    // expose helpers for quick editing by you in console (optional)
    window._PRODUCTS = PRODUCTS;
    window._CART = cart;
    
// ---------- FIXED CURRENCY SYSTEM (NO DUPLICATE CONVERSION) ----------

// Save original INR price for every product on the page
document.querySelectorAll(".price").forEach(el => {
  el.dataset.inr = el.textContent.replace(/[^0-9]/g, "");  
});

// Save original modal price when opened
const modalPriceEl = document.getElementById("modalPrice");
if (modalPriceEl) {
    modalPriceEl.dataset.inr = modalPriceEl.textContent.replace(/[^0-9]/g, "");
}

const rates = {
  INR: 1,
  AED: 0.044,
  USD: 0.012,
  EUR: 0.011
};

document.getElementById("currencySelect").addEventListener("change", function () {
  const currency = this.value;

  // ----- Update product prices -----
  document.querySelectorAll(".price").forEach(el => {
    const inrValue = parseInt(el.dataset.inr);       // always use original
    const converted = (inrValue * rates[currency]).toFixed(2);

    if (currency === "INR") el.textContent = "₹" + inrValue;
    else if (currency === "USD") el.textContent = "$" + converted;
    else if (currency === "EUR") el.textContent = "€" + converted;
    else el.textContent = converted + " " + currency;
  });

  // ----- Update modal price -----
  if (modalPriceEl && modalPriceEl.dataset.inr) {
    const inrModal = parseInt(modalPriceEl.dataset.inr);
    const convertedModal = (inrModal * rates[currency]).toFixed(2);

    if (currency === "INR") modalPriceEl.textContent = "₹" + inrModal;
    else if (currency === "USD") modalPriceEl.textContent = "$" + convertedModal;
    else if (currency === "EUR") modalPriceEl.textContent = "€" + convertedModal;
    else modalPriceEl.textContent = convertedModal + " " + currency;
  }
});

const container = document.querySelector("#categories");

document.querySelectorAll(".cat-box").forEach(box => {
  box.addEventListener("click", () => {
    let cat = box.getAttribute("data-cat");

    // Remove existing product sections under categories
    let old = document.querySelector(".category-products");
    if (old) old.remove();

    // Filter products
    let filtered = PRODUCTS.filter(p => p.cat === cat);

    // Create section
    let wrap = document.createElement("div");
    wrap.className = "category-products";
    wrap.style.marginTop = "20px";

    let html = `<h3 style="margin-bottom:14px;color:#7f2a45">Showing ${cat.toUpperCase()}</h3>`;
    html += `<div class="grid">`;

    filtered.forEach(p => {
      html += `
        <div class="card">
          <img src="${p.img}">
          <div class="title">${p.title}</div>
          <div class="price">₹${p.price}</div>
        </div>
      `;
    });

    html += "</div>";
    wrap.innerHTML = html;

    container.appendChild(wrap);

    wrap.scrollIntoView({behavior:"smooth"});
  });
});

