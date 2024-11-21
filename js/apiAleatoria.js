// Elementos del DOM
let botonBusqueda = document.getElementById("search-button");
let entradaLibro = document.getElementById("book-title");
let contenedorResultados = document.getElementById("results");

// Función para buscar libros
let buscarLibros = (consulta) => {
  fetch(`https://openlibrary.org/search.json?title=${consulta}`)
    .then((respuesta) => respuesta.json())
    .then((datos) => mostrarLibros(datos.docs))
    .catch((error) => {
      console.error("Error al obtener datos:", error);
      contenedorResultados.innerHTML = "<p>Error al buscar libros.</p>";
    });
};

// Función para mostrar los libros en la interfaz
let mostrarLibros = (libros) => {
  contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores

  if (libros.length === 0) {
    contenedorResultados.innerHTML = "<p>No se encontraron libros.</p>";
    return;
  }

  libros.forEach((libro) => {
    let tarjetaLibro = document.createElement("div");
    tarjetaLibro.classList.add("book-card");

    let titulo = document.createElement("h3");
    titulo.textContent = libro.title;

    let autor = document.createElement("p");
    autor.textContent = `Autor: ${libro.author_name ? libro.author_name.join(", ") : "N/A"}`;

    let anio = document.createElement("p");
    anio.textContent = `Año: ${libro.first_publish_year || "N/A"}`;

    let portada = document.createElement("img");
    portada.src = libro.cover_i
      ? `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`
      : "https://via.placeholder.com/150?text=Sin+Imagen";
    portada.alt = `Portada de ${libro.title}`;
    portada.style.maxWidth = "150px";

    // Agregar elementos al contenedor
    tarjetaLibro.appendChild(portada);
    tarjetaLibro.appendChild(titulo);
    tarjetaLibro.appendChild(autor);
    tarjetaLibro.appendChild(anio);

    // Agregar el contenedor al resultado
    contenedorResultados.appendChild(tarjetaLibro);
  });
};

// Evento al presionar el botón de búsqueda
botonBusqueda.addEventListener("click", () => {
  let consulta = entradaLibro.value.trim();
  if (consulta) {
    buscarLibros(consulta);
  } else {
    contenedorResultados.innerHTML = "<p>Por favor, ingresa un título para buscar.</p>";
  }
});

