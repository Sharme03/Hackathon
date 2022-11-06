"use strict";

// Body div

// var ele = document.createElement("div");
// ele.setAttribute("id", "heading");
// ele.setAttribute("class", "heading");
// document.body.append(ele);

var ele = document.createElement("div1");
ele.setAttribute("id", "container");
ele.setAttribute("class", "container");
document.body.append(ele);

var ele = document.createElement("div2");
ele.setAttribute("id", "product1");
ele.setAttribute("class", "product1");
document.body.append(ele);

// var element = document.createElement("div2");
// element.setAttribute("id", "container1");
// element.setAttribute("class", "container1");
// document.body.append(element);

// Head tag

// var tag = document.createElement("h1");
// var text = document.createTextNode("Make beauty");
// tag.appendChild(text);
// var element = document.getElementById("heading");
// element.appendChild(tag);



// Image grid
var element = document.createElement("div1");
element.setAttribute("id", "header-grid");
element.setAttribute("class", "header-grid");
element.appendChild(document.createTextNode(""));
document.getElementById("container").appendChild(element);

var element1 = document.createElement("div1");
element1.setAttribute("id", "photo");
element1.setAttribute("class", "photo");
element1.appendChild(document.createTextNode(""));
var img1 = document.createElement("img");
img1.setAttribute(
  "src",
  "https://miro.medium.com/max/800/0*a8__BlPyJgnS0bXa.jpg"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo").appendChild(img1);

var element1 = document.createElement("div1");
element1.setAttribute("id", "photo1");
element1.setAttribute("class", "photo1");
element1.appendChild(document.createTextNode(""));
var img2 = document.createElement("img");
img2.setAttribute(
  "src",
  "http://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo1").appendChild(img2);

var element1 = document.createElement("div1");
element1.setAttribute("id", "photo2");
element1.setAttribute("class", "photo2");
element1.appendChild(document.createTextNode(""));
var img3 = document.createElement("img");
img3.setAttribute(
  "src",
  "https://media.istockphoto.com/photos/makeup-palette-and-brushes-professional-eyeshadow-palette-picture-id1299164489?b=1&k=20&m=1299164489&s=170667a&w=0&h=GqoYQHfqq4UfbHFq9TlUp3isRCAqm9hoFqnxaKUEQEU="
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo2").appendChild(img3);

var element1 = document.createElement("div1");
element1.setAttribute("id", "photo3");
element1.setAttribute("class", "photo3");
element1.appendChild(document.createTextNode(""));
var img4 = document.createElement("img");
img4.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1515688594390-b649af70d282?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFrZXVwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo3").appendChild(img4);

var element1 = document.createElement("div1");
element1.setAttribute("id", "photo4");
element1.setAttribute("class", "photo4");
element1.appendChild(document.createTextNode(""));
var img5 = document.createElement("img");
img5.setAttribute(
  "src",
  "https://i.pinimg.com/736x/8a/a1/ac/8aa1ac93b8c2c9a3259d99a4d9cfa520.jpg"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo4").appendChild(img5);

var element1 = document.createElement("div1");
element1.setAttribute("id", "photo5");
element1.setAttribute("class", "photo5");
element1.appendChild(document.createTextNode(""));
var img6 = document.createElement("img");
img6.setAttribute(
  "src",
  "https://static.ffx.io/images/$zoom_0.571%2C$multiply_1.0582%2C$ratio_1.5%2C$width_756%2C$x_2%2C$y_0/t_crop_custom/q_86%2Cf_auto/92024f446017962c00c4124c6bd133ab6fd3ad7f"
);
document.getElementById("header-grid").appendChild(element1);
document.getElementById("photo5").appendChild(img6);

// br tag

var tag = document.createElement("br");
var element = document.getElementById("container");
element.appendChild(tag);

var tag = document.createElement("br");
var element = document.getElementById("container");
element.appendChild(tag);

// 2nd head
// Points

var tag = document.createElement("h2");
var text = document.createTextNode("About the Makeup API");
tag.appendChild(text);
var element = document.getElementById("container");
element.appendChild(tag);

var element = document.createElement("div1");
element.setAttribute("id", "sub-heading");
element.setAttribute("class", "sub-heading");
element.appendChild(document.createTextNode(""));
document.getElementById("container").appendChild(element);

var tag = document.createElement("p");
var text = document.createTextNode(
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cum illum soluta reprehenderit earum totam reiciendis natus non officiis doloremque ex, quae iste, eos doloribus."
);
tag.appendChild(text);
var element = document.getElementById("sub-heading");
// tag.classList.add("description");
element.appendChild(tag);



// var tag = document.createElement("h2");
// var text = document.createTextNode("Product");
// tag.appendChild(text);
// var element = document.getElementById("product1");
// element.appendChild(tag);

// var element = document.createElement("div1");
// element.setAttribute("id", "section-p1");
// element.setAttribute("class", "section-p1");
// element.appendChild(document.createTextNode(""));
// document.getElementById("product1").appendChild(element);








async function foo() {
  let res = document.getElementById("text").value;
  console.log(res);
  let result = await fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );
  let final = await result.json();
  console.log(final);

  for (var i = 0; i < final.length; i++) {
    let ele = document.createElement("div");
    ele.setAttribute("id", "data");
    ele.setAttribute("class", "data");
    ele.innerHTML = `brand:${final[i].brand} name:${final[i].name} price:${final[i].price} price_sign:${final[i].price_sign} image_link:${final[i].image_link} product_link:${final[i].product_link} description:${final[i].description} product_type:${final[i].product_type}`;
    document.body.append(ele);
  }
}
foo();
