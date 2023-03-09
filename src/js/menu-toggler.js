import { addClass, removeClass } from "./utils-class.js";

const menuToggler = document.getElementById("menu-toggler");

menuToggler.addEventListener("click", () => {
    const spanLink = document.querySelectorAll("#span-link");
    const sidebar = document.getElementById("sidebar");

    // Background Sidebar
    if(sidebar.className.indexOf("w-1/6") > -1) {
        addClass(sidebar, "w-20");
        removeClass(sidebar, "w-1/6");
    } else {
        removeClass(sidebar, "w-20");
        addClass(sidebar, "w-1/6");
    };

    // Menu Items
    spanLink.forEach(element => {
        if(element.className.indexOf("opacity-100") > -1) {
            addClass(element, "opacity-0 absolute z-50 -translate-x-full");
            removeClass(element, "opacity-100");
        } else {
            removeClass(element, "opacity-0 absolute z-50 -translate-x-full");
            addClass(element, "opacity-100");
        }
    });
});