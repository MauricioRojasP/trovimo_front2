import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {

  constructor( protected sanitizer: DomSanitizer ){}

  transform(value: string, ...args: any[]): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml( value );
  }

}