import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [
    FormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatInputModule,
  ],
})
export class ExportModule {}
