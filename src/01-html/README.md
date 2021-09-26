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

Todos los documentos HTML deben comenzar con una declaración de tipo de documento: **`<!DOCTYPE html>`**.

El documento HTML en sí comienza con **`<html>`** y termina con **`</html>`**.

La parte visible del documento HTML está entre **`<body>`** y **`</body>`**.

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi primera página web</title>
  </head>

  <body>
    <h1>Mi primer encabezado</h1>
    <p>Mi primer párrafo</p>
  </body>
</html>
~~~
:::tip NOTA
En general, todo elemento puede ser anidado, convertirse en un contenedor o ser contenido por otros elementos. Los elementos exclusivamente estructurales como **`<html>`**, **`<head>`** y **`<body>`** tienen un lugar específico en un documento HTML, pero el resto son flexibles.
:::

## Textos y formatos

### Encabezados
Los encabezados HTML son títulos o subtítulos que desea mostrar en una página web.
~~~html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
~~~
:::tip NOTA
Los títulos son importantes porque los motores de búsqueda utilizan los títulos para indexar la estructura y el contenido de sus páginas web.

Los usuarios a menudo hojean una página por sus títulos. Es importante utilizar títulos para mostrar la estructura del documento.

**`<h1>`** deben usarse para los títulos principales, seguidos de los **`<h2>`** subtítulos, luego los menos importantes **`<h3>`**, y así sucesivamente.
:::

### Párrafo
El **`<p>`** elemento HTML define un párrafo.
~~~html
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
~~~
### Span
Etiqueta HTML sin ningún significado específico. Se usa conjuntamente con los atributos “class” o “id” para atribuirle ciertas características.
~~~html
Por definición span no debe tener ningún estilo predefinido. Estos dos párrafos deben verse igual:

<p> Esto es un párrafo, bla, bla, bla. </p>
<p> Esto es un párrafo, <span>bla, bla, bla.</span> </p>
~~~

### Reglas horizontales 
La **`<hr>`** etiqueta define un salto temático en una página HTML y, con mayor frecuencia, se muestra como una regla horizontal.

El **`<hr>`** elemento se utiliza para separar el contenido (o definir un cambio) en una página HTML
~~~html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
~~~
### Saltos de línea 
El **`<br>`** elemento HTML define un salto de línea.

Úselo **`<br>`** si desea un salto de línea (una nueva línea) sin comenzar un nuevo párrafo
~~~html
<p>This is<br>a paragraph<br>with line breaks.</p>
~~~

### Texto preformateado 
El **`<pre>`** elemento HTML define texto preformateado.

El texto dentro de un **`<pre>`** elemento se muestra en una fuente de ancho fijo (generalmente Courier) y conserva tanto los espacios como los saltos de línea
~~~html
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
~~~
### Formatos 
Los elementos de formato se diseñaron para mostrar tipos especiales de texto:

- **`<b>`** - Texto en negrita 
- **`<strong>`** - texto importante
- **`<i>`** - Texto en cursiva
- **`<em>`** - Texto enfatizado
- **`<mark>`** - Texto marcado
- **`<small>`** - Texto más pequeño
- **`<del>`** - texto eliminado
- **`<ins>`** - texto insertado
- **`<sub>`** - Texto de subíndice
- **`<sup>`** - Texto en superíndice
~~~html
<p><b>This text is bold</b></p>
<p><strong>This text is strong</strong></p>
<p><i>This text is italic</i></p>
<p><em>This text is emphasized</em></p>
<small>This is some smaller text.</small>
<p>This is<sub> subscript</sub> and <sup>superscript</sup></p>
<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>
~~~

## Listas
Las listas HTML permiten a los desarrolladores web agrupar un conjunto de elementos relacionados en listas.

### Lista desordenada
Una lista desordenada comienza con la **`<ul>`** etiqueta. Cada elemento de la lista comienza con la **`<li>`** etiqueta.

Los elementos de la lista se marcarán con viñetas (pequeños círculos negros) de forma predeterminada
~~~html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
~~~

### Lista HTML ordenada
Una lista ordenada comienza con la **`<ol>`** etiqueta. Cada elemento de la lista comienza con la **`<li>`** etiqueta.

Los elementos de la lista se marcarán con números de forma predeterminada:
~~~html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
~~~

### Listas de descripción
Una lista de descripción es una lista de términos, con una descripción de cada término.

La **`<dl>`** etiqueta define la lista de descripción, la **`<dt>`** etiqueta define el término (nombre) y la **`<dd>`** etiqueta describe cada término.
~~~html
<dl>
  <dt>Coffee</dt>
  <dd>- black hot drink</dd>
  <dt>Milk</dt>
  <dd>- white cold drink</dd>
</dl>
~~~

## Enlaces 
Los enlaces se encuentran en casi todas las páginas web. Los enlaces permiten a los usuarios hacer clic para ir de una página a otra.

### Hipervínculos
Los enlaces son hipervínculos. Puede hacer clic en un enlace para pasar a otro documento. 

Cuando mueva el mouse sobre un enlace la flecha del mouse se convertirá en una pequeña mano.

:::tip NOTA
Un enlace no tiene que ser texto. ¡Un enlace puede ser una imagen o cualquier otro elemento HTML!
:::

#### Sintaxis
La **`<a>`** etiqueta HTML define un hipervínculo. Tiene la siguiente sintaxis:
~~~html
<a href="url">link text</a>
~~~
El atributo más importante del elemento **`<a>`**  es el atributo **`href`**, que indica el destino del enlace. El texto del enlace es la parte que será visible para el usuario. Al hacer clic en el texto del enlace, se enviará a la dirección URL especificada.

Este ejemplo muestra cómo crear un enlace a W3Schools.com:
~~~html
<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>
~~~

#### Atributo de destino
De forma predeterminada, la página vinculada se mostrará en la ventana del navegador actual. Para cambiar esto, debe especificar otro destino para el enlace.

El atributo **`target`** especifica dónde abrir el documento vinculado y puede tener uno de los siguientes valores:

- **`_self`** Defecto. Abre el documento en la misma ventana o pestaña en la que se hizo clic
- **`_blank`** Abre el documento en una nueva ventana o pestaña
- **`_parent`** Abre el documento en el marco principal.
- **`_top`** Abre el documento en todo el cuerpo de la ventana.

Se utiliza **`target = "_blank"`** para abrir el documento vinculado en una nueva ventana o pestaña del navegador:
~~~html
<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
~~~

#### Títulos de enlaces
El atributo **`title`** especifica información adicional sobre un elemento. La información se muestra, como un texto informativo a través de un `tooltips`, cuando el mouse se mueve sobre el enlace.

~~~html
<a href="https://www.w3schools.com/html/" title="Go to W3Schools HTML section">Visit our HTML Tutorial</a>
~~~

#### URL absolutas frente a URL relativas
Ambos ejemplos anteriores utilizan una URL absoluta (una dirección web completa) en el hrefatributo.

Un enlace local (un enlace a una página dentro del mismo sitio web) se especifica con una URL relativa (sin la parte "https: // www")
~~~html
<h2>Absolute URLs</h2>
<p><a href="https://www.w3.org/">W3C</a></p>
<p><a href="https://www.google.com/">Google</a></p>

<h2>Relative URLs</h2>
<p><a href="html_images.asp">HTML Images</a></p>
<p><a href="/css/default.asp">CSS Tutorial</a></p>
~~~

### Imagen como enlace
Para usar una imagen como enlace, simplemente coloque la etiqueta **`<img>`** dentro de la etiqueta **`<a>`** 
~~~html
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
~~~

### Enlace a una dirección de correo electrónico
Use **`mailto:`** dentro del atributo **`href`** para crear un enlace que abra el programa de correo electrónico del usuario (para permitirle enviar un nuevo correo electrónico)
~~~html
<a href="mailto:someone@example.com">Send email</a>
~~~

### Botón como enlace
Para usar un botón HTML como enlace, debe agregar un código JavaScript.

JavaScript le permite especificar qué sucede en ciertos eventos, como hacer clic en un botón
~~~html
<button onclick="document.location='default.asp'">HTML Tutorial</button>
~~~

:::tip RESUMEN 
- Usa el elemento **`<a>`** para definir un enlace
- Utilice el atributo **`href`** para definir la dirección del enlace
- Utilice el atributo **`target`** para definir dónde abrir el documento vinculado
- Usa el **`<img>`** elemento (adentro **`<a>`**) para usar una imagen como enlace
- Utilice el esquema **`mailto:`** dentro del atributo **`href`** para crear un enlace que abra el programa de correo electrónico del usuario.
:::

## Imágenes

Las imágenes pueden mejorar el diseño y la apariencia de una página web.
~~~html
<img src="pic_trulli.jpg" alt="Italian Trulli">
~~~

### Sintaxis
La etiqueta **`<img>`** se utiliza para incrustar una imagen en una página web.

Las imágenes no se insertan técnicamente en una página web; las imágenes están vinculadas a páginas web. La etiqueta **`<img>`** crea un espacio de espera para la imagen de referencia.

La etiqueta **`<img>`** está vacía, solo contiene atributos y no tiene una etiqueta de cierre.

La etiqueta **`<img>`** tiene dos atributos obligatorios:

- **`src`**: especifica la ruta a la imagen
- **`alt`**: especifica un texto alternativo para la imagen
~~~html
<img src="url" alt="alternatetext">
~~~

### Imágenes en otra carpeta
Si tiene sus imágenes en una subcarpeta, debe incluir el nombre de la carpeta en el atributo **`src`**
~~~html
<img src="/images/html5.gif" alt="HTML5 Icon">
~~~ 

### Imágenes en otro servidor / sitio web
Algunos sitios web apuntan a una imagen en otro servidor.

Para apuntar a una imagen en otro servidor, debe especificar una URL absoluta (completa) en el atributo **`src`**
~~~html
<img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com">
~~~

### Formatos de imagen comunes
Estos son los tipos de archivos de imagen más comunes, que son compatibles con todos los navegadores:
|Abreviación|	Formato del archivo	| Extensión del archivo|
| -- | -- | -- |
| APNG	| Animated Portable Network Graphics |	.apng|
| GIF	| Graphics Interchange Format |	.gif|
| ICO	| Microsoft Icon |	.ico, .cur|
| JPEG	| Joint Photographic Expert Group image |	.jpg, .jpeg, .jfif, .pjpeg, .pjp|
| PNG	| Portable Network Graphics |	.png|
| SVG	| Scalable Vector Graphics |	.svg|

## Tablas

Las tablas permiten a los desarrolladores web organizar los datos en filas y columnas.

Una tabla en HTML consta de celdas de tabla dentro de filas y columnas.

Cada celda de la tabla está definida por una etiqueta **`<td>`** y una **`</td>`** y todo lo que se encuentra entre ellas es el contenido de la celda.

Cada fila de la tabla comienza con una etiqueta **`<tr>`** y termina con una **`</tr>`**
~~~html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
~~~

### Encabezados de tabla
A veces desea que sus celdas sean encabezados, en esos casos use la etiqueta **`<th>`** en lugar de la etiqueta **`<td>`**
~~~html
<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
~~~

:::tip ETIQUETAS DE LA TABLA
|Tag| 	Description|
|-|-|
|**`<table>`**| 	Defines a table|
|**`<th>`**	| Defines a header cell in a table|
|**`<tr>`**	| Defines a row in a table|
|**`<td>`**	| Defines a cell in a table|
|**`<caption>`**| Defines a table caption|
|**`<colgroup>`**	| Specifies a group of one or more columns in a table for formatting|
|**`<col>`**| 	Specifies column properties for each column within a **`<colgroup>`** element|
|**`<thead>`**| 	Groups the header content in a table|
|**`<tbody>`**| 	Groups the body content in a table|
|**`<tfoot>`**	| Groups the footer content in a table|
<small>[Mayor información sobre estas etiquetas](https://www.w3schools.com/html/html_tables.asp)</small>
:::

<!--




:::tip NOTA
Los atributos se declaran siempre dentro de la etiqueta de apertura (o etiquetas individuales) y pueden tener una estructura que incluye un nombre y un valor, como el atributo lang de la etiqueta **`<html>`**, o representar un valor por sí mismos, como el atributo html de la etiqueta **`<!DOCTYPE>`**. 
::: -->
<!-- 
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
### Atributos globales  -->


