/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/)
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

// Importaciones
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cadena = "";
let leetstr = "";
let car = "";

let leet = {
  a: "4",
  b: "13",
  c: "[",
  d: ")",
  e: "3",
  f: "|=",
  g: "&",
  h: "#",
  i: "1",
  j: ",_|",
  k: "|<",
  l: "1",
  m: "/\\/\\",
  n: "^/",
  o: "0",
  p: "|*",
  q: "(_,)",
  r: "12",
  s: "5",
  t: "7",
  u: "(_)",
  v: "\\/",
  w: "\\/\\/",
  x: "><",
  y: "j",
  z: "2",
};

rl.question("Dame una cadena: ", (res) => {
  cadena = res.toLowerCase();
  rl.close();
});

rl.on("close", () => {
  for (let i = 0; i < cadena.length; i++) {
    car = leet[cadena.charAt(i)] || cadena.charAt(i);
    leetstr += car;
  }

  console.log(leetstr);
});
