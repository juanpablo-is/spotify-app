import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string, option: boolean = false): unknown {
    let url = "";
    if (option) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
