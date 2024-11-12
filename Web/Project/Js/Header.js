let lang = document.querySelector('.lang');
let en = document.querySelector('.en');

const link1 = function() {
    en.style.display = 'block';
}
const link2 = function() {
    en.style.display = 'none';
}

let langElement = document.querySelector('.lang');
let enElement = langElement.querySelector('.en');

const link3 = function() {
    const mainText = langElement.childNodes[0].nodeValue.trim();
    const enText = enElement.textContent;

    langElement.childNodes[0].nodeValue = enText + " ";
    enElement.textContent = mainText;
}

lang.addEventListener("mouseover", link1);

lang.addEventListener("mouseout", link2);

enElement.addEventListener("click", link3);


//Media

function removeLang() {
    const ul = document.querySelector('.main_nav ul');
    const langLi = document.querySelector('.lang');

    if (langLi) {
        window.savedContent = langLi.cloneNode(true);
        ul.removeChild(langLi);

        const langImg = document.querySelector('.lang_img');
        window.savedContent2 = langImg.cloneNode(true);
        ul.removeChild(langImg);
    }
}

function addLang() {
    const header = document.querySelector('.header_wrapper > img');
  
    if (window.savedContent) {
        const newElement = document.createElement('div');
        const newElement2 = document.createElement('div');
        const flex_wrapper = document.createElement('div');
        const wrapper = document.createElement('div');
        newElement.classList.add('lang');
        newElement2.classList.add('lang_img');
        flex_wrapper.classList.add('lang_wrapper_flex');
        wrapper.classList.add('lang_wrapper');

        window.savedContent.childNodes.forEach(child => {
            newElement.appendChild(child.cloneNode(true));
        });

        window.savedContent2.childNodes.forEach(child => {
            newElement2.appendChild(child.cloneNode(true));
        });

        header.after(wrapper);
        flex_wrapper.appendChild(newElement2);
        flex_wrapper.appendChild(newElement);
        wrapper.appendChild(flex_wrapper);

        lang.removeEventListener("mouseover", link1);
        lang.removeEventListener("mouseout", link2);
        enElement.removeEventListener("click", link3);

        lang = document.querySelector('.lang');
        en = document.querySelector('.en');

        lang.addEventListener("mouseover", link1);
        
        lang.addEventListener("mouseout", link2);

        langElement = document.querySelector('.lang');
        enElement = langElement.querySelector('.en');
        
        enElement.addEventListener("click", link3);
    }
}

function delLang() {
    const header = document.querySelector('.header_wrapper');
    const wrapper = document.querySelector('.lang_wrapper');
    header.removeChild(wrapper);
}

function restoreLang() {
    const ul = document.querySelector('.main_nav ul');
  
    if (window.savedContent) {
        ul.appendChild(window.savedContent2);
        ul.appendChild(window.savedContent);
        window.savedContent = null;
        window.savedContent2 = null;

        lang.removeEventListener("mouseover", link1);
        lang.removeEventListener("mouseout", link2);
        enElement.removeEventListener("click", link3);

        lang = document.querySelector('.lang');
        en = document.querySelector('.en');

        lang.addEventListener("mouseover", link1);
        
        lang.addEventListener("mouseout", link2);

        langElement = document.querySelector('.lang');
        enElement = langElement.querySelector('.en');
        
        enElement.addEventListener("click", link3);
    }
}

const mediaQuery = window.matchMedia('(max-width: 922px)');

let num = 0;

function handleMediaChange(e) {
    if (e.matches) {
        removeLang();
        addLang();
    } else {
        if (num) {
            delLang();
        }
        restoreLang();
    }
}

mediaQuery.addEventListener('change', handleMediaChange);

handleMediaChange(mediaQuery);
num++;


//Menu burger

const burger = document.getElementById('burgerMenu');
const nav =  document.querySelector('.main_nav');
burger.addEventListener('click', function() {
    burger.classList.toggle('burger');
    if (!burger.classList.contains('burger')) {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});