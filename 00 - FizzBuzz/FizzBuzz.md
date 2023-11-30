# 00. FizzBuzz

## Planteamiento

Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:

- Múltiplos de 3 por la palabra "fizz".
- Múltiplos de 5 por la palabra "buzz".
- Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

## Razonamiento

<!-- Previamente respondido -->

Uso del flujo de control `if/else`, empezando con comprobar los dos a la vez, debido a que si comprobamos primero una por una, va a saltar los casos donde se cumplan las dos.

Y en el ultimo `else` retornamos el número original, ya que ninguno de los casos anteriores se usó.
