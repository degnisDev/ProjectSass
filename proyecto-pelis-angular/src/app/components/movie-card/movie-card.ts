import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movies.service';

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

  onSelect() {
    this.select.emit(this.movie);
  }
}
