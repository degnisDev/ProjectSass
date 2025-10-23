# CineReview (Proyecto de ejemplo)

Resumen
-------
Pequeña aplicación front-end estática para mostrar un catálogo de películas. Está pensada como ejemplo para aprender HTML/CSS/JS y cómo separar código en archivos distintos.

Estructura de archivos
----------------------
- `index.html`  
  Estructura de la página (barra de navegación, hero, filtros, rejilla de películas y modal de detalle). Contiene referencias a Bootstrap y Font Awesome.

- `styles.css`  
  Estilos principales (tema claro/oscuro, tarjetas de películas, modal, toasts). Contiene comentarios en español para entender qué hace cada sección.

- `responsive.css`  
  Media queries y pequeños ajustes para móviles y pantallas muy grandes.

- `script.js`  
  Lógica de la aplicación: genera las tarjetas de películas, maneja favoritos, calificaciones, comentarios y compartir.

- `README.md`  
  Este archivo.

Qué puedes editar fácilmente
---------------------------
- La lista de películas está en `script.js` (variable `movies`). Puedes cambiar títulos, imágenes, descripciones o añadir/quitar objetos.
- Los estilos están en `styles.css` y `responsive.css`.

Notas importantes (comportamiento y "APIs")
--------------------------------------------
- localStorage: se usa para guardar tres cosas localmente en el navegador:
  - `favorites` (lista de ids de películas marcadas como favoritas)
  - `theme` ("dark" o "light")
  - `userRatings` (calificaciones que el usuario haya dejado)


- FUNCIONALIDADES

    - Puedes guardar tus peliculas favoritas
    - Compartir las peliculas que mas te guste
    - Calificar con estrellas las peliculas
    - Dejar comentarios de tus peliculas
    - Cambiar el modo Dark o Light
    - Filtrar por nombre, genero, año


- SASS

    - Agregamos sass al proyecto sin reemplazar el css existente
    - El sass que se agrego solo aplica y modifica el Hero
    - Si se quiere ver el hero en su version original, basta con comentar la linea que llama a los estilos sass
    - El sass modifica el colo 
