const forcast = require("./data/forcast");
const geocode = require("./data/geocode");

const country = process.argv[2];

geocode(country, (error, data) => {
  console.log("ERROR : ", error);
  console.log("DATA : ", data);

  forcast(data.latitude, data.longtitude, (error, data) => {
    console.log("ERROR : ", error);
    console.log("DATA : ", data);
  });
});
