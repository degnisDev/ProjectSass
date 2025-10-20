/*
   
// Usamos un array de objetos para simular una base de datos de películas.
 */

const movies = [
    {
        id: 1,
        title: "El Código Enigma",
        year: 2024,
        genre: "ciencia-ficcion",
        rating: 8.5,
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
        description: "Un programador descubre un código oculto que podría cambiar el destino de la humanidad.",
        director: "María González",
        duration: "142 min",
        cast: ["Degnis Quevedo", "Julian Gomez", "Carlos Ruiz"],
        synopsis: "En la segunda guerra mundial un cientifico y matematico crea una maquina la cual desencripta mensajes secretos enviados por el ejercito Nazi.",
        comments: [
            { author: "CineFilmz", text: "Una obra maestra de la ciencia ficción moderna. Efectos visuales impresionantes.", date: "2024-10-10" },
            { author: "MovieLover", text: "La trama te mantiene en suspenso hasta el final. Altamente recomendada.", date: "2024-10-12" }
        ],
        userRating: 0
    },
    {
        id: 2,
        title: "Sombras del Pasado",
        year: 2023,
        genre: "drama",
        rating: 9.2,
        poster: "https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400",
        description: "Una emotiva historia sobre secretos familiares y redención que cambiará tu perspectiva.",
        director: "Pedro Sánchez",
        duration: "128 min",
        cast: ["Laura Martínez", "Diego Silva", "Carmen Vega"],
        synopsis: "Tres generaciones de una familia se ven obligadas a enfrentar secretos dolorosos del pasado cuando la matriarca revela una verdad que cambiará sus vidas para siempre.",
        comments: [
            { author: "DramaFan", text: "Me hizo llorar. Las actuaciones son sobresalientes.", date: "2024-09-28" }
        ],
        userRating: 0
    },
    {
        id: 3,
        title: "Risas en el Caos",
        year: 2024,
        genre: "comedia",
        rating: 7.8,
        poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400",
        description: "Una comedia hilarante sobre un grupo de amigos que intenta organizar la boda del siglo.",
        director: "Luis Torres",
        duration: "105 min",
        cast: ["Roberto Gómez", "Patricia Díaz", "Miguel Ángel"],
        synopsis: "Cuando cinco amigos deciden organizar una boda sorpresa, todo lo que puede salir mal, sale mal. Una comedia fresca y divertida sobre la amistad y el amor.",
        comments: [
            { author: "ComedyKing", text: "No paré de reír en toda la película. Perfecta para pasar un buen rato.", date: "2024-10-05" }
        ],
        userRating: 0
    },
    {
        id: 4,
        title: "Velocidad Terminal",
        year: 2023,
        genre: "accion",
        rating: 8.1,
        poster: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?w=400",
        description: "Acción explosiva cuando un agente debe detener un ataque terrorista en tiempo récord.",
        director: "Andrea Rojas",
        duration: "118 min",
        cast: ["Marcos Herrera", "Sofia Ramírez", "Alex Castro"],
        synopsis: "Un agente especial tiene solo 24 horas para desactivar una serie de bombas colocadas estratégicamente en la ciudad mientras persigue a los responsables.",
        comments: [
            { author: "ActionFan", text: "Escenas de acción impresionantes. El ritmo es perfecto.", date: "2024-09-15" }
        ],
        userRating: 0
    },
    {
        id: 5,
        title: "Batman el caballero de la noche",
        year: 2024,
        genre: "terror",
        rating: 7.5,
        poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400",
        description: "Ciudad gotica esta azotada por el crimen y la corrupción pero un millonario decide hacer justicia por su cuenta.",
        director: "Elena Morales",
        duration: "98 min",
        cast: ["Fernando Jiménez", "Isabel Ortiz", "Tomás Vargas"],
        synopsis: "El crimen en Ciudad Gótica ha alcanzado niveles sin precedentes, y Batman debe enfrentarse a una nueva ola de criminales que amenazan con destruir la ciudad.",
        comments: [
            { author: "HorrorNight", text: "Me asustó de verdad. Muy bien construida la tensión.", date: "2024-10-01" }
        ],
        userRating: 0
    },
    {
        id: 6,
        title: "Horizontes Infinitos",
        year: 2023,
        genre: "ciencia-ficcion",
        rating: 8.9,
        poster: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400",
        description: "Una expedición espacial descubre señales de vida inteligente más allá de nuestra galaxia.",
        director: "Rafael Mendoza",
        duration: "155 min",
        cast: ["Victoria Luna", "Gabriel Paz", "Andrés Fuentes"],
        synopsis: "La primera misión interestelar de la humanidad se encuentra con una civilización avanzada que desafiará todo lo que creíamos saber sobre el universo.",
        comments: [
            { author: "SciFiGeek", text: "Visualmente espectacular. La mejor película de ciencia ficción del año.", date: "2024-08-20" }
        ],
        userRating: 0
    },
    {
        id: 7,
        title: "Corazones Rotos",
        year: 2022,
        genre: "drama",
        rating: 8.3,
        poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400",
        description: "Un drama romántico sobre segundas oportunidades y el poder del perdón.",
        director: "Claudia Romero",
        duration: "112 min",
        cast: ["Daniel Campos", "Valentina Cruz", "Ricardo Medina"],
        synopsis: "Dos personas que juraron no volver a verse se reencuentran después de 10 años, descubriendo que el amor verdadero nunca se olvida.",
        comments: [
            { author: "RomanceQueen", text: "Hermosa historia que toca el corazón.", date: "2024-07-18" }
        ],
        userRating: 0
    },
    {
        id: 8,
        title: "La caída del imperio",
        year: 2024,
        genre: "accion",
        rating: 7.9,
        poster: "https://images.unsplash.com/photo-1571847140471-1d7766e825ea?w=400",
        description: "Conoce como KODAK la empresa pionera de la fotografía no innovo y desapareció.",
        director: "Javier Navarro",
        duration: "133 min",
        cast: ["Alejandro Ríos", "Natalia Flores", "Sergio Delgado"],
        synopsis: "Con la llegada de la era digital, KODAK no supo adaptarse y perdió su liderazgo en la industria.",
        comments: [
            { author: "AdventureFan", text: "Excelente si te gustan los documentales de historias reales.", date: "2024-10-08" }
        ],
        userRating: 0
    }
];


// Cargamos favoritos y calificaciones guardadas (si las hubiera) desde localStorage
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentView = 'home';
let currentTheme = localStorage.getItem('theme') || 'dark';
let userRatings = JSON.parse(localStorage.getItem('userRatings')) || {};

// Initialize
// Aplicar el tema guardado y mostrar las cosas iniciales
document.body.setAttribute('data-theme', currentTheme);
updateThemeIcon();
renderMovies();
updateFavCount();

// Si el usuario ya había guardado calificaciones, las aplicamos a los datos
Object.keys(userRatings).forEach(movieId => {
    const movie = movies.find(m => m.id === parseInt(movieId));
    if (movie) movie.userRating = userRatings[movieId];
});

// Función para cambiar el tema (claro/oscuro)
    // en el navegador (localStorage) y mostramos un mensaje al usuario.
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    showToast(`Modo ${currentTheme === 'dark' ? 'oscuro' : 'claro'} activado`, 'success');
}

function updateThemeIcon() {
    const icon = document.getElementById('themeIcon');
    // Mostramos un icono diferente según el tema
    icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Toast Notifications
// Mensajes breves que aparecen arriba a la derecha para avisar al usuario
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        ${message}
    `;
    container.appendChild(toast);
    
    // Se borra automáticamente después de unos segundos
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Navigation
function showHome() {
    currentView = 'home';
    document.getElementById('heroSection').style.display = 'block';
    document.getElementById('filtersSection').style.display = 'block';
    renderMovies();
}

function showFavorites() {
    currentView = 'favorites';
    document.getElementById('heroSection').style.display = 'none';
    document.getElementById('filtersSection').style.display = 'none';
    
    // Mostramos solo las películas que el usuario marcó como favoritas
    const favMovies = movies.filter(m => favorites.includes(m.id));
    if (favMovies.length === 0) {
        document.getElementById('moviesGrid').innerHTML = `
            <div class="col-12 empty-state">
                <i class="fas fa-heart-broken"></i>
                <h3>No tienes películas favoritas</h3>
                <p>Explora nuestro catálogo y agrega tus películas favoritas</p>
                <button class="btn btn-primary mt-3" onclick="showHome()">
                    <i class="fas fa-film"></i> Explorar películas
                </button>
            </div>
        `;
    } else {
        renderMovies(favMovies);
    }
}

// Render movies
function renderMovies(moviesToRender = movies) {
    const grid = document.getElementById('moviesGrid');
    grid.innerHTML = '';
    
    moviesToRender.forEach((movie, index) => {
        const isFavorite = favorites.includes(movie.id);
        const stars = '★'.repeat(Math.round(movie.rating / 2)) + '☆'.repeat(5 - Math.round(movie.rating / 2));
        
        const col = document.createElement('div');
        col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        col.style.animationDelay = `${index * 0.1}s`;
        col.innerHTML = `
            <div class="movie-card" onclick="showMovieDetail(${movie.id})">
                <div class="movie-poster">
                    <img src="${movie.poster}" alt="${movie.title}">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(event, ${movie.id})">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="share-btn" onclick="shareMovie(event, ${movie.id})">
                        <i class="fas fa-share-alt"></i>
                    </button>
                    <div class="rating-badge">
                        <i class="fas fa-star"></i> ${movie.rating}
                    </div>
                </div>
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <div class="movie-meta">
                        <span><i class="far fa-calendar"></i> ${movie.year}</span>
                        <span><i class="far fa-clock"></i> ${movie.duration}</span>
                    </div>
                    <p class="movie-description">${movie.description}</p>
                    <div class="stars">${stars}</div>
                    ${movie.userRating > 0 ? `<div class="user-rating"><small>Tu calificación: ${'★'.repeat(movie.userRating)}${'☆'.repeat(5 - movie.userRating)}</small></div>` : ''}
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

// Show movie detail
function showMovieDetail(id) {
    const movie = movies.find(m => m.id === id);
    const modal = new bootstrap.Modal(document.getElementById('movieModal'));
    
    // Título y calificación
    document.getElementById('modalTitle').innerHTML = `
        ${movie.title} <span class="badge bg-danger">${movie.rating} <i class="fas fa-star"></i></span>
    `;
    
    // Preparar textos para compartir (si el navegador lo permite se usa navigator.share)
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`¡Mira "${movie.title}"! ${movie.description}`);
    
    // Insertamos todo el contenido del detalle dentro del modal
    // Incluye: imagen grande, calificación del usuario, información, botones de compartir, sinopsis, reparto y comentarios
    document.getElementById('modalBody').innerHTML = `
        <div class="row">
            <div class="col-md-4 mb-3">
                <img src="${movie.poster}" alt="${movie.title}" class="detail-poster">
                
                <div class="mt-3">
                    <h6>Tu calificación:</h6>
                    <div class="star-rating" id="starRating">
                        ${[1,2,3,4,5].map(n => `
                            <i class="fas fa-star ${movie.userRating >= n ? 'active' : ''}" 
                               onclick="rateMovie(${movie.id}, ${n})"></i>
                        `).join('')}
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <h5><i class="fas fa-info-circle"></i> Información</h5>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Año:</strong> ${movie.year}</p>
                <p><strong>Duración:</strong> ${movie.duration}</p>
                <p><strong>Género:</strong> ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1).replace('-', ' ')}</p>
                
                <h5 class="mt-4"><i class="fas fa-share-alt"></i> Compartir en redes sociales</h5>
                <div class="social-share">
                    <!-- Botones que abren compartir en Facebook/Twitter/WhatsApp/Telegram -->
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" class="social-btn facebook">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" class="social-btn twitter">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://wa.me/?text=${shareText}%20${shareUrl}" target="_blank" class="social-btn whatsapp">
                        <i class="fab fa-whatsapp"></i>
                    </a>
                    <a href="https://t.me/share/url?url=${shareUrl}&text=${shareText}" target="_blank" class="social-btn telegram">
                        <i class="fab fa-telegram-plane"></i>
                    </a>
                </div>
                
                <h5 class="mt-4"><i class="fas fa-align-left"></i> Sinopsis</h5>
                <p>${movie.synopsis}</p>
                
                <h5 class="mt-4"><i class="fas fa-users"></i> Reparto Principal</h5>
                <div class="row">
                    ${movie.cast.map((actor, i) => `
                        <div class="col-4 cast-member">
                            <img src="https://ui-avatars.com/api/?name=${actor}&background=e50914&color=fff&size=80" 
                                 alt="${actor}" class="cast-img">
                            <div><small>${actor}</small></div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <div class="comment-section">
            <h5><i class="fas fa-comments"></i> Comentarios (${movie.comments.length})</h5>
            ${movie.comments.map(comment => `
                <div class="comment">
                    <div class="comment-author">
                        <i class="fas fa-user-circle"></i> ${comment.author}
                        <small class="text-muted ms-2">${comment.date || ''}</small>
                    </div>
                    <div class="comment-text">${comment.text}</div>
                </div>
            `).join('')}
            
            <div class="comment-form mt-3">
                <h6>Agregar comentario</h6>
                <input type="text" class="form-control mb-2" id="commentAuthor" placeholder="Tu nombre" value="Usuario">
                <textarea class="form-control mb-2" id="newComment" rows="3" placeholder="Escribe tu opinión sobre esta película..."></textarea>
                <button class="btn btn-primary" onclick="addComment(${movie.id})">
                    <i class="fas fa-paper-plane"></i> Publicar comentario
                </button>
            </div>
        </div>
    `;
    
    modal.show();
}

// Rate movie
// Guardar la calificación que puso el usuario
// Explicación simple: la calificación se guarda en localStorage para que la próxima vez que abras
// la página sigas viendo la nota que diste.
function rateMovie(movieId, rating) {
    const movie = movies.find(m => m.id === movieId);
    movie.userRating = rating;
    userRatings[movieId] = rating;
    // Guardamos la calificación en localStorage para que persista entre recargas.
    // Nota: localStorage almacena solo texto, por eso usamos JSON.stringify/parse.
    localStorage.setItem('userRatings', JSON.stringify(userRatings));

    // Mensaje breve para el usuario
    showToast(`Has calificado "${movie.title}" con ${rating} estrellas`, 'success');
    showMovieDetail(movieId);
    if (currentView === 'home') renderMovies();
    else showFavorites();
}

// Add comment
// Agregar un comentario a la película (se queda solo en memoria mientras la página está abierta)
function addComment(movieId) {
    const commentText = document.getElementById('newComment').value;
    const author = document.getElementById('commentAuthor').value;
    
    if (commentText.trim()) {
        const movie = movies.find(m => m.id === movieId);
        const today = new Date().toISOString().split('T')[0];
        movie.comments.push({
            author: author || "Usuario",
            text: commentText,
            date: today
        });
        document.getElementById('newComment').value = '';
        showToast('Comentario agregado exitosamente', 'success');
        showMovieDetail(movieId);
    } else {
        showToast('Por favor escribe un comentario', 'info');
    }
}

// Toggle favorite
// Marcar o desmarcar como favorito
// Explicación simple: añadimos o quitamos el id de la película a la lista de favoritos.
// Guardamos esa lista en localStorage para que el navegador la recuerde la próxima vez.
function toggleFavorite(event, id) {
    event.stopPropagation();
    const index = favorites.indexOf(id);
    const movie = movies.find(m => m.id === id);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast(`"${movie.title}" eliminado de favoritos`, 'info');
    } else {
        favorites.push(id);
        showToast(`"${movie.title}" agregado a favoritos`, 'success');
    }
    

    // Guardamos el array como texto usando JSON.stringify.
    localStorage.setItem('favorites', JSON.stringify(favorites));
    // Actualizamos el contador visible en la barra de navegación
    updateFavCount();
    
    if (currentView === 'home') {
        renderMovies(getFilteredMovies());
    } else {
        showFavorites();
    }
}

// Share movie
// Compartir una película
function shareMovie(event, id) {
    event.stopPropagation();
    const movie = movies.find(m => m.id === id);
    
    if (navigator.share) {
        navigator.share({
            title: movie.title,
            text: movie.description,
            url: window.location.href
        }).then(() => {
            showToast('Película compartida exitosamente', 'success');
        }).catch(() => {});
    } else {
        showMovieDetail(id);
        showToast('Usa los botones de redes sociales para compartir', 'info');
    }
}

// Update favorite count
function updateFavCount() {
    document.getElementById('favCount').textContent = favorites.length;
}

// Filter movies
function getFilteredMovies() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const genre = document.getElementById('genreFilter').value;
    const year = document.getElementById('yearFilter').value;
    
    return movies.filter(movie => {
        const matchSearch = movie.title.toLowerCase().includes(search) || 
                          movie.description.toLowerCase().includes(search);
        const matchGenre = !genre || movie.genre === genre;
        const matchYear = !year || movie.year.toString() === year;
        
        return matchSearch && matchGenre && matchYear;
    });
}

// Event listeners
document.getElementById('searchInput').addEventListener('input', () => {
    if (currentView === 'home') {
        renderMovies(getFilteredMovies());
    }
});

document.getElementById('genreFilter').addEventListener('change', () => {
    if (currentView === 'home') {
        renderMovies(getFilteredMovies());
    }
});

document.getElementById('yearFilter').addEventListener('change', () => {
    if (currentView === 'home') {
        renderMovies(getFilteredMovies());
    }
});
