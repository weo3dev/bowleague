/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TeamPageComponent } from './teampage/teampage.component';

import { RouterTestingModule } from '@angular/router/testing';


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      import: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should build without a problem', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled).toBeTruthy();
  }));
});



