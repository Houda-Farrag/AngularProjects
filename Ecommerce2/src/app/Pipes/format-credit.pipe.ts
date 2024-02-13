import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCredit',
  standalone: true
})
export class FormatCreditPipe implements PipeTransform {

  transform(value: string) {
    let v: string[] = [value.slice(0, 4), value.slice(4, 8), value.slice(8, 12), value.slice(12, 16)]

    console.log(typeof v.join().replaceAll(',', '-'))
    return v.join().replaceAll(',', '-')
  }


}
