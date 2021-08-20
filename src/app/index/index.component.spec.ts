import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('navigate to story', () => {
    const routerSpy = jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true));

    const createStoryButton: HTMLButtonElement = fixture.nativeElement.querySelector('#createStory');
    createStoryButton.click();

    expect(routerSpy).toHaveBeenCalledWith(['story']);
  });
});
