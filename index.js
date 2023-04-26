/*--Top navbar--*/

/*--Donation button--*/

const donationButton = document.getElementById("donation__button");
const heartDonationButton = donationButton.querySelector("img");

donationButton.addEventListener(
  "mouseover",
  () => (donationButton.style.color = "var(--black-color)")
);
donationButton.addEventListener(
  "mouseover",
  () => (donationButton.style.backgroundColor = "var(--main-bg-color)")
);
donationButton.addEventListener(
  "mouseover",
  () => (donationButton.style.border = "0.125rem solid var(--dark-green)")
);
donationButton.addEventListener("mouseover", () =>
  heartDonationButton.setAttribute("src", "./images/heart-red.png")
);

donationButton.addEventListener(
  "click",
  () => (donationButton.style.color = "var(--black-color)")
);
donationButton.addEventListener(
  "click",
  () => (donationButton.style.backgroundColor = "var(--main-bg-color)")
);
donationButton.addEventListener(
  "click",
  () => (donationButton.style.border = "0.125rem solid var(--dark-green)")
);
donationButton.addEventListener("click", () =>
  heartDonationButton.setAttribute("src", "./images/heart-red.png")
);

donationButton.addEventListener(
  "mouseout",
  () => (donationButton.style.color = "var(--main-bg-color)")
);
donationButton.addEventListener(
  "mouseout",
  () => (donationButton.style.backgroundColor = "var(--dark-green)")
);
donationButton.addEventListener(
  "mouseout",
  () => (donationButton.style.border = "none")
);
donationButton.addEventListener("mouseout", () =>
  heartDonationButton.setAttribute("src", "./images/heart-white.png")
);

/*--End donation button--*/

/*--Login button--*/

const containerTopNavbar = document.getElementById("container__top__navbar");
const nodeListOfButtonsTopNavbar = containerTopNavbar.querySelectorAll(
  ".button__top__navbar"
);
const arrayOfButtonsTopNavbar = Array.from(nodeListOfButtonsTopNavbar);
const buttonLogin = document.getElementById("button__login");
const buttonSearch = document.getElementById("button__search");
const membership = document.querySelector(".member__box");
const arrow = document.querySelector(".arrow");
const lupeSearch = document.querySelector("#span__img");
const lupeImg = document.getElementById("lupe");
const inputSearch = document.querySelector(".input__search");
const submitButton = document.querySelector(".submit__input__search");

buttonLogin.addEventListener("click", () => {
  buttonLogin.classList.toggle("active");
  membership.classList.toggle("open");
  arrow.classList.toggle("turn");
  buttonSearch.classList.remove("expand");
  inputSearch.classList.remove("longer");
  submitButton.classList.remove("apply");
});

/*--End login button--*/

/*--Search button--*/

lupeSearch.addEventListener("click", () => {
  lupeImg.style.color = "#ffffff";
  if (buttonLogin.classList.contains("active") === true) {
    buttonLogin.classList.remove("active");
    membership.classList.remove("open");
    arrow.classList.remove("turn");
    buttonSearch.classList.toggle("expand");
    inputSearch.classList.add("longer");
    submitButton.classList.add("apply");
  } else if (buttonLogin.classList.contains("active") !== true) {
    buttonSearch.classList.toggle("expand");
    inputSearch.classList.toggle("longer");
    submitButton.classList.toggle("apply");
  }
});

/*--End search button--*/

/*--End top navbar--*/

/*--Bottom navbar--*/

/*--Links bottom navbar--*/

const ulBottomNavbar = document.getElementById("ul__bottomNavbar");
const nodeListOfLinksBottomNavbar = ulBottomNavbar.querySelectorAll("a");
const arrayOfLinksBottomNavbar = Array.from(nodeListOfLinksBottomNavbar);
const nodeListSections = document.querySelectorAll("section");
const arrayOfSections = Array.from(nodeListSections);

/* arrayOfLinksBottomNavbar.forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.activelink')?.classList.remove('activelink');
                link.classList.add('activelink');
            })
        }) 
        Com esta função, se eu clicar no mesmo link (mesmo se eu tiver usado link.classList.toggle('activelink')), ele não será desativado. Além disso, uma opção sempre estará ativada, até mesmo quando a página for carregada.

        .activelink tem que aparecer no HTML.
        
        */

window.addEventListener("scroll", () => {
  let current = "";
  arrayOfSections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  arrayOfLinksBottomNavbar.forEach((link) => {
    link.classList.remove("activelink");
    if (link.classList.contains(current) === true) {
      link.classList.add("activelink");
    }
  });
});

/*--End links bottom navbar*/

/*End bottom navbar*/

/*--Read more button Home section--*/

const infoBoxHome = document.getElementById("infoBoxHome");
const readmoreHome = infoBoxHome.querySelector("button");

readmoreHome.addEventListener("click", () =>
  window.open("https://www.unhcr.org/figures-at-a-glance.html", "_blank")
);

/*--End read more button Home section--*/

/*--Read more button Home section--*/

const infoBoxMission = document.querySelector(".container__text.mission");
const readmoreMission = infoBoxMission.querySelector("button");

readmoreMission.addEventListener("click", () =>
  window.open(
    "https://www.ohchr.org/en/special-procedures/sr-housing/human-right-adequate-housing",
    "_blank"
  )
);

/*--Read more button Home section--*/

/*--News gallery*/

// const mySlides = document.getElementById('mySlides');
const nodeListOfSections = document.querySelectorAll(".slide");
const arrayOfSlides = Array.from(nodeListOfSections);
const next = document.getElementById("nextButton");
const previous = document.getElementById("previousButton");
const buttonsSliderBar = document.querySelectorAll(".button__sliderBar");
const arrayOfButtonsSliderBar = Array.from(buttonsSliderBar);

let currentSlide = 0; //->Esta variável representa o slide que está ativo. No caso, aquele com o index 0

function hideSlide() {
  //-> Esta função retira a classe activeslide do slide que a tiver.
  arrayOfSlides.forEach((item) => item.classList.remove("activeslide"));
}

function showSlide() {
  arrayOfSlides[currentSlide].classList.add("activeslide");
}

function stop() {
  clearInterval(intervalID);
}

function nextSlide() {
  hideSlide();

  if (currentSlide === arrayOfSlides.length - 1) {
    currentSlide = 0;
    /*Neste primeiro if, se o current slide estiver na última posição, o slider retornará para o slide com a index 0 quando pressionarmos o botão next. Importante ressaltar que a arrayOfSlides.length é constante e sempre será igual a 3.*/
  } else {
    currentSlide++;
  }
  showSlide();

  arrayOfButtonsSliderBar.forEach((button) => {
    slideShown = arrayOfSlides[currentSlide];
    button.classList.remove("activebutton");
    if (slideShown.classList.contains("x") === true) {
      document.getElementById("x").classList.add("activebutton");
    } else if (slideShown.classList.contains("y") === true) {
      document.getElementById("y").classList.add("activebutton");
    } else if (slideShown.classList.contains("z") === true) {
      document.getElementById("z").classList.add("activebutton");
    }
  });
}

function previousSlide() {
  hideSlide();

  if (currentSlide === 0) {
    currentSlide = arrayOfSlides.length - 1;
    /*Neste primeiro if, se o current slide estiver na primeira posição, o slider retornará para o slide com a index 2 quando pressionarmos o botão previous*/
  } else {
    currentSlide--;
  }
  showSlide();

  arrayOfButtonsSliderBar.forEach((button) => {
    slideShown = arrayOfSlides[currentSlide];
    button.classList.remove("activebutton");
    if (slideShown.classList.contains("x") === true) {
      document.getElementById("x").classList.add("activebutton");
    } else if (slideShown.classList.contains("y") === true) {
      document.getElementById("y").classList.add("activebutton");
    } else if (slideShown.classList.contains("z") === true) {
      document.getElementById("z").classList.add("activebutton");
    }
  });
}

next.addEventListener("click", nextSlide);
previous.addEventListener("click", previousSlide);

var intervalID;

function start() {
  intervalID = setInterval(nextSlide, 6000);
}

function stop() {
  clearInterval(intervalID);
}

window.addEventListener("DOMContentLoaded", start);

next.addEventListener("mouseover", stop);
next.addEventListener("mouseout", start);

previous.addEventListener("mouseover", stop);
previous.addEventListener("mouseout", start);

arrayOfButtonsSliderBar.forEach((button) => {
  button.addEventListener("mouseover", () => {
    stop();
  });

  button.addEventListener("mouseout", () => {
    start();
  });
});

arrayOfButtonsSliderBar.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".activebutton").classList.remove("activebutton");
    document.querySelector(".activeslide").classList.remove("activeslide");

    if (button.id === "x") {
      document.querySelector(".x").classList.add("activeslide");
      document.getElementById("x").classList.add("activebutton");
    } else if (button.id === "y") {
      document.querySelector(".y").classList.add("activeslide");
      document.getElementById("y").classList.add("activebutton");
    } else if (button.id === "z") {
      document.querySelector(".z").classList.add("activeslide");
      document.getElementById("z").classList.add("activebutton");
    }
  });
});

/*--Back to top button--*/

const footerOne = document.querySelector("#buttonTop");
const buttonFooterOne = footerOne.querySelector("button");

buttonFooterOne.addEventListener("click", () => window.open("#home", "_self"));

/*--End back to top button--*/

/*--Mobile devices, iPads and tablets: 55px up to 768px--*/

const mqLarge  = window.matchMedia( '(max-width: 768px)' );
mqLarge.addEventListener('change', mqHandler);


function mqHandler(e) {
 
  const listOfSections = document.getElementsByClassName("main__section");
  const arrayOfSec = Array.from(listOfSections);

  const listOfChilds = document.getElementsByClassName("content__section");
  const arrayOfChilds = Array.from(listOfChilds);

  const backgroundImage = document.getElementById("home").querySelector("img");
  
  if (e.matches) {
    

    backgroundImage.setAttribute(
      "src",
      "../src/images/logo-green-background.png"
    );
    backgroundImage.setAttribute("alt", "Help Refugees Alliance Logo");
    backgroundImage.setAttribute("height", "106.9");
    backgroundImage.setAttribute("width", "692");
    backgroundImage.style.maxHeight = "auto";
    backgroundImage.style.maxWidth = "50%";

    arrayOfSec.forEach(function (clickedsection) {
      clickedsection.addEventListener("click", () => {
        let previouslyActiveSection = document.querySelector(".activeSection");
        let previouslyExpandedChild = document.querySelector(".expanded");
        let indexCurrentSection = arrayOfSec.indexOf(previouslyActiveSection);
        let indexSection = arrayOfSec.indexOf(clickedsection);
        if (indexCurrentSection === indexSection) {
          clickedsection.classList.toggle("activeSection");
          clickedsection.lastElementChild.classList.toggle("expanded");
          arrayOfSec[0].classList.add("activeSection");
          arrayOfChilds[0].classList.add("expanded");
        } else if (indexCurrentSection !== indexSection) {
          previouslyActiveSection.classList.remove("activeSection");
          previouslyExpandedChild.classList.remove("expanded");
          clickedsection.classList.add("activeSection");
          clickedsection.lastElementChild.classList.add("expanded");
        }
      });
    });

    arrayOfSec.forEach(function (clickedsection) {
      clickedsection.addEventListener("click", () => {
        if (document.querySelector(".activeSection").id === "about") {
          arrayOfSec.forEach((clickedsection) =>
            clickedsection.classList.add("smallerSection")
          );
          document.getElementById("about").classList.remove("smallerSection");
          document.getElementById("home").classList.remove("smallerSection");
        } /* else if (document.querySelector('.activeSection').id === 'home') {
                arrayOfSec.forEach(clickedsection => clickedsection.classList.add('smallerSection'))
                document.getElementById('home').classList.remove('smallerSection')
                document.getElementById('logo').classList.remove('smallerSection') 
            } */ else if (
          document.querySelector(".activeSection").id === "mission"
        ) {
          arrayOfSec.forEach((clickedsection) =>
            clickedsection.classList.add("smallerSection")
          );
          document.getElementById("mission").classList.remove("smallerSection");
          document.getElementById("home").classList.remove("smallerSection");
        } else if (document.querySelector(".activeSection").id === "news") {
          arrayOfSec.forEach((clickedsection) =>
            clickedsection.classList.add("smallerSection")
          );
          document.getElementById("news").classList.remove("smallerSection");
          document.getElementById("home").classList.remove("smallerSection");
        } else if (document.querySelector(".activeSection").id === "register") {
          arrayOfSec.forEach((clickedsection) =>
            clickedsection.classList.add("smallerSection")
          );
          document
            .getElementById("register")
            .classList.remove("smallerSection");
          document.getElementById("home").classList.remove("smallerSection");
        } /* else if (document.querySelector('.activeSection').id === 'donate') {
                arrayOfSec.forEach(clickedsection => clickedsection.classList.add('smallerSection'))
                document.getElementById('donate').classList.remove('smallerSection')
                document.getElementById('logo').classList.remove('smallerSection') 
            } */ else if (
          document.querySelector(".activeSection").id === "home"
        ) {
          arrayOfSec.forEach((clickedsection) =>
            clickedsection.classList.remove("smallerSection")
          );
        }
      });
    });
  } else {
    backgroundImage.setAttribute(
      "src",
      "../src/images/julie-ricard-MX0erXb3Mms-unsplash.png"
    );
    backgroundImage.setAttribute("alt", "Five refugee kids play in a refugee camp in Greece");
    backgroundImage.setAttribute("height", "450");
    backgroundImage.setAttribute("width", "1419");
    backgroundImage.style.height = "auto";
    backgroundImage.style.width = "85%";
  }
 
}