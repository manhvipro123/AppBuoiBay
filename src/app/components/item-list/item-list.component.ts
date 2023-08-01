import { Component } from '@angular/core';
import { Unsubscribe } from '@angular/fire/auth';
import { MatDialog } from '@angular/material/dialog';
import { Item } from 'src/app/models/item.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  unsubscribe!: Unsubscribe;
  constructor(
    public firebaseService: FirebaseService,
    public dialog: MatDialog
  ) {
    this.firebaseService.getAllUsers();
  }
  openEditDialog(item: Item) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: item,
    });
    dialogRef.afterClosed().subscribe((result: Item) => {
      if (result != undefined) {
        console.log(result);
        this.firebaseService.updateItem(result);
      }
    });
  }
  deleteItem(item: Item) {
    this.firebaseService.deleteItem(item);
  }
}
