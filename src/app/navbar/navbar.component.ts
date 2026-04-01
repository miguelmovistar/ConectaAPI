import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;

  menuItems = [
    { label: 'Vueltas', icon: '🔄' },
    { label: 'Pasos', icon: '👣' },
    { label: 'Guías', icon: '📖' },
    { label: 'Anotaciones', icon: '📝' },
    { label: 'Errores', icon: '❌' }
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onMenuItemClick(item: string): void {
    console.log('Seleccionado:', item);
    this.closeMenu();
  }
}
