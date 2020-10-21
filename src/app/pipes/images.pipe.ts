import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: any[]): unknown {
    var url = value[0];
    return url ? url.url : "https://cdn11.bigcommerce.com/s-hcp6qon/stencil/e7115e30-d125-0138-2c47-0242ac110007/icons/icon-no-image.svg";
  }

}
