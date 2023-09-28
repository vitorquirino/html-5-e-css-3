let img = document.getElementById('back');
img.addEventListener('click', function(){

    let lastiamge = img.getAttribute("src");
    img.setAttribute("src", "img/deslike.png");

    console.log(lastiamge)

})