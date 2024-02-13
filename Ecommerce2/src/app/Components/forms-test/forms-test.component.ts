import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms-test',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './forms-test.component.html',
  styleUrl: './forms-test.component.scss'
})
export class FormsTestComponent {
  // Reacitve Forms 
  formEmail1 = new FormControl('')
  formpassword1 = new FormControl('')
  formGrouping: FormGroup;
  
  formBuilder= new FormBuilder;
  constructor() {
    this.formGrouping = this.formBuilder.group({
      
    })
  }
  printData1 = (e: Event) => {
    e.preventDefault()

    console.log(this.formEmail1.value)
    console.log(this.formpassword1.value)
  }

  
  
  // Template Drive Forms

  formEmail2 = ''
  formpassword2 = ''

  printData2 = (e: Event) => {
    e.preventDefault()

    console.log(this.formEmail2)
    console.log(this.formpassword2)
  }

}
