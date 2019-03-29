
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let dogNames = Object.keys(dogs);
  let dogLinks = [];  

  dogNames.forEach( dog => {
    let a = document.createElement("a");
    a.innerHTML = dog;
    a.setAttribute("href", dogs[dog]);
    let li = document.createElement("li");
    li.classList.add("dog-link");
    li.appendChild(a);
    dogLinks.push(li);

  })
  return dogLinks;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator(); 

  let ul = document.querySelector('.drop-down-dog-list');

  dogLinks.forEach(link => {
    ul.appendChild(link);
  })
}

function handleEnter() {
  let nav = document.querySelector("nav");
  let ul = document.querySelector('.drop-down-dog-list');
  
  nav.addEventListener("mouseover", function () {
    ul.style.visibility = "visible";
  })

}

function handleLeave() {
  let nav = document.querySelector("nav");
  let ul = document.querySelector('.drop-down-dog-list');
   
    nav.addEventListener("mouseout", function () {
      ul.style.visibility = "hidden";
    });

}



handleEnter(); 
handleLeave();
attachDogLinks(); 