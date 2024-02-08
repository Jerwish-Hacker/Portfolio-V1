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

    } else {
        scrolldownfinger.classList.remove('d-none-myeffect') ;             
    }
  });
