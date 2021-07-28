import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlcarouselholderComponent } from './owlcarouselholder.component';

describe('OwlcarouselholderComponent', () => {
  let component: OwlcarouselholderComponent;
  let fixture: ComponentFixture<OwlcarouselholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlcarouselholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlcarouselholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
