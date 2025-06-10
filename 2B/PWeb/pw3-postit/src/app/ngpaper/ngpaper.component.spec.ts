import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpaperComponent } from './ngpaper.component';

describe('NgpaperComponent', () => {
  let component: NgpaperComponent;
  let fixture: ComponentFixture<NgpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgpaperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
