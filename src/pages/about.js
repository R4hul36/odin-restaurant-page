

export const loadAbout = function () {
    console.log("about clicked");
    const aboutSection = document.createElement("div")
    aboutSection.classList.add("about-section")

    const title = document.createElement("h1");
    title.textContent = "About Us"

    const introPara = document.createElement('p')
    introPara.textContent = "At Dosa Junction, we celebrate the rich culinary heritage of South India. From crispy dosas to flavorful chutneys, every dish is crafted with authentic ingredients and love."


    const secondPara = document.createElement('p')
    secondPara.textContent = "Our mission is to serve delicious, freshly made South Indian food that reminds you of home. We believe great taste shouldn't come at a high price."

    aboutSection.appendChild(title);
    aboutSection.appendChild(introPara)
    aboutSection.appendChild(secondPara)
    return aboutSection
}