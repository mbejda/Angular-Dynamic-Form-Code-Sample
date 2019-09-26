import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor {

  @Input() disabled = false;
  @Input() group: FormGroup;
  private innerValue: any = undefined;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  get value(): any {
    return this.innerValue;
  }
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }
  constructor() {}
  onBlur() {
    this.onTouchedCallback();
  }
  writeValue(value: any) {
    if (value !== undefined && value !== this.innerValue) {
      this.innerValue = value;
    }
    this.onChangeCallback(this.innerValue);
  }
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
