#!/usr/bin/env node

// EJEMPLO: function(a, b, ...theArgs). Si el último argumento definido de una función se le antepone con ..., éste se convierte en un arreglo cuyos elementos desde 0 (inclusivo) hasta theArgs.length (exclusivo) son pasados a la función.
const [,, ...argvs] = process.argv; // Captará todos los argumentos dados de línea de comando. process.argv devuelve una matriz que contiene los argumentos de línea de comando pasados ​​cuando se inició el proceso Node.js. 
const totalArgvs = argvs.length;
const path = argvs[0];
const mdLinks = require('./app');
let options = {
  validate: false,
  stats: false
};

// Valor de retorno:
/* La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto 
representa un link con 4 propiedades (href, text, file y line) */

if (totalArgvs === 1) {
  mdLinks(path, options) /*  interfaz que ofrece -path: Ruta absoluta o relativa al archivo. -options: Un objeto con la siguiente propiedad: 
  validate: Valor que determina si se desea validar los links encontrados en el archivo. */
    .then(response => response.forEach(({file, href, text, line}) => console.log(`${file}:${line} ${href} ${text}`)));
} else if (totalArgvs === 2 && argvs[1] === '--validate') {
  options.validate = true;
  mdLinks(path, options)
    .then(response => response.forEach(({file, href, text, line, validate}) => console.log(`${file}:${line} ${href} ${validate.statusText} ${validate.status} ${text}`)));
} else if (totalArgvs === 2 && argvs[1] === '--stats') {
  options.stats = true;
  mdLinks(path, options)
    .then(response => console.log(response));
} else if (totalArgvs === 3 && argvs[1] === '--validate' && argvs[2] === '--stats') {
  options.validate = true;
  options.stats = true;
  mdLinks(path, options)
    .then(response => console.log(response));
} else {
  console.log('Comando no válido');
}
