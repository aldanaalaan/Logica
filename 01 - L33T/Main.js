function Leet(cadena) {
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

  let cadenaArray = cadena.trim().toLowerCase().split("");

  return cadenaArray.map((item) => leet[item] || item).join("");
}

export default Leet;
