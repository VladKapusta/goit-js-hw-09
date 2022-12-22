const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop'),
  resetBtn: document.querySelector('[data-reset'),
};

refs.startBtn.addEventListener('click', onBtnStartChangeBgColorBody);
refs.stopBtn.addEventListener('click', onBtnStopChangeBgColorBody);
refs.resetBtn.addEventListener('click', onReset);

let intervalId = null;

function onBtnStartChangeBgColorBody() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
    refs.stopBtn.style.backgroundColor = getRandomHexColor();
  }, 1000);

  disabledStartBtn(true);
}

function onBtnStopChangeBgColorBody() {
  refs.stopBtn.style.backgroundColor = 'red';
  clearInterval(intervalId);
  disabledStartBtn(false);
  hiddenResetBtn(false);
}

function onReset() {
  refs.body.removeAttribute('style');
  refs.stopBtn.removeAttribute('style');
  clearInterval(intervalId);
  hiddenResetBtn(true);
  disabledStartBtn(false);
}

function hiddenResetBtn(value) {
  refs.resetBtn.hidden = value;
}
function disabledStartBtn(value) {
  refs.startBtn.disabled = value;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
