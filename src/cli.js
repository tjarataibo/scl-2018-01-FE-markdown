#!/usr/bin/env node
const [,, ...argvs] = process.argv; /* ... Operador "esparcir" o sintaxis de propagación permite expandir 
una expresión o cadena de matriz en lugares donde se esperan cero o más argumentos. 
Captará todos los argumentos dados de línea de comando. process.argv devuelve una matriz que contiene los 
argumentos de línea de comando pasados ​​cuando se inició el proceso Node.js.  */
const resultArgvs = argvs.length;
const path = argvs[0];
const mdLinks = require('./app');
let options = {
  validate: false,
  stats: false // Para mostrar estadísticas del archivo, como cuántos links encontró.
};

// Valor de retorno:
/* La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object), donde cada objeto 
representa un link con 4 propiedades (href, text, file y line) */

if (resultArgvs === 1) {
  mdLinks(path, options) /*  interfaz que ofrece -path: Ruta absoluta o relativa al archivo. -options: Un objeto con la siguiente propiedad: 
  validate: Valor que determina si se desea validar los links encontrados en el archivo. */

  // El método forEach() ejecuta la función indicada una vez por cada elemento del array
    .then(response => response.forEach(({file, href, text, line}) => console.log(`${file}:${line} ${href} ${text}`)));
} else if (resultArgvs === 2 && argvs[1] === '--validate') {
  options.validate = true;
  mdLinks(path, options)
    .then(response => response.forEach(({file, href, text, line, validate}) => console.log(`${file}:${line} ${href} ${validate.statusText} ${validate.status} ${text}`)));
} else if (resultArgvs === 2 && argvs[1] === '--stats') {
  options.stats = true;
  mdLinks(path, options)
    .then(response => console.log(response));
} else if (resultArgvs === 3 && argvs[1] === '--validate' && argvs[2] === '--stats') {
  options.validate = true;
  options.stats = true;
  mdLinks(path, options)
    .then(response => console.log(response));
} else {
  console.log('Comando no válido');
}
