import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteComponent } from './autocomplete.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
          HttpClientModule,
          MatAutocompleteModule],
      declarations: [ AutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;

    component.group = formBuilder.group({
      _input: 'test'
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('input should trigger api', () => {
    component.ngOnInit();
  });
});
