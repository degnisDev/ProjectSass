import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Contactos } from './pages/contactos/contactos';

export const routes: Routes = [
	{ path: '', component: Inicio },
	{ path: 'contactos', component: Contactos },
	{ path: '**', redirectTo: '' }
];
