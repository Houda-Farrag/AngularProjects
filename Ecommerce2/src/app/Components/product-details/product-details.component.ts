import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProductsService } from '../../Service/service-products.service';
import { Product } from '../../Modules/product';
import { CommonModule, Location } from '@angular/common';
// import { fromEvent } from 'rxjs';
import { ServiceProductsApiService } from '../../Service/service-products-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {

  productID: string = '0';
  productDetail!: Product | undefined;
  productsListIDs: string[] = [];
  productCurrentIndex: number = 0;

  productUpdateData: Product = { id: '0', name: '', quantity: 0, categoryID: 0, price: 0, Material: '', PrdimgURL: '' };


  constructor(private serviceApi: ServiceProductsApiService, private location: Location, public activatedRoute: ActivatedRoute, public productServ: ServiceProductsService, public router: Router) {
    this.productID = (this.activatedRoute.snapshot.paramMap.get('id')) ? String(this.activatedRoute.snapshot.paramMap.get('id')) : '0';

    this.serviceApi.getAllProductsIDs().subscribe(
      {
        next: (data) => {
          let x: string[] = []
          data.map((prod) => { x.push(prod.id) })
          // this.router.navigate(['productWithApi'])
          // console.log(x)
          this.productsListIDs = x

          this.productCurrentIndex = this.productsListIDs.indexOf(this.productID)
        },
      }
    )

  }


  ngOnInit(): void {


    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.productID = (paramMap.get('id')) ? String(paramMap.get('id')) : "0";

      this.productDetail = this.productServ.getProductByID(this.productID)

      // console.log( this.productServ.getProductByID('0e13'))

      this.productUpdateData.id = String(this.productID)

      console.log(this.productCurrentIndex)

    })



  }

  nextProduct() {

    this.productDetail = this.productServ.getProductByID(this.productsListIDs[++this.productCurrentIndex])

  }

  prevProduct() {

    this.productDetail = this.productServ.getProductByID(this.productsListIDs[--this.productCurrentIndex])
    // console.log(this.productsListIDs[--this.productCurrentIndex])
  }

  goBack() {
    this.location.back()   // hent to back to previous page
  }

  updateProduct() {
    console.log(this.productUpdateData)

    this.serviceApi.UpdateProduct(this.productUpdateData, this.productUpdateData.id).subscribe(
      {
        next: (value) => {
          console.log(value)
          this.router.navigate(['Home'])
        },
      }
    )
  }

  printprodlist() {
    this.serviceApi.getAllProductsIDs().subscribe(
      {
        next: (data) => {
          let x: string[] = []
          
          data.map((prod) => { x.push(prod.id) })
          // this.router.navigate(['productWithApi'])
          console.log(x)
          this.productsListIDs = x
        },
      }
    )
  }

}
