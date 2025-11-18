import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  constructor(private router: Router, private moviesService: MoviesService) {}

  get favCount(): number {
    return this.moviesService.getFavorites().length;
  }

  showFavorites() {
    // Navigate to Inicio with query param to show favorites
    this.router.navigate(['/'], { queryParams: { view: 'favorites' } });
  }

  showHome() {
    this.router.navigate(['/']);
  }

  toggleTheme() {
    const current = document.body.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    const icon = document.getElementById('themeIcon');
    if (icon) icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}
