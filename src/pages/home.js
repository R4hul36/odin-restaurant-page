
export const loadHome = function () {
    console.log("home clicked");
    const homeSection = document.createElement("div")
    homeSection.classList.add("home-section")

    const title = document.createElement("h1");
    title.textContent = "Dosa Junction"
    
    const description = document.createElement("p")
    description.textContent = "Welcome to Dosa Junction - your cozy stop for mouthwatering South Indian classics, served fresh and affordable. Enjoy warm dosa, idili and snacks at an affordable price!"

    homeSection.appendChild(title);
    homeSection.appendChild(description)
    return homeSection
    
}