const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registrationLink = document.querySelector('.register-link');
const loginPopUp = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registrationLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

loginPopUp.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
})
