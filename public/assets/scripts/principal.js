// Lista de produtos com imagens e nomes
const produtos = [
    { nome: "Coral Elegance", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Branco Neve", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Azul Céu Claro", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Verde Floresta", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Amarelo Sol", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Cinza Urbano", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Vermelho Paixão", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Bege Areia", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Rosa Chic", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Preto Intenso", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Lilás Sereno", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Laranja Tropical", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Pêssego Doce", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Azul Royal", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Branco Perolado", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Verde Menta", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Ambar Dourado", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Caramelo Doce", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Cinza Prata", imagem: "./public/assets/images/tinta.jpg" },
    { nome: "Vinho Royale", imagem: "./public/assets/images/tinta.jpg" }
];

let index = 0;

// Função para renderizar os produtos no catálogo
function renderCatalogo() {
    const catalogo = document.getElementById('catalogo');
    catalogo.innerHTML = ""; // Limpa o conteúdo do catálogo antes de adicionar os itens

    // Adiciona 3 produtos visíveis ao catálogo
    for (let i = index; i < index + 3; i++) {
        if (produtos[i]) {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <img src="${produtos[i].imagem}" alt="${produtos[i].nome}">
                <p>${produtos[i].nome}</p>
            `;
            catalogo.appendChild(produtoDiv);
        }
    }
}

// Função para mover a visualização para a esquerda
function moverEsquerda() {
    if (index > 0) {
        index -= 3;
        renderCatalogo();
    }
}

// Função para mover a visualização para a direita
function moverDireita() {
    if (index < produtos.length - 3) {
        index += 3;
        renderCatalogo();
    }
}

// Inicializa o catálogo
renderCatalogo();
