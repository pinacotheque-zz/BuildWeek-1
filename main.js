let elements = document.querySelectorAll(".items")

for (let i=0; i<elements.length ; i++){
    elements[i].onclick= function(){
        
       
        this.classList.add("active").siblings.removeClass("active")
    }
}


// MOBILE SIDEBAR

/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("mobileNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("mobileNav").style.width = "0%";
  }



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