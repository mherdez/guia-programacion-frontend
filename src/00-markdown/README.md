# Markdown

::: tip 
aqui viene algo
que no se que pueda ser
:::

::: warning 
aqui viene algo
que no se que pueda ser
:::

::: danger DANGER
aqui viene algo
que no se que pueda ser
:::

::: details 
```` html
<html>
   hola mundo
</html>
````
:::

```` html
<html>
   hola mundo
</html>
````
~~~ html
<html>
   hola mundo
</html>
~~~


Título de Markdown nivel 1 (más de 0 =)
====
Encabezado de nivel 2 (más de 0 -)
----
# Título de primer nivel
## Título secundario
### Encabezado de tres niveles
#### Encabezado de cuatro niveles
##### Encabezado de cinco niveles
###### Título de sexto nivel
### Linea horizontal
Agregar línea horizontal (más de tres subrayados_)
___
Agregue una línea horizontal (más de tres asteriscos *)
***
### Texto normal
Hola, este es un texto normal
### Salto de línea
Ingrese directamente y no se puede ajustar <br>
Para usar \ <br> o \ <\ br> <br>
### URL normal
Escriba directamente la URL con hipervínculo: https://github.com/13660139155/SVGTest <br>
### Espacio de texto de una sola línea
Se ignorará el primer espacio de una sola línea de texto <br>
Si desea mostrar la primera línea de espacios, cambie el método de entrada de medio ancho a ancho completo <br>
### Visualización de texto de una sola línea
Visualización de texto de una sola línea, agregue dos teclas de tabulación o cuatro espacios en la primera línea <br>
### Visualización de texto de varias líneas
Visualización de texto de varias líneas, agregue dos teclas de tabulación o cuatro espacios en la primera línea <br>
Visualización de texto de varias líneas, agregue dos teclas de tabulación o cuatro espacios en la primera línea <br>
Visualización de texto de varias líneas, agregue dos teclas de tabulación o cuatro espacios en la primera línea <br>
### Resaltado de texto
Si desea hacer parte del texto `resaltar` en un párrafo para resaltar el` énfasis`, entonces puede rodearlo con \ ``. Tenga en cuenta que no se trata de una comilla simple, sino del botón que está encima de la pestaña, a la izquierda del número 1 (tenga en cuenta que se utiliza el método de entrada en inglés) <br>
### Enlace de texto
El formato para agregar un hipervínculo a un fragmento de texto: [dirección de Github] (https://github.com/13660139155/SVGTest) <br>
Agregue un formato de hipervínculo a un párrafo de texto, también puede agregar un texto que se muestra al pasar el mouse (coloque el mouse en el enlace de texto a la casa y aparecerá un mensaje de texto flotante): [Dirección de Github] (https: // github. com / 13660139155 / SVGTest "Colocar el cursor para mostrar"), es decir, incluya una cadena entre comillas dobles después de la URL <br>
### Clasificación de puntos
* El número de punto de primer nivel se indica con un asterisco + espacio en la reducción. Si no se agrega ningún espacio, es un asterisco normal. * Asterisco común <br>
* Número de punto secundario, tabulación + asterisco + espacio significa
* Número de punto de tres niveles, dos pestañas + asterisco + espacio significa
### Clasificación de sangría
> Nivel 1
>> Nivel 2
>>> Nivel 3
>>>> Nivel cuatro
>>>>> Nivel 5
### Clasificación general
1. Agrega un punto y un espacio después del número.
2. Agrega un punto y un espacio después del número.
3. Agrega un punto y un espacio después del número.
### Insertar imagen
#### Imágenes de Internet, formato: \! \ [] (URL de la imagen)
  ![](http://www.baidu.com/img/bdlogo.gif)  
* [] Agregar descripción entre corchetes, la descripción entre corchetes no causará ningún cambio en la visualización de la imagen <br>
! [Baidu] (http://www.baidu.com/img/bdlogo.gif)
* Después de la URL, agregue una cadena rodeada de comillas dobles para que se muestre al pasar el cursor <br>
![baidu](http://www.baidu.com/img/bdlogo.gif "baidu")
#### La imagen en el repositorio de GitHub, formato: \! \ [] (URL de la imagen)
* De hecho, es básicamente el mismo que el formato anterior, la diferencia es cómo escribir la URL entre paréntesis
* `Https://github.com/ su nombre de usuario / el nombre de su proyecto / raw / nombre de la rama / la carpeta donde se almacenan las imágenes / las imágenes en esta carpeta`
! [Imágenes en el almacén de github] (https://github.com/13660139155/SVGTest/raw/master/app/src/main/res/drawable/girl.png)
#### Agregar un hipervínculo a la imagen, formato: formato de enlace de texto + insertar formato de imagen, es decir: \ [\! \ [] (URL de la imagen) \] (hipervínculo de la imagen)
[![baidu](http://www.baidu.com/img/bdlogo.gif)](http://www.baidu.com)
* Desplazamiento del texto, la primera forma <br>
[![baidu](http://www.baidu.com/img/bdlogo.gif "baidu")](http://www.baidu.com)
* Desplazamiento del texto, la segunda forma <br>
[! [baidu] (http://www.baidu.com/img/bdlogo.gif)] (http://www.baidu.com "Baidu")
### Cargar imagen gif, formato: \! \ [] (GifURL)
* De hecho, es básicamente el mismo que el formato de imagen anterior, la diferencia es cómo escribir la URL entre corchetes
* `Https://github.com/ su nombre de usuario / el nombre de su proyecto / blob / nombre de la rama / carpeta donde se almacena gif / gif en esta carpeta`
! [gif en el almacén de github] (https://github.com/13660139155/SVGTest/blob/master/gif/systemGif.gif)
### Insertar fragmento de código
Debe marcar las líneas superior e inferior del código con `` '', `` no son tres comillas simples, sino la tecla en el lado izquierdo del número 1, encima de la tecla Tab. Para lograr el resaltado de sintaxis, simplemente agréguelo después de `` '' Tu lenguaje de programación está bien (ignora mayúsculas y minúsculas) <br>
* Escritura común
```
Drawable drawable = ivSystem.getDrawable();//java
```
* Resaltar escritura
``` java
Drawable drawable = ivSystem.getDrawable();//java
```
### Punto de ancla (mover a una posición determinada)
En realidad, cada título es un punto de anclaje, como [Volver arriba] (# título de nivel 1)
### Tabla (cada guión de la cuadrícula debe ser mayor que uno)
| Encabezado 1 | Encabezado 2 |
|- |-------|
| Contenido 1 | Contenido 2 |
| Contenido 1 | Contenido 2 |
### Fuente
| Sintaxis | Efecto |
|-------|-------|
| \ * Cursiva 1 * | * Cursiva 1 * |
| \ _Italico 2_ | _Italico 2_ |
| \ * \ * Negrita 1 ** | ** Negrita 1 ** |
| \ _ \ _ Negrita 2__ | __ Negrita 2__ |
| \ ~ \ ~ Tachado ~~ | ~~ Tachado ~~ |
| \ * \ * \ * Cursiva negrita 1 *** | *** cursiva negrita 1 *** |
| \ _ \ _ \ _ Cursiva negrita 2___ | ___Italica negrita 2___ |
| \ * \ * \ * \ ~ \ ~ Cursiva negrita tachada 1 ~~ *** | *** ~~ Cursiva negrita tachada 1 ~~ *** |
| \ ~ \ ~ \ * \ * \ * Cursiva negrita tachada 2 *** ~~ | ~~ *** Cursiva negrita tachada 2 *** ~~ |
