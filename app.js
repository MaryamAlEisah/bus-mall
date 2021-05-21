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

    //products names global array
    let productsNames = [];

      // votes global array
      let productVotes = [];

      // shown product array
      let productsShown = [];

        //local storge
      // function for setting items

        // function settingItem() {
      //   let data = JSON.stringify(allProducts);
      //   // saving to local storage

      //   // console.log('data',itemData);
      //   localStorage.setItem("item", data);
      // }

        // getting the items by convert it to string

        // function newObj() {
          //   let strObj = localStorage.getItem("item");
          //   console.log(strObject);
          //   let normalObj = JSON.parse(strObject);
      //   console.log(normalObj);

        //   if (normalObj !== null) {
      //     item = normalObj;
      //   }
      // }

    // constructor function
    function ProductImage(name, source) {
      this.name = name;
      this.source = source;
      // this.time = 0;

      // votes
      this.votes = 0;

    // views
    this.shown = 0;

    allProducts.push(this);
    productsNames.push(this.name);

    }

    new ProductImage("bag", "image/bag.jpg");
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

    // global array for not dublicated img in 2 iteration
    let oldImages = [];

    oldImages = [leftImageIndex, centerImageIndex, rightImageIndex];

    // render product images
    function renderThreeImages() {
      leftImageIndex = generateRandomIndex();
      rightImageIndex = generateRandomIndex();
      centerImageIndex = generateRandomIndex();

      // do-while
      do {
        leftImageIndex = generateRandomIndex();
        centerImageIndex = generateRandomIndex();
        rightImageIndex = generateRandomIndex();

      } while (
        leftImageIndex === rightImageIndex ||
        leftImageIndex === centerImageIndex ||
        centerImageIndex === rightImageIndex ||
        oldImages.includes(leftImageIndex) ||
        oldImages.includes(centerImageIndex) ||
        oldImages.includes(rightImageIndex)

      )

      oldImages = [leftImageIndex, centerImageIndex, rightImageIndex];


      // give it src , time attributes
      leftImageElement.src = allProducts[leftImageIndex].source;
      centerImageElement.src = allProducts[centerImageIndex].source;
      rightImageElement.src = allProducts[rightImageIndex].source;

      allProducts[leftImageIndex].shown++;
      allProducts[centerImageIndex].shown++;
      allProducts[rightImageIndex].shown++;

    }

    renderThreeImages();

    // create Event

    let container = document.getElementById("img");

    container.addEventListener("click", handleUserClick);

    function handleUserClick(event) {
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
        container.removeEventListener("click", handleUserClick);
        // for (let i = 0; i < allProducts.length; i++) {
        //   productsNames.push(allProducts[i].votes);
        //   productsShown.push(allProducts[i].shown);
     // }

      }     
        Button.addEventListener("click", displayResults )

      }
        let Button = document.getElementById("results");
        let resultDiv = document.getElementById("results2");


        function displayResults() {
          // console.log(hello);
          let ulElement;
          ulElement = document.createElement("ul");
          resultDiv.appendChild(ulElement);
          for (let i = 0; i < allProducts.length; i++) {
            let liElement = document.createElement("li");
            ulElement.appendChild(liElement);
            liElement.textContent = `${allProducts[i].name} has ${allProducts[i].votes} votes,
                                                      and watched at ${allProducts[i].shown} `;
            // console.log(ulElement);
          }
        }


      
  /////////////////////////////////////////////////////////////////

    


    // // console.log(productsNames);

    // ///////////12 (prevent users from seeing the same image in two subsequent iterations)

    let imagesArray = ["left-image", "center-image", "right-image"];

    let shownImages = [];

    function displayImage() {
      let num = Math.floor(Math.random() * imagesArray.length);
      document.productsName.src = imagesArray[num];

      shownImages.unshift(imagesArray.splice(num, num + 1));

      if (images.length == 0) {
        images.Array = shownImages;
        shownImages = [];

        return shownImages[0];
      }
      viewChart();

      //create chart
      function viewChart() {
        let ctx = document.getElementById("myChart");
        let myChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: productsNames,
            datasets: [
              {
                label: "# of product Votes",
                data: productVotes,
                backgroundColor: ["rgba(255, 99, 132, 0.2)"],
                borderColor: ["rgba(255, 99, 132, 1)"],
                borderWidth: 1,
              },
              {
                label: "# of product shown",
                data: productsShown,

                backgroundColor: "purple",
                borderColor: "purple",
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }

      console.log("names", productsNames);
      console.log("votes", productVotes);
      console.log("shown", productsShown);
    }
