var v = 1
var opt = 1

if (opt == 0) {
    testeWhile()
} else {
    testeDoWhile()
}


function testeWhile() {
    console.log(`While`)
    while (v <= 10) {
        console.log(`Passo ${v}`)
        v++
    }
}

function testeDoWhile() {
    console.log(`Do while`)
    do {
        console.log(`Passo ${v}`)
        v++
    } while (v <= 10)
}

