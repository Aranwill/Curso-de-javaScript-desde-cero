let array1D = [1, 2, 3]; // Unidimensional
let array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // Array Biidimensional

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

matrix[1][2] = 10;
console.log(matrix);

let value = matrix[0][1];
console.log(value);

// Operations

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

function findElement(matrix, elemnt) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === elemnt) {
        return true;
      }
    }
  }
  return false;
}

console.log(findElement(matrix, 5));

function duplicateMAtrix(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    newMatrix[i] = [...matrix[i]];
  }
  return newMatrix;
}

console.log(duplicateMAtrix(matrix));

/*
Algorithmic Tournament winner

An algorithmic tournament is underway, where teams of programmers compete to solve algorithmic problems as 
quickly as possible. 

The competition follows a round-robin format, with each team facing off against all other teams. Only two teams 
compete against each other at a time, and in each competition, one team is designated as the home team, while 
the other is the away team. 

There is always a clear winner and loser in each competition, with no ties. 

Teams earn 3 points for a win and 0 points for a loss. The overall winner of the tournament is the team with the highest 
total points.

Your task is to write a function that determines the winner of the tournament based on the results of the 
competitions. 

The input consists of two arrays: competitions and results. 

The competitions array contains pairs of teams represented as [homeTeam, awayTeam], where each team is a string of at most 30 characters. 

The results array indicates the winner of each corresponding competition in the competitions array. 

Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results array means that the home team won, 
and a 0 means that the away team won.

It is guaranteed that exactly one team will win the tournament, and each team will compete against all other 
teams exactly once. 

Additionally, the tournament will always have at least two teams.

Ganador del torneo algorítmico

Está teniendo lugar un torneo algorítmico en el que equipos de programadores compiten entre sí para resolver 
problemas algorítmicos lo más rápido posible. 

Los equipos compiten en un formato de todos contra todos, donde cada equipo se enfrenta a todos los demás. Solo dos equipos compiten entre sí en cada enfrentamiento, 
y en cada competición, un equipo es designado como equipo local, mientras que el otro es el equipo visitante. 

Siempre hay un claro ganador y perdedor en cada competición, sin empates. 

Los equipos obtienen 3 puntos por una victoria y 0 puntos por una derrota. El ganador general del torneo es el equipo con la mayor cantidad 
de puntos.

Tu tarea es escribir una función que determine al ganador del torneo en función de los resultados de las 
competiciones. 

La entrada consta de dos arrays: competitions y results. 

El array competitions contiene pares de equipos representados como [equipoLocal, equipoVisitante], donde cada equipo es una cadena de 
hasta 30 caracteres. 

El array results indica el ganador de cada competición correspondiente en el array 
competitions. 

Específicamente, results[i] denota el ganador de competitions[i], donde un 1 en el array results 
significa que el equipo local ganó y un 0 significa que el equipo visitante ganó.

Se garantiza que exactamente un equipo ganará el torneo, y cada equipo competirá contra todos los demás 
equipos exactamente una vez. 

Además, se garantiza que el torneo siempre tendrá al menos dos equipos.


*/

function tournamentWinner(competitions, results) {
  const scores = {};
  let winner = '';

  for (let i = 0; i < competitions.length; i++) {
    const [home, away] = competitions[i];
    const WinnigTeam = results[i] === 0 ? away : home;

    scores[WinnigTeam] = (scores[WinnigTeam] || 0) + 3;

    if (!winner || scores[WinnigTeam] > scores[winner]) {
      winner = WinnigTeam;
    }
  }
  return winner;
}

const competitions = [
  ['JavaScript', 'C#'],
  ['C#', 'Python'],
  ['Python', 'JavaScript'],
];

const results = [0, 0, 1];

console.log(winnerDetermination(competitions, results));

/*---------------------------------------------------------------------------------------------------------------------------------*/

function winnerDetermination(competitions, results) {
  const score = {};
  const winner = {
    name: '',
    score: 0,
  };

  for (let i = 0; i < competitions.length; i++) {
    const winningTeam =
      results[i] === 1 ? competitions[i][0] : competitions[i][1];
    score[winningTeam] = (score[winningTeam] || 0) + 3;

    for (const team in score) {
      if (score[team] > winner.score) {
        winner.name = team;
        winner.score = score[team];
      }
    }
  }

  return winner;
}
console.log(tournamentWinner(competitions, results));
