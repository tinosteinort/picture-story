import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoryRendererComponent } from './story-renderer/story-renderer.component';

import { StoryComponent } from './story.component';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        StoryComponent,
        StoryRendererComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function input(textArea: HTMLTextAreaElement, text: string) {
    textArea.value = text;
    textArea.dispatchEvent(new InputEvent('input'));
    fixture.detectChanges();
  }

  it('should save input in attribute', () => {
    input(fixture.nativeElement.querySelector('#storyInput'), 'my');
    expect(component.storyText).toEqual('my');
    
    input(fixture.nativeElement.querySelector('#storyInput'), 'my story :-)');
    expect(component.storyText).toEqual('my story :-)');
  });
});
