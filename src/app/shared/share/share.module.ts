import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/materials/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],
})
export class ShareModule {}
