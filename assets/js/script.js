// menu btn
let navbar = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = function(){
    navbar.classList.toggle('active');
}

// auto video
document.querySelectorAll('.controls-btn').forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute('data-src');
        document.querySelector('.about .video-container .video').src = src;
    }
});
   
