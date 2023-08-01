import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { Item } from 'src/app/models/item.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    public dialog: MatDialog,
    private firebaseService: FirebaseService
  ) {}
  openAddDialog() {
    const dialogRef = this.dialog.open(AddDialogComponent, {});
    dialogRef.afterClosed().subscribe((result: Item) => {
      if (result != undefined) {
        console.log(result);
        this.firebaseService.addNewItem(result);
      }
    });
  }
}
