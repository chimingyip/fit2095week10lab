import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doesContain'
})
export class DoesContainPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (value.includes(args[0])) {
      return "Contains " + args[0];
    }
    else {
      return "Does not contain";
    }

    // pass tom or movie, doesnt matter if actor or movie
  }
}
