const request = require("request");

const forcast = (latitude, longtitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=fef7d8b50c8c4ec0a3f150052240111&q=" +
    latitude +
    "," +
    longtitude;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect weather api service", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        response.body.location.name +
          " it is : " +
          response.body.current.condition.text +
          " and temp is : " +
          response.body.current.temp_c
      );
    }
  });
};

module.exports = forcast;
