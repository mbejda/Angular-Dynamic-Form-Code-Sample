import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Field} from '../../../interfaces/field';
import {ApiService} from '../../../api.service';
import {concatAll} from 'rxjs/operators';
import {FormResponse} from '../../../interfaces/form-response';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  form: FormGroup;
  get fields() {
    return this.form.get('fields') as FormArray;
  }


  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.form = fb.group({
      fields : fb.array([])
    });
  }

  isValidator(validator): boolean {
    if (validator && typeof validator === 'function') {
      return true;
    }
    return false;
  }

  /**
   * Maps object properties to Angular Validators
   */
  getValidator(key: string, validationValue?: any): ValidatorFn | null {
    switch (key) {
      case 'min':
        return Validators.minLength(validationValue);
        break;
      case 'max':
        return Validators.maxLength(validationValue);
        break;
      case 'required':
        if (validationValue === true) {
          return Validators.required;
        }
        break;
    }
    return null;
  }

  /**
   * Create an array of validators for out form controls.
   */
  createValidators(field: Field): any[]  {
    const validators = [];
    Object.keys(field).forEach((key) => {
      const validator = this.getValidator(key, field[key]);
      if (validator) {
        validators.push(validator);
      }
    });
    return validators;
  }

  makePropertiesReactive(field: Field): Field {
    /**
     * Loop through object keys and change arrays into FormArrays
     */
    Object.keys(field).forEach((key) => {
      if (Array.isArray(field[key])) {
        field[key] = this.fb.array([...field[key]]);
      }
    });

    /**
     * Underscores are used to avoid name collisions
     */
    if (field.type === 'select') {
      field._option_id = new FormControl('', this.createValidators(field));
    } else {
      field._input = new FormControl('', this.createValidators(field));
    }
    return field;
  }


  /**
   * Turns a question into a control group.
   */
  createControlGroup(field: Field) {
    /**
     * Field with ID 4 is dynamically generated and does not have a flag that
     * would indicate that it is an autocomplete field. It needs to be hardcoded...
     */
    if (field.id === 4) {
      field.type = 'autocomplete';
    }



    /**
     * FormGroup need to have Arrays as FormArray
     * And private form controls need to be added.
     */
    const reactiveFields = this.makePropertiesReactive(field);

    return this.fb.group(reactiveFields);
  }

  submit() {
    /**
     * Create a post object from form.
     */
    const responses: FormResponse[]  = this.form.value.fields.map((field) => {
      const obj = {
        question_id: field.id,
        option_id: field._option_id,
        text: field._input
      };
      /**
       * Make sure we only post clean code.
       */
      Object.keys(obj).forEach((key) => {
        if (obj[key] === undefined) {
          delete obj[key];
        }
      });
      return obj;
    }) as FormResponse[];
    /**
     * Save form
     */
    this.apiService
        .saveForm({responses})
        .subscribe((done) => {
          alert('form saved');
          this.form.disable();
        });
  }
  wireAPICalls(): void {
    this.apiService.getQuestions()
        .pipe(
            concatAll(),
        ).subscribe((field: Field) => {
      this.fields.push(this.createControlGroup(field));
    }, (error) => {
          alert('something went wrong');
    });
  }



  ngOnInit() {
    this.wireAPICalls();
  }

}
