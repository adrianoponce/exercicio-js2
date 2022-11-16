function Altura(){
    //recebe valores
    let valor1 = document.getElementById('n1').value
    //multiplica os valores
    let total = (72.7 * parseFloat(valor1)) - 58
    document.getElementById('resposta').innerHTML = total
}