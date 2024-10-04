let home=document.querySelector(".home");
let about=document.querySelector(".about");
let admissions=document.querySelector(".admissions");
let events=document.querySelector(".events");
let staff=document.querySelector(".staff");
let alumni=document.querySelector(".alumni");
let contact=document.querySelector(".contact");
window.addEventListener("scroll",checkScroll);
checkScroll();
function checkScroll(){
    const triggerBottom=window.innerHeight/5*4;
    checkVisibility(home,triggerBottom);
    checkVisibility(about,triggerBottom);
    checkVisibility(admissions,triggerBottom);
    checkVisibility(events,triggerBottom);
    checkVisibility(staff,triggerBottom);
    checkVisibility(alumni,triggerBottom);
    checkVisibility(contact,triggerBottom);
}
function checkVisibility(element,triggerBottom)
{
    if(!element)return;
    const elementTop=element.getBoundingClientRect().top;
    if(elementTop<triggerBottom)
        {
            element.classList.add("show");
        }
        else{
            element.classList.remove("show");
        }
}