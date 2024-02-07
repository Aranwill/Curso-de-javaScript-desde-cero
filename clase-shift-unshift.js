// Methods tha modify the original array (Mutability).

// shift()

const colors = ['yellow', 'blue', 'red'];
const removedColors = colors.shift();

console.log(colors);
console.log(removedColors);

// unshift()

const newColors = colors.unshift('pink', 'purple');

console.log(colors);
console.log(newColors);

function managePlaylist(playlist, newSong) {
  // Elimina la primera canción de la lista de reproducción
  playlist.shift();

  // Añade la nueva canción al principio de la lista de reproducción
  playlist.unshift(newSong);

  // Devuelve la lista de reproducción actualizada
  return playlist;
}

// Ejemplo de uso
const inicialPlayList = [
  'Bellakeo',
  'La Diabla',
  'Si Sabe Ferxxo',
  'Perro Negro',
];
const newSongToAdd = 'Deja vu';

const updatedPlaylist = managePlaylist(inicialPlayList, newSongToAdd);

// Muestra los resultados
console.log('inicial PlayList', inicialPlayList);
console.log('new song to Add:', newSongToAdd);
console.log('updated Playlist:', updatedPlaylist);

/*
Ejercicio: Gestionando una lista de canciones

Imagina que estás desarrollando una aplicación y necesitas crear una función para gestionar una lista de 
canciones. 
Tu función debería tomar un array de listas de reproducción, eliminar la primera canción usando el 
método shift, añadir una nueva canción al principio usando el método unshift, y devolver la lista de 
reproducción actualizada.

Instrucciones:
1. Define una función llamada managePlaylist que toma dos parámetros: playlist (un array) y 
newSong (una cadena que representa la nueva canción a añadir).
2. Dentro de la función, utiliza el método shift para eliminar la primera canción de la lista de 
reproducción.
3. Utilice el método unshift para añadir la nueva canción al principio de la lista de reproducción.
4. Devuelve la lista de reproducción actualizada desde la función.
5. En la sección de ejemplo de uso, crea una lista de reproducción inicial y una nueva canción para 
añadir.
6. Llama a la función managePlaylist con la lista de reproducción inicial y la nueva canción.
7. Muestra la lista de reproducción inicial, la nueva canción a añadir y la lista de reproducción actualizada.

*/

// let playList = ['Bellakeo', 'La Diabla', 'Si Sabe Ferxxo', 'Perro Negro'];
// let newSong = 'Deja vu';

// const ADD_SONG = 'addSong';
// const REMOVE_SONG = 'removeSong';
// const VIEW_PLAYLIST = 'viewPlayList';

// function viewPlayList() {
//   console.log(playList);
// }

// function managePlaylist(action, newSong) {
//   switch (action) {
//     case ADD_SONG:
//       playList.unshift(newSong);
//       break;
//     case REMOVE_SONG:
//       if (playList.length === 0) {
//         console.log('Playlist is empty. No song to remove');
//       } else {
//         const removedSong = playList.shift();
//         console.log(`Removed song from the playList is '${removedSong}'`);
//         break;
//       }
//     case VIEW_PLAYLIST:
//       viewPlayList();
//       break;
//     default:
//       throw new Error('Ha ocurrido un error, por favor chequear la playlist');
//   }
//   return playList;
// }

// managePlaylist(VIEW_PLAYLIST);
// managePlaylist(REMOVE_SONG);
// managePlaylist(VIEW_PLAYLIST);
// managePlaylist(ADD_SONG, newSong);
// managePlaylist(VIEW_PLAYLIST);
