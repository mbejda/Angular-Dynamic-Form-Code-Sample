import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteComponent } from './quote.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormArray, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {Field} from '../../../interfaces/field';
import {ApiService} from '../../../api.service';
import {of} from 'rxjs';

describe('QuoteComponent', () => {
  let component: QuoteComponent;
  let fixture: ComponentFixture<QuoteComponent>;
  class MockAPIService extends ApiService {
    getQuestions() {
      return of([]);
    }
    saveForm(formObject) {
      return of([]);
    }
  }
  const mockFields: Field[] =  [
      {id: 1, text: 'What is the policy holder\'s first name?', type: 'input', required: true, min: 2},
    {id: 2, text: 'What is the policy holder\'s last name?', type: 'input', required: true, min: 2}
    ];

  beforeEach(async(() => {



    TestBed.configureTestingModule({
      declarations: [ QuoteComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        {
          provide: ApiService, useClass: MockAPIService
        }
      ],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form title as mat-card-title', () => {
    const title = 'Your custom quote starts here.';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-card-title').textContent).toContain(title);
  });

  it('createControlGroup() should return FormGroup with text', () => {
    const controlGroup = component.createControlGroup(mockFields[0]);
    expect(controlGroup.get('text').value).toEqual(mockFields[0].text );
  });

  it('wireAPICalls() should call getQuestions()', () => {
    const service = fixture.debugElement.injector.get(ApiService);
    spyOn(service, 'getQuestions').and.callThrough();
    component.wireAPICalls();
    expect(service.getQuestions).toHaveBeenCalled();
  });


  it('createValidators() should create an array of 3 functions', () => {
    const field = {
      id: 0,
      text: '',
      type: 'input',
      required: true,
      min: 1,
      max: 2
    };
    const spy = spyOn(component, 'getValidator').and.callThrough();
    const response = component.createValidators(field);
    expect(response.length).toBe(3);
    expect(spy).toHaveBeenCalled();
  });


  it('createValidators() should create an array of 2 functions', () => {
    const field = {
      id: 0,
      text: '',
      type: 'input',
      required: false,
      min: 1,
      max: 2
    };
    const spy = spyOn(component, 'getValidator').and.callThrough();
    const response = component.createValidators(field);
    expect(response.length).toBe(2);
    expect(spy).toHaveBeenCalled();
  });




  it('makePropertiesReactive() should create reactive array', () => {
    const field = {
      id: 0,
      text: '',
      type: 'input',
      required: false,
      min: 1,
      max: 2,
      options: [ 1, 2, 3, 4]
    };

    const reactiveField = component.makePropertiesReactive(field);
    expect(reactiveField.options instanceof FormArray).toBe(true);
    expect(reactiveField.options.length).toBe(4);

  });

  it('makePropertiesReactive() should add _option_id property', () => {
    const field = {
      id: 0,
      text: '',
      type: 'select',
      required: false,
      options: [ 1, 2, 3, 4]
    };
    const reactiveField = component.makePropertiesReactive(field);
    expect(reactiveField._option_id).toBeDefined();
  });


  it('makePropertiesReactive() should add _input property', () => {
    const field = {
      id: 0,
      text: '',
      type: 'input',
      required: false,
      options: [ 1, 2, 3, 4]
    };
    const reactiveField = component.makePropertiesReactive(field);
    expect(reactiveField._input).toBeDefined();
  });


  it('isValidator() should return boolean', () => {
    const falseBoolean = component.isValidator('test');
    const trueBoolean = component.isValidator(() => {});
    expect(trueBoolean).toBe(true);
    expect(falseBoolean).toBe(false);
  });


  it('getValidator() should return validator function', () => {
    const minValidator = component.getValidator('min', 1);
    const maxValidator = component.getValidator('max', 1);
    const reqValidator = component.getValidator('required', true);
    expect(reqValidator instanceof Function).toBeTruthy();
    expect(maxValidator instanceof Function).toBeTruthy();
    expect(minValidator instanceof Function).toBeTruthy();
  });


  it('submit() should save the form', () => {

    const form = [{
      id: 2,
      min: 2,
      required: true,
      text: 'What is the policy holder last name?',
      type: 'input',
      _input: 'tes',
    }];

    const service = fixture.debugElement.injector.get(ApiService);
    spyOn(service, 'saveForm').and.callThrough();
    component.form.value.fields = form;
    component.submit();
    expect(service.saveForm).toHaveBeenCalled();
  });









});
