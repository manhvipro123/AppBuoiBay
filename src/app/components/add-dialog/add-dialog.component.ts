import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent implements OnInit {
  addItemForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) {}
  ngOnInit(): void {
    this.addItemForm = new FormGroup({
      name: new FormControl<string>('', Validators.required),
      description: new FormControl<string>('', Validators.required),
      price: new FormControl<number>(0, Validators.required),
      quantity: new FormControl<number>(0, Validators.required),
      imageURL: new FormControl<string>('', Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
