import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;
  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {
          provide: FormBuilder,
          useValue: formBuilder
        }
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
        .compileComponents();
  }));

  const inputLabel = 'some label to test ';

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.group = formBuilder.group({
      text: inputLabel,
      _option_id: '',
      options: formBuilder.array([{
        text: 'one'
      }, {
        text: 'two'
      }])
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('form group should set label', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('mat-label').innerText).toEqual(inputLabel);
  });
  it('form group should create 2 select options', () => {
    const options = fixture.nativeElement.querySelectorAll('mat-option') as NodeListOf<HTMLElement>;
    expect(options.length).toEqual(2);
  });
  it('form group should enable multi select option', () => {

    component.group = formBuilder.group({
      text: inputLabel,
      multiple: true,
      options: formBuilder.array([{
        text: 'one'
      }, {
        text: 'two'
      }])
    });
    fixture.detectChanges();
    const select = fixture.nativeElement.querySelector('mat-select') as HTMLElement;
    expect(select.getAttributeNames()).toContain('multiple');
  });
});
