const toggle_btn = document.querySelector('.toogle_btn');
const toggle_btn_icon = document.querySelector('.toogle_btn i');
const mobile_menu = document.querySelector('.mobile_menu');

toggle_btn.onclick = function() {
    mobile_menu.classList.toggle('open');
    const isOpen = mobile_menu.classList.contains('open');
    toggle_btn_icon.className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}
