import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize the current route
    this.currentRoute = this.router.url;

    // Listen for route changes
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.currentRoute = this.router.url;
        this.closeOffcanvas();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top
      });
  }

  isActive(route: string): boolean {
    return this.currentRoute === route;
  }

  getImageSource(route: string): string {
    if (this.isActive(route)) {
      switch (route) {
        case '/construction':
          return '../../assets/building1.png';
        case '/interior':
          return '../../assets/furniture.png';
        case '/medical':
          return '../../assets/cardiogram1.png';
        case '/farms':
          return '../../assets/house.png';
        default:
          return '../../assets/default.png';
      }
    } else {
      switch (route) {
        case '/construction':
          return '../../assets/building.png';
        case '/interior':
          return '../../assets/furniture (1).png';
        case '/medical':
          return '../../assets/cardiogram.png';
        case '/farms':
          return '../../assets/house (1).png';
        default:
          return '../../assets/default.png';
      }
    }
  }

  closeOffcanvas(): void {
    const offcanvasElement = document.querySelector('.offcanvas.show');
    if (offcanvasElement) {
      // Close offcanvas menu
      (offcanvasElement as HTMLElement).classList.remove('show');
      document.body.classList.remove('offcanvas-backdrop');
      document.body.style.overflow = 'auto';
    }
  }
}
