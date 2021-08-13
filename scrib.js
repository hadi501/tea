window.addEventListener('load', function(){
    const form = document.querySelector('.form');
    const image = document.querySelector('.image');
    const card = document.querySelector('.card');
    
    
    form.classList.add('in');
    
    image.classList.add('in');

})



function fadeOutEffect() {
    
   var fadeTarget = document.getElementById("container");
    var fadeEffect = setInterval(function () {
        const form = document.querySelector(".form");
        const image = document.querySelector(".image");

        form.style.transform = "translateX(50px)";
        image.style.transform = "translateX(-50px)";


        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
        setTimeout(() => {
            window.location.href = 'index.html'
        }, 500) 
    }, 50);
    
}
