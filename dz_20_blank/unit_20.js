
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
let input = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');

function t1() {
    let symbol = input.value;
    out1.textContent = symbol;
    return symbol;
}

// ваше событие здесь!!!
input.addEventListener('input', t1);

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
let input2 = document.querySelector('.i-2');
let out2 = document.querySelector('.out-2');

function t2(e) {
    let keyKod = e.keyCode;
    out2.textContent = keyKod;
    
    return keyKod;
}

// ваше событие здесь!!!
input2.addEventListener('keypress', t2);


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */
let input3 = document.querySelector('.i-3');

let w3 = 75;

function t3(e) {
    let keyKod = e.keyCode;
    let out = document.querySelector('.out-3');
    
    if (keyKod >= 97 && keyKod <= 122) {out.textContent = true}
    else if (keyKod >= 48 && keyKod <= 57) {out.textContent = false}
}

// ваше событие здесь!!!
input3.addEventListener('keypress', t3);


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
let input4 = document.querySelector('.i-4');

function t4() {
    let out = input4.value.toLowerCase();
    document.querySelector('.out-4').textContent = out;
}

// ваше событие здесь!!!
input4.addEventListener('keypress', t4);

// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
let input5 = document.querySelector('.i-5');

function t5() {
    let out = input5.value.toUpperCase();
    document.querySelector('.out-5').textContent = out;
}

// ваше событие здесь!!!
input5.addEventListener('keypress', t5);

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
let input6 = document.querySelector('.i-6');

function t6() {
    let a = input6.value.toLowerCase();
    input6.value = a;
}

// ваше событие здесь!!!
input6.addEventListener('input', t6);


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
let input7 = document.querySelector('.i-7');

function t7() {
    const a7 = ['A', 's', 'z', 'q', 'w', 'e', 'r', 't', 'y'];
    function arrayRandElement(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    };
    let symbol = arrayRandElement(a7);
    document.querySelector('.out-7').textContent += symbol;
}

// ваше событие здесь!!!
input7.addEventListener('input', t7);

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
let input8 = document.querySelector('.i-8');
let masiv = [];

function t8() {
    let a = input8.value;
    
    if (a === 'i') {masiv.push(1)}
    else if (a === 'o') {masiv.push(0)}
    else if (a === 'l') {masiv.push(7)}
    else masiv.push(a)
    input8.value = '';
    
    document.querySelector('.out-8').textContent = masiv;
    
}

// ваше событие здесь!!!
input8.addEventListener('input', t8);


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let input9 = document.querySelector('.i-9');

function t9(e) {
    let count = 0;

    if (e.keyCode == 40) {count++}

        document.querySelector('.out-9').textContent = count;

console.log('[e]', e);
console.log('[e.keyCode]', e.keyCode);
}

// ваше событие здесь!!!
input9.addEventListener('keydown', t9);


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px.
 */
let input10 = document.querySelector('.i-10');

function t10(event) {
    w3++;
    let img = document.querySelector('.div-10').querySelector('img');
    if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        console.log('[qwerty]', 'qwerty');
        img.style.height = w3 + 'px';}
    else if (event.key == "ArrowLeft" || event.key == "ArrowRight") {img.style.width = w3 + 'px';}
    console.log(event.key);
    console.log(event.code);
    console.log(event);

}

// ваше событие здесь!!!
input10.addEventListener('keydown', t10);

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

// shift, alt, ctr, пробел, enter.
let leter = [];
let chislo = [];
let funcKeys = ['space', 'enter', 'capslock', 'shift', 'tab', 'alt', 'Control'];

for (let i = 65; i <= 90; i++) {
    let a = String.fromCharCode(i);
    leter.push(a);
}

for (let i = 48; i <= 57; i++) {
    let a = String.fromCharCode(i);
    chislo.push(a);
}

let allSymbols = leter.concat(chislo, funcKeys);

let mapSymbols = allSymbols.map(function (elem) {
    return '<div class="block">' + elem + '</div>';
});
console.log('[mapSymbols]', mapSymbols);

document.querySelector('.out-11').innerHTML = mapSymbols.join('');



let input11 = document.querySelector('.i-11');

function t11(e) {
    let clawichi = document.querySelectorAll('.block');
    let a = e.key.toLowerCase();
    console.log('[a]', a);
    for (let i = 0; i < clawichi.length; i++) {
        let b = clawichi[i].textContent.toLowerCase();
        console.log('[b]', b);
        if (a == b) {clawichi[i].classList.toggle('active')}
    }
    console.log('[e]', e);
}

// ваше событие здесь!!!
input11.addEventListener('keydown', t11);
input11.addEventListener('keyup', t11);
