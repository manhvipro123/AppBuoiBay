import { Injectable } from '@angular/core';
import { Unsubscribe } from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  items: Item[] = [];
  constructor(private firestore: Firestore) {}

  async addNewItem(item: Item) {
    try {
      const newItemRef = doc(collection(this.firestore, 'items'));
      await setDoc(newItemRef, {
        ...item,
        id: newItemRef.id,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }

  async updateItem(item: Item) {
    try {
      const itemRef = doc(this.firestore, 'items', `${item.id}`);
      console.log(itemRef);
      await updateDoc(itemRef, {
        ...item,
      });
    } catch (e) {
      console.error('Error updating document: ', e);
    }
  }

  async deleteItem(item: Item) {
    try {
      await deleteDoc(doc(this.firestore, 'items', `${item.id}`));
    } catch (e) {
      console.error('Error deleting document: ', e);
    }
  }

  async getAllUsers() {
    const q = query(collection(this.firestore, 'items'));
    onSnapshot(q, (querySnapshot) => {
      this.items = [];
      querySnapshot.forEach((doc) => {
        this.items.push(doc.data() as Item);
      });
      console.log('Current items: ', this.items);
    });
  }
}
