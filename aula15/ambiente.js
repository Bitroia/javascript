var num = [9,5,8,3]
console.log(num)
/*num.push(1)
console.log(`o vetor tem ${num.length} posições`)
console.log(num[3])*/

var pos = num.indexOf(0)

if(pos == -1){
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 está na posicão ${pos}`)
}
