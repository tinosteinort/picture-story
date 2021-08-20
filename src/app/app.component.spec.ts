import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    expect(fixture.nativeElement.querySelector('h1')?.textContent).toContain('Picture Story');
  });

  it('should navigate to start page when click on title', () => {
    const routerSpy = jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true));

    const titleLink: HTMLElement = fixture.nativeElement.querySelector('h1');
    titleLink.click();

    expect(routerSpy).toHaveBeenCalledWith(['']);
  });
});
