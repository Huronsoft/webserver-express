const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {

    let palabras = texto.split('');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join('');

});

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'Huron software',
        anio: new Date().getFullYear()
    });
})

app.get('/about', function(req, res) {
    res.render('about', {
        nombre: 'bienvenido about /Huron software'

    });
})

app.listen(port, () => {
    console.log(`Escuchando de puerto ${port}`);


});