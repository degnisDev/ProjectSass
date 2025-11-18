import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MoviesService, Movie } from '../../services/movies.service';
import { MovieCard } from '../../components/movie-card/movie-card';
import { MovieDetail } from '../../components/movie-detail/movie-detail';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieCard, MovieDetail],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  search = '';
  genre = '';
  year = '';
  selectedMovie: Movie | null = null;

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

  showMovieDetail(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeDetail() { this.selectedMovie = null }
}
