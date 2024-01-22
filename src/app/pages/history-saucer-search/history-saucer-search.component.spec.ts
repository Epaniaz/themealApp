import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySaucerSearchComponent } from './history-saucer-search.component';

describe('HistorySaucerSearchComponent', () => {
  let component: HistorySaucerSearchComponent;
  let fixture: ComponentFixture<HistorySaucerSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorySaucerSearchComponent]
    });
    fixture = TestBed.createComponent(HistorySaucerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
