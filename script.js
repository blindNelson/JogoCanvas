var largura, altura
var canvas, cntx
var estadoAtual, vel = 20


let Estado = {
    jogar: 0,
    jogando: 1,
    pausado: 2
}

function createCanvas(){
    canvas          = document.querySelector("#canv")
    canvas.height   = 500
    canvas.width    = largura
    cntx            = canvas.getContext("2d")
    //document.body.appendChild(canvas)
    document.addEventListener("keydown", controle)
}

function atualizar(){
    quadrado.atualiza()
}

function desenha(){
    
    /*console.log(quadrado.cor)
    cntx.fillStyle = quadrado.cor
    cntx.fillRect(quadrado.x, quadrado.y, quadrado.altura, quadrado.largura)*/
    quadrado.desenha()
}

function roda(){
    atualizar();
    desenha();
    setTimeout(100000)
}

function main(){
    largura = 500
    altura = 500
    createCanvas()
    roda()
    window.requestAnimationFrame(roda)
}

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
            //console.log("pular")
            //quadrado.pular()
        }
    }
    const movimento = Movimento[key]
    if(movimento){
        movimento()
    }
}