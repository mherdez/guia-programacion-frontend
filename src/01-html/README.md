# HTML

## Introducción
HTML (HyperText Markup Language) es un lenguaje compuesto por un grupo de etiquetas definidas con un nombre rodeado de paréntesis angulares. Los paréntesis angulares delimitan la etiqueta y el nombre define el tipo de contenido que representa. Por ejemplo, la etiqueta `<html>` indica que el contenido es código HTML. Algunas de estas etiquetas son declaradas individualmente (por ejemplo, `<br>`) y otras son declaradas en pares, que incluyen una de apertura y otra de cierre, como `<html>` `</html>` (en la etiqueta de cierre el nombre va precedido por una barra invertida). 

Las etiquetas individuales y las de apertura pueden incluir atributos para ofrecer información adicional acerca de sus contenidos. Las etiquetas individuales y la combinación de etiquetas de apertura y cierre se llaman elementos. Los elementos compuestos por una sola etiqueta se usan para modificar el contenido que los rodea o incluir recursos externos, mientras que los elementos que incluyen etiquetas de apertura y cierre se utilizan para delimitar el contenido del documento.

<p align="center">
  <img src="https://sites.google.com/site/zendcolombia/_/rsrc/1344283342713/project-updates/fundamentosdehtml-partei/3-las-bases-de-html-y-css/elemento%20HTML.png" style="width:60%"/>
</p>

Se deben combinar múltiples elementos para definir un documento. Los elementos son listados en secuencia de arriba abajo y pueden contener otros elementos en su interior. Por ejemplo, el elemento `<html>` declara que su contenido debe ser interpretado como código HTML. Por lo tanto, el resto de los elementos que describen el contenido de ese documento se deben declarar entre las etiquetas `<html>` y `</html>`. A su vez, los elementos dentro del elemento `<html>` pueden incluir otros elementos. El siguiente ejemplo muestra un documento HTML sencillo que incluye todos los elementos necesarios para definir una estructura básica y mostrar el mensaje `HOLA MUNDO!` en la pantalla.

~~~html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Mi primer documento HTML</title>
  </head>
  <body>
    <p>HOLA MUNDO!</p>
  </body>
</html>
~~~

En la primera línea, se encuentra una etiqueta individual que declara el tipo de documento (`<!DOCTYPE html>`) seguida por una etiqueta de apertura `<html lang="es">`. Entre las etiquetas `<html>` y `</html>` se incluyen otros elementos que representan la cabecera y el cuerpo del documento (`<head>` y `<body>`), los cuales a su vez encierran más elementos con sus respectivos contenidos (`<title>` y `<p>`), demostrando cómo se compone un documento HTML. Los elementos se listan uno a continuación de otro y también dentro de otros elementos, de modo que se construye una estructura de tipo árbol con el elemento `<html>` como raíz.

:::tip NOTA
En general, todo elemento puede ser anidado, convertirse en un contenedor o ser contenido por otros elementos. Los elementos exclusivamente estructurales como `<html>`, `<head>` y `<body>` tienen un lugar específico en un documento HTML, pero el resto son flexibles.
:::

:::tip NOTA
Los atributos se declaran siempre dentro de la etiqueta de apertura (o etiquetas individuales) y pueden tener una estructura que incluye un nombre y un valor, como el atributo lang de la etiqueta `<html>`, o representar un valor por sí mismos, como el atributo html de la etiqueta `<!DOCTYPE>`. 
:::

## Estructura
Para crear un sitio o una aplicación web, lo primero que debemos hacer es programar el código HTML que define la estructura de cada una de las páginas que lo componen.

Debido a que los navegadores son capaces de procesar diferentes tipos de archivos, lo primero que debemos hacer en la construcción de un documento HTML es indicar su tipo. Para asegurarnos de que el contenido de nuestros documentos sea interpretado correctamente como código HTML, debemos agregar la declaración `<!DOCTYPE>` al comienzo del archivo. 

~~~html
<!DOCTYPE html>
~~~

:::warning IMPORTANTE
La línea con la declaración `<!DOCTYPE>` debe ser la primera línea de su documento, sin ningún espacio o código previo. Esto activa el modo estándar y obliga a los navegadores a interpretar HTML5 cuando es posible o ignorarlo en caso contrario.
:::

los elementos HTML conforman una estructura de tipo árbol con el elemento `<html>` como su raíz. Esta estructura presenta múltiples niveles de organización, con algunos elementos a cargo de definir secciones generales del documento y otros encargados de representar secciones menores o contenido. Los siguientes son los elementos disponibles para definir la columna vertebral de la estructura y facilitar la información que el navegador necesita para mostrar la página en la pantalla.
- `<html>`—Este elemento delimita el código HTML. Puede incluir el atributo lang para definir el idioma del contenido del documento.
- `<head>`—Este elemento se usa para definir la información necesaria para configurar la página web, como el título, el tipo de codificación de caracteres y los archivos externos requeridos por el documento.
- `<body>`—Este elemento delimita el contenido del documento (la parte visible de la página).

Después de declarar el tipo de documento, tenemos que construir la estructura de tipo árbol con los elementos HTML, comenzando por el elemento `<html>`. Este elemento puede incluir el atributo lang para declarar el idioma en el que vamos a escribir el contenido de la página, tal como muestra el siguiente ejemplo.

El código HTML insertado entre las etiquetas `<html>` se tiene que dividir en dos secciones principales: la cabecera y el cuerpo. Por supuesto, la cabecera va primero y, al igual que el resto de los elementos estructurales, está compuesta por etiquetas de apertura y cierre.

Entre las etiquetas `<head>` debemos definir el título de la página web, declarar el tipo de codificación de caracteres, facilitar información general acerca del documento, e incorporar los archivos externos con estilos y códigos necesarios para generar la página. Excepto por el título e iconos, el resto de la información insertada en medio de estas etiquetas no es visible para el usuario.

La otra sección que forma parte de la organización principal de un documento HTML es el cuerpo, la parte visible del documento que se especifica con el elemento `<body>`.

~~~html
<!DOCTYPE html>
 <html lang="es">
<head>
 
</head>
<body>

</body>
</html>
~~~

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


