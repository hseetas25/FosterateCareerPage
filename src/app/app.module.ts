import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, NavigationComponent } from './components';
import { CareerModule } from './career';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { UserServiceService } from './career/service';
import { AngularFireDatabaseModule }  from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CareerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
