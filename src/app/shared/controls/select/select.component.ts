import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from 'rxjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'custom-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.css'],
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => SelectComponent),
        multi: true
    }]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
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
    compareWith(o1: any, o2: any): boolean {
        return o1.id === o2.id;
    }
    ngOnInit(): void {
        this.group.controls._option_id.patchValue(this.group.value.options[0].id);
    }
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
