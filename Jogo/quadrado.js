const quadrado = {
    qx:0,qy:450,
    qCor:"#FF0000",
    qAltura:50,qLargura:50,
    fPulo:25.6,velQueda:0,fg:1.6,

    atualiza:function(){

        //atualiza a posição do quadrado na tela
        this.cair()
        console.log("quadrado.atualiza()")          //registra na tela

    },

    cair:function(){
        console.log("quadrado.cair()")              //registra na tela

        if(this.velQueda!=0){

        this.velQueda += this.fg
        this.qy += this.velQueda
        
        }
        else
            console.log("quadrado.cair() - erro")   //registra na tela
        
    },

    pular:function(){
        if(this.velQueda==0){

        this.velQueda = -this.fPulo
        console.log("quadrado.pula()")              //registra na tela

        }

        else
            console.log("quadrado.pula() - erro")   //registra na tela

    },

    desenha:function(){

        draw(this.qx,this.qy,this.qAltura,this.qLargura,this.qCor)
    
    }
}