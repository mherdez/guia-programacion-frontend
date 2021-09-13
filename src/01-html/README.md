# HTML

## Introducción
HTML es el lenguaje de marcado estándar para crear páginas web.

## ¿Qué es HTML?
- HTML son las siglas de Hyper Text Markup Language
- HTML es el lenguaje de marcado estándar para crear páginas web.
- HTML describe la estructura de una página web
- HTML consta de una serie de elementos
- Los elementos HTML le dicen al navegador cómo mostrar el contenido.
- Los elementos HTML etiquetan partes de contenido como "esto es un encabezado", "esto es un párrafo", "esto es un enlace", etc.

## Un documento HTML simple

### Ejemplo
~~~html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
~~~

### Ejemplo explicado
- La **`<!DOCTYPE html>`** declaración define que este documento es un documento HTML5
- El **`<html>`** elemento es el elemento raíz de una página HTML.
- El **`<head>`** elemento contiene metainformación sobre la página HTML.
- El **`<title>`** elemento especifica un título para la página HTML (que se muestra en la barra de título del navegador o en la pestaña de la página)
- El **`<body>`** elemento define el cuerpo del documento y es un contenedor para todos los contenidos visibles, como encabezados, párrafos, imágenes, hipervínculos, tablas, listas, etc.
- El **`<h1>`** elemento define un encabezado grande
- El **`<p>`** elemento define un párrafo


## ¿Qué es un elemento HTML?
Un elemento HTML se define mediante una etiqueta de inicio, algo de contenido y una etiqueta de finalización. Pueden incluir atributos para ofrecer información adicional acerca de sus contenidos. 

<p align="center">
  <img src="https://sites.google.com/site/zendcolombia/_/rsrc/1344283342713/project-updates/fundamentosdehtml-partei/3-las-bases-de-html-y-css/elemento%20HTML.png" style="width:60%"/>
</p>

## Estructura
Para crear un sitio o una aplicación web, lo primero que debemos hacer es programar el código HTML que define la estructura de cada una de las páginas que lo componen.

Todos los documentos HTML deben comenzar con una declaración de tipo de documento: `<!DOCTYPE html>`.

El documento HTML en sí comienza con `<html>` y termina con` </html>`.

La parte visible del documento HTML está entre `<body>` y `</body>`.

~~~html
<!DOCTYPE html>
<html>
<body>

<h1>Mi primer encabezado</h1>
<p>Mi primer párrafo</p>

</body>
</html>
~~~
:::tip NOTA
En general, todo elemento puede ser anidado, convertirse en un contenedor o ser contenido por otros elementos. Los elementos exclusivamente estructurales como `<html>`, `<head>` y `<body>` tienen un lugar específico en un documento HTML, pero el resto son flexibles.
:::

:::tip NOTA
Los atributos se declaran siempre dentro de la etiqueta de apertura (o etiquetas individuales) y pueden tener una estructura que incluye un nombre y un valor, como el atributo lang de la etiqueta `<html>`, o representar un valor por sí mismos, como el atributo html de la etiqueta `<!DOCTYPE>`. 
:::

### Tipo de documento
### Elementos estructurales 
### Atributos globales 

## Contenido 
### Texto 
### Enlaces 
### Imágenes 
### Listados 
### Tablas

## Formularios 
### Definición 
### Elementos 
### Enviando el formulario 
### Atributos globales 


