import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../services/movies.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-detail.html',
  styleUrls: ['./movie-detail.scss']
})
export class MovieDetail {
  @Input() movie!: Movie | null;
  @Output() close = new EventEmitter<void>();

  onClose() { this.close.emit(); }
}
