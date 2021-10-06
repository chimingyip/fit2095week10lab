import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getActorAge'
})
export class GetActorAgePipe implements PipeTransform {

  transform(value: number): number {
    let today = new Date().getFullYear();; 
    let age = today - value;

    return age
  }

}
