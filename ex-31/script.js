//let image = document.getElementById('like')
//image.addEventListener('click', function(){

//    let lastimage = image.getAttribute("src",)

 //    image.setAttribute ("src", "img/deslike.png")


 //    console.log(lastimage)

// })


let lista = document.getElementById('lista')

let num = parseInt(lista.getAttribute("num"))


let conteudo = ""

for(let i = 0;  i < num; i++) {
    conteudo += "<li>" + i + "</li>"
}

lista.innerHTML = conteudo;