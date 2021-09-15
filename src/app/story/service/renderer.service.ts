import { Injectable } from '@angular/core';
import escapeHTML from 'escape-html';

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  render(input: string): string {
    const escaped = escapeHTML(input);
    return this.replaceAll(escaped, '\n', '<br/>');
  }

  private replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
