
// create variables for toggle button, icon, and the menu element
const menu_toggle = document.querySelector('.nav-menu-toggle');
const menu_icon = document.querySelector('.nav-menu-toggle ion-icon');
const menu = document.querySelector('.nav-menu');

// Event listener for when the toggle button is clicked, 
menu_toggle.addEventListener('click', (e) => {
    e.preventDefault();
    // check if dataset.open in the html is currently open, change height of menu element and change the icon to menu
    if (menu.dataset.open == '1') {
        gsap.to(menu, { height: 0 });
        menu_icon.setAttribute("name", "menu");
        menu.dataset.open = 0;
    } else {
        // if not, change the icon to the cross and change the height again
        menu_icon.setAttribute("name", "close");
        gsap.to(menu, { height: 'auto' });
        menu.dataset.open = 1;
    }

});