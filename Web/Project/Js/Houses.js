//Scroll up button
const scrollbtn =  document.querySelector('.up');

window.onscroll = function() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        scrollbtn.style.opacity = '1';
    }
    else {
        scrollbtn.style.opacity = '0';
    }
};

scrollbtn.onclick = function() {
    if (scrollbtn.style.opacity === '1') {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
};