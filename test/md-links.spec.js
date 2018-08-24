// Debe contener los tests unitarios para la función mdLinks()tu implementación debe pasar estos tests.
'use strict';

const fs = require('fs'); // fs roporciona una API para interactuar con el sistema de archivos de una manera estrechamente modelada alrededor de las funciones POSIX estándar.
const path = require('path'); // Path es un  módulo que proporciona utilidades para trabajar con rutas de archivos y directorios.
const expect = require('expect.js'); 
const http = require('http'); 
const express = require('express'); // Ayudantes HTTP (redirección, almacenamiento en caché, etc.)
const markdownLinkCheck = require('../'); // Muestra los links e imágenes viables o rotos
const assert = require('chai').assert; // Validación de test
global.window = global;
require('validate.js');

/* CHAI: Es un librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript. 
Tiene varias interfaces: assert, expect y should, que permiten al desarrollador elegir el estilo que 
le resulte más legible y cómodo a la hora de desarrollar sus tests: */

