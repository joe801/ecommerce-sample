
// script for sidebar toggle
let nav_right = $(".right")
let body = $("main")
let menulist = $("#menu-list");
let menubtn = $("#menu-btn");
let cancelbtn = $("#cancel-btn");

menubtn.click(function(){
    menulist.css("display","block");
    body.css("opacity","0.3");
    nav_right.css("opacity","0.3");
});

cancelbtn.click(function(){
    menulist.css("display","none");
    body.css("opacity","1");
    nav_right.css("opacity","1");
});

//scripts for cart basket toggle display

let cart = $("#cart");
let basket = $("aside");

cart.click(function(){
    if (basket.css("display") == "none"){
        basket.fadeIn();
    } else{
        basket.fadeOut();
    }
});
// closing basket when body is clicked
body.click(function(){
    basket.fadeOut();
});

//setting count functions for number of items

let add_btn = document.getElementById("plus");
let remv_btn = document.getElementById("minus");
let count = document.getElementById("count");

var counter = 0;

add_btn.onclick = function(){
    counter = Math.min(5, counter + 1);
    count.innerHTML = counter; 
}

remv_btn.onclick = function(){
    counter = Math.max(0, counter - 1)
    count.innerHTML = counter;   
} 

//setting add to cart function

let add_cart = document.getElementById("add-cart");
let item_no = document.getElementById("item_no");

    //seting items in cart variable
let empty_cart = document.getElementById("empty");
let product_cart = document.getElementById("product");
let checkout_cart = document.getElementById("checkout");

let item = document.getElementById("item_calc");
let price = parseFloat(document.getElementById("price").innerHTML.replace('$', ''));
let calculated_price = document.getElementById("calculated_price");

add_cart.onclick = function(){
    if (counter == 0) {
        alert("You can't add zero quantity of item to the cart")
    } else {
        item_no.style.display = "block";
        item_no.innerHTML = counter;
        item.innerHTML = counter;
        //seting items in cart
        if (item_no.innerHTML != "0"){
            empty_cart.style.display = "none";
            product_cart.style.display = "flex";
            checkout_cart.style.display = "flex";
        } else{
            empty_cart.style.display = "flex";
            product_cart.style.display = "none";
            checkout_cart.style.display = "none";
        }

        calculated_price.innerHTML = "$" + parseFloat(counter) * price;
    }
    
}

let deleteitems = document.getElementById("delete");

deleteitems.onclick = function(){
    empty_cart.style.display = "flex";
    product_cart.style.display = "none";
    checkout_cart.style.display = "none";
    item_no.style.display = "none";
}


// thumbnails image control

let image1 = document.querySelectorAll(".image1");
let image2 = document.querySelectorAll(".image2");
let image3 = document.querySelectorAll(".image3");
let image4 = document.querySelectorAll(".image4");
let image1_thumb = document.querySelectorAll(".image1-thumb");
let image2_thumb = document.querySelectorAll(".image2-thumb");
let image3_thumb = document.querySelectorAll(".image3-thumb");
let image4_thumb = document.querySelectorAll(".image4-thumb");

image1_thumb[0].onclick = function(){
    image1[0].classList.add("active");
    image2[0].classList.remove("active");
    image3[0].classList.remove("active");
    image4[0].classList.remove("active");
}

image2_thumb[0].onclick = function(){
    image2[0].classList.add("active");
    image1[0].classList.remove("active");
    image3[0].classList.remove("active");
    image4[0].classList.remove("active");
}

image3_thumb[0].onclick = function(){
    image3[0].classList.add("active");
    image1[0].classList.remove("active");
    image2[0].classList.remove("active");
    image4[0].classList.remove("active");
}

image4_thumb[0].onclick = function(){
    image4[0].classList.add("active");
    image1[0].classList.remove("active");
    image2[0].classList.remove("active");
    image3[0].classList.remove("active");
}

// thumbnails image control for modal instance

image1_thumb[1].onclick = function(){
    image1[1].classList.add("active");
    image2[1].classList.remove("active");
    image3[1].classList.remove("active");
    image4[1].classList.remove("active");
}

image2_thumb[1].onclick = function(){
    image2[1].classList.add("active");
    image1[1].classList.remove("active");
    image3[1].classList.remove("active");
    image4[1].classList.remove("active");
}

image3_thumb[1].onclick = function(){
    image3[1].classList.add("active");
    image1[1].classList.remove("active");
    image2[1].classList.remove("active");
    image4[1].classList.remove("active");
}

image4_thumb[1].onclick = function(){
    image4[1].classList.add("active");
    image1[1].classList.remove("active");
    image2[1].classList.remove("active");
    image3[1].classList.remove("active");
}







 

