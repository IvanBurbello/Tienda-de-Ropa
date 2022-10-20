function ds(id){
    return document.querySelector(id)
}
function dsA(id){
    return document.querySelectorAll(id)
}

let imgs = ds(".fotos")
let anterior = ds(".anterior")
let siguiente = ds(".siguiente")
let circulos = dsA(".circle")

let num = 1

function adelante(){
    num++
    if (num > 3){
        num = 1
    }
    imgs.src = "img/foto" + num + ".jpg"
    
    if (num == 1){
        return circulos[0].classList.add("active"),
        circulos[1].classList.remove("active"),
        circulos[2].classList.remove("active")
    } else if (num == 2){
        return circulos[1].classList.add("active"),
        circulos[0].classList.remove("active"),
        circulos[2].classList.remove("active")
    } else if (num == 3){
        return circulos[2].classList.add("active"),
        circulos[1].classList.remove("active"),
        circulos[0].classList.remove("active")
    }
}
function atras(){
    num--
    if (num < 1){
        num = 3
    }
    imgs.src = "img/foto" + num + ".jpg"

    if (num == 1){
        return circulos[0].classList.add("active"),
        circulos[1].classList.remove("active"),
        circulos[2].classList.remove("active")
    } else if (num == 2){
        return circulos[1].classList.add("active"),
        circulos[0].classList.remove("active"),
        circulos[2].classList.remove("active")
    } else if (num == 3){
        return circulos[2].classList.add("active"),
        circulos[1].classList.remove("active"),
        circulos[0].classList.remove("active")
    }
}



siguiente.onclick = function(){
    return adelante()
}
anterior.onclick = function(){
    return atras()
}