import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWelcomePageNavbarComponent } from './default-welcome-page-navbar.component';

describe('DefaultWelcomePageNavbarComponent', () => {
  let component: DefaultWelcomePageNavbarComponent;
  let fixture: ComponentFixture<DefaultWelcomePageNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultWelcomePageNavbarComponent]
    });
    fixture = TestBed.createComponent(DefaultWelcomePageNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
