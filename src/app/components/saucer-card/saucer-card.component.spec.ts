import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucerCardComponent } from './saucer-card.component';

describe('SaucerCardComponent', () => {
  let component: SaucerCardComponent;
  let fixture: ComponentFixture<SaucerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaucerCardComponent]
    });
    fixture = TestBed.createComponent(SaucerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
