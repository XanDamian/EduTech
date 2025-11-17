fetch("master_header.html")
.then(response=>response.text())
.then(data=>{document.getElementById("header").innerHTML=data;
const toggle_btn = document.querySelector('.toogle_btn');
const toggle_btn_icon = document.querySelector('.toogle_btn i');
const mobile_menu = document.querySelector('.mobile_menu');

toggle_btn.onclick = function() {
    mobile_menu.classList.toggle('open');
    const isOpen = mobile_menu.classList.contains('open');
    toggle_btn_icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
let index = 0;
const slides = document.querySelectorAll('.slides');
function showSlide() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
setInterval(showSlide, 9000);
});


