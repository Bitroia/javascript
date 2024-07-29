function gerarTabuada(){
    var numero = document.getElementById('itxtnum')
    var res = document.getElementById('res')
    var tabuada = document.getElementById('itabuada')

    if(numero.value.length == 0){
        window.alert('Invalido, insira um número')
    } else {
        var n = Number(numero.value)
        var contador = 1
        tabuada.innerHTML = ''

        while(contador <=10){
            var item = document.createElement('option')
            item.text = `${n}x${contador} = ${n*contador}`
            item.value = `tabuada${contador}`
            tabuada.appendChild(item)
            contador++
        }
    }

    
}