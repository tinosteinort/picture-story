import { Component, Input, OnInit } from '@angular/core';
import { RendererService } from '../service/renderer.service';

@Component({
  selector: 'app-story-renderer',
  templateUrl: './story-renderer.component.html',
  styleUrls: ['./story-renderer.component.scss']
})
export class StoryRendererComponent {

  @Input()
  text: string = '';

  constructor(private rendererService: RendererService) { }

  render(): string {
    return this.rendererService.render(this.text);
  }
}
