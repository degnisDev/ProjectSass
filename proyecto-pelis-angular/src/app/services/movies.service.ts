import { Injectable } from '@angular/core';

export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string;
  rating: number;
  poster: string;
  description?: string;
  director?: string;
  duration?: string;
  cast?: string[];
  synopsis?: string;
  comments?: Array<{ author: string; text: string; date?: string }>;
  userRating?: number;
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private storageKeyFavorites = 'favorites';
  private storageKeyRatings = 'userRatings';

  private movies: Movie[] = [
    // Minimal set copied from legacy script.js (trimmed fields where appropriate)
    {
      id: 1,
      title: 'El Código Enigma',
      year: 2024,
      genre: 'ciencia-ficcion',
      rating: 8.5,
      poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400',
      description: 'Un programador descubre un código oculto que podría cambiar el destino de la humanidad.',
      director: 'María González',
      duration: '142 min',
      cast: ['Degnis Quevedo','Julian Gomez','Carlos Ruiz'],
      synopsis: 'En la segunda guerra mundial un cientifico y matematico crea una maquina la cual desencripta mensajes secretos enviados por el ejercito Nazi.',
      comments: [
        { author: 'CineFilmz', text: 'Una obra maestra de la ciencia ficción moderna. Efectos visuales impresionantes.', date: '2024-10-10' }
      ],
      userRating: 0
    },
    {
      id: 2,
      title: 'Sombras del Pasado',
      year: 2023,
      genre: 'drama',
      rating: 9.2,
      poster: 'https://images.unsplash.com/photo-1594908900066-3f47337549d8?w=400',
      description: 'Una emotiva historia sobre secretos familiares y redención que cambiará tu perspectiva.',
      director: 'Pedro Sánchez',
      duration: '128 min',
      cast: ['Laura Martínez','Diego Silva','Carmen Vega'],
      synopsis: '',
      comments: [],
      userRating: 0
    }
  ];

  private favorites: number[] = [];
  private userRatings: Record<number, number> = {};

  constructor() {
    this.loadFromStorage();
  }

  getAll(): Movie[] {
    return this.movies.map(m => ({ ...m }));
  }

  getById(id: number): Movie | undefined {
    return this.movies.find(m => m.id === id);
  }

  getFavorites(): number[] {
    return [...this.favorites];
  }

  toggleFavorite(id: number) {
    const idx = this.favorites.indexOf(id);
    if (idx > -1) this.favorites.splice(idx, 1);
    else this.favorites.push(id);
    this.saveToStorage();
  }

  rateMovie(id: number, rating: number) {
    this.userRatings[id] = rating;
    const movie = this.getById(id);
    if (movie) movie.userRating = rating;
    this.saveToStorage();
  }

  addComment(id: number, author: string, text: string) {
    const movie = this.getById(id);
    if (!movie) return;
    movie.comments = movie.comments || [];
    movie.comments.push({ author: author || 'Usuario', text, date: new Date().toISOString().split('T')[0] });
  }

  filter(opts: { search?: string; genre?: string; year?: string } = {}) {
    const search = (opts.search || '').toLowerCase();
    return this.movies.filter(movie => {
      const matchSearch = !search || movie.title.toLowerCase().includes(search) || (movie.description || '').toLowerCase().includes(search);
      const matchGenre = !opts.genre || movie.genre === opts.genre;
      const matchYear = !opts.year || movie.year.toString() === opts.year;
      return matchSearch && matchGenre && matchYear;
    });
  }

  private loadFromStorage() {
    try {
      const fav = localStorage.getItem(this.storageKeyFavorites);
      this.favorites = fav ? JSON.parse(fav) : [];
      const ratings = localStorage.getItem(this.storageKeyRatings);
      this.userRatings = ratings ? JSON.parse(ratings) : {};
      // apply ratings to movies
      Object.keys(this.userRatings).forEach(k => {
        const id = parseInt(k, 10);
        const m = this.getById(id);
        if (m) m.userRating = this.userRatings[id];
      });
    } catch (e) {
      this.favorites = [];
      this.userRatings = {};
    }
  }

  private saveToStorage() {
    localStorage.setItem(this.storageKeyFavorites, JSON.stringify(this.favorites));
    localStorage.setItem(this.storageKeyRatings, JSON.stringify(this.userRatings));
  }
}
