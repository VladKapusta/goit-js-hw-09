const refs = {
  form: document.querySelector('.form'),
};
refs.form.addEventListener('input', onInputAddsValue);
refs.form.addEventListener('submit', onSubmitFormCreatePromises);

const formData = {};

function onInputAddsValue(e) {
  formData[e.target.name] = +e.target.value;
}

function onSubmitFormCreatePromises(e) {
  e.preventDefault();
  const { delay, step, amount } = formData;
  let promiseDelay = delay;

  for (let i = 1; i <= amount; i++) {
    createPromise(i, promiseDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    promiseDelay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
