import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererService {

  render(input: string): string {
    return `[${input}]`;
  }
}
