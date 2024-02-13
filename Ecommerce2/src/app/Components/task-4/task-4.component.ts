import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BorderShadowDirective } from '../../Directive/border-shadow.directive';
import { FormatCreditPipe } from '../../Pipes/format-credit.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-4',
  standalone: true,
  imports: [DatePipe, BorderShadowDirective, FormatCreditPipe, FormsModule,CommonModule],
  templateUrl: './task-4.component.html',
  styleUrl: './task-4.component.scss'
})
export class Task4Component {
  credit: string = '5555555555555555'
  date1: Date = new Date()
  price: number = 300;
}
