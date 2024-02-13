import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceProductsApiService } from '../../Service/service-products-api.service';
import { Product } from '../../Modules/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-prod',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-prod.component.html',
  styleUrl: './update-prod.component.scss'
})
export class UpdateProdComponent {

  productID: string
  productUpdateData: Product = { id: '0', name: '', quantity: 0, categoryID: 0, price: 0, Material: '', PrdimgURL: '' };

  constructor(public activatedRoute: ActivatedRoute, private router: Router, private serviceApi: ServiceProductsApiService) {

    this.productID = (this.activatedRoute.snapshot.paramMap.get('id')) ? String(this.activatedRoute.snapshot.paramMap.get('id')) : '0';

    this.serviceApi.getProductById(this.productID).subscribe({
      next: (prodData) => {

        this.productUpdateData = prodData[0]

      }
    })

  }

  updateProduct() {

    this.serviceApi.UpdateProduct(this.productUpdateData, this.productID).subscribe(
      {
        next: (value) => {
          console.log(value)
          this.router.navigate(['productWithApi'])
        },
      }
    )
  }


}



/*
imgUrl : https://cdn.shopclues.com/images1/detailed/109355/150602586-109355813-1598333973.png

imgUrl : https://i.pinimg.com/736x/72/29/11/722911b8f70c56f238ae48b805b86c92.jpg

imgUrl : https://i5.walmartimages.com/asr/a4fa84a6-c30e-462d-bd46-8d9dd879fef8_1.4f7edcbb43a682a84a088e2b4ac1b16b.jpeg

imgUrl : https://www.phoneworld.com.pk/wp-content/uploads/2021/06/210409143655-samsung-galaxy-a-series-2021-2048x1149.jpg

imgUrl : https://th.bing.com/th/id/OIP.bj_Sm2bRltCw8ddcJnsNZAHaHa?rs=1&pid=ImgDetMain

*/ 