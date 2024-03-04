function cont() {
    var init = window.document.querySelector(`input#init`)
    var end = window.document.querySelector(`input#end`)
    var step = window.document.querySelector(`input#step`)
    var res = window.document.querySelector(`div#res`)
    var conter = 0

    if (init.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = `Não foi possivel calcular!`

    } else {
        res.innerHTML = `Contando: `
        
        var i = Number(init.value)
        var e = Number(end.value)
        var s = Number(step.value)

        if (i > e) {
            if (s == 0) {
                alert(`[Erro] valor de passos não pode ser ${s}, alterando para 1`)
                s = 1

            }

            contNegative(i, e, s, res)

        } else {
            if (s == 0) {
                alert(`[Erro] valor de passos não pode ser ${s}, alterando para 1`)
                s = 1
                
            }

            contPositive(i, e, s, res)
        }
    }
}

function contPositive(i, e, s, res) {
    for (let c = i; c <= e; c += s) {
        if (c == e) {
            res.innerHTML += `${c} &#127988; `
        } else {
            res.innerHTML += `${c} &#128073; `
        }
        
    }
    
    
}

function contNegative(i, e, s, res) {
    for (let c = i; e <= c; c -= s) {
        if (c == e) {
            res.innerHTML += `${c} &#127988; `
        } else {
            res.innerHTML += `${c} &#128073; `
        }
    }
    
}