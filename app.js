// Importar el módulo peliculas.js
const peliculas = require('./peliculas');

// Mostrar el listado de películas
console.log("Listado de películas favoritas:");
peliculas.forEach(pelicula => {
    console.log(`
        Título: ${pelicula.title}
        Calificación: ${pelicula.rating}
        Premios: ${pelicula.awards.join(', ')}
        Duración: ${pelicula.length} minutos
        Precio: $${pelicula.price}
        Género: ${pelicula.genre}
    `);
});


// -------------------------------------------

// Importar el módulo nativo "fs"
const fs = require('fs');

// Asignar la ruta del archivo a una variable
const filePath = './mensaje.txt';

// Leer el contenido del archivo
fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log('Contenido del archivo:');
    console.log(data);
});
