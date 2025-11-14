const toogle_btn = document.querySelector('.toogle_btn');
const toogle_btn_icon = document.querySelector('.toogle_btn i');
const mobile_menu = document.querySelector('.mobile_menu');

toogle_btn.onclick = function() {
    mobile_menu.classList.toggle('open');
    const isopen = mobile_menu.classList.contains('open');
    toogle_btn_icon.className = isopen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
