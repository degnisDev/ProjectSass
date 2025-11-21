import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../../services/movies.service';
import { MoviesService } from '../../services/movies.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.scss']
})
export class MovieDetail {
  @Input() movie!: Movie | null;
  @Output() close = new EventEmitter<void>();
  newCommentAuthor = 'Usuario';
  newCommentText = '';

  constructor(private moviesService: MoviesService, private toast: ToastService) {}

  onClose() { this.close.emit(); }

  rate(n: number) {
    if (!this.movie) return;
    this.moviesService.rateMovie(this.movie.id, n);
    this.toast.show(`Has calificado "${this.movie.title}" con ${n} estrellas`, 'success');
  }

  submitComment() {
    if (!this.movie) return;
    if (!this.newCommentText.trim()) {
      this.toast.show('Por favor escribe un comentario', 'info');
      return;
    }
    this.moviesService.addComment(this.movie.id, this.newCommentAuthor || 'Usuario', this.newCommentText.trim());
    this.newCommentText = '';
    this.toast.show('Comentario agregado exitosamente', 'success');
  }
}
