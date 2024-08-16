function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform="transalteY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform="transalteY(-500px)"
}
const texts=[
    "Motivated Java Full Stack Developer , and have a explicit knowlege in back-end and front-end .",
    
]
let speed=100;
const textElements=document.querySelector(".typewriter-text")
let textindex=0;
let charcterindex=0;
function typeWritter(){
    if(charcterindex<texts[textindex].length){
        textElements.innerHTML+=texts[textindex].charAt(charcterindex);
        charcterindex++;
        setTimeout(typeWritter,speed);
    }
    else{
        setTimeout(eraseText,1000)
    }
   
}
function eraseText(){
    if(textElements.innerHTML.length>0){
        textElements.innerHTML=textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText,50);
    }
    else{
        textindex=(textindex+1)%texts.length;
        charcterindex=0;
        setTimeout(typeWritter,500);
    }
}
window.onload=typeWritter;