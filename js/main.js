'use strict';

/* ── CONFIG ── */
const WA1 = '923310214667';
const WA2 = '923141159580';

/* ── PRODUCTS ── */
const PRODUCTS = [
    {
    id:1, name:'Vinter Archive 002 Street Edition', color:'Cream', fit:'Hoodies',
    pricePKR:1999, priceUSD:17.99, badge:'NEW ARRIVAL', sku:'ANZ-VSE-001',
    desc:'Introducing the Vinter Archive 002 Street Edition — crafted for those who carry their own Andaaz. Vinter Archive 002 Street Edition with Andaaz logo on front pocket which lokk premium and classy Shot on the streets of Karachi.',
    img:'assets/images/Hoodies-1-.jpeg', imgFb:'assets/images/Hoodies-2-.webp', img2:'assets/images/Hoodies-2-.webp'
  },
  {
    id:2, name:'Big Bush Brown Edition', color:'Brown', fit:'oversized',
    pricePKR:1799, priceUSD:17.99, badge:'NEW ARRIVAL', sku:'ANZ-VSE-001',
    desc:'Introducing the Big Bush Brown Edition premuim quality — crafted for those who carry their own Andaaz. Oversized drop-shoulder fit with tonal ANDAAZ EST. 2026 chest print. Shot on the streets of Karachi and universities,parties and for premuim look like as brown bear and stand alone in the gathering.',
    img:'assets/images/tees-brown-1.webp', imgFb:'assets/images/tees-brown-2.jpeg', img2:'assets/images/tees-brown-2.jpeg'
  },
  {
    id:3, name:'Vintage Street Edition', color:'Black', fit:'oversized',
    pricePKR:1599, priceUSD:17.99, badge:'NEW ARRIVAL', sku:'ANZ-VSE-001',
    desc:'Introducing the Vintage Street Edition — crafted for those who carry their own Andaaz. Oversized drop-shoulder fit with tonal ANDAAZ EST. 2026 chest print. Shot on the streets of Karachi.',
    img:'assets/images/tee-vintage-1.webp', imgFb:'assets/images/tee-vintage-1.jpg', img2:'assets/images/tee-vintage-2.webp'
  },
  {
    id:4, name:'Karbala Edition Oversized Tee', color:'Black', fit:'oversized',
    pricePKR:1999, priceUSD:22.99, badge:'LIMITED EDITION', sku:'ANZ-KRB-001',
    desc:'Premium oversized black t-shirt featuring an exclusive Karbala-inspired design — "The Land of Sacrifice." Drop-shoulder fit, soft 100% cotton, high-quality DTF back print. Perfect for Muharram and everyday wear.',
    img:'assets/images/tee-karbala-back.webp', imgFb:'assets/images/tee-karbala-back.jpg', img2:'assets/images/tee-karbala-front.webp'
  },
  {
    id:5, name:'Tank Top', color:'White', fit:'tank',
    pricePKR:799, priceUSD:8.99, badge:'NEW', sku:'ANZ-TNK-001',
    desc:'Andaaz Tank Top Collection — premium sleeveless tee crafted from ultra-soft 100% combed cotton. Minimalist "andaaz" chest print in rich brown. Perfect for summer, gym, or everyday layering.',
    img:'assets/images/tee-tank-white.webp', imgFb:'assets/images/tee-tank-white.jpg', img2:null
  },
  {
    id:6, name:'Premium Embroidered Tee', color:'Black', fit:'oversized',
    pricePKR:799, priceUSD:8.99, badge:'BEST SELLER', sku:'ANZ-BLK-001',
    desc:'100% combed cotton oversized tee with gold embroidered Urdu calligraphy. Drop-shoulder relaxed fit. Karachi\'s favourite street style staple.',
    img:'assets/images/tee-black-premium.webp', imgFb:'assets/images/tee-black-premium.jpg', img2:null
  },
  {
    id:7, name:'Downshoulder Tee', color:'Navy Blue', fit:'oversized',
    pricePKR:1199, priceUSD:13.99, badge:'NEW', sku:'ANZ-NVY-001',
    desc:'Premium navy blue drop-shoulder oversized tee with gold foil Urdu print. Heavyweight cotton, modern silhouette.',
    img:'assets/images/tee-navy.webp', imgFb:'assets/images/tee-navy.jpg', img2:null
  },
  {
    id:8, name:'Downshoulder Premium', color:'White', fit:'oversized',
    pricePKR:1199, priceUSD:13.99, badge:'PREMIUM EDITION', sku:'ANZ-WHT-001',
    desc:'Limited edition white downshoulder tee with gold Urdu calligraphy. Ultra-soft cotton. Unisex fit.',
    img:'assets/images/tee-white-1.webp', imgFb:'assets/images/tee-white-1.jpg', img2:'assets/images/tee-white-2.webp'
  },
  {
    id:9, name:'Downshoulder Tee', color:'Beige — Brown Print', fit:'oversized',
    pricePKR:1199, priceUSD:13.99, badge:'NEW', sku:'ANZ-BGE-001',
    desc:'Premium beige downshoulder tee with tonal brown Urdu calligraphy print. Earth-tone aesthetic meets cultural depth.',
    img:'assets/images/tee-beige-1.webp', imgFb:'assets/images/tee-beige-1.jpg', img2:'assets/images/tee-beige-2.webp'
  },
  {
    id:10, name:'Downshoulder Tee', color:'Chocolate Brown', fit:'oversized',
    pricePKR:1999, priceUSD:22.99, badge:'NEW ARRIVAL', sku:'ANZ-BRN-001',
    desc:'Rich chocolate brown downshoulder oversized tee with white Urdu calligraphy. Premium heavyweight cotton, bold contrast. The newest drop from Andaaz.',
    img:'assets/images/tee-brown.webp', imgFb:'assets/images/tee-brown.jpg', img2:null
  }
];

const SIZES   = ['S','M','L','XL'];
const REVIEWS = [
  {name:'Ahmed R.',   city:'Karachi',    stars:5, text:'Fabric quality is amazing. Got so many compliments!'},
  {name:'Sana M.',    city:'Lahore',     stars:5, text:'The white downshoulder tee is absolutely stunning!'},
  {name:'Bilal K.',   city:'Islamabad',  stars:5, text:'Oversized fit is perfect. Calligraphy looks so premium.'},
  {name:'Hira F.',    city:'Karachi',    stars:5, text:'Quick delivery and beautiful packaging. Very happy!'},
  {name:'Usman T.',   city:'Rawalpindi', stars:5, text:'Navy tee quality is top notch. 100% recommend!'},
  {name:'Zara N.',    city:'Faisalabad', stars:5, text:'Pakistani culture meets modern streetwear. This is it.'},
  {name:'Hamza S.',   city:'Multan',     stars:5, text:'Black embroidered tee is worth every rupee.'},
  {name:'Ayesha J.',  city:'Lahore',     stars:5, text:'Bought for my brother — he loves the fit!'},
  {name:'Omar A.',    city:'Peshawar',   stars:5, text:'Cash on delivery made it so easy. My go-to brand.'},
  {name:'Maryam I.',  city:'Karachi',    stars:5, text:'Premium edition looks exactly like photos!'},
  {name:'Farhan B.',  city:'Quetta',     stars:5, text:'Fast shipping to Quetta! Love the brown tee!'},
  {name:'Nadia R.',   city:'Islamabad',  stars:5, text:'The calligraphy is bold and beautiful.'},
];

/* ── STATE ── */
let cart = [], selSz = {}, activeFilter = 'all';
let isUSD = false;   // geo-detect sets this

/* ══ INIT ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function() {
  detectGeo();
  render();
  initVideo();
  initHamburger();
  initReviews();
  initStickyCart();
  initNavHighlight();
});

/* ── GEO DETECTION (USD for non-Pakistan visitors) ── */
function detectGeo() {
  try {
    fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout ? AbortSignal.timeout(3000) : undefined })
      .then(function(r){ return r.json(); })
      .then(function(d){
        if (d && d.country_code && d.country_code !== 'PK') {
          isUSD = true;
          render();
          showIntlBanner(d.country_name || 'your country');
        }
      })
      .catch(function(){});
  } catch(e) {}
}

function showIntlBanner(country) {
  var existing = document.getElementById('intl-banner');
  if (existing) return;
  var b = document.createElement('div');
  b.id = 'intl-banner';
  b.innerHTML = '🌍 Showing prices in USD for ' + country +
    ' &nbsp;|&nbsp; <a href="https://wa.me/' + WA1 +
    '?text=Hi! I want to order Andaaz internationally" target="_blank" rel="noopener" style="color:#0a0a0a;font-weight:700;text-decoration:underline;">WhatsApp for international shipping</a>';
  b.style.cssText = 'background:#c9a84c;color:#0a0a0a;text-align:center;padding:9px 16px;font-size:12px;letter-spacing:1px;position:relative;z-index:201;';
  var nav = document.querySelector('nav');
  if (nav) nav.parentNode.insertBefore(b, nav);
}

/* ── VIDEO ── */
function initVideo() {
  var v = document.getElementById('hero-vid');
  if (!v) return;
  v.muted = true; v.volume = 0;
  v.setAttribute('muted',''); v.setAttribute('playsinline','');
  var play = function(){ var p = v.play(); if(p && p.catch) p.catch(function(){}); };
  v.addEventListener('loadeddata', play, {once:true});
  v.addEventListener('canplay', play, {once:true});
  v.load(); setTimeout(play, 800);
}

/* ── HAMBURGER ── */
function initHamburger() {
  var btn = document.getElementById('hamburger');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function(){
    var o = menu.classList.toggle('open');
    btn.classList.toggle('open', o);
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      menu.classList.remove('open'); btn.classList.remove('open');
    });
  });
  document.addEventListener('click', function(e){
    if (!btn.contains(e.target) && !menu.contains(e.target)){
      menu.classList.remove('open'); btn.classList.remove('open');
    }
  });
}

/* ── NAV HIGHLIGHT ── */
function initNavHighlight() {
  var links = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!links.length) return;
  var obs = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) {
        links.forEach(function(l){ l.classList.remove('active'); });
        var a = document.querySelector('.nav-links a[href="#' + e.target.id + '"]');
        if (a) a.classList.add('active');
      }
    });
  }, {rootMargin:'-40% 0px -40% 0px'});
  ['shop','about','faq','contact'].forEach(function(id){
    var el = document.getElementById(id); if (el) obs.observe(el);
  });
}

/* ── REVIEWS ── */
function initReviews() {
  var track = document.getElementById('review-track');
  if (!track) return;
  var all = REVIEWS.concat(REVIEWS);
  track.innerHTML = all.map(function(r){
    return '<div class="rv-card"><div class="rv-stars">' + '\u2605'.repeat(r.stars) +
      '</div><p class="rv-text">\u201c' + r.text + '\u201d</p>' +
      '<div class="rv-author"><span class="rv-name">' + r.name +
      '</span><span class="rv-city">' + r.city + '</span></div></div>';
  }).join('');
}

/* ── STICKY CART ── */
function initStickyCart() {
  var bar = document.getElementById('sticky-bar');
  if (!bar) return;
  document.addEventListener('click', function(e){
    var card = e.target.closest('.card');
    if (card) {
      var pid = parseInt(card.dataset.pid);
      var p = PRODUCTS.find(function(x){ return x.id === pid; });
      if (p) {
        bar.querySelector('.sc-price').textContent = isUSD ? ('$' + p.priceUSD) : ('Rs ' + p.pricePKR.toLocaleString());
        bar.querySelector('.sc-btn').onclick = function(){ addCart(p.id, p.name, p.color, p.img, isUSD ? p.priceUSD : p.pricePKR, isUSD); };
        bar.style.display = 'flex';
      }
    }
  });
}

/* ── FILTER ── */
function filt(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.fbtn').forEach(function(b){ b.classList.remove('on'); });
  btn.classList.add('on'); render();
}

/* ── SIZE ── */
function pickSz(pid, s) {
  selSz[pid] = s;
  document.querySelectorAll('.sz[data-pid="' + pid + '"]').forEach(function(el){
    el.classList.toggle('on', el.dataset.size === s);
  });
}

/* ── CART ── */
function addCart(pid, name, color, img, price, usd) {
  var sz = selSz[pid] || 'M';
  cart.push({ pid:pid, name:name, color:color, img:img, sz:sz, price:price, usd:!!usd });
  document.getElementById('cc').textContent = cart.length;
  renderCart();
  showToast('\u2713 Andaaz ' + name + ' \u00b7 ' + color + ' \u00b7 Size ' + sz);
}

function rmCart(i) {
  cart.splice(i, 1);
  document.getElementById('cc').textContent = cart.length;
  renderCart();
}

function renderCart() {
  var el = document.getElementById('cp-items');
  var ft = document.getElementById('cp-ft');
  if (!el || !ft) return;
  if (!cart.length) {
    ft.style.display = 'none';
    el.innerHTML = '<div class="cp-empty">Your cart is empty.<br><br>Add some tees! \uD83D\uDED4</div>';
    return;
  }
  ft.style.display = 'block';
  var total = cart.reduce(function(s, i){ return s + i.price; }, 0);
  var sym = cart[0].usd ? '$' : 'Rs ';
  document.getElementById('cp-tot').textContent = sym + total.toLocaleString();
  el.innerHTML = cart.map(function(it, i){
    return '<div class="ci"><img src="' + it.img + '" alt="Andaaz ' + it.name + '" width="56" height="68" loading="lazy">' +
      '<div class="ci-inf"><div class="ci-n">Andaaz ' + it.name + '</div>' +
      '<div class="ci-m">' + it.color + ' \u00b7 Size ' + it.sz + '</div>' +
      '<div class="ci-p">' + (it.usd ? '$' : 'Rs ') + it.price.toLocaleString() + '</div></div>' +
      '<button class="ci-rm" onclick="rmCart(' + i + ')" aria-label="Remove">\u2715</button></div>';
  }).join('');
}

function openCart() { document.getElementById('overlay').classList.add('open'); renderCart(); }
function closeCart() { document.getElementById('overlay').classList.remove('open'); }

/* ── WA ORDER ── */
function orderWA() {
  if (!cart.length) return;
  var total = cart.reduce(function(s,i){ return s + i.price; }, 0);
  var sym = cart[0].usd ? '$' : 'Rs ';
  var msg = 'Hi! Andaaz order:%0A%0A';
  cart.forEach(function(it, i){
    msg += (i+1) + '. Andaaz ' + it.name + ' - ' + it.color + ' - Size ' + it.sz + ' - ' + sym + it.price + '%0A';
  });
  msg += '%0ATotal: ' + sym + total + '%0APlease confirm!';
  if (cart[0].usd) msg += '%0A%0A(International order — please provide shipping details)';
  window.open('https://wa.me/' + WA1 + '?text=' + msg, '_blank');
}

function quickWA(name, color, price, usd) {
  var sym = usd ? '$' : 'Rs ';
  var msg = encodeURIComponent('Hi! I want Andaaz ' + name + ' (' + color + ') - ' + sym + price + '. Is it available?');
  window.open('https://wa.me/' + WA1 + '?text=' + msg, '_blank');
}

/* ── TOAST ── */
function showToast(msg) {
  var t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg; t.style.display = 'block';
  clearTimeout(window._tt);
  window._tt = setTimeout(function(){ t.style.display = 'none'; }, 3000);
}

/* ── RENDER PRODUCTS ── */
function render() {
  var grid = document.getElementById('pgrid');
  if (!grid) return;
  var list = activeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(function(p){ return p.fit === activeFilter; });

  grid.innerHTML = list.map(function(p){
    var price = isUSD ? ('$' + p.priceUSD) : ('Rs ' + p.pricePKR.toLocaleString());
    var priceVal = isUSD ? p.priceUSD : p.pricePKR;
    var imgs = p.img2
      ? '<img src="' + p.img + '" class="loop1" alt="Andaaz ' + p.name + ' ' + p.color + '" width="400" height="533" loading="lazy" itemprop="image">' +
        '<img src="' + p.img2 + '" class="loop2" alt="Andaaz ' + p.name + ' alt view" width="400" height="533" loading="lazy">'
      : '<img src="' + p.img + '" class="single" alt="Andaaz ' + p.name + ' ' + p.color + ' — Premium T-Shirt Pakistan" width="400" height="533" loading="' + (p.id===1?'eager':'lazy') + '" itemprop="image">';
    var badge = p.badge ? '<div class="cbadge' + (p.badge==='NEW'||p.badge==='NEW ARRIVAL'?' is-new':'') + '">' + p.badge + '</div>' : '';
    var szBtns = SIZES.map(function(s){
      return '<button class="sz' + (selSz[p.id]===s?' on':'') + '" data-pid="' + p.id + '" data-size="' + s + '" onclick="pickSz(' + p.id + ',\'' + s + '\')" aria-label="Size ' + s + '">' + s + '</button>';
    }).join('');

    return '<article class="card" data-pid="' + p.id + '" role="listitem" itemscope itemtype="https://schema.org/Product">' +
      '<meta itemprop="name" content="Andaaz ' + p.name + ' ' + p.color + '">' +
      '<meta itemprop="sku" content="' + p.sku + '">' +
      '<div class="cimg">' + imgs + badge +
      '<div class="cimg-overlay"><button class="quick-wa" onclick="quickWA(\'' + p.name + '\',\'' + p.color + '\',' + priceVal + ',' + isUSD + ')">Quick Order \uD83D\uDCF1</button></div></div>' +
      '<div class="cbody">' +
      '<h3 class="cname" itemprop="name">Andaaz ' + p.name + '</h3>' +
      '<p class="cmeta">' + p.color + ' \u00b7 Oversized fit</p>' +
      '<p class="cdesc" itemprop="description">' + p.desc + '</p>' +
      '<div class="card-divider"></div>' +
      '<div class="sizes" role="group" aria-label="Select size">' + szBtns + '</div>' +
      '<div class="cfoot" itemprop="offers" itemscope itemtype="https://schema.org/Offer">' +
      '<meta itemprop="priceCurrency" content="' + (isUSD?'USD':'PKR') + '">' +
      '<meta itemprop="price" content="' + priceVal + '">' +
      '<meta itemprop="availability" content="https://schema.org/InStock">' +
      '<div class="price">' + price + '</div>' +
      '<button class="abtn" onclick="addCart(' + p.id + ',\'' + p.name + '\',\'' + p.color + '\',\'' + p.img + '\',' + priceVal + ',' + isUSD + ')">Add to Cart</button>' +
      '</div></div></article>';
  }).join('');
}
