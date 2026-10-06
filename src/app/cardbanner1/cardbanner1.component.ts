import { Component } from '@angular/core';

@Component({
  selector: 'app-cardbanner1',
  templateUrl: './cardbanner1.component.html',
  styleUrls: ['./cardbanner1.component.css']
})
export class Cardbanner1Component {
  currentIndex = 0;
  currentCategory: 'residential' | 'commercial' = 'commercial';
  isDragging = false;

  residentialCards = [
    { title: 'Villas', class: 'user1', showExplore: true, button: 'Explore' },
    { title: 'Guesthouse', class: 'user2', showExplore: false, button: 'Explore' },
    { title: 'Apartments', class: 'user3', showExplore: false, button: 'Explore' },
    { title: 'Landscape Pool', class: 'user4', showExplore: false, button: 'Explore' }
  ];

  commercialCards = [
    { title: 'Hospitals', class: 'commercial1', showExplore: true, button: 'Explore' },
    { title: 'Factories', class: 'commercial2', showExplore: false, button: 'Explore' },
    { title: 'Schools', class: 'commercial3', showExplore: false, button: 'Explore' },
    { title: 'Hotels', class: 'commercial4', showExplore: false, button: 'Explore' },
    { title: 'Offices', class: 'commercial5', showExplore: false, button: 'Explore' }
  ];

  toggleCategory(event: Event) {
    this.currentCategory = (event.target as HTMLInputElement).checked ? 'residential' : 'commercial';
    this.currentIndex = 0; // Reset to the first card when category changes
  }

  getCurrentCards() {
    return this.currentCategory === 'residential' ? this.residentialCards : this.commercialCards;
  }

  getVisibleCards() {
    const cards = this.getCurrentCards();
    return cards.slice(this.currentIndex, this.currentIndex + 4); // Show 4 cards at a time
  }

  next() {
    const cards = this.getCurrentCards();
    if (this.currentIndex + 4 < cards.length) {
      this.currentIndex += 1;
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
  }

  isNextDisabled() {
    const cards = this.getCurrentCards();
    return this.currentIndex + 4 >= cards.length;
  }

  isPrevDisabled() {
    return this.currentIndex === 0;
  }

  startDrag() {
    this.isDragging = true;
    document.addEventListener('mousemove', this.onThumbDrag.bind(this));
    document.addEventListener('mouseup', this.stopDrag.bind(this));
  }

  stopDrag() {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.onThumbDrag.bind(this));
    document.removeEventListener('mouseup', this.stopDrag.bind(this));
  }

  onThumbDrag(event: MouseEvent) {
    if (!this.isDragging) return;

    const track = document.querySelector('.scroll-bar-track') as HTMLElement;
    const trackRect = track.getBoundingClientRect();
    const offset = event.clientX - trackRect.left;
    const ratio = Math.min(Math.max(offset / trackRect.width, 0), 1);
    this.currentIndex = Math.round(ratio * (this.getCurrentCards().length - 4));
  }
}
