function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        imagem.src = 'imgs/fotomanha.jpg'
        document.body.style.backgroundColor = '#FFF07A'
    } else if (hora >= 12 && hora < 18) {
        imagem.src = 'imgs/tarde.jpg'
        document.body.style.backgroundColor = '#FF644A'
        //Boa tarde
    } else {
        imagem.src = 'imgs/noite.jpg'
        document.body.style.backgroundColor = 'black'
        //Boa noite
    }
}