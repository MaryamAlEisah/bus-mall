"use strict";
// getting elements Globally
let leftImageElement = document.getElementById("left-image");
let centerImageElement = document.getElementById("center-image");
let rightImageElement = document.getElementById("right-image");

// global variables
let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

// global counters
let maxAttempts = 25;
let userAttemptsCounter = 0;

// global array for the objects
let allProducts = [];

// constructor function
function ProductImage(name, source, time) {
  this.name = name;
  this.source = source;
  this.time = 0;

  // votes
  this.votes = 0;
  allProducts.push(this);
}
let product1 = new ProductImage("bag", "image/bag.jpg");
new ProductImage("banana", "image/banana.jpg");
new ProductImage("bathroom", "image/bathroom.jpg");
new ProductImage("boots", "image/boots.jpg");
new ProductImage("breakfast", "image/breakfast.jpg");
new ProductImage("bubblegum", "image/bubblegum.jpg");
new ProductImage("chair", "image/chair.jpg");
new ProductImage("cthulhu", "image/cthulhu.jpg");
new ProductImage("dog-duck", "image/dog-duck.jpg");
new ProductImage("dragon", "image/dragon.jpg");
new ProductImage("pen", "image/pen.jpg");
new ProductImage("pet-sweep", "image/pet-sweep.jpg");
new ProductImage("scissors", "image/scissors.jpg");
new ProductImage("shark", "image/shark.jpg");
new ProductImage("sweep", "image/sweep.png");
new ProductImage("tauntaun", "image/tauntaun.jpg");
new ProductImage("unicorn", "image/unicorn.jpg");
new ProductImage("water-can", "image/water-can.jpg");
new ProductImage("wine-glass", "image/wine-glass.jpg");

// create random fun to generate index
function generateRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}
// console.log(Math.floor(Math.random() * allProducts.length));

// render product images
function renderThreeImages() {
  leftImageIndex = generateRandomIndex();
  rightImageIndex = generateRandomIndex();
  centerImageIndex = generateRandomIndex();

  // do-while
  do {
    rightImageIndex = generateRandomIndex();
  } while (
    leftImageIndex === rightImageIndex ||
    leftImageIndex === centerImageIndex ||
    centerImageIndex === rightImageIndex
  );

  // console.log(leftImageIndex);
  // console.log(centerImageIndex);
  // console.log(rightImageIndex);

  // console.log(allProducts[leftImageIndex]);
  // console.log(allProducts[centerImageIndex]);
  // console.log(allProducts[rightImageIndex]);

  // give it src , time attributes
  leftImageElement.src = allProducts[leftImageIndex].source;
  centerImageElement.src = allProducts[centerImageIndex].source;
  rightImageElement.src = allProducts[rightImageIndex].source;

  leftImageElement.time = allProducts[leftImageIndex].time;
  centerImageElement.time = allProducts[centerImageIndex].time;
  rightImageElement.time = allProducts[rightImageIndex].time;
}

renderThreeImages();

// create Event

leftImageElement.addEventListener("click", handleUserClick);
centerImageElement.addEventListener("click", handleUserClick);
rightImageElement.addEventListener("click", handleUserClick);

function handleUserClick(event) {
  // console.log(event.target.id);
  // userAttemptsCounter=userAttemptsCounter+1;
  userAttemptsCounter++;

  //   console.log(userAttemptsCounter);

  if (userAttemptsCounter <= maxAttempts) {
    // console.log(userAttemptsCounter);
    if (event.target.id === "left-image") {
      allProducts[leftImageIndex].votes = allProducts[leftImageIndex].votes + 1;
    } else if (event.target.id === "center-image") {
      allProducts[centerImageIndex].votes =
        allProducts[centerImageIndex].votes + 1;
    } else {
      allProducts[rightImageIndex].votes =
        allProducts[rightImageIndex].votes + 1;
    }
    // console.log(allProducts);
    renderThreeImages();
  } else {
    leftImageElement.removeEventListener("click", handleUserClick);
    centerImageElement.removeEventListener("click", handleUserClick);
    rightImageElement.removeEventListener("click", handleUserClick);
  }

  let Button = document.getElementById("results");

  Button.addEventListener("click", displayResults);
  function displayResults() {
    let liElement;
    let ulElement;
    ulElement = document.createElement("ul");

    for (let i = 0; i < allProducts.length; i++) {
      liElement = document.createElement("li");
      liElement.appendChild(ulElement);
      liElement.textContent = `${allProducts[i].name} has ${allProducts[i].votes} votes, 
                            and watched at ${allProducts[i].time} `;
    }
  }
}

