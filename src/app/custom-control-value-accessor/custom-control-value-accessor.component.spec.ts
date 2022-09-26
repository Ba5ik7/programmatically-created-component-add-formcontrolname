import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomControlValueAccessorComponent } from './custom-control-value-accessor.component';

describe('CustomControlValueAccessorComponent', () => {
  let component: CustomControlValueAccessorComponent;
  let fixture: ComponentFixture<CustomControlValueAccessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomControlValueAccessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomControlValueAccessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
