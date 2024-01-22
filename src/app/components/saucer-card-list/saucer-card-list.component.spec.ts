import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucerCardListComponent } from './saucer-card-list.component';

describe('SaucerCardListComponent', () => {
  let component: SaucerCardListComponent;
  let fixture: ComponentFixture<SaucerCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaucerCardListComponent]
    });
    fixture = TestBed.createComponent(SaucerCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
