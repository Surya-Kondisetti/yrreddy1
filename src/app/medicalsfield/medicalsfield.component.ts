import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicalsfield',
  templateUrl: './medicalsfield.component.html',
  styleUrls: ['./medicalsfield.component.css']
})
export class MedicalsfieldComponent {
  currentIndex = 0;
  categories = [
    { name: 'Medical Instruments', image: '../../assets/detailsmedical/Medical-Equipment.png' },
    { name: 'Healthcare Furniture', image: '../../assets/detailsmedical/Hospital-Furniture.png' },
    { name: 'Consumables and Disposable', image: '../../assets/detailsmedical/Cosumables.png' },
    { name: 'Dental', image: '../../assets/detailsmedical/Dental-Equipment.png' }
  ];

  constructor(private router: Router) {}

  onCategorySelect(categoryName: string): void {
    this.router.navigate(['/category', categoryName]);
  }

  getVisibleCards() {
    return this.categories.slice(this.currentIndex, this.currentIndex + 4);
  }

  next() {
    if (this.currentIndex + 4 < this.categories.length) {
      this.currentIndex++;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  isNextDisabled() {
    return this.currentIndex + 4 >= this.categories.length;
  }

  isPrevDisabled() {
    return this.currentIndex === 0;
  }

  startDrag() {
    document.addEventListener('mousemove', this.onThumbDrag.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  stopDrag() {
    document.removeEventListener('mousemove', this.onThumbDrag.bind(this));
    document.removeEventListener('mouseup', this.stopDrag.bind(this));
  }

  onThumbDrag(event: MouseEvent) {
    const track = document.querySelector('.scroll-bar-track') as HTMLElement;
    if (!track) return;

    const trackRect = track.getBoundingClientRect();
    const offset = event.clientX - trackRect.left;
    const ratio = Math.min(Math.max(offset / trackRect.width, 0), 1);
    this.currentIndex = Math.round(ratio * (this.categories.length - 4));
  }
}
