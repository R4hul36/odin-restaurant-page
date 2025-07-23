

export const loadAbout = function () {
    console.log("about clicked");
    const aboutSection = document.createElement("div")
    aboutSection.classList.add(".about-section")

    const title = document.createElement("h1");
    title.textContent = "About"
    aboutSection.appendChild(title);
    return aboutSection
}