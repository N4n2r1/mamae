const listaFrases = [
    "Uma das melhores festas que já tive",
    "Você deu tudo de si pra me levar no sushi",
    "Mesmo sem dinheiro, a gente foi no restaurante que eu queria!",
    "Estamos juntas em qualquer momento",
    "Tirando fotinha antes de sair",
    "Tem que dar uma zoada 😝",
    "Maceió, você amou ir lá!",
    "Você e seu filho querido dormindo juntos",
    "O Pietro no dia que levou picada",
    "Nossa viagem à Monte Verde, que lugar lindo!",
    "Melhor dia da minha vida!",
    "Você sempre faz de tudo por mim...",
    "Minha festa no Magos e Magias!",
    "Nosso passeio de balão, você tava bem feliz! (e o sol batendo na nossa cara)",
    "O dia que o menino deu em cima de mim em russo kkkkk",
    "Eu te amo muito mamãe, você sempre esteve junto comigo nos bons e maus momentos e eu te amo mais que qualquer coisa nesse mundo! ❤️"
];

const listaImg = [
    "/fotos/aniversario_16.jpeg",
    "/fotos/banheiro_SS_horiz.jpeg",
    "/fotos/banheiro_SS_vertic.jpeg",
    "/fotos/casamento.jpeg",
    "/fotos/corpete_preto.jpeg",
    "/fotos/foto_zoada.jpeg",
    "/fotos/maceio.jpeg",
    "/fotos/mamae_jonas.jpeg",
    "/fotos/mamae_pietro.jpeg",
    "/fotos/mamae_russa.jpeg",
    "/fotos/niver15_ladoFora.jpeg",
    "/fotos/niver15_ladoDentro.jpeg",
    "/fotos/niver17.jpeg",
    "/fotos/passeio_balao.jpeg",
    "/fotos/show_IM.jpeg",
    "/fotos/vestido_preto.jpeg"
];

// ... (mantenha suas listas listaFrases e listaImg no topo)

const fraseElemento = document.getElementById('frase');
const imagemElemento = document.getElementById('imagem');
const progressFill = document.getElementById('progress-fill');
const tempoAtualTxt = document.getElementById('tempo-atual');
const tempoTotalTxt = document.getElementById('tempo-total');

const meuAudio = new Audio('WW.mp3');
let musicaIniciada = false;
let indiceAtual = 0;
let totalFotos = listaFrases.length;

// Inicializa a duração no player
meuAudio.addEventListener('loadedmetadata', () => {
    tempoTotalTxt.textContent = formatarTempo(meuAudio.duration);
});

// Atualiza a barra de progresso enquanto a música toca
meuAudio.addEventListener('timeupdate', () => {
    const percent = (meuAudio.currentTime / meuAudio.duration) * 100;
    progressFill.style.width = percent + "%";
    tempoAtualTxt.textContent = formatarTempo(meuAudio.currentTime);
});

function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min}:${seg < 10 ? '0' : ''}${seg}`;
}

function proximafoto() {
    if (!musicaIniciada) {
        musicaIniciada = true;
        meuAudio.play();
        document.getElementById('visualizer').style.display = 'flex';
        // Chuva de corações inicial
        for(let i = 0; i < 20; i++) setTimeout(soltarCoracoes, i * 100);
    }

    soltarCoracoes();
    imagemElemento.style.opacity = "0"; // Fade out simples
    
    setTimeout(() => {
        indiceAtual = (indiceAtual + 1) % totalFotos;
        fraseElemento.textContent = listaFrases[indiceAtual];
        imagemElemento.src = listaImg[indiceAtual];
        imagemElemento.style.opacity = "1"; // Fade in
    }, 400);
}

function soltarCoracoes() {
    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerText = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
}

// Iniciar primeiro conteúdo
fraseElemento.textContent = listaFrases[0];
imagemElemento.src = listaImg[0];