import { Component } from '@angular/core';

@Component({
  selector: 'app-projects2',
  templateUrl: './projects2.component.html',
  styleUrls: ['./projects2.component.css']
})
export class Projects2Component {
  currentIndex = 0;

  // Array of images with titles for the gallery
  galleryImages = [
    { src: '../../assets/projects/Layer 1 (2).png', title: 'karimnagar' },
    { src: '../../assets/projects/Layer 2 (1).png', title: 'Odisha' },
    { src: '../../assets/projects/Layer 3.png', title: 'Rajahmundry' },
    { src: '../../assets/projects/Layer 4 (1).png', title: 'kakinada' },
    { src: '../../assets/projects/Layer 6.png', title: 'Visakhapatnam' },
    { src: '../../assets/projects/users.jpeg', title: 'Srikakulam' }
  ];

  private interval: any;

  ngOnInit() {
    this.startAutoScroll(); // Start auto-scroll on initialization
  }

  ngOnDestroy() {
    this.stopAutoScroll(); // Clear interval when the component is destroyed
  }

  next() {
    if (this.currentIndex + 3 < this.galleryImages.length) {
      this.currentIndex += 1;
    }
  }

  prev() {
    if (this.currentIndex - 1 >= 0) {
      this.currentIndex -= 1;
    }
  }

  isNextDisabled() {
    return this.currentIndex + 3 >= this.galleryImages.length;
  }

  isPrevDisabled() {
    return this.currentIndex === 0;
  }

  isFirstCard(i: number) {
    return i === 0; // Check if the current card is the first in the visible set
  }

  startAutoScroll() {
    this.interval = setInterval(() => {
      if (!this.isNextDisabled()) {
        this.next();
      } else {
        this.currentIndex = 0; // Restart from the beginning when reaching the end
      }
    }, 3000); // Change images every 3 seconds
  }

  stopAutoScroll() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
