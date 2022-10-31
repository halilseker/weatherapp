const request = require('request');

const geolocation = (adress, callback) => {
  const positionUrl =
    'http://api.positionstack.com/v1/forward?access_key=bf5743f1e0864b4e0549e0a5f282b738&query=' +
    adress +
    '&limit=1';
  request({ url: positionUrl, json: true }, (error, { body }) => {
    if (error) {
      console.log('Unable to connect to location service');
    } else if (body.error) {
      callback('Location could not find', undefined);
      console.log('Location could not find');
    } else {
      callback(undefined, {
        longitude: body.data[0].longitude,
        latitude: body.data[0].latitude,
        location: body.data[0].label,
      });
    }
  });
};

module.exports = geolocation;
