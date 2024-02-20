// Creando una función
export function greeting() {
  console.log('Soy una función en un fichero JS!');
}

export function learnDOM() {
  document.body.children[0].children[0].textContent =
    'Hola desde el DOM de JS!';
  document.body.children[2].children[0].style.color = 'red';

  // DOM Localizations

  // QuerySelector
  const titleElement = document.querySelector('h1');
  console.dir(titleElement);

  // const titleElements = document.querySelectorAll('h1');
  // console.dir(titleElements);
  titleElement.innerHTML = 'Hola desde el DOM de JS! de los <i>Martes</i>';

  // const testPElement = document.querySelector('.test');
  // console.dir(testPElement);

  const testPElements = document.querySelectorAll('.test');
  console.log(testPElements);
  testPElements.forEach((p, index) => {
    p.textContent = `Hola desde el DOM de JS! usando querySelectorAll y cambiando el párrafo ${
      index + 1
    }`;
    p.style.color = 'green';
  });

  const firstPElement = document.querySelector('#first-p');
  console.dir(firstPElement);
  firstPElement.style.color = 'blue';
}

export const changeTuesday = () => {
  const now = new Date();
  const day = now.getDay();
  console.log(day);
  if (day === 2) {
    learnDOM();
  }
};

export const generateList = () => {
  const data = [
    {
      id: 1,
      name: 'Pepe',
      age: 17,
    },
    {
      id: 2,
      name: 'Juan',
      age: 21,
    },
    {
      id: 3,
      name: 'Pedro',
      age: 22,
    },
  ];

  let htmlText = '<ul>';
  data.forEach((person) => {
    if (person.age > 18) {
      htmlText += `<li title="id: ${person.id}">${person.name}</li>`;
    }
  });
  htmlText += '</ul>';
  console.log(htmlText);

  document.querySelector('.list').innerHTML = htmlText;
};
