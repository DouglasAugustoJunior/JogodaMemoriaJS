/*_______________ RENDERIZAÇÃO HTML ________________*/
const cardBoard = document.querySelector("#cardboard"); // semelhante ao getelementbyid, pega a div cardboard
const images = ['angular.svg','aurelia.svg','backbone.svg','ember.svg','react.svg','vue.svg']; // imagens
let cardHTML = ''; //HTML das imagens
images.forEach(img => {
    cardHTML+= `
                <div class="memory-card" data-card="${img}">
                    <img class="front" src="_images/${img}">
                    <img class="back" src="_images/js-badge.svg">
                </div>
                `;
}); // monta estrutura de imagens com o vetor images
cardBoard.innerHTML = cardHTML+cardHTML; //insere estrutura na div cardBoard, tendo um par de cada
/*__________________________________________________*/

const cards = document.querySelectorAll(".memory-card"); // seleciona todos os cards
let firstCard, secondCard; // primeira e segunda carta virada
let lockCards = false; // bloqueia cartas
let pontos = 0;
cards.forEach(card => card.addEventListener('click',flipCard)); // evento de click para cada card chamando a função flipCard

function flipCard(){ // vira as cartas
    if (lockCards) return false; // se for true não permite virar
    this.classList.add("flip");
    if (!firstCard){// se a primeira carta ainda não foi preenchida
        firstCard = this; // atribui carta selecionada a variavél
        return false; //sai da função
    }
    secondCard = this; // atribui carta selecionada a variavél
    verificaCards(); // chama função para verificar se são iguais
}

function disableFlipCard(){ // impede virar mais de duas cartas
    lockCards = true;
    setTimeout(() =>{
        firstCard.classList.remove("flip"); // remove flip
        secondCard.classList.remove("flip"); // remove flip
        resetCards();
    },1000); // espera um segundo para executar, dessa forma é possível virar as duas cartas
}

function resetCards(isMatch){ //se já foi encontrado tira clique da carta
    if (isMatch){ // se já foi encontrado
        firstCard.removeEventListener('click',flipCard); //remove o evento de clique
        secondCard.removeEventListener('click',flipCard); //remove o evento de clique
        pontos++;
        verificaGanhou();
    }
    [firstCard,secondCard,lockCards] = [null,null,false]; // zera as variáveis para próxima jogada
}

function verificaCards(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card; // verifica se a primeira é igual a segunda
    !isMatch ? disableFlipCard() : resetCards(isMatch); // verifica se é verdadeiro, se não desabilita e reseta as cartas
}

(function shuflle(){ //deixa cartas aleatórias
    cards.forEach(card => {
        let random = Math.floor(Math.random()*12); // math.floor arredonda| math.random gera numero aleatório de 0 a 1| * 12 para gerar números de 0 a 11
        card.style.order = random; // define a ordem da carta pelo css com variável aleatória
    })
})()

function verificaGanhou(){
    if (pontos>=6){// verifica se os 6 pares foram encontrados
        setTimeout(() =>{
            alert('Parabéns! Você venceu!');
            window.location.reload();
        },1000);    
    }   
}