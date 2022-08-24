//fetching the HTML elements
const navBarList = document.getElementById("navbar__list");
const secList = document.querySelectorAll("section");

// Build menu 
const createListItem = () =>{
    for(sec of secList){
        listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}" class="menu__link" data-nav="${sec.id}">${sec.dataset.nav}</a>`;
        navBarList.appendChild(listItem);
    }
}


// Set sections as active
window.onscroll = function(){
    secList.forEach( function(activeElement) {
        if(activeElement.getBoundingClientRect().top >= -400 && activeElement.getBoundingClientRect().top <= 150){
            activeElement.classList.add("your-active-class");
        }else{
            activeElement.classList.remove("your-active-class");
        }
    });
};

//Build the "go to Top button"
const topButton = document.createElement("a");
topButton.href = "#mId"; 
topButton.id = "topbtn";
topButton.textContent = "Top";
topButton.classList.add("gotopbtn");
document.body.appendChild(topButton);


//Adding event listener to the menu elements
navBarList.addEventListener("click", function smooth(event){
    event.preventDefault();
    setTimeout(()=>{
    if(event.target.dataset.nav){
        document.getElementById(`${event.target.dataset.nav}`).scrollIntoView({behavior : "smooth"});
    }
    },100);
});

//Invoking the function to build the menu items
createListItem();