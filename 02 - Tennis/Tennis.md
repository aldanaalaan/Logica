# 02. Tennis

## Planteamiento

Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado.
El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien
gane cada punto del juego.

- Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.
- Ante la secuencia **["P1", "P1", "P2", "P2", "P1", "P2", "P1", "P1"]**, el programa mostraría lo siguiente:
  - 15 - Love
  - 30 - Love
  - 30 - 15
  - 30 - 30
  - 40 - 30
  - Deuce
  - Ventaja P1
  - Ha ganado el P1
- Si quieres, puedes controlar errores en la entrada de datos.
- Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.

## Razonamiento

Una función que reciba un arreglo de String como parámetro, y devolver, o un arreglo con los marcadores, o imprimirlas.

Podríamos tener un objeto con el valor de cada cantidad de puntos, o un arreglo (para usar la puntuación como indice)

["Love", 15, 30, 40]

**Un** marcador después de que alguien llegue a 40 (3 puntos), empezar a comprobar si los marcadores son iguales, para cambiar el marcador por "Ventaja \<Player>" o "Deuce"

Si ambos llegan a 40, la comprobación pasará a una comprobación de diferencia por 2 puntos para ganar.