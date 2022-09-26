import { ApplicationRef, Component, ComponentFactoryResolver, Injector, OnInit, Self, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'custom-control-value-accessor',
  templateUrl: './custom-control-value-accessor.component.html',
  styleUrls: ['./custom-control-value-accessor.component.scss']
})
export class CustomControlValueAccessorComponent implements OnInit {

  isActive: boolean = false;
  error: string = '';
  escalateMsg: boolean = true;
  value: string = '';
  disabled: boolean = false;
  valid: boolean = true;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    this.controlDir.valueChanges?.subscribe((val) => this.valueChange(val));    
  }

  valueChange(value: string): void {
    this.valid = this.controlDir.control?.status !== 'INVALID';
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onBlur(event?: InputEvent) {
    this.isActive = event?.data !== '';
    this.escalateMsg = this.valid === false;
    this.onTouched();
  }

  onFocus() {
    this.isActive = true;
    this.escalateMsg = false;
  }

  onTouched = () => {};

  onChange: (value: string) => void = () => {};
}
