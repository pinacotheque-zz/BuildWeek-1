let image = document.querySelectorAll(".card-col");
let visible = document.querySelectorAll(".rent-badge");

for (i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseout", function yourFunc() {
    visible[i].style.display = "none";
  });
}

window.onload = () => {
  for (i = 0; i < image.length; i++) {
    visible[i].style.display = "none";
  }
};

for (i = 0; i < image.length; i++) {
  image[i].addEventListener("mouseover", function myFunc() {
    visible[i].style.display = "inline";
  });
}

//short code here ****
// document.querySelectorAll(".cardForAnim").forEach(cardForAnim =>
//     cardForAnim.addEventListener("mouseover", () => document.querySelector(".rent-badge")[this].style.display("inline")
//     ))

//short code here ****

// let elements = document.querySelectorAll(".items")

// for (let i=0; i<elements.length ; i++){
//     elements[i].onclick= function(){

//         this.classList.add("active").siblings.removeClass("active")
//     }
// }

// let selectedCont = document.getElementById("side")
// let selected = selectedCont.getElementsByClassName("items")

// let activated = document.createElement("div")
// activated.className("active")

// for (let i= 0; i<selected.length; i++){
//     selected[i].onclick = function(e){

//         // selected[i].classList.add("active")
//         // // if(activated.length>0){
//         // //     activated[0].classList.remove("active")
//         // // }
//         this.classList.add("active")
//     }

// }
