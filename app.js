// localização e horario
const localHorar = [
    {
        id: 1,
        nome: "Localização",
        img: "img/martminas.jpeg",
        rua: "Avenida Edmeia Matos Lazarotti",
        numero: 3152,
        bairro: "Ingá",
        cidade: "Betim",
        local: "Estacionamento do supermercado MartMinas"
    },
    {
        id: 2,
        nome: "Horário de funcionamento",
        img: "img/horario.png",
        inic: "07:30",
        term: "21:00"
    },
]

//salgados
const listaDeSalgados = [
    // Salgado 1: Coxinha
    {
        codigo: 1, // Um ID simples para achar o salgado
        nome: "Coxinha",
        texto: "Aquela coxinha cremosa com frango super temperado.",
        tipo: "Frito",
        preco: "R$ 6,50",
        foto: "img/salgado(1).png"
    },
    // Salgado 2: Maravilhas
    {
        codigo: 2,
        nome: "Maravilha",
        texto: "Bolinha crocante por fora e recheada por dentro.",
        tipo: "Frito",
        preco: "R$ 6,50",
        foto: "img/salgado(2).png"
    },
    // Salgado 3: Esfiha
    {
        codigo: 3,
        nome: "Esfirra",
        texto: "Esfihas de carne, frango e queijo com presunto.",
        tipo: "Assado",
        preco: "R$ 6,50",
        foto: "img/salgado(3).png"
    },
    // Salgado 4: Empada
    {
        codigo: 4,
        nome: "Empada",
        texto: "Nossa famosa empada de frango desfiado.",
        tipo: "Assado",
        preco: "R$ 6,50",
        foto: "img/salgado(4).png"
    }
];

//index.html

const lugarDosSalgados = document.querySelector(".row.justify-content-center"); // Procura o local na página onde os salgados devem aparecer
function montarCardapioNaHome() { // Esta função monta os quadros (cards) na página principal

    listaDeSalgados.forEach(salgado => { // Para cada item da nossa lista (listaDeSalgados)...
        const caixa = document.createElement("div"); // 1. Cria uma caixa nova (o quadro do salgado)
        caixa.classList.add("col-6", "col-md-3"); // Adiciona classes para a caixa ficar organizada e com estilo (Bootstrap)

        // 2. Coloca o conteúdo da caixa, e a ` permitem interpolação de variáveis e expressões usando ${...} dentro do texto, além de suportar múltiplas linhas sem a necessidade de caracteres especiais
        caixa.innerHTML = `
            <a href="detalhes.html?idSalgado=${salgado.codigo}">
                <img src="${salgado.foto}" class="img-fluid rounded border border-danger p-2" alt="${salgado.nome}">
            </a>
            <h5 class="text-center mt-2">${salgado.nome}</h5>
            <p class="text-center">${salgado.texto}</p>
        `;
        lugarDosSalgados.appendChild(caixa); // 3. Coloca a caixa pronta dentro do lugar na página
    });
}

// detalhes.html

function verDetalhesDoSalgado() { 
    const parametros = new URLSearchParams(window.location.search); // Pega os parâmetros que vieram na URL (ex: idSalgado=3)
    const idQueVeio = parseInt(parametros.get("idSalgado")); // Pega o número do ID (o 'codigo') que está na URL

    const salgadoDetalhe = listaDeSalgados.find(item => item.codigo === idQueVeio); // Procura na nossa lista qual salgado tem esse código

    const areaDeDetalhes = document.getElementById("detalhes-container"); // Acha a área da página para exibir os detalhes

// Monta o visual de detalhes com as informações do salgado
    areaDeDetalhes.innerHTML = `
        <div class="card mx-auto" style="max-width: 600px;">
            <img src="${salgadoDetalhe.foto}" class="card-img-top" alt="${salgadoDetalhe.nome}">
            <div class="card-body">
                <h2 class="card-title">${salgadoDetalhe.nome}</h2>
                <p>Tipo: ${salgadoDetalhe.tipo}</p>
                <p><strong>Preço:</strong> ${salgadoDetalhe.preco}</p>
                <a href="index.html" class="btn btn-danger">Voltar para o Cardápio</a>
            </div>
        </div>
    `;
}


// quando carregar a pagina, se:

// Se a página for a Home (se achar o container de salgados):
if (document.querySelector(".row.justify-content-center")) {
    montarCardapioNaHome(); // Monta a lista completa de salgados
}

// Se a página for a de Detalhes (se achar o container de detalhes):
if (document.getElementById("detalhes-container")) {
    verDetalhesDoSalgado(); // Pega o salgado da URL e mostra os detalhes dele
}










var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

var myCarousel = document.getElementById('myCarousel')

myCarousel.addEventListener('slide.bs.carousel', function () {
    slide.bs.carousel = next;
})







































const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)