
export const loadMenu = function () {
    console.log("menu clicked");
    const menuSection = document.createElement("div")
    menuSection.classList.add(".menu-section")

    const title = document.createElement("h1");
    title.textContent = "Menu"
    menuSection.appendChild(title);
    return menuSection
    
}