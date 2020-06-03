
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    document.querySelector('.out-1').textContent = 'touch';
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('touchstart', t1);

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

function t2(e) {
    
    document.querySelector('.out-2').textContent = e.touches.length;
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('touchstart', t2);

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(e) {
    let out = document.querySelector('.out-3');
    if (e.target.classList.contains('div-3_1')) {out.textContent = 1}
    else if (e.target.classList.contains('div-3_2')) {out.textContent = 2}
}

// ваше событие здесь!!!

document.querySelector('.div-3_1').addEventListener('touchstart', t3);
document.querySelector('.div-3_2').addEventListener('touchstart', t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

let btn4 = document.querySelector('.b-4');
let div4 = document.querySelector('.div-4');

function t4() {
    document.querySelector('.out-4').textContent = 'touch';
    console.log('[qwerty]', 'qwerty');
}

// ваше событие здесь!!!
btn4.onclick = () => div4.addEventListener('touchstart', t4);

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
let button5 = document.querySelector('.b-5');

function t5() {
    div4.removeEventListener('touchstart', t4);
}

// ваше событие здесь!!!
button5.addEventListener('click', t5);

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    document.querySelector('.out-6').textContent = 'touchend';
}

// ваше событие здесь!!!
div4.addEventListener('touchend', t6);


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7() {
    document.querySelector('.div-7').style.backgroundColor = 'red';
}

// ваше событие здесь!!!
document.querySelector('.div-7').addEventListener('touchstart', t7);

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8=['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

function t8() {
    document.querySelector('.div-8').style.backgroundColor = arrayRandElement(a8);
}

// ваше событие здесь!!!
document.querySelector('.div-8').addEventListener('touchstart', t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(e) {
    let a = e.touches.length;

    document.querySelector('.out-9').textContent = a;
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('touchstart', t9);


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10');
let width = 75;


function t10() {
    width++;
    div10.style.width = width + 'px';
    
}

// ваше событие здесь!!!
div10.addEventListener('touchstart', t10);

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(e) {     
    let x = e.touches[0].radiusX;
    let y = e.touches[0].radiusY;
    
    document.querySelector('.out-11').textContent = x + ' ' + y;
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('touchstart', t11);

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelectorAll('.next');
next[0].onclick = nextFunction;

const prev = document.querySelectorAll('.prev');
prev[0].onclick = prevFunction;

const reset = document.querySelectorAll('.reset');
reset[0].onclick = resetFunction;

let src = "img/1.png";

function makeMainImg() {
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('active-img')) {
            src = images[i].src;
        }
    }
    let mainImg = document.querySelector('.img-12-max');
    mainImg.src = src;
}

function nextFunction() {
    count++;
    if (count < images.length) {
        images[count].classList.toggle('active-img');
        images[count - 1].classList.toggle('active-img');

    }
    else if (count > images.length - 1) {
        count = 0;
        images[images.length - 1].classList.toggle('active-img');
        images[count].classList.toggle('active-img');
        console.log('[count]', count);

    }
    
    makeMainImg();
}


function prevFunction() {
    count--;
    if (count < 0) {
        count = images.length - 1;
        images[0].classList.toggle('active-img');
        images[count].classList.toggle('active-img');

    }
    else  {        
        images[count].classList.toggle('active-img');
        images[count + 1].classList.toggle('active-img');
        console.log('[count]', count);

    }
    
    makeMainImg();    
}

function resetFunction() {
    count = 0;
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img')
    }
    images[0].classList.add('active-img');
    
    makeMainImg();
}


// ваше событие здесь!!!
next[0].addEventListener('touchstart', nextFunction);
prev[0].addEventListener('touchstart', prevFunction);
reset[0].addEventListener('touchstart', resetFunction);