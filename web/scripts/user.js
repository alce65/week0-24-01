console.log('Loaded user.js');

const function1 = () => {
  const buttonElement1 = document.querySelector('button.b1');
  const buttonElement2 = document.querySelector('button.b2');
  const pElement = document.querySelector('.output');

  let count = 0;
  buttonElement1.addEventListener('click', () => {
    pElement.innerHTML = `Button 1 clicked ${++count} times`;
  });

  buttonElement2.addEventListener('click', () => {
    console.log('Button 2 clicked');
  });
};

const function2 = () => {
  const onClick = (event) => {
    let count = 0;
    const pElement = document.querySelector('.output');
    const classes = event.target.className;
    if (classes.includes('b1')) {
      pElement.innerHTML = `Button 1 clicked ${++count} times`;
    } else if (classes.includes('b2')) {
      let isOk = confirm('estás seguro?');
      if (isOk) {
        location.pathname = '/index.html';
      }
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const outputElement = document.querySelector('output');
    const formElement = event.target;
    console.dir(formElement.elements[0].value);
    outputElement.value = `Hola, ${formElement.elements[0].value}, como estás?`;
  };

  const buttonElements = document.querySelectorAll('button.c1');
  const formElement = document.querySelector('form');
  buttonElements.forEach((buttonElement) => {
    buttonElement.addEventListener('click', onClick);
  });
  formElement.addEventListener('submit', onSubmit);
};

function2();
