let body = ds("body")
let btn = ds(".btn_claro_oscuro")
let icon = ds(".fa-solid")
let logo = ds("#logo")
let active = ds(".active")

let tiempo = 1

function cambioTiempo(){
    tiempo++
    if(tiempo > 2){
        tiempo = 1
    }
    
    if (tiempo == 1){
        return icon.classList.add("fa-sun"),
        icon.classList.remove("fa-moon"),
        body.classList.remove("black"),
        logo.src = "img/LogoBendBlanco.png",
        btn.style.border = "2px solid #000",
        anterior.style.color = "#000",
        siguiente.style.color = "#000",
        circulos[0].style.color = "#000",
        circulos[1].style.color = "#000",
        circulos[2].style.color = "#000",
        active.style.border = "2px solid #fff"
    } else if (tiempo = 2){
        return icon.classList.add("fa-moon"),
        icon.classList.remove("fa-sun"),
        body.classList.toggle("black"),
        logo.src = "img/LogoBendNegro.png",
        btn.style.border = "2px solid #fff",
        anterior.style.color = "#fff",
        siguiente.style.color = "#fff",
        circulos[0].style.color = "#fff",
        circulos[1].style.color = "#fff",
        circulos[2].style.color = "#fff",
        active.style.border = "2px solid #000"
    }
}

btn.onclick = function(){
    return cambioTiempo()
}