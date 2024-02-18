/* 
Requerimientos del reto: 

1. El usuario debe poder ingresar su usuario y contraseña. 
2. El sistema debe ser capaz de validar si el usuario y contraseña son correctos. 
3. Si el usuario y la contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario. 
4. Si el usuario o la contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline. 

*/

const usersDatabase = [
  { username: 'Diego', password: '123' },
  { username: 'Juan', password: '123' },
  { username: 'Pedro', password: '123' },
];

const usersTimeline = [
  { username: 'Pablo', timeline: 'Este es el timeline de Pablo' },
  { username: 'Juan', timeline: 'Este es el timeline de Juan' },
  { username: 'Pedro', timeline: 'Este es el timeline de Pedro' },
  { username: 'Diego', timeline: 'Este es el timeline de Diego' },
];

const username = prompt('Cual es tu usuario?');
const password = prompt('Cual es tu contraseña?');

function usuarioExistente(username, password) {
  for (let i = 0; i < usersDatabase.length; i++) {
    if (
      usersDatabase[i].username === username &&
      usersDatabase[i].password === password
    ) {
      return true;
    }
  }
  return false;
}

function SingIn(username, password) {
  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    console.log(usersTimeline);
  } else {
    alert('Uuups, usuario o contraseña incorrectos');
  }
}

SingIn(username, password);
