import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contactos.html',
  styleUrls: ['./contactos.scss'],
})
export class Contactos {
  name = '';
  email = '';
  message = '';
  submitted = false;

  submitForm() {
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      this.submitted = false;
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    // Aquí normalmente enviaríamos a un backend. Por ahora sólo simulamos éxito.
    console.log('Contacto enviado', { name: this.name, email: this.email, message: this.message });
    this.submitted = true;

    // Limpiar formulario
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
