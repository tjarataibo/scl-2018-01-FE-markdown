#!/usr/bin/env node

// EJEMPLO: function(a, b, ...theArgs). Si el último argumento definido de una función se le antepone con ..., éste se convierte en un arreglo cuyos elementos desde 0 (inclusivo) hasta theArgs.length (exclusivo) son pasados a la función.
const [,, ...argvs] = process.argv; // process.argv devuelve una matriz que contiene los argumentos de línea de comando pasados ​​cuando se inició el proceso Node.js.
const totalArgvs = argvs.length;
const path = argvs[0];
const mdLinks = require('./index');
let options = {
  validate: false,
  stats: false
};
if (totalArgvs === 1) {
  mdLinks(path, options)
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
