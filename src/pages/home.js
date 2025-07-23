
export const loadHome = function () {
    console.log("home clicked");
    const homeSection = document.createElement("div")
    homeSection.classList.add(".home-section")

    const title = document.createElement("h1");
    title.textContent = "Home"
    homeSection.appendChild(title);
    return homeSection
    
}