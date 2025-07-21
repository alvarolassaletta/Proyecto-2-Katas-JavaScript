/**Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible. */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

//modifico el array   para poder extraer el nombre, la url.  Añado año de lanzamiento y una descripcion

const albumsData = [
  {
    title: "De Mysteriis Dom Sathanas",
    imageUrl: "https://m.media-amazon.com/images/I/51x9KCJl8TL._SL1000_.jpg",
    year: 1994,
    description: "Álbum icónico de black metal noruego, considerado un clásico y muy influyente dentro del género."
  },
  {
    title: "Reign in Blood",
    imageUrl: "https://m.media-amazon.com/images/I/71ddQM0qHCL._SL1500_.jpg",
    year: 1986,
    description: "Disco seminal de thrash metal por Slayer, famoso por su velocidad, agresividad y producción intensa."
  },
  {
    title: "Ride the Lightning",
    imageUrl: "https://m.media-amazon.com/images/I/716FcW7qgSL._SL1200_.jpg",
    year: 1984,
    description: "Segundo álbum de Metallica que expandió su sonido con temas más complejos y variados."
  },
  {
    title: "Painkiller",
    imageUrl: "https://m.media-amazon.com/images/I/611B0ExWgfL._SX425_.jpg",
    year: 1990,
    description: "Álbum de Judas Priest que destaca por su enfoque más rápido y heavy, con el icónico tema 'Painkiller'."
  },
  {
    title: "Iron Fist",
    imageUrl: "https://m.media-amazon.com/images/I/71zsVRmvgqL._SL1400_.jpg",
    year: 1982,
    description: "Trabajo clásico de Motörhead, reconocible por su sonido crudo y energía inagotable."
  },
];

const main = document.querySelector('main') ;
const ul = document.createElement("ul");
ul.classList.add("album-container");

albumsData.forEach((album) => {
  const li = document.createElement("li");

  li.innerHTML = `
      <img src="${album.imageUrl}" alt="${album.title}"> 
      <p class="album-title">${album.title} - ${album.year} </p>
      <p class="album-description">${album.description}</p>
   `;
  li.classList.add("album-item");
  ul.appendChild(li);
});

main.appendChild(ul);