// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  isActive: false,

  onClose(selectedDates) {
    if(options.isActive) {
      return
    }
    if (selectedDates[0].getTime() - Date.now() > 0) {
      refs.startBtn.disabled = false;
      refs.startBtn.addEventListener('click', onStartTimer);
      function onStartTimer() {
        options.isActive = true;
        
        const timerId = setInterval(() => {
          const currentTime = Date.now();
          const timer = selectedDates[0].getTime() - currentTime;
          if (timer < 1000) {
            clearInterval(timerId);
          }
          updateInterface(convertMs(timer));
        }, 1000);
      }
    } else {
      refs.startBtn.disabled = true;
      alert('Please choose a date in the future');
    }
  },
};


function updateInterface({ days, hours, minutes, seconds }) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

flatpickr(refs.input, options);
