import { loadHome } from "./pages/home"

export const initialLoad = function () {
    const contentSection = document.querySelector("#content");
    contentSection.appendChild(loadHome())
    
}