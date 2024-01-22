import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSaucerComponent } from './detail-saucer.component';

describe('DetailSaucerComponent', () => {
  let component: DetailSaucerComponent;
  let fixture: ComponentFixture<DetailSaucerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailSaucerComponent]
    });
    fixture = TestBed.createComponent(DetailSaucerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
