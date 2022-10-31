console.log('Client side javascript code ');

fetch('http://localhost:3000/weather?address=guarda').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log('error occured: ', data.error);
    }
    console.log(data);
  });
});
