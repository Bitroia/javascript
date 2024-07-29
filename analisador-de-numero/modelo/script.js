var numero = document.getElementById('itxtnum') //relacionando a variavel com a txtnum
var select = document.querySelector('select') //relacionando o select com a variavel criada
var options = Array.from(select.options) //convertendo a lista de opções do select em um array
var res = document.getElementById('res')

function adicionar(){
    
    num = Number(numero.value) //convertendo pra numero
    if (num >=1 && num <= 100){ //aplicando condicional de 1 a 100
        var numeroJaAdicionado = options.some(option => option.value == num) //o metodo some verifica se o numero ja esta presente nas opções
        if(numeroJaAdicionado){
            alert('O número já foi adicionado.')
        }else {
            var item = document.createElement('option') //criando variavel item e relacionando ela com a criação de um item
            item.text = `O número adicionado foi ${num}` //mostrando qual numero foi add
            item.value = num; //definindo o valor do item para facilitar a verificação
            select.appendChild(item) //adicionando o item no select
        }
    } else {
        alert('Por favor, insira um número entre 1 e 100!')
    }

    //Limpando o campo de entrada e retornando o foco para ele 
    numero.value =''
    numero.focus()
}

function finalizar(){
    var select = document.querySelector('select')
    var options = Array.from(select.options)

    if (options.length === 0){
        alert('Nenhum número foi adicionado.')
        return
    }

    var numeros = options.map(option => Number(option.value))
    var maiorValor = Math.max(...numeros)
    var menorValor = Math.min(...numeros)
    var soma = numeros.reduce((acc,num) => acc + num, 0)
    var media = soma/numeros.length
    var quantidadeNum = numeros.length
    
    res.innerHTML=`Ao todo, temos ${quantidadeNum} números. <br>
    O menor número é ${menorValor}. <br>
    O maior número é ${maiorValor}. <br>
    A soma de todos os números é ${soma}. <br>
    A média de todos os números é ${media.toFixed(2)}.`
}