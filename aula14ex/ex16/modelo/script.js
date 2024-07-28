function contar() {
    let inicio = document.getElementById('itxtinicio')
    let fim = document.getElementById('itxtfim')
    let passo = document.getElementById('itxtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <=0){
            window.alert('Passo inválido! Considerando passo 1')
            p =1;
        }

        if (i < f) {
            //Contagem crescente
            for (let contador = i; contador <= f; contador += p){
                res.innerHTML += `${contador} \u{1F449}`  //Emoji apontando >
            }
        } else {
            //Contagem decrescente 
            for (let contador = i; contador >= f; contador -= p){
                res.innerHTML += `${contador} \u{1F449}` //Emoji apontando >
            }
        }

        res.innerHTML += `\u{1F3C1}` //Emoji de Bandeira

    }   
}





