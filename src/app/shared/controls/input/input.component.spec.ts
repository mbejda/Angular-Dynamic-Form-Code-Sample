import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;
  const formBuilder: FormBuilder = new FormBuilder();


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
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
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.group = formBuilder.group({
        text: inputLabel
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
});
