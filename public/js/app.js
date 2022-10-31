console.log('Client side javascript code ');

// fetch('http://localhost:3000/weather?address=guarda').then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log('error occured: ', data.error);
//     }
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = search.value;
  console.log('testing:', location);
  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          console.log('error occured: ', data.error);
        }
        console.log(data);
      });
    }
  );
});
