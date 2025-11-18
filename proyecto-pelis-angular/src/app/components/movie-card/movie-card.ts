import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movies.service';
import { MoviesService } from '../../services/movies.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.scss']
})
export class MovieCard {
  @Input() movie!: Movie;
  @Output() select = new EventEmitter<Movie>();
  @Output() favoriteToggled = new EventEmitter<number>();
  constructor(private moviesService: MoviesService, private toast: ToastService) {}

  onSelect() {
    this.select.emit(this.movie);
  }

  isFavorite(): boolean {
    return this.moviesService.getFavorites().includes(this.movie.id);
  }

  onToggleFavorite(event: Event) {
    event.stopPropagation();
    this.moviesService.toggleFavorite(this.movie.id);
    this.toast.show(this.isFavorite() ? `${this.movie.title} agregado a favoritos` : `${this.movie.title} eliminado de favoritos`, this.isFavorite() ? 'success' : 'info');
    this.favoriteToggled.emit(this.movie.id);
  }

  onShare(event: Event) {
    event.stopPropagation();
    const shareText = `${this.movie.title} - ${this.movie.description}`;
    if ((navigator as any).share) {
      (navigator as any).share({ title: this.movie.title, text: shareText, url: window.location.href }).catch(() => {});
    } else {
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
      window.open(url, '_blank');
    }
    this.toast.show('Abriendo opciones de compartir', 'info');
  }
}
