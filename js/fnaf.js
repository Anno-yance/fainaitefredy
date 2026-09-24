const segmentojogo = document.getElementById("segmentojogo");
const loading = document.getElementById("loading");
const grupoMenu = {
    menu: document.getElementById("menu"),
    menumusica: new Audio("sons/darkness music.wav"),
    fundomenu: document.getElementById("fundomenu"),
    referencias: document.getElementById("referencias"),
    butoesmenu: document.getElementById("butoesmenu"),
    voltarref: document.getElementById("voltarref"),
    voltarcred: document.getElementById("voltarcred"),
    creditos: document.getElementById("creditos"),
    vermelhoref: document.getElementById("vermelhorref"),
    vermelhocred: document.getElementById("vermelhocred")
}

grupoMenu.menumusica.loop=true

document.addEventListener('click', iniciarMusicaMenu);

function iniciarMusicaMenu() {
    grupoMenu.menumusica.play().catch(erro => console.log("Aguardando clique", erro));
    document.removeEventListener('click', iniciarMusicaMenu);
}

document.addEventListener("dragstart", function(evento) {
    if (evento.target.tagName === "IMG") {
        evento.preventDefault();
    }
});

document.getElementById("refferences").addEventListener("click", function(){
    sonsMonitor.blip.play()
    grupoMenu.butoesmenu.style.display='none'
    grupoMenu.referencias.style.display='flex'
})

document.getElementById("credits").addEventListener("click", function(){
    sonsMonitor.blip.play()
    grupoMenu.butoesmenu.style.display='none'
    grupoMenu.creditos.style.display='flex'
})

grupoMenu.voltarref.addEventListener("click", function(){
    sonsMonitor.blip.play()
    grupoMenu.butoesmenu.style.display='flex'
    grupoMenu.referencias.style.display='none'
    grupoMenu.creditos.style.display='none'
})

grupoMenu.voltarref.addEventListener("mouseenter", function(){
    grupoMenu.voltarref.textContent = "> Voltar";
})

grupoMenu.voltarref.addEventListener("mouseleave", function(){
    grupoMenu.voltarref.textContent = "Voltar";
})

grupoMenu.voltarcred.addEventListener("click", function(){
    sonsMonitor.blip.play()
    grupoMenu.butoesmenu.style.display='flex'
    grupoMenu.referencias.style.display='none'
    grupoMenu.creditos.style.display='none'
})

grupoMenu.voltarcred.addEventListener("mouseenter", function(){
    grupoMenu.voltarcred.textContent = "> Voltar";
})

grupoMenu.voltarcred.addEventListener("mouseleave", function(){
    grupoMenu.voltarcred.textContent = "Voltar";
})

document.getElementById("newGame").addEventListener("click", function(){
    clearInterval(intervaloPesada)
    intervaloPesada = setInterval(animarPesada, 75)
    sonsMonitor.blip.play()
    grupoMenu.menu.style.display='none'
    loading.style.display='flex'
    grupoMenu.menumusica.loop=false;
    grupoMenu.menumusica.pause();
    grupoEstatica.estatica.style.display='none'
    grupoEstatica.pesada.style.opacity='1'
    setTimeout(function() {
        grupoEstatica.pesada.style.display='none'
        grupoEstatica.pesada.style.opacity='0.2'
        clearInterval(intervaloPesada)
        intervaloPesada = setInterval(animarPesada, 100)
    }, 500)
    setTimeout(function() {
        loading.style.display='none'
        segmentojogo.style.display='block'
        jogoAtivo=true
        sonsSala.ventilador.play().catch(erro => console.log("Aguardando clique", erro));
        grupoMenu.menumusica.loop=false;
        grupoMenu.menumusica.pause();
        atualizarInterface(false);
    }, 3000)
})

const grupoEstatica = {
    estatica: document.getElementById("estatica"),
    pesada: document.getElementById("estaticapesada")
}

const grupoMonitor = {
    monitorbut: document.getElementById("monitorbut"),
    monitor: document.getElementById("monitor"),
    cam1: document.getElementById("a1"),
    titulo: document.getElementById("titulo"),
    texto: document.getElementById("texto"),
    fundocamera: document.getElementById("showstage"),
    titulocamera: document.getElementById("titulocamera"),
    vermelho: document.getElementById("vermelho")
}

const grupoSala = {
    sala: document.getElementById("sala"),
    ventilador: document.getElementById("ventilador"),
}

const sonsMonitor = {
    ligar: new Audio("sons/monitor.wav"),
    Desligar: new Audio("sons/put down.wav"),
    Aleatorio: new Audio("sons/monitoraleatorio.wav"),
    blip: new Audio("sons/blip3.wav")
}

const sonsSala = {
    ventilador: new Audio("sons/Buzz_Fan_Florescent2.wav"),
}

sonsSala.ventilador.loop = true;
sonsSala.ventilador.volume = 0.6;

let frameVentilador = 0;
let frameEstatica = 0;
let ultimoIndicePesada = null;

const caminhoMenu = [
    "imagens/menu/431.png",
    "imagens/menu/440.png",
    "imagens/menu/441.png",
    "imagens/menu/442.png"
]

const caminhoEstatica = [
    "imagens/estatica/12.png",
    "imagens/estatica/13.png",
    "imagens/estatica/14.png",
    "imagens/estatica/15.png",
    "imagens/estatica/16.png",
    "imagens/estatica/17.png",
    "imagens/estatica/18.png",
    "imagens/estatica/19.png"
]

const caminhoPesada = [
    "imagens/estatica/dividida1.png",
    "imagens/estatica/dividida2.png",
    "imagens/estatica/dividida3.png",
    "imagens/estatica/dividida4.png",
    "imagens/estatica/dividida5.png",
    "imagens/estatica/dividida6.png",
    "imagens/estatica/dividida7.png",
    "imagens/estatica/dividida8.png",
    "imagens/estatica/dividida9.png",
    "imagens/estatica/dividida10.png",
    "imagens/estatica/dividida11.png",
    "imagens/estatica/dividida12.png",
    "imagens/estatica/dividida13.png",
    "imagens/estatica/dividida14.png",
    "imagens/estatica/dividida15.png",
    "imagens/estatica/dividida16.png"
]

const dadosCameras = [
    {id: "a1", imagem:"imagens/cameras/showstage.png", titulocamera: "Show Stage",titulo: "Autoria Web - Introducao", texto: "​A autoria web e uma subarea da computacao a qual consiste na criacao, desenvolvimento, estruturacao e publicacao de conteudos e aplicacoes para a World Wide Web (WWW), podendo acessar sites e apps apos evoluir. Ela envolve o uso de linguagens de marcacao, estilizacao e programacao para interatividade, alem de principios de design e outros para definir uma acessibilidade satisfatoria, garantindo que uma pagina funcione em diferentes navegadores, de forma eficiente, segura e pratica."},
    {id: "a2", imagem:"imagens/cameras/dininghall.png", titulocamera: "Dining Hall", titulo: "HTML - Basico", texto: "O HTML (HyperText Markup Language) trata-se de uma linguagem de marcacao utilizada para preparar a estrutura do site, utilizando o que chamamos de tags (, , ) para determinar o que aparecera naquela pagina, mas de forma que nao esteja sempre 'esteticamente bonito'; e como se fosse o esqueleto ou a carcaca que precisamos que esteja na pagina."},
    {id: "a3", imagem:"imagens/cameras/piratescove.png", titulocamera: "Pirate's Cove", titulo: "CSS - Basico", texto: "O CSS (Cascading Style Sheets) e a linguagem de folhas de estilo que descrevera a parte visual da pagina marcada pelo HTML, adicionando cores, fontes, espacamentos, layout e ate mesmo a forma como o site se adapta em dispositivos diferentes. Com ele, conseguimos adicionar roupas e acessorios para o que antes era apenas uma carcaca."},
    {id: "a4", imagem:"imagens/cameras/easthall.png", titulocamera: "East Hall", titulo: "JavaScript - Basico", texto: "O JavaScript sera a linguagem de programacao de alto nivel que ira motorizar e trazer comportamento dinamico para nossas paginas web. Diante disso, ele podera manipular HTML e CSS em tempo real, responder a acoes do usuario e impor requisicoes e outros comandos sem precisar atualizar a pagina, garantindo o funcionamento quase que completo de um site ou app."}
]

const caminhoVentilador = [
    "imagens/ventilador/1.png",
    "imagens/ventilador/2.png",
    "imagens/ventilador/3.png"
];

function flashMenu() {
    const tempoAleatorio = 1000 + Math.floor(Math.random() * 10000)
    let indiceMenuSorteado;
    indiceMenuSorteado = Math.floor(Math.random() * 3) + 1
    grupoMenu.fundomenu.src = caminhoMenu[indiceMenuSorteado]
    setTimeout(function() {
        grupoMenu.fundomenu.src = caminhoMenu[0]
    }, 250)
    setTimeout(flashMenu, tempoAleatorio)
}

flashMenu();

function animarEstatica() {
    frameEstatica = (frameEstatica + 1) % 8;
    grupoEstatica.estatica.src = caminhoEstatica[frameEstatica]
}

function animarPesada() {
    let indiceSorteado;
    do {indiceSorteado = Math.floor(Math.random() * caminhoPesada.length)} while (indiceSorteado === ultimoIndicePesada)
    grupoEstatica.pesada.src = caminhoPesada[indiceSorteado]
    ultimoIndicePesada = indiceSorteado
}

function animarVentilador() {
    if (!jogoAtivo) return;
    frameVentilador = (frameVentilador + 1) % 3;
    grupoSala.ventilador.src = caminhoVentilador[frameVentilador]
}

setInterval (animarVentilador, 25)
setInterval (animarEstatica, 100)
let intervaloPesada = setInterval (animarPesada, 100)

const sonsAmbiente = [
    {caminho: "sons/running fast3.wav", peso: 45},
    {caminho: "sons/pirate song2.wav", peso: 10},
    {caminho: "sons/whispering2.wav", peso: 25},
    {caminho: "sons/circus.wav",  peso: 10},
]

const sonsAmbienteObjetos = sonsAmbiente.map(som => ({ audio: new Audio (som.caminho), peso: som.peso}));

let jogoAtivo = false
let estaLigado = false;
let IntervaloAleatorio = null;
let volumeAmbiente = 0.8;
let somAmbienteTocando = false;
let somAmbienteAtual = null;

function sortearSomPonderado() {
    let somaTotal = 0;
    let acumulador = 0;
    let somEscolhido = null

    for (const som of sonsAmbienteObjetos) {
        somaTotal += som.peso;
    }

    const numeroSorteado = Math.floor(Math.random () * somaTotal)

    for (const som of sonsAmbienteObjetos) {
        acumulador += som.peso
        if (numeroSorteado < acumulador) {
            somEscolhido = som
            break
        }
    }

    return(somEscolhido.audio)
}

function tocarAleatorio () {
    if (!jogoAtivo) return;
    if (!somAmbienteTocando && Math.random ()<0.3) {
        somAmbienteAtual = sortearSomPonderado();

        somAmbienteAtual.currentTime = 0;
        somAmbienteAtual.volume = volumeAmbiente;

        somAmbienteTocando = true;

        somAmbienteAtual.onended = function() {
            somAmbienteTocando = false;
            somAmbienteAtual = null
        }
         somAmbienteAtual.play().catch(erro => {console.log("Autoplay desgraçado:", erro), somAmbienteTocando = false;});
    }
}

setInterval(tocarAleatorio, 5000)

function corfundo(color){
    document.body.style.background=color;
}

function tentarSom(){
    if (Math.random() <0.3) {
        sonsMonitor.Aleatorio.currentTime = 0;
        sonsMonitor.Aleatorio.play();
    }
    
}
function atualizarInterface(tocarSom = true) {
    clearInterval(IntervaloAleatorio);
    if (!jogoAtivo) return;
    if (estaLigado) {
        if (tocarSom) {
            volumeAmbiente = 0.4;
            if (somAmbienteTocando) {
                somAmbienteAtual.volume = volumeAmbiente
            }

            sonsSala.ventilador.volume = 0.3;
            sonsMonitor.Desligar.pause ();
            sonsMonitor.Desligar.currentTime = 0;

            sonsMonitor.ligar.currentTime = 0;
            sonsMonitor.ligar.play();
        }
        corfundo('black');
        grupoEstatica.estatica.style.display = 'block';
        grupoEstatica.pesada.style.display = 'block';
        grupoMonitor.monitor.style.display = 'block';
        grupoSala.sala.style.display = 'none';

        IntervaloAleatorio = setInterval(tentarSom, 5000)
    }
    else {
        if (tocarSom) {
            volumeAmbiente = 0.8;
            if (somAmbienteTocando) {
                somAmbienteAtual.volume = volumeAmbiente
            }

            sonsSala.ventilador.volume = 0.6;
            sonsMonitor.Aleatorio.pause();
            sonsMonitor.Aleatorio.currentTime = 0;

            sonsMonitor.ligar.pause();
            sonsMonitor.ligar.currentTime = 0;

            sonsMonitor.Desligar.currentTime = 0;
            sonsMonitor.Desligar.play();
        }

        corfundo('white');
        grupoEstatica.estatica.style.display = 'none';
        grupoEstatica.pesada.style.display = 'none';
        grupoMonitor.monitor.style.display = 'none';
        grupoSala.sala.style.display = 'block'
}
}

const moldura = document.getElementById("molduracamera");
let ladoCamera = "esquerda";

function moverCamera() {
    const larguraTotal = moldura.scrollWidth;
    const larguraTela = window.innerWidth;
    const sobra = larguraTotal - larguraTela;

    if (sobra > 0) {
        // 2. Alterna a direção com base no lado atual
        if (ladoCamera === "esquerda") {
            moldura.style.left = -sobra + "px";
            ladoCamera = "direita";
        } else {
            moldura.style.left = "0px";
            ladoCamera = "esquerda";
        }
    }
    
    setTimeout(moverCamera, 5500);
}

moverCamera();

let pisca = 'nada'
function vermelhopisca() {
    if (pisca === 'nada'){
        grupoMonitor.vermelho.style.display = 'none'
        grupoMenu.vermelhocred.style.display = 'none'
        grupoMenu.vermelhoref.style.display = 'none'
        pisca = 'pisca'
    }
    else {
        grupoMonitor.vermelho.style.display = 'block'
        grupoMenu.vermelhocred.style.display = 'block'
        grupoMenu.vermelhoref.style.display = 'block'
        pisca = 'nada'
    }
    setTimeout(vermelhopisca, 1000)
}

vermelhopisca()

dadosCameras.forEach(function(camera) {
    const botao = document.getElementById(camera.id);
    botao.addEventListener("click", function() {
        grupoMonitor.fundocamera.src = camera.imagem;
        grupoMonitor.texto.textContent = camera.texto;
        grupoMonitor.titulo.textContent = camera.titulo;
        grupoMonitor.titulocamera.textContent = camera.titulocamera;
        grupoEstatica.estatica.style.transition='opacity 0s'
        grupoEstatica.pesada.style.transition='opacity 0s'
        grupoEstatica.estatica.style.opacity='0.6'
        grupoEstatica.pesada.style.opacity='1'
        grupoEstatica.estatica.offsetHeight;
        grupoEstatica.pesada.offsetHeight;
        grupoEstatica.estatica.style.transition='opacity 1s'
        grupoEstatica.pesada.style.transition='opacity 1s'
        setTimeout(function() {
            grupoEstatica.estatica.style.opacity='0.4'
            grupoEstatica.pesada.style.opacity='0.2'
        }, 500)
        sonsMonitor.blip.play()

        dadosCameras.forEach(function(outraCamera) {
            const outroBotao = document.getElementById(outraCamera.id);
            outroBotao.querySelector("img").src = "imagens/cameras/167.png";
        });

        botao.querySelector("img").src = "imagens/cameras/166.png";
    })
});

grupoMonitor.monitorbut.addEventListener("mouseenter", function() {
    estaLigado = !estaLigado;
    atualizarInterface();
});

atualizarInterface(false);
