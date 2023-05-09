let hour = 0,
    min = 0,
    sec = 0;

const modifyBtns = document.querySelectorAll("button")
    hourText = document.querySelector(".hour"),
    minText = document.querySelector(".min"),
    secText = document.querySelector(".sec")

let isPause = false;
let countInterval,
    renderInterval

function addTime(e){
    if(e.target.classList.contains('sec')){
        sec >= 60 ? (min+=1, sec=0) : sec+=10
    } else if(e.target.classList.contains('min')){
        min >= 60 ? (hour+=1, min=0) : min+=1
    } else if(e.target.classList.contains('hour')){
        hour >= 24 ? 0 : hour+=1
    }
    renderTime()
}
secText.addEventListener('click', addTime)
minText.addEventListener('click', addTime)
hourText.addEventListener('click', addTime)

function startTimer() {
    if((hour!==0 || min!==0 || sec!==0) && !isPause){
        countInterval = setInterval(countTimer, 1000)
        renderInterval = setInterval(renderTime, 1000)
        modifyBtns[0].style.display = "none"
        modifyBtns[1].style.display = "inline-block"
    } else {
        alert("시간을 입력해주세요")
    }
}

function pauseTimer() {
    clearInterval(countInterval)
    clearInterval(renderInterval)
    modifyBtns[0].style.display = "inline-block"
    modifyBtns[1].style.display = "none"
}

function resetTimer(){
    pauseTimer()
    hour=0, min=0, sec=0
    renderTime()
}



function countTimer() {
    if(sec > 0){
        sec--;
    } else if(min > 0){
        min--;
        sec = 59;
    } else if(hour > 0) {
        hour--;
        min = 59;
        sec = 59;
    }
}

function renderTime() {
    secText.textContent = sec < 10 ? '0' + sec : sec
    minText.textContent = min < 10 ? '0' + min : min
    hourText.textContent = hour < 10 ? '0' + hour : hour
}