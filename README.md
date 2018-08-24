# Markdown Links

## Descripción de librería

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).
`Markdown` es la forma de dar estilo al texto en la web. Es sólo un texto normal, con un poco de carácteres no-alfabeticos en él, como # o *. Con este, controlas la forma en como se ve un documento, dando formato a las palabras: como hacerlas negritas o itálicas, agregar imágenes, creando listas y links.
Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Es por ello, que a modo de desafío, se ha creado esta [Librería](https://tjarataibo.github.io/scl-2018-01-FE-markdown) con [Versión Principal Cero](https://tjarataibo.github.io/scl-2018-01-FE-markdown/VERSION.md), utilizando la
herramienta [Node.js](https://nodejs.org/), que lee y analiza archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

## Guía de uso e instalación

Para agregar el módulo a tu proyecto, ejecuta:

    npm install --save scl-2018-01-FE-markdown

Para instalar la herramienta de línea de comandos globalmente, ejecuta:

    npm install -g scl-2018-01-FE-markdown

---

## Ejecutar usando Docker

Construye una Docker image:

    docker build --tag scl-2018-01-FE-markdown .

Transfiere tu archivo `README.md` a `docker run`:

    docker run --rm -i scl-2018-01-FE-markdown < README.md


## Ejecución de Test

    npm test

---

## Licencia

Ver [Licencia](https://tjarataibo.github.io/scl-2018-01-FE-markdown/LICENSE.md).

---

## Planificación

Ver [Planificación](https://trello.com/b/qsR86UjY/markdown).