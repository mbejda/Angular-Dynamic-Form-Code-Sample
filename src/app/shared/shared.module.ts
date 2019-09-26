import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './forms/quote/quote.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import { InputComponent } from './controls/input/input.component';
import { SelectComponent } from './controls/select/select.component';
import { AutocompleteComponent } from './controls/autocomplete/autocomplete.component';

@NgModule({
  declarations: [QuoteComponent, InputComponent, SelectComponent, AutocompleteComponent],
  imports: [
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
      MaterialModule,
    CommonModule
  ],
  exports: [
    QuoteComponent,
    FlexLayoutModule,

  ]
})
export class SharedModule { }
