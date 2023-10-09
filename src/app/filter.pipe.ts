import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tomb: any[], szo: string): any {
    if (!tomb) return null

    if (!szo) return tomb
    
    return tomb.filter(
      (elem:any)=> elem.nev.toLowerCase().includes(szo.toLowerCase())
    )
  }

}
