const boxes =document.querySelectorAll('.box')

window.addEventListener('scroll',checkboxes)

checkboxes();

function checkboxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}



window.addEventListener('scroll', function() {
    const scrolldownfinger=document.querySelector("#scroll-down-finger");    
    if (window.scrollY > 0) {
        scrolldownfinger.classList.add('d-none-myeffect');                

    }    
     else {
        scrolldownfinger.classList.remove('d-none-myeffect') ;             
    }
  });


  document.addEventListener("DOMContentLoaded", function () {
    var percentage = document.querySelector('#percentage');
    var upscroll = document.querySelector('#up-scroll');

    window.addEventListener('scroll', function () {
        // Get the HTML and body elements
        const htmlElement = document.documentElement;
        const bodyElement = document.body;

        // Define variables for scroll top and scroll height properties
        const scrollTopProperty = 'scrollTop';
        const scrollHeightProperty = 'scrollHeight';

        // Calculate the scroll position percentage
        const scrollPercentage = (
            (htmlElement[scrollTopProperty] || bodyElement[scrollTopProperty]) /
            ((htmlElement[scrollHeightProperty] || bodyElement[scrollHeightProperty]) - htmlElement.clientHeight)
        ) * 100;        
        percentage.style.width=scrollPercentage.toFixed(0)+"%";

        if(scrollPercentage>=98){
            upscroll.classList.remove('d-none-myeffect');
        }
        else{
            upscroll.classList.add('d-none-myeffect');
        }

    });
});
const loader=document.querySelector(".loading-box");  
window.addEventListener('load', function() {
    loader.classList.add("hidden")  
    
    
  });