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


// Slider
const next_btn = document.querySelector('.slider_button');
const images = document.querySelectorAll('.slider_img');
const dots = document.querySelectorAll('.dot');
const par = document.querySelector('.slider_desc p');

let imgIndex = 0;
let text = [
    "У Хмельницькій області розташований загублений край - Бакота. Мальовничий каньйон з давньою історією захоплює своїми просторами та незвичною атмосферою. Бджільництво, свіжий мед із польових трав, дотик до природи.",
    "Полонини Карпат, у селі Орів посеред гір розташувався затишний куточок для незабутніх вражень. Справжні українські гори, власноручне сироваріння на полонині, водоспади та вікові дерева чекають на Вас.", 
    "Неподалік центра Києва розташувалось автентичне українське село на території однойменного села Пирогово. Дерев’яні млини, запашний хліб, приготовлений своїми руками, українські пісні та багато іншого чекає на вас уже зараз.",
    "В Одеській області знаходиться мальовниче містечко Вилкове. Його ще називають «українською Венецією». Вилкове - це містечко на воді, весь в каналах. Розташоване в місці, де зустрічаються річка Дунай і Чорне море. Люди пересуваються переважно човнами. Нетипове українське село не залишить Вас без вражень."
];

let isTransitioning = false;

function show(x) {
    if (isTransitioning) return;

    isTransitioning = true;
    images[imgIndex].classList.remove('active');
    dots[imgIndex].classList.remove('active');
    images[x].classList.add('active');
    dots[x].classList.add('active');

    par.classList.add('hidden');
    setTimeout(() => {
        par.textContent = text[x];
        par.classList.remove('hidden');

        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }, 300);

    imgIndex = x;
}

next_btn.onclick = function() {
    if (isTransitioning) return;

    let index = imgIndex + 1;
    if (index >= images.length) {
        index = 0;
    }
    show(index);
};

show(imgIndex);