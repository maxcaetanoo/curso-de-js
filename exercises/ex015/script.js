function test() {
    var date = document.querySelector('input#date')
    var dateNow = new Date().getFullYear()
    var res = document.querySelector(`div#res`)
    
    if (date.value.length == 0 || date.value > dateNow) {
        window.alert(`[Erro] - data inválida, verifique os dados e tente novamente.`)
    } else {
        var sex = document.getElementsByName(`sex`)
        var oldyear = dateNow - Number(date.value)
        var gender = ``

        if (sex[0].checked) {
            gender = `Homen`
        } else {
            gender = `Mulher`
        }
        
        res.innerHTML = `<p class='res'>Detectamos um(a) ${gender} de ${oldyear} anos</p>`
        res.style.textAlign = 'center'

        if (gender == `Homen`) {
            if (oldyear < 3) {
                res.innerHTML += `<img src="images/baby_boy.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 12) {
                res.innerHTML += `<img src="images/child_boy.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 18) {
                res.innerHTML += `<img src="images/teenage_boy.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 40) {
                res.innerHTML += `<img src="images/adult_boy.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 60) {
                res.innerHTML += `<img src="images/oldAdult_boy.jpg" alt="Image.jpg"></img>`
            } else {
                res.innerHTML += `<img src="images/old_boy.jpg" alt="Image.jpg"></img>`
            }
        } else {
            if (oldyear < 3) {
                res.innerHTML += `<img src="images/baby_girl.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 12) {
                res.innerHTML += `<img src="images/child_girl.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 18) {
                res.innerHTML += `<img src="images/teenage_girl.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 40) {
                res.innerHTML += `<img src="images/adult_girl.jpg" alt="Image.jpg"></img>`
            } else if (oldyear < 60) {
                res.innerHTML += `<img src="images/oldAdult_girl.jpg" alt="Image.jpg"></img>`
            } else {
                res.innerHTML += `<img src="images/old_girl.jpg" alt="Image.jpg"></img>`
            }
        }
    }
}