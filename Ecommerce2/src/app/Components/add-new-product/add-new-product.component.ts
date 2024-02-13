import { Component } from '@angular/core';
import { Product } from '../../Modules/product';
import { ServiceProductsApiService } from '../../Service/service-products-api.service';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-new-product.component.html',
  styleUrl: './add-new-product.component.scss'
})
export class AddNewProductComponent {
  ids !: string[]
  productData: Product = {} as Product;
  // { id: 100, name: 'new prod', price: 333, categoryID: 1, quantity: 33, Material: "new material", PrdimgURL: "https://th.bing.com/th/id/R.51857f6e286ea7ecb4dfd33cfc393429?rik=hWYo%2b6xt9WdVbQ&riu=http%3a%2f%2fthewowstyle.com%2fwp-content%2fuploads%2f2015%2f01%2fNature-pictures-2.jpg&ehk=St9xP8TwuWIINARR8qLQdjUZBiqyXeoSlddb%2bXFUsdk%3d&risl=&pid=ImgRaw&r=0" }
  constructor(public serviceProd: ServiceProductsApiService, public router: Router) {
    // this.productData = { id: this.idForm, name: this.nameForm, price: this.priceForm, categoryID: this.categoryIDForm, quantity: this.quantityForm, Material: this.MaterialForm, PrdimgURL: this.PrdimgURLForm }
  }

  // idForm = 0
  // nameForm = ''
  // priceForm = 0
  // categoryIDForm = 0
  // quantityForm = 0
  // MaterialForm = ''
  // PrdimgURLForm = ''


  addnew() {

    this.serviceProd.AddNewProduct(this.productData).subscribe(
      {
        next: (value) => {
          console.log(value)
          this.router.navigate(['productWithApi'])
        },
      }
    )
  }

  printprodlist() {
    this.serviceProd.getAllProductsIDs().subscribe(
      {
        next: (data) => {
          let x: string[] = []
          data.map((prod) => { x.push(prod.id) })
          // this.router.navigate(['productWithApi'])
         
          this.ids = x
          console.log(this.ids)
        },
      }
    )
  }

}
