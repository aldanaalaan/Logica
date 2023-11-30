function Generador(len = 8, upper = false, numbers = false, symbols = false) {
  // Validar longitud
  let limite = len < 8 || len > 16 ? len : 8;

  // Caracteres
  const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  const upperCharacters = lowerCharacters.toUpperCase();
  const numberCharacters = "0123456789";
  const symbolsCharacters = "!@#$%^&*";

  let passwordCharacters = lowerCharacters;
  let password = "";

  // Agregar caracteres opcionales
  passwordCharacters += upper ? upperCharacters : "";
  passwordCharacters += numbers ? numberCharacters : "";
  passwordCharacters += symbols ? symbolsCharacters : "";

  for (let i = 0; i < limite; i++) {
    let randomNumber = Math.floor(
      Math.random() * (passwordCharacters.length + 1)
    );
    password += passwordCharacters[randomNumber];
  }

  return password;
}

export default Generador;
