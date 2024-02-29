var diaSem = new Date().getDay()
var dia

switch (diaSem) {
    case 0:
        dia = `Domingo`
        break;
    case 1:
        dia = `Segunda-feira`
        break;
    case 2:
        dia = `Terça-feira`
        break;
    case 3:
        dia = `Quarta-feira`
        break;
    case 4:
        dia = `Quinta-feira`
        break;
    case 5:
        dia = `Sexta-feira`
        break;
    case 6:
        dia = `Sabado`
        break;
}

console.log(`O dia hoje é ${dia}`)