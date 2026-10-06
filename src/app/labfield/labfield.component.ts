import { Component } from '@angular/core';

@Component({
  selector: 'app-labfield',
  templateUrl: './labfield.component.html',
  styleUrls: ['./labfield.component.css']
})
export class LabfieldComponent {

  categories = [
    { name: 'Category 1', image: 'assets/medical/Rectangle 17.png' },
    { name: 'Category 2', image: 'assets/medical/Group 35445.png' },
    { name: 'Category 3', image: 'assets/medical/Group 35446.png' },
    { name: 'Category 4', image: 'assets/medical/Group 35447.png' },
    { name: 'Category 5', image: 'assets/medical/Group 35448.png' },
    { name: 'Category 6', image: 'assets/medical/Group 35449.png' },
  ];
}
