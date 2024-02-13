import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { Task4Component } from '../task-4/task-4.component';
import { BorderShadowDirective } from '../../Directive/border-shadow.directive';


@Component({
  selector: 'app-chiled-component',
  standalone: true,
  imports: [ProductsListComponent, Task4Component,],
  templateUrl: './chiled-component.component.html',
  styleUrl: './chiled-component.component.scss'
})
export class ChiledComponentComponent {

}
