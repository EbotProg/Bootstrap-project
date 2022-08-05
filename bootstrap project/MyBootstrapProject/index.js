




const changeWhenResized = () =>{
    let viewWidth = window.innerWidth;
    let homePage = document.getElementById('home');
    let nav = document.getElementById('nav');
    let nav_links = document.querySelectorAll('.nav-link');

    let mainCoordinates = document.getElementById('main').getBoundingClientRect();
  


    if(viewWidth >= 991 && mainCoordinates.top == 0){
        homePage.style.height = '100vh';
        homePage.style.backgroundPositionY = 'center';
        // homePage.style.backgroundPosition = 'top top';
        nav.style.backgroundColor = 'inherit';
        nav.style.boxShadow = "none";
        nav_links.forEach(nav => {
          nav.style.color = "#ffffff98";
    
        });
      }
      else{
        homePage.style.height = '100%';
        nav.style.backgroundColor = '#f8f9fa';
        nav_links[0].style.color = '#212529';
        for(let i=1; i<5; i++){
          // nav_links[i].style.color = '#6c757d';
          nav_links[i].style.color = '#212529';
        }
      }
}


window.addEventListener("resize", changeWhenResized); 
window.addEventListener("load", changeWhenResized);
// for nav links when the page is relaoded

//function on scroll
const changeOnScroll = () => {
  let nav = document.getElementById('nav');
  let nav_links = document.querySelectorAll('.nav-link');
  // let viewWidth = obj.newViewWidth;
// let viewWidth = window.viewWidth;

  if(window.pageYOffset == 0 && nav.scrollWidth >= 991){
   nav.style.backgroundColor = 'inherit';
   nav.style.boxShadow = "none";

   nav_links.forEach(nav_link => {
    nav_link.style.color = "#ffffff98";
  }); 

  nav_links.forEach(nav => {
    nav.addEventListener('mouseover', (e)=>{
      nav.style.color = "#fff";
 
    })
    nav.addEventListener('mouseout', (e)=>{
      nav.style.color = "#ffffff98";
 
    })
   });
  }
  // if(nav.scrollWidth < 991){
  //   for(let i=1; i<5; i++){
  //     // nav_links[i].style.color = '#6c757d';
  //     nav_links[i].style.color = '#212529';
  //   }
  // }
  
  else{
     nav.style.backgroundColor = '#f8f9fa'; 
    nav.style.boxShadow = "0 0px 25px rgba(150, 130, 115, 0.8)";
    nav_links.forEach(nav => {
      nav.style.color = "#212529";
    });
  

  nav_links.forEach(nav => {
    nav.addEventListener('mouseover', (e)=>{
      nav.style.color = "#f4623a";
 
    })
    nav.addEventListener('mouseout', (e)=>{
      nav.style.color = "#212529";
 
    })
   });
}

}




window.addEventListener("load", changeOnScroll);
window.addEventListener("scroll", changeOnScroll);



// const changeOnMouseHover = () =>{
//   let caption = document.querySelector('.capt');
//   caption.style.display = 'block';
// }

// let get_Started = document.getElementById('getStarted');
// console.log(get_Started.offsetTop);

/* this function changes the color of the nav items when the corresponding page is viewed */

const changeNavItemColor = () => {
   const getStartedPage = document.getElementById('getStarted');
   const servicesPage = document.getElementById('services');
   const portfolioPage = document.getElementById('portfolio');
   const getInTouchPage = document.getElementById('get-in-touch');
   let pages = [getStartedPage, servicesPage, portfolioPage, getInTouchPage];
   let nav_links = document.getElementsByClassName('nav-link');
   


  

       let page1 = pages[0].getBoundingClientRect();
       let page2 = pages[1].getBoundingClientRect();
       let page3 = pages[2].getBoundingClientRect();
       let page4 = pages[3].getBoundingClientRect();

 

      if(page1.top >= -414 && page1.top <= 69 ){
        nav_links[1].style.color = '#f4623a';
      
      }
      if(page2.top >= -486.734375 && page2.top <= 65 ){
        nav_links[2].style.color = '#f4623a';
      
      }
      if(page3.top >= -777 && page3.top <= 71.15625 ){
        nav_links[3].style.color = '#f4623a';
      
      }
      if(page4.top <= 70.390625 ){
        nav_links[4].style.color = '#f4623a';
      
      }
 
  // console.log(page1.top, windowDist);
   

   
}
window.addEventListener('scroll', changeNavItemColor);



// const getStartedPage = document.getElementById('getStarted');
// const servicesPage = document.getElementById('services');
// const portfolioPage = document.getElementById('portfolio');
// const getInTouchPage = document.getElementById('get-in-touch');
// let pages = [getStartedPage, servicesPage, portfolioPage, getInTouchPage];
// let page3 = pages[2].getBoundingClientRect();
// console.log(page3.top);


// form validation



// Array.prototype.slice.call(forms).forEach(form => {
//   if(form.value == ""){
//     contactForm.classList.add("disabled");
//   }
// })


/* This function checks if the input field is empty and displays to the user that that
field is required */






const nameFieldIsEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
let AllRequired = document.querySelectorAll('.req');
  let nameField = document.getElementById('name');
  if(nameField.value == ""){
  AllRequired[0].classList.remove("d-none");
  inputs[0].classList.add("is-invalid");
}
}

const emailFieldIsEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
let AllRequired = document.querySelectorAll('.req');
  let emailField = document.getElementById('email');
  if(emailField.value == ""){
    AllRequired[1].classList.remove("d-none");
    inputs[1].classList.add("is-invalid");

     }
}

const pNumberFieldIsEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
let AllRequired = document.querySelectorAll('.req');
  let pNumberField = document.getElementById('p-number');
  if(pNumberField.value == ""){
    AllRequired[2].classList.remove("d-none");
    inputs[2].classList.add("is-invalid");

     }
}

const messageFieldIsEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
  let AllRequired = document.querySelectorAll('.req');
  let messageField = document.getElementById('message');
  if(messageField.value == ""){
    AllRequired[3].classList.remove("d-none");
    inputs[3].classList.add("is-invalid");

     }
}
 

////////////////////////////////////////////////////////////////////////////////////
  
// These functions make sure that when something is entered into the input field or deleted, 
// the input field will not be empty on keyup

const nameFieldIsNotEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
  let nameField = document.getElementById('name');
let AllRequired = document.querySelectorAll('.req');
if(nameField.value !== ""){
  AllRequired[0].classList.add("d-none");
  inputs[0].classList.remove("is-invalid");

  }else{
    AllRequired[0].classList.remove("d-none");
    inputs[0].classList.add("is-invalid");

  }

}
const emailFieldIsNotEmpty = () => {
  let emailField = document.getElementById('email');
let AllRequired = document.querySelectorAll('.req');
if(emailField.value !== ""){
  AllRequired[1].classList.add("d-none");
  }else{
    AllRequired[1].classList.remove("d-none");
      
  }

}
const pNumberFieldIsNotEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
  let pNumberField = document.getElementById('p-number');
let AllRequired = document.querySelectorAll('.req');
if(pNumberField.value !== ""){
  AllRequired[2].classList.add("d-none");
  inputs[2].classList.remove("is-invalid");    

  }else{
    AllRequired[2].classList.remove("d-none");
    inputs[2].classList.add("is-invalid");    

  }

}
const messageFieldIsNotEmpty = () => {
  let inputs = document.querySelectorAll('.form-control');
  let messageField = document.getElementById('message');
let AllRequired = document.querySelectorAll('.req');
if(messageField.value !== ""){
  AllRequired[3].classList.add("d-none");
  inputs[3].classList.remove("is-invalid");

  }else{
    AllRequired[3].classList.remove("d-none");
    inputs[3].classList.add("is-invalid");    

  }

}
  
/////////////////////////////////////////////////////////////


// let forms = document.querySelectorAll(".needs-validation");
// let contactForm = document.getElementById("contactForm");


// Array.prototype.slice.call(forms).forEach(form =>{
//    form.addEventListener("onkeydown", (event)=>{
//    if(!form.checkValidity()){   
//    event.preventDefault();
//     event.stopPropagation();
//     console.log("valid");
//   }
//   // let submitBtn = document.getElementById("submitBtn");
//   // submitBtn.classList.remove("disabled");
//   form.classList.add("was-validated");
//    }, false)
// })


//this is for the validation of the form
///////////////////////////////////////////////////////////////////////////
let nameField = document.getElementById('name');
let pNumberField = document.getElementById('p-number');
let messageField = document.getElementById('message');

const isEmailValidated = {value: false};
const emailValidation = () =>{
  const isEmailCorrect = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailField = document.getElementById('email');
  invalidMessage = document.querySelector(".inv");
  let inputs = document.querySelectorAll('.form-control');

  if(isEmailCorrect.test(emailField.value) == false){
  invalidMessage.classList.remove("d-none");
  inputs[1].classList.add("is-invalid");
  isEmailValidated.value = false;
  }else if(isEmailCorrect.test(emailField.value) == true){
    invalidMessage.classList.add("d-none");
    inputs[1].classList.remove("is-invalid");

    isEmailValidated.value = true;
  }

console.log(isEmailValidated);
if(nameField.value !== "" && pNumberField.value !== "" 
&& messageField.value !== "" && isEmailValidated.value == true ){
  document.getElementById("submitBtn").classList.remove("disabled");
}if(nameField.value !== "" && pNumberField.value !== "" 
&& messageField.value !== "" && isEmailValidated.value == false ){
  document.getElementById("submitBtn").classList.add("disabled");
}if(nameField.value == "" && pNumberField.value == "" 
&& messageField.value == "" && isEmailValidated.value == false){
  document.getElementById("submitBtn").classList.add("disabled");
}if(nameField.value == "" && pNumberField.value == "" 
&& messageField.value == "" && isEmailValidated.value == true){
  document.getElementById("submitBtn").classList.add("disabled");
}if(nameField.value == "" || pNumberField.value == "" 
|| messageField.value == ""){
  document.getElementById("submitBtn").classList.add("disabled");
}
  

}
const allValidation = () =>{
  const isEmailCorrect = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let emailField = document.getElementById('email');
  invalidMessage = document.querySelector(".inv");

  if(isEmailCorrect.test(emailField.value) == false){
  isEmailValidated.value = false;
  }else if(isEmailCorrect.test(emailField.value) == true){
    isEmailValidated.value = true;
  }

console.log(isEmailValidated);
if(nameField.value !== "" && pNumberField.value !== "" 
&& messageField.value !== "" && isEmailValidated.value == true ){
  document.getElementById("submitBtn").classList.remove("disabled");
}if(nameField.value !== "" && pNumberField.value !== "" 
&& messageField.value !== "" && isEmailValidated.value == false ){
  document.getElementById("submitBtn").classList.add("disabled");
}if(nameField.value == "" && pNumberField.value == "" 
&& messageField.value == "" && isEmailValidated.value == false){
  document.getElementById("submitBtn").classList.add("disabled");
}if(nameField.value == "" && pNumberField.value == "" 
&& messageField.value == "" && isEmailValidated.value == true){
  document.getElementById("submitBtn").classList.add("disabled");
}if(nameField.value == "" || pNumberField.value == "" 
|| messageField.value == ""){
  document.getElementById("submitBtn").classList.add("disabled");
}
  

}

///////////////////////////////////////////////////////////////////////////