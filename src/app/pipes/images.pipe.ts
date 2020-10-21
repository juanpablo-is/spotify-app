import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
