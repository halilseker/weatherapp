const request = require('request');

const forecast = (longitute, langitute, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=0952bd1f2b9e58031bf60789cf98faec&query=' +
    langitute +
    ',' +
    longitute +
    '&units=f';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect weather service', undefined);
    } else if (body.error) {
      console.log(body.error);
      callback('Unable to find location', undefined);
      //console.log('Longitute or langitute is not correct');
    } else {
      //`${data.weather_descriptions[0]}It is currently ${data.temperature} degress.It feels like ${data.feelslike} degress out`
      const data = body.current;
      callback(
        undefined,
        `${data.weather_descriptions[0]} It is currently ${data.temperature} degress.It feels like ${data.feelslike} degress out`
      );
    }
  });
};

module.exports = forecast;
