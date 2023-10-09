import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePageComponent } from './guide-page.component';

describe('GuidePageComponent', () => {
  let component: GuidePageComponent;
  let fixture: ComponentFixture<GuidePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuidePageComponent]
    });
    fixture = TestBed.createComponent(GuidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});