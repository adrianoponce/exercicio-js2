function Altura(){
    //recebe valores
    let valor1 = document.getElementById('n1').value
    //multiplica os valores
    let total1 = (72.7 * parseFloat(valor1)) - 58
    let total2 = (62.1 * parseFloat(valor1)) - 44.7
    document.getElementById('resposta').innerHTML = "Homens: " + total1 + " - Mulheres: " + total2
}