import { Component } from '@angular/core';
import { Db } from '../db';

@Component({
  selector: 'app-productlist',
  standalone: false,
  templateUrl: './productlist.html',
  styleUrl: './productlist.css'
})
export class Productlist {
 products:any[] = [];
  cart: any[] = [];
    ngOnInit(): void {
    this.productService.getData().subscribe(x => {

      this.products = x

  
    });
  }

  constructor(private productService: Db) {

  }



  addToCart(product: any) {
    const existing = this.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  checkout() {
    this.productService.checkout(this.cart).subscribe({
      next: (res) => {
        alert('Checkout successful!');
        console.log(res);
        this.cart = [];
      },
      error: (err) => console.error(err),
    });
  }
}
