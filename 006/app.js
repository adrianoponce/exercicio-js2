function ValorCombustivel(){
    //recebe valores
    let valor1 = document.getElementById('n1').value
    //multiplica os valores
    let total1 = parseFloat(valor1) / 5
    let total2 = total1 * 20
    document.getElementById('resposta').innerHTML = "litros de combustível: " + total1 + " - autonomia: " + total2 + " km"
}