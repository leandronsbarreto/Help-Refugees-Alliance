/* --------- Donation Button Navbar*/

/* const buttonDonation = document.getElementById("button_donation");
const heart = buttonDonation.firstElementChild;
const heartTurnRed = "mouseover";
const heartTurnWhite = "mouseout";

buttonDonation.addEventListener(heartTurnRed, () => {    
    heart.removeAttribute("src", "./images/heart-white.png");
    heart.setAttribute("src", "./images/heart-red.png");
    buttonDonation.style.backgroundColor = "#ffffff";
    buttonDonation.style.color = "#000000";
    buttonDonation.style.border = "0.063rem solid rgb(31 101 49)";
});

buttonDonation.addEventListener(heartTurnWhite, () => {
    heart.removeAttribute("src", "./images/heart-red.png");
    heart.setAttribute("src", "./images/heart-white.png");
    buttonDonation.style.backgroundColor = "rgb(31 101 49)";
    buttonDonation.style.color = "#ffffff";
    // buttonDonation.style.border = "none";
}); */

/*--Links bottom navbar--*/

const LinkSwitcher = () => {
    
    const rowBottomNavbar = document.getElementById('#row_bottom_navbar');
    const linksBottomNavbar = rowBottomNavbar.getElementsByClassName('link_bottom_navbar');
    const arrayOfLinks = Array.from(linksBottomNavbar);

    arrayOfLinks.forEach(link => link.addEventListener('mouseover', () => link.style.borderTop = '0.5rem solid rgb(31 101 49)'));

    arrayOfLinks.forEach(link => link.addEventListener('mouseout', () => link.style.borderTop = 'none'));
    
}

export default LinkSwitcher


