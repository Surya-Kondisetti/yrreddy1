import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { EmailService } from '../services/email.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.css']
})
export class FilteringComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';
  selectedCategory: string = 'All Products';
  searchQuery: string = '';
  filteredProducts: Product[] = [];
  feedbackMessage: string = '';
  senderEmail: string = '';



  sendFeedback() {
    const templateParams = {
      message: this.feedbackMessage,
      email: this.senderEmail
    };

    emailjs.send(
        'service_6kszpzn',
        'template_gwq81if',
        templateParams,
        'jidyyMGF0GYXxgIrk'
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Feedback sent successfully!');
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send feedback. Please try again.');
        }
      );
  }

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    // Subscribe to changes in route parameters
    this.route.paramMap.subscribe(paramMap => {
      const categoryName = paramMap.get('categoryName');
      this.selectedCategory = categoryName || 'All Products';
      this.loadProducts();
    });

    // Fetch categories initially
    this.categories = this.productService.getCategories();
  }

  loadProducts(): void {
    // Fetch products based on the selected category
    this.products = this.productService.filterProductsByCategory(this.selectedCategory);
    this.filterProducts();
  }

  onCategorySelect(category: string): void {
    this.selectedCategory = category;
    this.loadProducts();
  }

  onSortChange(order: 'asc' | 'desc'): void {
    this.sortOrder = order;
    this.products = this.productService.sortProductsByPrice(order);
  }

  filterProducts(): void {
    const normalizedQuery = this.searchQuery.replace(/\s+/g, '').toLowerCase();

    this.filteredProducts = this.products.filter(product => {
      const normalizedProductName = product.name.replace(/\s+/g, '').toLowerCase();
      return normalizedProductName.includes(normalizedQuery) &&
        (this.selectedCategory === 'All Products' || product.category === this.selectedCategory);
    });
  }





}
