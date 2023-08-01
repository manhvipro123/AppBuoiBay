import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './shared/share/share.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { UpdateDialogComponent } from './components/update-dialog/update-dialog.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { counterReducer } from './ngrx/reducers/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemListComponent,
    AddDialogComponent,
    UpdateDialogComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    ShareModule,
    StoreModule.forRoot(
      {
        count: counterReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
