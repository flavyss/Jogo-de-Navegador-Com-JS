//variaveis nescessarias para o funcionamento do jogo
let aviso = document.querySelector('.aviso')
let avisoBtn = document.querySelector('.aviso button')
let ball = document.querySelector('.person')
let inimigo = document.querySelector('.inimigo')
let campo = document.querySelector('campo')
let sound = document.querySelector('.sound')
let body = document.querySelector("body")
let pontos = document.querySelector(".pontos")
let count = 0

//iniciando o jogo após clickar no botão
avisoBtn.addEventListener("click", () => {

    aviso.style.display = 'none' // apagando o aviso
    inimigo.classList.add('cestaAnimar') // animando a cesta
    
    //iniciando o audio do jogo
    sound.innerHTML=`<audio src="sound/odt.mp3" autoplay loop></audio>`
    
    //criando função pra fazer o personagem pular
    let pula = () => {  
    
        if(ball.classList != 'ballanimar'){
            ball.classList.add('ballanimar')
        }
        
    
        setTimeout(() => {
            ball.classList.remove('ballanimar')
        }, 700)
    
        //contador de pontos
        pontos.innerHTML = `<h2>Pontos: `+ count +`</h2>`
        count ++

    }

    //Acionar a bola quando apertar na tela [controle para mobile]
    body.addEventListener('click', () => {
        pula()
    })

    //Acionar a bola quando apertar a tecla de espaço [controle para pc]
    body.addEventListener('keydown', function(e) {        
        if(e.keyCode == 32){       
            pula()
        }
    });

    //testando colisão
    
    let testarColisao = setInterval( () => {
    
        //validando a bola
        let validabola = parseInt(
            window.getComputedStyle(ball).getPropertyValue('margin-bottom')
        )

        //validando o inimigo
        let validainimigo = parseInt(
            window.getComputedStyle(inimigo).getPropertyValue('left')
        )
    
        //aplicando condição da colisão 
        if(validainimigo <= -575 && validabola == 0){
          
            inimigo.style.animation = 'none'
            alert('você perdeu sua pontuação foi: '+ (count - 1))
            document.location.reload(true);
        
        }
     
    }, 10)
})
