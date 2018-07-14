const lugar = require('./lugar/lugar');
const temperatura = require('./Clima/clima');
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



// console.log(argv.direccion.blue);

let getInfo = async() => {

    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);
        let clima = await temperatura.getClima(coords.lat, coords.lng);

        return `El Clima en ${coords.direccion} es de ${ clima.temp }°C`

    } catch (e) {
        return `No se pudo determinar el clima en ${argv.direccion}`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));