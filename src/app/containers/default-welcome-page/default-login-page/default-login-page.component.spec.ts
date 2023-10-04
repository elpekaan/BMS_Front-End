import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLoginPageComponent } from './default-login-page.component';

describe('DefaultLoginPageComponent', () => {
  let component: DefaultLoginPageComponent;
  let fixture: ComponentFixture<DefaultLoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultLoginPageComponent]
    });
    fixture = TestBed.createComponent(DefaultLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
