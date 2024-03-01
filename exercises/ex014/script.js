var title = window.document.querySelector('h1#title')
var principal = window.document.querySelector('div#principal')
var content = window.document.querySelector('div#content')
var area = window.document.getElementById('area')
var hour = new Date().getHours()

title.innerHTML = `Hora Atual`


if (hour < 12) {
    principal.innerHTML = `<h3>Bom dia! são ${hour}h da manhã.</h3>`
    content.innerHTML = `<img src="images/morning.jpg" alt="Manhã">`
    area.style.background = '#0099ff'
} else if (hour < 18) {
    principal.innerHTML = `<h3>Boa tarde! são ${hour}h da tarde.</h3>`
    content.innerHTML = `<img src="images/afternoon.jpg" alt="Manhã">`
    area.style.background = '#d34a28'
} else {
    principal.innerHTML = `<h3>Boa noite! são ${hour}h da noite.</h3>`
    content.innerHTML = `<img src="images/night.jpg" alt="Manhã">`
    area.style.background = '#241d31'
}