const quadrado = {
    qx:0,qy:450,
    qCor:"#FF0000",
    qAltura:50,qLargura:50,
    fPulo:25.6,velQueda:0,fg:1.6,

    atualiza:function(){
        this.cair()
        console.log("atualizando")
    },
    cair:function(){
        console.log("no ar")
        if(this.velQueda!=0){
        this.velQueda += this.fg
        this.qy += this.velQueda
        }
        else
            console.log("não vai!!!")
        
    },
    pular:function(){
        console.log("pulando")
        if(this.velQueda==0){
            this.velQueda = -this.fPulo
        }
        else
            console.log("fracassou")
    },

    desenha:function(){
        draw(this.qx,this.qy,this.qAltura,this.qLargura,this.qCor)
    }
}