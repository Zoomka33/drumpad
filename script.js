//работа с dataset/data-key   https://www.youtube.com/watch?v=bEuFi9OvgnA

// Проигрыванеи по клику мыши
const pad = document.querySelector('.drumblock');
let aud = document.querySelectorAll('.aud');
pad.addEventListener('click', function (e) {
    let tg = +e.target.innerHTML;
    let focus = e.target;
    focus.classList.add('play');
    aud[tg-1].currentTime=0;
    aud[tg-1].play();
});



//проигрывание по кнопкам
window.addEventListener('keypress', playSound);
function playSound(e){


    const audio = document.querySelector(`audio[data-key="${e.key}"]`); //записывает в переменную аудио тег, который совпадает с нажатой конпкой (data-key)
    const key = document.querySelector(`.key[data-key="${e.key}"]`); //записывает в переменную кнопку тег, которы совпадает с нажатой конпкой (data-key)
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    console.log(key);
    key.classList.add('play');


}


function removeTransition(e){
    this.classList.remove('play');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

