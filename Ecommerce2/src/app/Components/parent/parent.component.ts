import { Component, Output } from '@angular/core';
import { ChiledComponentComponent } from '../chiled-component/chiled-component.component';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from "../products-list/products-list.component";
import { Product } from '../../Modules/product';

@Component({
  selector: 'app-parent',
  standalone: true,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
  imports: [ChiledComponentComponent, FormsModule, ProductsListComponent]
})
export class ParentComponent {
  // day 3 tasks
  filterPrice: Number = 0;

  card: Product[] = []
  cardSet = new Set<Product>()

  addParent(prod: Product) {
    
    this.card.push(prod)
    this.cardSet.add(prod)
  }

  findnum(item: Product) {
    let q = 0;
    this.card.forEach((prod) => {
      if (prod == item) {
        q += 1
      }
    })
    return q
  }

  deleterow(item: Product) {
    this.cardSet.delete(item)
    this.card = this.card.filter((prod) => {
      return prod != item
    })
  }

}
