let valores = [9,4,3,1,5,0]
valores.sort()
/*console.log(valores)

console.log(valores[0])

for (pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}*/

for (pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}