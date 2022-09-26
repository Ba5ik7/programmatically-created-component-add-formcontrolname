import { Component, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomControlValueAccessorComponent } from './custom-control-value-accessor/custom-control-value-accessor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  formGroup: FormGroup = this.formBuilder.group({ one: ['', []] });

  constructor(
    private viewContainerRef: ViewContainerRef,
    private formBuilder: FormBuilder
  ) {}

  createComponent() {
    this.viewContainerRef.createComponent(
      CustomControlValueAccessorComponent
    );
  }
}
