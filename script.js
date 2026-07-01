/*==========================================================
  HAPPY BIRTHDAY MENDAL
  SCRIPT.JS
  PART 1
  HERO + LOCK SCREEN
==========================================================*/


/*==========================================================
  ELEMENTS
==========================================================*/

const screens = document.querySelectorAll(".screen");

const hero = document.getElementById("hero");
const lockScreen = document.getElementById("lockScreen");
const envelopeSection = document.getElementById("envelopeSection");

const startButton = document.getElementById("startButton");

const unlockButton = document.getElementById("unlockButton");

const passwordInput = document.getElementById("password");

const errorMessage = document.getElementById("errorMessage");

const revealItems = document.querySelectorAll(".reveal");


/*==========================================================
  CHANGE SCREEN
==========================================================*/

function showScreen(screen){

    screens.forEach(section=>{

        section.classList.remove("active");

    });

    screen.classList.add("active");

}


/*==========================================================
  HERO INTRO
==========================================================*/

function heroIntro(){

    revealItems.forEach(item=>{

        item.classList.remove("show");

    });

    revealItems.forEach((item,index)=>{

        setTimeout(()=>{

            item.classList.add("show");

        },400*index);

    });

}


/*==========================================================
  START BUTTON
==========================================================*/

startButton.addEventListener("click",()=>{

    showScreen(lockScreen);

});


/*==========================================================
  PASSWORD CHECK
==========================================================*/

function checkPassword(){

    const pin=passwordInput.value.trim();

    if(pin==="1105"){

        errorMessage.textContent="";

        showScreen(envelopeSection);

    }

    else{

        errorMessage.textContent="Wrong Passcode 💜";

        passwordInput.classList.add("shake");

        setTimeout(()=>{

            passwordInput.classList.remove("shake");

        },500);

    }

}


/*==========================================================
  BUTTON CLICK
==========================================================*/

unlockButton.addEventListener("click",checkPassword);


/*==========================================================
  ENTER KEY
==========================================================*/

passwordInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        checkPassword();

    }

});


/*==========================================================
  WINDOW LOAD
==========================================================*/

window.addEventListener("load",()=>{

    heroIntro();

});
/*==========================================================
  SCRIPT.JS
  PART 2
  ENVELOPE + LETTER
==========================================================*/


/*==========================================================
  ELEMENTS
==========================================================*/

const envelope = document.getElementById("envelope");

const letterSection = document.getElementById("letterSection");

const continueButton = document.getElementById("continueButton");

const gallerySection = document.getElementById("gallerySection");

const typewriter = document.getElementById("typewriter");


/*==========================================================
  LETTER MESSAGE
==========================================================*/

const birthdayMessage = `Hey Mendal,

Before anything else...

Happy Birthday! 💜

I wanted this website to be a little different.

Not just another birthday wish...

But a small journey made especially for you.

You're one of the funniest people I know.
Your nonstop radio never runs out of battery.
You somehow manage to make everyone laugh without even trying.

Behind all those jokes is someone incredibly kind,
strong and hardworking.

I know how much effort you've been putting into your CA journey,
and I genuinely believe you'll achieve everything you're working for.

Never stop smiling.

Never stop dreaming.

Keep being the amazing person you are.

Thank you for being the wonderful sister you are.

May this birthday bring happiness,
good health,
success,
and memories you'll cherish forever.

Enjoy every surprise waiting ahead...

Happy Birthday once again! 💜

With lots of love,

— Your Anna ❤️`;


/*==========================================================
  TYPEWRITER EFFECT
==========================================================*/

let typingIndex = 0;
let typingTimer = null;

function typeLetter(){

    clearTimeout(typingTimer);

    typingIndex = 0;

    typewriter.innerHTML = "";

    function typing(){

        if(typingIndex < birthdayMessage.length){

            typewriter.innerHTML += birthdayMessage.charAt(typingIndex);

            typingIndex++;

            typingTimer = setTimeout(typing,25);

        }

    }

    typing();

}


/*==========================================================
  ENVELOPE OPEN
==========================================================*/

let envelopeOpened = false;

envelope.addEventListener("click",()=>{

    if(envelopeOpened) return;

    envelopeOpened = true;

    envelope.style.pointerEvents = "none";

    envelope.classList.add("open");

    setTimeout(()=>{

        showScreen(letterSection);

        typeLetter();

    },1200);

});


/*==========================================================
  CONTINUE TO GALLERY
==========================================================*/

continueButton.addEventListener("click",()=>{

    showScreen(gallerySection);

});
/*==========================================================
  SCRIPT.JS
  ADD-ON 3
  PREMIUM GALLERY
==========================================================*/


/*==========================================================
  ELEMENTS
==========================================================*/

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeLightbox = document.getElementById("closeLightbox");

const prevImage = document.getElementById("prevImage");

const nextImage = document.getElementById("nextImage");

const imageCounter = document.getElementById("imageCounter");

const galleryNextButton = document.getElementById("galleryNextButton");

const aboutSection = document.getElementById("aboutSection");

const toastMessage = document.getElementById("toastMessage");

const heartContainer = document.getElementById("heartContainer");


/*==========================================================
  GALLERY DATA
==========================================================*/

const galleryImages = [];

galleryItems.forEach(item=>{

    const img=item.querySelector("img");

    galleryImages.push(img.src);

});


let currentImage=0;


/*==========================================================
  SHOW NEXT BUTTON
==========================================================*/

galleryNextButton.style.opacity="0";

galleryNextButton.style.pointerEvents="none";


/*==========================================================
  GALLERY ANIMATION
==========================================================*/

function animateGallery(){

    galleryItems.forEach((item,index)=>{

        item.style.opacity="0";

        item.style.transform="translateY(50px)";

        setTimeout(()=>{

            item.style.transition=".6s";

            item.style.opacity="1";

            item.style.transform="translateY(0)";

        },180*index);

    });

    setTimeout(()=>{

        galleryNextButton.style.transition=".5s";

        galleryNextButton.style.opacity="1";

        galleryNextButton.style.pointerEvents="auto";

    },galleryItems.length*180+400);

}


/*==========================================================
  TOAST
==========================================================*/

function showToast(){

    toastMessage.classList.add("show");

    setTimeout(()=>{

        toastMessage.classList.remove("show");

    },3000);

}


/*==========================================================
  LIGHTBOX
==========================================================*/

function openLightbox(index){

    currentImage=index;

    updateLightbox();

    lightbox.classList.add("show");

    document.body.style.overflow="hidden";

}


function closeBox(){

    lightbox.classList.remove("show");

    document.body.style.overflow="auto";

}


function updateLightbox(){

    lightboxImage.src=galleryImages[currentImage];

    imageCounter.textContent=

    `${currentImage+1} / ${galleryImages.length}`;

}


/*==========================================================
  PREVIOUS
==========================================================*/

prevImage.addEventListener("click",()=>{

    currentImage--;

    if(currentImage<0){

        currentImage=galleryImages.length-1;

    }

    updateLightbox();

});


/*==========================================================
  NEXT
==========================================================*/

nextImage.addEventListener("click",()=>{

    currentImage++;

    if(currentImage>=galleryImages.length){

        currentImage=0;

    }

    updateLightbox();

});


/*==========================================================
  CLOSE
==========================================================*/

closeLightbox.addEventListener("click",closeBox);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeBox();

    }

});


/*==========================================================
  KEYBOARD
==========================================================*/

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("show")) return;

    if(e.key==="Escape"){

        closeBox();

    }

    if(e.key==="ArrowRight"){

        nextImage.click();

    }

    if(e.key==="ArrowLeft"){

        prevImage.click();

    }

});


/*==========================================================
  HEART
==========================================================*/

function createHeart(x,y){

    const heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="💜";

    heart.style.left=x+"px";

    heart.style.top=y+"px";

    heartContainer.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },1800);

}


/*==========================================================
  GALLERY EVENTS
==========================================================*/

galleryItems.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        openLightbox(index);

    });

    item.addEventListener("dblclick",(e)=>{

        createHeart(e.clientX,e.clientY);

    });

});


/*==========================================================
  NEXT SURPRISE
==========================================================*/

galleryNextButton.addEventListener("click",()=>{

    showScreen(aboutSection);

});


/*==========================================================
  AUTO START
==========================================================*/

const galleryObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateGallery();

            showToast();

            galleryObserver.disconnect();

        }

    });

});

galleryObserver.observe(gallerySection);