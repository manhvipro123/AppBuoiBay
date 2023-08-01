import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.scss'],
})
export class UpdateDialogComponent {
  updateItemForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item
  ) {}
  ngOnInit(): void {
    this.updateItemForm = new FormGroup({
      id: new FormControl(this.data.id, Validators.required),
      name: new FormControl(this.data.name, Validators.required),
      description: new FormControl(this.data.description, Validators.required),
      price: new FormControl(this.data.price, Validators.required),
      quantity: new FormControl(this.data.quantity, Validators.required),
      imageURL: new FormControl(this.data.imageURL, Validators.required),
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
