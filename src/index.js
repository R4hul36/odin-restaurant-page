import "./styles.css"
import { loadHome } from "./pages/home";
import { loadMenu } from "./pages/menu";
import { loadAbout } from "./pages/about";
import { initialLoad } from "./initialPageLoad";


const contentSection = document.querySelector("#content");
initialLoad()

document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(btn.id);
        renderSection(btn.id)
    })
})

const renderSection = function (section) {
    console.log(section);
    contentSection.innerHTML = ""
    if(section === "home") {
        contentSection.appendChild(loadHome())
    }else if (section === "menu") {
        contentSection.appendChild(loadMenu())
    }else if (section === "about") {
        contentSection.appendChild(loadAbout())
    }   
}