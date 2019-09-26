import { NgModule } from '@angular/core';
import {
  MAT_LABEL_GLOBAL_OPTIONS, MatAutocompleteModule,
  MatButtonModule, MatCardModule, MatCheckboxModule,
  MatFormFieldModule, MatGridListModule, MatIconModule,
  MatInputModule,
  MatOptionModule,
  MatRadioButton, MatRadioGroup, MatRadioModule,
  MatRippleModule,
  MatSelectModule, MatToolbarModule
} from '@angular/material';

const mat = [
    MatIconModule,
    MatCheckboxModule,
    MatToolbarModule,
  MatGridListModule,
  MatRippleModule,
  MatButtonModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatInputModule,
    MatCardModule,
    MatAutocompleteModule
];

@NgModule({
  declarations: [MatRadioButton],
  providers: [
    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'never'}},
  ],
  imports: [...mat],
  exports: [...mat],
})
export class MaterialModule { }
