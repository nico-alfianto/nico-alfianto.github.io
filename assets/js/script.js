// ============================
// MOBILE NAVBAR MENU
// ============================


const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");


if(menuIcon){

    menuIcon.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}



// Close menu when clicking link

const navItems = document.querySelectorAll(".nav-links a");


navItems.forEach(item=>{

    item.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});







// ============================
// NAVBAR SCROLL EFFECT
// ============================


window.addEventListener("scroll",()=>{


    const header = document.querySelector("header");


    if(window.scrollY > 50){

        header.style.background="rgba(15,23,42,0.95)";

    }

    else{

        header.style.background="transparent";

    }


});







// ============================
// SIMPLE SCROLL REVEAL
// ============================


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";


        }


    });


},{

    threshold:0.15

});





sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="0.8s ease";


    observer.observe(section);


});






// ============================
// CURRENT YEAR FOOTER
// ============================


const year = document.querySelector("footer");


if(year){


    year.innerHTML = `

    <p>
    © ${new Date().getFullYear()} Nico Alfianto.
    Built with ❤️ using HTML, CSS & JavaScript.
    </p>

    `;


}
// ============================
// TYPING EFFECT
// ============================


const textElement = document.getElementById("typing");


const texts = [

"Data Analyst",

"Business Intelligence Enthusiast",

"Database Designer",

"System Analysis Enthusiast"

];


let textIndex = 0;

let charIndex = 0;



function typing(){


if(!textElement) return;



if(charIndex < texts[textIndex].length){


textElement.innerHTML += texts[textIndex].charAt(charIndex);


charIndex++;

setTimeout(typing,100);


}

else{


setTimeout(erase,1500);


}


}




function erase(){


if(charIndex > 0){


textElement.innerHTML = 
texts[textIndex].substring(0,charIndex-1);


charIndex--;


setTimeout(erase,50);


}


else{


textIndex++;


if(textIndex >= texts.length){

textIndex=0;

}


setTimeout(typing,300);


}


}



typing();
