// // Exportar una función mdLinks

// const Marked = require('marked');
// const readme = require('README.md');

// // Función necesaria para extraer los links usando marked
// // (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// // Recibe texto en markdown y retorna sus links en un arreglo
// function markdownLinkExtractor(markdown) {
//   const links = [];

//   const renderer = new Marked.Renderer();

//   // Taken from https://github.com/markedjs/marked/issues/1279
//   const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

//   Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
//   Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
//   Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

//   // Ejemplo para readme
//   readme.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
//   readme.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
//   readme.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

//   renderer.link = function(href, title, text) {
//     links.push({
//       href: href,
//       text: text,
//       title: title,
//     });
//   };
//   renderer.image = function(href, title, text) {
//     // Remove image size at the end, e.g. ' =20%x50'
//     href = href.replace(/ =\d*%?x\d*%?$/, '');
//     links.push({
//       href: href,
//       text: text,
//       title: title,
//     });
//   };
//   Marked(markdown, {renderer: renderer});
//   // Ejemplo para readme
//   readme(markdown, {renderer: renderer});

//   return links;
// };
// console.log(README.md);
// module.exports = markdownLinkExtractor(README.md);

const chalk = require('chalk');
const fs = require('fs'); // fs roporciona una API para interactuar con el sistema de archivos de una manera estrechamente modelada alrededor de las funciones POSIX estándar.
const path = require('path'); // Path es un  módulo que proporciona utilidades para trabajar con rutas de archivos y directorios.
const marked = require('marked'); // Permite convertir Markdown en HTML
const fetch = require('node-fetch'); // Búsqueda de nodos a través de fetch

// Color para estado de links
const statusLabels = {
  alive: chalk.green('✓'),
  dead: chalk.red('✖'),
  ignored: chalk.gray('/'),
  error: chalk.yellow('⚠'),
};

