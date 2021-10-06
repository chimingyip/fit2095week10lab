import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doesContain'
})
export class DoesContainPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (args[0] === "actor") {
      if (value.includes("Tom")) {
        return "Contains Tom";
      }
    }
    else {
      if (value.includes("Movie")) {
        return "Contains Movie";
      }
    }
    return "Does not contain";
  }
}
