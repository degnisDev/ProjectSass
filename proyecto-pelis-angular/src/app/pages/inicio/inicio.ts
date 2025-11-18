import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesService, Movie } from '../../services/movies.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  search = '';
  genre = '';
  year = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.movies = this.moviesService.getAll();
    this.filteredMovies = this.movies.slice();
  }

  onSearch() {
    this.applyFilters();
  }

  onGenreChange() {
    this.applyFilters();
  }

  onYearChange() {
    this.applyFilters();
  }

  applyFilters() {
    this.filteredMovies = this.moviesService.filter({ search: this.search, genre: this.genre, year: this.year });
  }

  toggleFavorite(id: number) {
    this.moviesService.toggleFavorite(id);
    this.applyFilters();
  }

  showMovieDetail(id: number) {
    // For now delegate to legacy modal handled by global script.js
    // The global script expects a function `showMovieDetail` in window scope; we'll call it if available.
    const fn = (window as any).showMovieDetail;
    if (typeof fn === 'function') fn(id);
  }
}
