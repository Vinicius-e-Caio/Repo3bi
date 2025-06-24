import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFeaturesComponent } from './cards-features.component';

describe('CardsFeaturesComponent', () => {
  let component: CardsFeaturesComponent;
  let fixture: ComponentFixture<CardsFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsFeaturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
