import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../../Modules/product';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ServiceProductsService } from '../../Service/service-products.service';
import { Router } from '@angular/router';
import { BorderShadowDirective } from '../../Directive/border-shadow.directive';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [FormsModule, DatePipe, BorderShadowDirective],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent implements OnChanges {

  // task day 3
  date1: Date = new Date;

  productFilterd: Product[] = [];


  constructor(public prdServ: ServiceProductsService, public router: Router) {

  }
  // hints *************************
  ngOnChanges(): void {
    if (this.filteredList) {
      this.productFilterd = this.prdServ.ProductAfterFilteringWithPrice(this.filteredList);
    } else {
      this.productFilterd = this.prdServ.productList
    }
  }

  goToPrd(id: string) {
    console.log(id)
    this.router.navigate(['prd', id])
  }

  // task 1 day 3
  @Input() filteredList: Number = 0
  // task day 3 filtering
  @Output() eventEmitter: EventEmitter<Product> = new EventEmitter()
  addtoCard(item: Product) {
    this.eventEmitter.emit(item)
  }


  // task 4 day 3
  credit(value: string) {
    let v: string[] = [value.slice(0, 4), value.slice(4, 8), value.slice(8, 12), value.slice(12, 16)]
    console.log(v.join().replaceAll(',', '-'))
  }

}






// showlogo: boolean = true;

// printSelect(val: any): Product[] {
//   // console.log(val)
//   return this.productList.filter((product: Product) => {
//     return product.price > parseInt(val)
//   }
//   )
// }

/* objProductInterface: Product = {
   id: 3,
   categoryID: 1,
   PrdimgURL: "https://www.freepnglogos.com/uploads/notebook-png/download-laptop-notebook-png-image-png-image-pngimg-2.png",
   name: "firstPrduct",
   price: 100,
   quantity: 200,
   Material: 'wood'
 };
*/


/*
  ClientName: string = 'mahmoud faraag';

 
  hidelogo() {
    this.showlogo = !this.showlogo;

  }

  decreaseValue(product: Product) {
    product.quantity = product.quantity - 1
  }

*/


