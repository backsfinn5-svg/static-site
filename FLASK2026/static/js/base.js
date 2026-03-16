// maakt een variabelen voor burger menu zodat die later kan worder opgezocht.
const burgerMenu = document.getElementById("burgerMenu");
//maakt navigatie voor burger menu zodat die later kan worder opgezocht.
const navMenu = document.getElementById("navMenu");

// burger menu dicht doen functie
function closeMenu() {
    // als er een brugermenu is.
    if (burgerMenu) {
        // verwijd actieve staat van burger menu.
        burgerMenu.classList.remove("active");
    }
    // als er een navigatie menu is.
    if (navMenu) {
        // verwijder de actieve staat van navigatie menu.
        navMenu.classList.remove("active");
    }
}

// als ze er zijn(je zit op telefoon) dan zal het burger menu en nav menu werken.
if (burgerMenu && navMenu) {
    // als er een click is op burger mernu
    burgerMenu.addEventListener("click", () => {
        // zet de actieve staat van burger menu aan of uit.
        burgerMenu.classList.toggle("active");
        // zet de actieve staat van nav menu aan of uit.
        navMenu.classList.toggle("active");
    });
}

// al de drop down links vinden in de navigatie
document.querySelectorAll(".dropdown > a").forEach((link) => {
    // wacht op een druk van een menu link en iets dan als dat gedaan.
    link.addEventListener("click", (event) => {
        // op computer niet nodig doordat je gewoon kan hoeveren. drm kijken we op scherm groten.
        if (window.innerWidth > 768) {
            return;
        }

        // op mobile niet derekt link open met click.
        event.preventDefault();
        // omdat we op mobiel zijn, zoeken we naar het dichtstbijzijnde dropdown element(container)
        const dropdown = link.closest(".dropdown");
        // als hij een dropdown container heeft, toggelen we de actieve staat van die container om het submenu te tonen of te verbergen.
        if (dropdown) {
            dropdown.classList.toggle("active");
        }
    });
});

//  vind de linken dat niet dropdown zijn in de naviagtie
document.querySelectorAll("nav li:not(.dropdown) > a").forEach((link) => {
    //sluit het menu al je van pagina wisselt.
    link.addEventListener("click", closeMenu);
});
