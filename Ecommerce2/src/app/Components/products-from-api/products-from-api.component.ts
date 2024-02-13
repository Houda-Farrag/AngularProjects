import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, input } from '@angular/core';
import { ServiceProductsApiService } from '../../Service/service-products-api.service';
import { Product } from '../../Modules/product';
import { Observable, Observer, Subscriber, filter } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-from-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './products-from-api.component.html',
  styleUrl: './products-from-api.component.scss'
})
export class ProductsFromAPIComponent implements OnInit {


  filterProdId: string = '1'

  filterCatID: number = 0

  productFilter!: Product;

  productFilterd: Product[] = [];
  constructor(private productsApi: ServiceProductsApiService, private router: Router) {

  }


  ngOnInit(): void {

    this.productsApi.getAllProducts_API().subscribe({
      next: (data) => {
        // console.log(data)
        this.productFilterd = data
      }
      , error: (error) => {
        console.log(error)
      }
    })

    this.productsApi.getProductById(this.filterProdId).subscribe(
      {
        next: (data) => {
          let x = data
          console.log("on initial : ", x[0].id)
          // this.productFilter = data
        },
      }
    )
  }

  searchCatID(filterCatID: number) {
    this.productsApi.FilterWithApiCatID(filterCatID).subscribe(data => this.productFilterd = data)
  }

  searchProdId(filterProdId: string) {


    console.log(filterProdId)

    this.productsApi.getProductById(filterProdId).subscribe(data => {

      this.productFilter = data[0]
    })
  }


  deleteProd(id: string) {

    let x = confirm("are you sure that you want to delete product")

    if (x) {
      this.productFilterd = this.productFilterd.filter((prod) => prod.id != id)
      this.productsApi.DeleteProduct(id).subscribe({
        next: (value) => {
          console.log(value)
        },
        error: (er) => {
          console.log(er)
        }
      })
    }
  }

  updateProd(id: string) {
    this.router.navigate(['update-prod', id])
  }

  goToPrd(id: string) {
    console.log(id)
    this.router.navigate(['prd', id])
  }
}

