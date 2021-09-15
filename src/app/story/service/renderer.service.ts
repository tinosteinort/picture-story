import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  render(input: string): string {
    return this.replaceAll(input, '\n', '<br/>');
  }

  private replaceAll(str: string, find: string, replace: string): string {
    return str.replace(new RegExp(find, 'g'), replace);
  }
}
