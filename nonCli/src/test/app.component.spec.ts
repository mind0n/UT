import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';


describe('component: AppComponent (external)', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    });
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should display message', () => {
    const debugEl = fixture.debugElement;
    const h1 = debugEl.nativeElement.querySelector('h1');
    expect(h1.textContent).toEqual('UT Coverage Demo');

  });

  it('True should be true', () => {
    expect(true).toEqual(true);
    
  });
});
