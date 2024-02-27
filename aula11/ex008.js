var velPadrao = 80
var velocidad = 110.2

if (velocidad > velPadrao) {
    var multa = 5*(velocidad - velPadrao)

    console.log(`A velocidade permitida é de ${velPadrao}Km/h e você ultrapassou.`)
    console.log(`Você será multado em R$ 5 a cada Km/k acima do permitido`)
    console.log(`Sua multa é de R$${multa.toFixed(2)}`)
}
console.log(`Por favor mantenha sempre o cinto afivelado, tenham uma ótima viagem.`)