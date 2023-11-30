function TennisMatch(matchPoints) {
  let marcadores = [];
  let players = { P1: 0, P2: 0 };
  let punctuation = ["Love", 15, 30, 40];
  let flag = false;

  for (let i = 0; i < matchPoints.length; i++) {
    // Actualizar marcadores
    matchPoints[i] == "P1" ? players.P1++ : players.P2++;

    if (players.P1 < 3 && players.P2 < 3 && !flag) {
      marcadores.push(
        // Marcador común
        `${punctuation[players.P1]} - ${punctuation[players.P2]}`
      );
    } else if (!flag) {
      flag = true;
      marcadores.push(
        `${punctuation[players.P1]} - ${punctuation[players.P2]}`
      );
    } else if (players.P1 == players.P2) {
      marcadores.push("Deuce");
    } else if (Math.abs(players.P1 - players.P2) == 1) {
      marcadores.push(`Ventaja ${matchPoints[i]}`);
    } else if (Math.abs(players.P1 - players.P2) == 2) {
      marcadores.push(`Gana ${matchPoints[i]}`);
      return marcadores;
    }
  }
  return marcadores
}

export default TennisMatch;
