const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=96645409aa1dbcc78a014b65d1ab2d6a`)

    let temperatura = resp.data.main;

    // console.log(temperatura.main.temp);
    return {
        temp: temperatura.temp
    }
}

module.exports = {
    getClima
}