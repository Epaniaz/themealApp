import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaucerSearchInputComponent } from './saucer-search-input.component';

describe('SaucerSearchInputComponent', () => {
  let component: SaucerSearchInputComponent;
  let fixture: ComponentFixture<SaucerSearchInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaucerSearchInputComponent]
    });
    fixture = TestBed.createComponent(SaucerSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
