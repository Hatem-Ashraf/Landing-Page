//global variables
const uL = document.querySelector("#navbar__list");
const secContainer = document.querySelectorAll("section");


//setting the active section
function activeSection() {
  for (const section of secContainer) {
    const container = section.getBoundingClientRect();
    if (container["bottom"] <= 1000 && container["bottom"] >= 350) {
      section.classList.add("your-active-class");
    } else {
      section.classList.remove("your-active-class");
    }
  }
};
document.addEventListener("scroll", activeSection);


//scrolling smoothly to the specific section
function scrolling(event) {
  event.preventDefault();
  if (event.target.classList.contains("gotopbtn")) {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    return 0;
  }
  //getting the id of the element to go to , from the href attribute of the anchor
  const id = event.target.getAttribute("href").slice(1);
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
};
uL.addEventListener("click", scrolling);



//Building the menu items
(function BuildingUL() {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < secContainer.length; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("href", `#${secContainer[i].id}`);
    a.classList.add("menu__link");
    a.textContent = `${secContainer[i].dataset.nav}`;
    li.appendChild(a);
    frag.appendChild(li)
  }
  uL.appendChild(frag);
})();




//Appearing or disappearing the Top button
function topfun() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};



//Adding event listener to the document and the go to Top button
const topButton = document.getElementById("topbtn");
document.addEventListener("scroll", topfun);
topButton.addEventListener("click", scrolling);