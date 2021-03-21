/* ========================= Inicialização de variaveis e constantes ========================== */

var largura, altura
var canvas, cntx, timeout
var estadoAtual, vel = 20

const tempo = 5000;


let Estado = {
    jogar: 0,
    jogando: 1,
    pausado: 2
}

/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- 





   ========================= Criação e inicialização de elementos ========================== */

function createCanvas(){

    canvas          = document.querySelector("#canv")
    canvas.height   = 500
    canvas.width    = largura
    cntx            = canvas.getContext("2d")
    //document.body.appendChild(canvas)
    document.addEventListener("keydown", controle)

}

function main(){

    largura = 500
    altura = 500
    estadoAtual = Estado.jogando
    createCanvas()
    timeout = setInterval(roda() , 30)

    //while(estadoAtual==1) 

}

/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- 


uma ideia seria implementar um metodo apenas para fazer os frames rodarem


   ================================ Funções Importantes ===================================== */

function roda(){

    //console.log('roda()')

    //atualizar();
    //desenha();

    console.log('rodando')

    //window.requestAnimationFrame(roda);
    
}

function parar(){ timeout.clearInterval() }


/* /|\|/|\|/|\|/|\|/|\|/|\|/|\|/|\|/|\|/|\|/|\|/|\|/|\|/ */


function atualizar(){

    quadrado.atualiza()

}



function desenha(){
    
    /*console.log(quadrado.cor)
    cntx.fillStyle = quadrado.cor
    cntx.fillRect(quadrado.x, quadrado.y, quadrado.altura, quadrado.largura)*/


    quadrado.desenha()
}

/* +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- 





   ====================================== Listenners ======================================== */

function controle(event){

    const key = event.key
    window.requestAnimationFrame(roda) 
    
    cntx.clearRect(0, 0, canvas.width, canvas.height);

    console.log("tecla:"+key)

    const Movimento = {
        ArrowLeft:function(){
            if(quadrado.qx-vel >= 0)                            {quadrado.qx-=vel}
        },
        ArrowRight:function(){
            if(quadrado.qx+vel <= largura - quadrado.qLargura)  {quadrado.qx+=vel}
        },
        ArrowUp:function(){
            console.log("pular")
            quadrado.pular()
        }
    }
    const movimento = Movimento[key]
    if(movimento){
        movimento()
    }
}