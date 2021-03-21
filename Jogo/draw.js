function draw(x, y, altura, largura, cor) {
    //console.log(`desenhou x:${x} y:${y} alt:${altura} larg:${largura} cor:${cor}`)
    cntx.fillStyle = cor;
    cntx.fillRect(x, y, altura, largura)
}