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

const fraseElemento = document.getElementById('frase');
const imagemElemento = document.getElementById('imagem');
const contadorElemento = document.getElementById('numero-atual');
const totalElemento = document.getElementById('total-fotos');

let indiceAtual = 0;
let totalFotos = listaFrases.length;

// Inicialização
totalElemento.textContent = totalFotos;
atualizarConteudo();

function proximafoto() {
    // Adiciona classe de animação (fade out)
    imagemElemento.classList.add('fade');
    
    // Espera 400ms (tempo da transição CSS) para trocar a imagem
    setTimeout(() => {
        if (indiceAtual < totalFotos - 1) {
            indiceAtual++;
        } else {
            indiceAtual = 0;
        }
        
        atualizarConteudo();
        
        // Remove a classe de animação (fade in)
        imagemElemento.classList.remove('fade');
    }, 400);
}

function atualizarConteudo() {
    fraseElemento.textContent = listaFrases[indiceAtual];
    imagemElemento.src = listaImg[indiceAtual];
    contadorElemento.textContent = indiceAtual + 1;
}