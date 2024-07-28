function Carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('foto').querySelector('img');
    var data = new Date();
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 13) {
        //BOM DIA
        img.scr = 'imagens/manha.wepb'
        document.body.style.background = '#d4c490'
    } else if (hora >= 13 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.webp'
        document.body.style.background ='#cd3b02'
    } else {
        //BOA NOITE
        img.src = 'imagens/noite.webp'
        document.body.style.background = '#171d30'
    }
}




