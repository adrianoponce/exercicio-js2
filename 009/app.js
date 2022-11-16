function Calcular(){
    //recebe valores
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    //multiplica os valores
    let total = parseFloat(valor1) * parseFloat(valor2)
    let total_IR = (parseFloat(total) * 11) / 100
    let total_INSS = (parseFloat(total) * 8) / 100
    let total_Sind = (parseFloat(total) * 5) / 100
    let total_Liq = total - total_IR - total_INSS - total_Sind
    document.getElementById('resposta').innerHTML = "Bruto: " + total + " - Líquido: " + total_Liq + " - IR: " + total_IR + " - INSS: " + total_INSS + " - Sindicato: " + total_Sind
}