import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscriber, Subscription, from, fromEvent, of, take } from 'rxjs';

@Component({
  selector: 'app-observer-test',
  standalone: true,
  imports: [],
  templateUrl: './observer-test.component.html',
  styleUrl: './observer-test.component.scss'
})
export class ObserverTestComponent implements OnInit, OnDestroy {

  sub_1?: Subscription;

  changingValues: any;

  // from operator 1
  obs_2 = from([3, 4, 5, 6, 7])

  // of operator
  obs_3 = of()
  

  obs = new Observable((observ) => {

    console.log('start observable')

    setTimeout(() => {
      this.changingValues = 1
      observ.next(this.changingValues)
    }, 1000);

    setTimeout(() => {
      this.changingValues = 2
      observ.next(this.changingValues)
    }, 2000);
    setTimeout(() => {
      this.changingValues = 3
      observ.next(this.changingValues)
    }, 3000);

    setTimeout(() => {
      this.changingValues = 4
      observ.next(this.changingValues)
    }, 4000);
    setTimeout(() => {
      this.changingValues = 5
      observ.next(this.changingValues)
    }, 6000);

    setTimeout(() => {
      console.log("completed")
      observ.complete()
    }, 8000);

  })



  constructor() {


  }
  ngOnDestroy(): void {

    this.sub_1?.unsubscribe()

  }
  ngOnInit(): void {

    this.sub_1 = this.obs.subscribe({

      next: (value) => {
        console.log(value)
      },

      error: (error) => {
        console.log(error)
      }
      , complete: () => {
        console.log('complete*********')
      }
    })

    // fromEvent operator
    const obs2 = fromEvent(document, 'click')
    obs2.pipe(take(4)).subscribe(() => console.log("clicked in dom"))


    this.obs_2.subscribe({
      next: (val) => {
        setTimeout(() => {

          console.log("from obs_2 : ", val)

        }, 6000)
      }
    })

  }


}
