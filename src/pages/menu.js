import dosaImg01 from '../images/dosa01.jpg'
import dosaImg02 from '../images/dosa02.jpg'
import idli from '../images/idli.jpg'
import bhuri from '../images/bhuri.jpg'
import vada01 from '../images/vada01.jpg'
import samosa from '../images/samosa.jpg'
import tea from '../images/tea.jpg'
import lemonade from '../images/lemonade.jpg'


export const loadMenu = function () {
    const menuItems = [
        {
            image:dosaImg01,
            name: "Dosa",
            price: "$5.99",
            description: "Crispy dosa with variety of chutneys"
        },
        {
            image:dosaImg02,
            name: "Masala Dosa",
            price: "$4.99",
            description: "Masala Dosa with tasty coconut chutney"
        },
        {
            image:idli,
            name: "Idli",
            price: "$4.99",
            description: "Soft and tasty idli with white coconut chutney"
        },
        {
            image:bhuri,
            name: "Bhuri",
            price: "$4.99",
            description: "Yummy Bhuri with adequate amount of potato curry"
        },
        {
            image:vada01,
            name: "Dal Vada",
            price: "$2.99",
            description: "Hot and Crispy vada made with dal"
        },
        {
            image:samosa,
            name: "Samosa",
            price: "$2.99",
            description: "Hot samosa that goes well with tea"
        },
        {
            image:tea,
            name: "Tea",
            price: "$0.99",
            description: "Authentic tea made from pure cow milk"
        },
        {
            image:lemonade,
            name: "Lemonade",
            price: "$0.99",
            description: "Chilled lemonade comes in sweet and salt varieties"
        }    
    ]

    console.log("menu clicked");
    const menuSection = document.createElement("div")
    menuSection.classList.add("menu-section")

    const menuGrid = document.createElement("div")
    menuGrid.classList.add("grid-container")

   
    menuItems.forEach(({image, name, price, description}) => {
       
        const itemImg = document.createElement('img');
        itemImg.src = image;
        
        const itemName = document.createElement('h3')
        itemName.textContent = name

        const itemPrice = document.createElement('p')
        itemPrice.textContent = price

        const itemDescription = document.createElement('p')
        itemDescription.textContent = description

        const menuItem = document.createElement("div")
        menuItem.classList.add("menu-item"); 

        menuItem.appendChild(itemImg)
        menuItem.appendChild(itemName)
        menuItem.appendChild(itemPrice)
        menuItem.appendChild(itemDescription)
       

        menuGrid.appendChild(menuItem);

    })




    const title = document.createElement("h1");
    title.textContent = "Menu"
    menuSection.appendChild(title);
    menuSection.appendChild(menuGrid)
    return menuSection
    
}