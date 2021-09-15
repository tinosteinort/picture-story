import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RendererService } from '../service/renderer.service';

import { StoryRendererComponent } from './story-renderer.component';

@Component({
  selector: 'app-dummy-story',
  template: '<app-story-renderer [text]="text"></app-story-renderer>'
})
class DummyStoryComponent {
  text: string = '';
}

describe('StoryRendererComponent', () => {
  let component: DummyStoryComponent;
  let fixture: ComponentFixture<DummyStoryComponent>;
  let rendererService: RendererService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DummyStoryComponent,
        StoryRendererComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    rendererService = TestBed.inject(RendererService);

    fixture = TestBed.createComponent(DummyStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call renderer', () => {
    const renderSpy = jest.spyOn(rendererService, 'render');

    fixture.componentInstance.text = 'input story text';
    fixture.detectChanges();

    expect(renderSpy).toHaveBeenCalledWith('input story text');
  });

  it('should render story', () => {
    jest.spyOn(rendererService, 'render').mockReturnValue('[renderedStory]');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.output').textContent).toEqual('[renderedStory]');
  });

  it('should render story as innerHTML not as innerText', () => {
    jest.spyOn(rendererService, 'render').mockReturnValue('Hi&lt;b&gt;Hi&lt;/b&gt;Hi');

    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.output').textContent).toEqual('Hi<b>Hi</b>Hi');
  });
});
