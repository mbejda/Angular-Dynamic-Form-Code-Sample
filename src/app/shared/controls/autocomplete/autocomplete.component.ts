import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop, Observable} from 'rxjs';
import {ApiService} from '../../../api.service';
import {debounceTime, switchMap} from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'custom-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AutocompleteComponent),
    multi: true
  }]
})
export class AutocompleteComponent  implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  @Input() group: FormGroup;
  $options: Observable<{code: string, description: string}[]>;

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
  constructor(private apiService: ApiService) {}
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
  public displayFn(object): string | undefined {
    return object ? object.description : undefined;
  }
  ngOnInit(): void {
    this.$options = this.group.controls._input.valueChanges
        .pipe(
            debounceTime(100),
            switchMap(query => this.apiService.getNaicsCodes(query))
        );
    }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
