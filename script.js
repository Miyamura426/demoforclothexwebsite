// for products array

let products ={
    data: [
      {
        productName: "No Hunger Tshirt",
        category: "Tshirts",
        price: "Rs 700",
        image:
          "https://hungernomore.ph/wp-content/uploads/2023/08/HUNGER-NO-MORE-T-SHIRT-DESIGN-GREEN-SLEEVE-FRONT.jpg",
      },
      {
        productName: "Mythical Dragon Tshirt",
        category: "Tshirts",
        price: "Rs 700",
        image:
          "https://graphics-pro.com/wp-content/uploads/2022/01/CorelDRAW-Graphics-Suite_T-Shirt-Design.png",
      },
      {
        productName: "Keep Calm and Eat Tshirt",
        category: "Tshirts",
        price: "Rs 700",
        image:
          "https://alprints.com/wp-content/uploads/2018/03/Eat-Pizza-Tshirtt.jpg",
      },
      {
        productName: "Women's Hoddie",
        category: "Hoddies",
        price: "Rs 1800",
        image:
          "https://m.media-amazon.com/images/I/61TuJysnG7L._AC_UY1000_.jpg",
      },
      {
        productName: "Men's Black Hoddie",
        category: "Hoddies",
        price: " Rs 1800",
        image:
          "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F80%2F57%2F8057fef122c37e83bab447033e98a11c64814719.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
      },
      {
        productName: "Anime hoddy",
        category: "Hoddies",
        price: "Rs 2500",
        image:
          "https://m.media-amazon.com/images/I/61K5KT8L10L._SL1500_.jpg",
      },
      {
        productName: "White summer shirt",
        category: "Shirts",
        price: "Rs 800",
        image:
          "whitesummershirt.jpg",
      },
      {
        productName: "Black Summer Shirt",
        category: "Shirts",
        price: "Rs 800",
        image:
          "blacksummershirt.jpg",
      },
      {
        productName: "Solid Black Summer Shirt",
        category: "Shirts",
        price: "Rs 800",
        image:
          "https://m.media-amazon.com/images/I/51JUORIpy9L._AC_UY1000_.jpg",
      },
      {
        productName: "L necklace",
        category: "Accessories",
        price: "Rs 200 ",
        image:
          "https://i.ebayimg.com/images/g/8TEAAOSwKGdhcaM6/s-l1600.jpg",
      },
      {
        productName: "Naruto Necklace",
        category: "Accessories",
        price: "29",
        image:
          "https://mrsfc.com/cdn/shop/files/narutosasukemostpowerfuleyesnecklace.jpg?v=1690997310",
      },
      {
      productName: "Anime rings",
        category: "Accessories",
        price: "Rs 200 per piece",
        image:
          "https://m.media-amazon.com/images/I/615Sb8BODeL._AC_UL1500_.jpg",
      },
    ],
  };


  for (let i of products.data) {
    //   console.log(i);
  
    //Create Card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
  
    //container
    let container = document.createElement("div");
    container.classList.add("container");
  
    card.innerHTML = `
      <div class="image-container"><img src="${i.image}"></div>
      <div><i class='bx bx-heart' id="heart-icon" ></i></div>
      <div class="container">
           <div>
              <h5 class="product-name">${i.productName.toUpperCase()}</h5>
              <h6>${i.price}</h6>
          </div>
          <button class="cart-btn"> <a href="contact.html">Buy this</a></button>
      </div>
      `;
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
  
    //loop through all cards
    elements.forEach((element) => {
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        if (element.classList.contains(value)) {
          element.classList.remove("hide");
        } else {
          element.classList.add("hide");
        }
      }
    });
  }
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      // console.log(index + " Index");
  
      if (element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };
  
  // heart btn click
  
  let heartBtns = document.querySelectorAll("#heart-icon");
  heartBtns.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.classList.toggle("bxs-heart");
    });
  });
