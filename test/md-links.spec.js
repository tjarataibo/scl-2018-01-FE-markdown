// Debe contener los tests unitarios para la función mdLinks()tu implementación debe pasar estos tests.
'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('expect.js');
const http = require('http');
const express = require('express');
const markdownLinkCheck = require('../');

const assert = require('chai').assert;
global.window = global;
require('validate.js');

/* CHAI: Es un librería de aserciones, la cual se puede emparejar con cualquier marco de pruebas de Javascript. 
Tiene varias interfaces: assert, expect y should, que permiten al desarrollador elegir el estilo que 
le resulte más legible y cómodo a la hora de desarrollar sus tests: */

