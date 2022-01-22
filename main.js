const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop  = document.getElementById('stop');
const reset = document.getElementById('reset');

let startTime;
let timeoutid;
let elapsedTime = 0;

  function setButtonInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }

  function setButtonRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }

  function setButtonStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }

  setButtonInitial();

  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setButtonRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setButtonStopped();
    clearTimeout(timeoutid);
    elapsedTime += Date.now() - startTime;
  });

  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setButtonInitial()
    timer.textContent = '0:0:0:0';
    elapsedTime = 0;
  });
  
function countUp() {
 const d = new Date(Date.now() - startTime + elapsedTime);
 const sec = Math.floor(d/1000);
 const ms = String(d.getMilliseconds());

 timer.textContent = `${Math.floor((sec/10)/10)}:${Math.floor((sec/10)%10)}:${sec%10}:${Math.floor(ms/100)}`;

 timeoutid = setTimeout(() => {
 countUp();
 },10);
}