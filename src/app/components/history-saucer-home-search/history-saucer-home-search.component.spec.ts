import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorySaucerHomeSearchComponent } from './history-saucer-home-search.component';

describe('HistorySaucerHomeSearchComponent', () => {
  let component: HistorySaucerHomeSearchComponent;
  let fixture: ComponentFixture<HistorySaucerHomeSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorySaucerHomeSearchComponent]
    });
    fixture = TestBed.createComponent(HistorySaucerHomeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
