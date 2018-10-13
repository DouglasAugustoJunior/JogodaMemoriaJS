
#[Douglas Augusto](http://github.com/DouglasAugustoJunior)- Outros projetos. # 
 
 
![VERSÃO DO SW](https://img.shields.io/badge/Version-1.0-blue.svg)
 
![LINGUAGEM FINALIDADE](https://img.shields.io/badge/JavaScript-game-orange.svg)
 
O **Jogo da memória** é um projeto simples que utilizei para aprimorar meus conhecimentos em JS.

![Imagem](https://github.com/DouglasAugustoJunior/JogodaMemoriaJS/blob/master/_images/Game.PNG?raw=true)

![Imagem](https://github.com/DouglasAugustoJunior/JogodaMemoriaJS/blob/master/_images/Game_venceu.PNG?raw=true)


 
Desenvolvido em HTML5,CSS3 e JS, ele traz diversas situações interessantes para utilizar diversos recursos.
 
## Interação com o usuário
 
O evento do clique, aciona a função de flip:

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

 
##Verificação do fim do jogo
 
Ao encontrar todos os pares a função verficaGanhou realiza o reload:

       function verificaGanhou(){
        if (pontos>=6){// verifica se os 6 pares foram encontrados
            setTimeout(() =>{
                alert('Parabéns! Você venceu!');
                window.location.reload();
            },1000);    
        }   
    }

 
## Front-end
 

     #cardboard{
        width: 640px;
        height: 640px;
        margin: auto; /* alinha ao centro */
        display: flex;
        flex-wrap: wrap;
    }
    
    .memory-card{
        width: calc(25% - 10px); /* ajusta imagens dentro do espaço do card */
        height: 33%;
        margin: 5px;
        position: relative;
        transform-style: preserve-3d; /*efeito 3D para girar*/
        transition: 0.3s; /* delay no giro do card */
    }
    
    .memory-card:active{
        transform: scale(0.97); /* animação de click */
    }
    
    .memory-card.flip{
        transform: rotateY(180deg); /* gira card 180° */
    }
    
    .front,
    .back{
        width: 100%;
        height: 100%;
        background: #675a10;
        position: absolute;
        padding: 20px;
    }
    
    .front{
        transform: rotateY(180deg); /* efeito de rotação do card 3D na imagem js (verso do card) */
    }

 
 
Para mais informações acesse [meus repositórios](http://github.com/DouglasAugustoJunior).