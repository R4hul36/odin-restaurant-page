import dosaImg01 from '../images/dosa01.jpg'


export const loadMenu = function () {
    const menuItems = [
        {
            image:"../images/dosa01.jpg",
            name: "Dosa",
            price: "$3.99",
            description: "Crispy dosa with variety of chutneys"
        }

    ]

    console.log("menu clicked");
    const menuSection = document.createElement("div")
    menuSection.classList.add("menu-section")

    const menuGrid = document.createElement("div")
    menuGrid.classList.add("grid-container")

    const img = document.createElement('img');
    img.src = dosaImg01;
    menuGrid.appendChild(img);

    const title = document.createElement("h1");
    title.textContent = "Menu"
    menuSection.appendChild(title);
    menuSection.appendChild(menuGrid)
    return menuSection
    
}