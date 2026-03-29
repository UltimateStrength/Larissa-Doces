# 🍬 Larissa Doces — Cardápio Online

Site de pedidos desenvolvido para uma cliente que vendia kits de festa com doces e salgados. O fluxo era simples: o cliente monta o pedido no site, adiciona itens ao carrinho e ao finalizar é redirecionado direto para o WhatsApp com a mensagem do pedido já formatada e pronta para enviar.

🔗 **[Ver o site](https://ultimatestrength.github.io/Larissa-Doces/)**

> ⚠️ Projeto descontinuado. As imagens dos produtos são todas placeholders ilustrativos — o conteúdo real nunca chegou a ser integrado.

## ✨ Funcionalidades implementadas

**Cardápio com 3 kits:**

| Kit | Para quantas pessoas |
|-----|----------------------|
| Kit Festa Pequeno | 10 a 15 pessoas |
| Kit Festa Médio | 20 a 30 pessoas |
| Kit Festa Grande | 40 a 50 pessoas |

Cada kit exibe a lista completa de doces, salgados e extras incluídos, com controle de quantidade (+ / −) e botão de adicionar ao carrinho.

**Carrinho de compras:**
- Sidebar de carrinho com lista de itens selecionados
- Botão "Finalizar Compra" que monta a mensagem do pedido e redireciona para o WhatsApp via `wa.me`

**Interface:**
- Navbar responsiva com menu hambúrguer para mobile
- Slider de banners no hero (3 imagens com navegação por setas)
- Botão flutuante de WhatsApp fixo na tela
- Footer com links para WhatsApp, Instagram e Facebook
- Scroll suave entre seções (Início, Cardápio, Contato, Sobre)

## 💡 Lógica principal

O `main.js` gerencia todo o estado do carrinho em memória — adiciona/remove itens, atualiza quantidades e, ao finalizar, serializa o pedido em texto e abre o WhatsApp com a query string `?text=` pré-preenchida. Sem backend, sem banco de dados — tudo client-side.

## 🛠️ Tecnologias

- HTML5 / CSS3
- JavaScript (vanilla)
- API do WhatsApp (`wa.me`) para redirecionamento com mensagem
- Deploy via GitHub Pages

## 📁 Estrutura

```
Larissa-Doces/
├── index.html    # Estrutura completa da página
├── style.css     # Estilização e responsividade
├── main.js       # Lógica do carrinho e integração com WhatsApp
└── assets/       # Imagens placeholder, ícones e logos
```

## 📌 Contexto

Projeto freelance iniciado para uma confeiteira — a ideia era substituir o processo manual de pedidos por WhatsApp por uma interface mais organizada onde o cliente já escolhe tudo antes de entrar em contato. O projeto foi descontinuado antes de ser entregue ao cliente.
