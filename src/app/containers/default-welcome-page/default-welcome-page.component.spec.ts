import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWelcomePageComponent } from './default-welcome-page.component';

describe('DefaultWelcomePageComponent', () => {
  let component: DefaultWelcomePageComponent;
  let fixture: ComponentFixture<DefaultWelcomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultWelcomePageComponent]
    });
    fixture = TestBed.createComponent(DefaultWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
