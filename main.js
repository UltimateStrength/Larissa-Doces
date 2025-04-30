// Carrinho de Compras
const cart = [
    { nome: "teste", quantidade: 3 },
    { nome: "teste 2", quantidade: 5 }
  ];
  
  const cartBtn = document.querySelectorAll('.carrinho-btn');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.querySelector('.close-cart');
  const cartItems = document.getElementById('cartItems');
  const finalizarCompra = document.getElementById('finalizarCompra');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  
  // Atualizar lista do carrinho
  function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.nome} - ${item.quantidade} unidades`;
      cartItems.appendChild(li);
    });
  }
  
  // Mostrar carrinho
  cartBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      cartModal.style.display = 'block';
      updateCart();
    });
  });
  
  // Fechar carrinho
  closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });
  
  window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      cartModal.style.display = 'none';
    }
  });
  
  // Finalizar compra no WhatsApp
  finalizarCompra.addEventListener('click', () => {
    let mensagem = '# Pedido:\n';
    cart.forEach(item => {
      mensagem += `- ${item.nome} - ${item.quantidade} unidades\n`;
    });
  
    const whatsappLink = `https://api.whatsapp.com/send?phone=numero&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  });
  
  // Carrossel
  const slidesContainer = document.querySelector('.slides');
  const slides = document.querySelectorAll('.slide');
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');
  let currentIndex = 0;
  
  function updateSlide() {
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  
    document.querySelectorAll('.hud-circle').forEach((circle, index) => {
      circle.classList.toggle('active', index === currentIndex);
    });
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
  }
  
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);
  
  // Auto-slide
  setInterval(nextSlide, 5000);
  
  // Esconder/mostrar header ao rolar
  let lastScrollTop = 0;
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    header.style.top = scrollTop > lastScrollTop ? '-100px' : '0';
    lastScrollTop = scrollTop;
  });
  
  // Botão Scroll Top
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Menu Mobile
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  
  // Fechar o menu quando clicar fora dele
  window.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileNav.classList.remove('open');
    }
  });
  