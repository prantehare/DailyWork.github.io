var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

 function checkAge()
{
var age=document.getElementById("age").value;
  if(age<18)
  {
    alert("You are not eligible for work");

  }
// console.log("hello");
}




// let a = document.querySelector('.btn');

