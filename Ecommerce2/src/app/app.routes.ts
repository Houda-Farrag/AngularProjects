import { Routes } from '@angular/router';
import { ParentComponent } from './Components/parent/parent.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { NotFoundedComponent } from './Components/not-founded/not-founded.component';
import { Task4Component } from './Components/task-4/task-4.component';
import { ObserverTestComponent } from './Components/observer-test/observer-test.component';
import { ProductsFromAPIComponent } from './Components/products-from-api/products-from-api.component';
import { FormsTestComponent } from './Components/forms-test/forms-test.component';
import { AddNewProductComponent } from './Components/add-new-product/add-new-product.component';
import { UpdateProdComponent } from './Components/update-prod/update-prod.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { guardsGuard } from './Guards/guards.guard';

export const routes: Routes = [

    { path: '', component: ParentComponent, title: "showing data" },
    { path: 'observer', component: ObserverTestComponent, title: "observer test page" },
    { path: 'Home', component: ParentComponent, title: "showing data" },
    { path: 'aboutUs', component: AboutusComponent, title: "aboutUs" },
    { path: 'prd/:id', component: ProductDetailsComponent, title: "product details", canActivate: [guardsGuard] },
    { path: 'update-prod/:id', component: UpdateProdComponent, title: "update Prod", canActivate: [guardsGuard] },
    { path: 'regist', component: RegisterComponent, title: "registe" },
    { path: 'login', component: LoginComponent, title: 'login' },
    { path: 'forms-test', component: FormsTestComponent, title: "FirmsTest" },
    { path: 'add-product', component: AddNewProductComponent, title: "add product", canActivate: [guardsGuard] },
    { path: 'contact', component: ContactComponent, title: "contact" },
    { path: 'productWithApi', component: ProductsFromAPIComponent, title: 'product from API', canActivate: [guardsGuard] },
    { path: '**', component: NotFoundedComponent, title: "Not founded" },

];
