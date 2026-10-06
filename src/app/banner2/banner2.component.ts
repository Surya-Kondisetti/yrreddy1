import { Component } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-banner2',
  templateUrl: './banner2.component.html',
  styleUrls: ['./banner2.component.css']
})
export class Banner2Component {

  ngOnInit(): void {

    gsap.fromTo('.hero', {
      opacity: 0,
      y: -70
    }, {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power2.out'
    });

    gsap.fromTo('h1', {
      opacity: 0,
      x: '-100%'
    }, {
      opacity: 1,
      x: '0%',
      duration: 2,
      ease: 'power2.out',
      delay: 0.5
    });

    gsap.fromTo('.users', {
      opacity: 0,
      x: '-100%'
    }, {
      opacity: 1,
      x: '0%',
      duration: 2,
      ease: 'power2.out',
      delay: 1
    });

    gsap.fromTo('p', {
      opacity: 0,
      y: 50
    }, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.out',
      delay: 1.5
    });
  }
}
