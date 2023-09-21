let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner h1');
window.addEventListener("scroll", (event) => {
    
    let top = this.scrollY;
   
    listBg.forEach((bg, index) => {
        if(index != 0 && index != 8){
            bg.style.transform = `translateY(${(top*index/2)}px)`;
        }else if(index == 0){
            bg.style.transform = `translateY(${(top/3)}px)`;
        }
    })
    titleBanner.style.transform = `translateY(${(top*4/2)}px)`;

 
    listTab.forEach(tab =>{
        if(tab.offsetTop - top < 550){
            tab.classList.add('active');
        }else{
            tab.classList.remove('active');
        }
    })
});  

document.addEventListener('DOMContentLoaded',()=>{
    const sideNav=document.querySelector('.side-nav');
    const btnNav=document.querySelector('#btnNav');
    const overlayScreen=document.querySelector('.nav-overlay');
  
    btnNav.addEventListener('click',()=>{
      sideNav.classList.add('open');
    });
  
    overlayScreen.addEventListener('click',()=>{
      sideNav.classList.remove('open');
    });
  
  
  });