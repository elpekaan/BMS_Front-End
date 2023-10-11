import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultWelcomePageFooterComponent } from './default-welcome-page-footer.component';

describe('DefaultWelcomePageFooterComponent', () => {
  let component: DefaultWelcomePageFooterComponent;
  let fixture: ComponentFixture<DefaultWelcomePageFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultWelcomePageFooterComponent]
    });
    fixture = TestBed.createComponent(DefaultWelcomePageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
