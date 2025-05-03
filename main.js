// Carrinho de Compras
const cart = [];

// Referências do carrinho e modal
const cartBtn = document.querySelectorAll('.carrinho-btn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.querySelector('.close-cart');
const cartItems = document.getElementById('cartItems');
const finalizarCompra = document.getElementById('finalizarCompra');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

// Atualizar lista do carrinho
// Atualizar lista do carrinho
function updateCart() {
  cartItems.innerHTML = '';
  
  if (cart.length > 0) {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `${item.nome} - ${item.quantidade} unidades <span><img src="assets/trash.png" class="remover-item"></span>`;
      cartItems.appendChild(li);
    });
  } else {
    const li = document.createElement('li');
    li.innerHTML = `<p>Sem itens</p>`;
    cartItems.appendChild(li);
  }
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

  const whatsappLink = `https://api.whatsapp.com/send?phone=SEUNUMERO&text=${encodeURIComponent(mensagem)}`;
  window.open(whatsappLink, '_blank');
});

// Função para atualizar os botões de adicionar e comprar
function atualizarBotoes(btnAdicionar, btnComprar, quantidade) {
  if (quantidade > 0) {
    btnAdicionar.disabled = false;
    btnComprar.disabled = false;
  } else {
    btnAdicionar.disabled = true;
    btnComprar.disabled = true;
  }
}

// Função para adicionar item ao carrinho
function adicionarAoCarrinho(nome, quantidade) {
  const itemExistente = cart.find(item => item.nome === nome);
  if (itemExistente) {
    itemExistente.quantidade += quantidade;
  } else {
    cart.push({ nome, quantidade });
  }
  updateCart();
}

// Lógica para incrementar e decrementar a quantidade dos produtos
const produtos = document.querySelectorAll('.produto-card');
produtos.forEach(produto => {
  const quantidadeDisplay = produto.querySelector('.quantidade');
  const btnDecremento = produto.querySelector('.btn-decremento');
  const btnIncremento = produto.querySelector('.btn-incremento');
  const btnAdicionar = produto.querySelector('.btn-adicionar');
  const btnComprar = produto.querySelector('.btn-comprar');
  let quantidade = 0;

  // Decrementar quantidade
  btnDecremento.addEventListener('click', () => {
    if (quantidade > 0) {
      quantidade--;
      quantidadeDisplay.textContent = quantidade;
      atualizarBotoes(btnAdicionar, btnComprar, quantidade);
    }
  });

  // Incrementar quantidade
  btnIncremento.addEventListener('click', () => {
    quantidade++;
    quantidadeDisplay.textContent = quantidade;
    atualizarBotoes(btnAdicionar, btnComprar, quantidade);
  });

  // Adicionar item ao carrinho
  btnAdicionar.addEventListener('click', () => {
    const h3 = produto.querySelector('h3');
    const nomeProduto = Array.from(h3.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE) // pega só os textos "puros"
      .map(node => node.textContent.trim())             // limpa espaços extras
      .join(' ');                                        // junta se houver mais de um trecho de texto
  
    adicionarAoCarrinho(nomeProduto, quantidade);
  });
  

  // Comprar item diretamente via WhatsApp
  btnComprar.addEventListener('click', () => {
    const mensagem = `# Pedido: ${produto.querySelector('h3').textContent} - ${quantidade} unidades`;
    const whatsappLink = `https://api.whatsapp.com/send?phone=SEUNUMERO&text=${encodeURIComponent(mensagem)}`;
    window.open(whatsappLink, '_blank');
  });
});

// Remover item do carrinho
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('remover-item')) {
    const li = e.target.closest('li'); // pega o <li> que contém o item
    const nomeItem = li.textContent.split(' - ')[0].trim(); // isola o nome

    const index = cart.findIndex(item => item.nome === nomeItem);
    if (index !== -1) {
      cart.splice(index, 1); // remove item
      updateCart(); // atualiza a lista
    }
  }
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
  window.scrollTo({ top: 0, behavior: "smooth" });
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

// Mostrar/esconder botão de scroll-top
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});