import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  provideFirebaseApp(() => initializeApp({
    "projectId": `${environment.firebaseConfig.projectId}`,
    "appId": `${environment.firebaseConfig.appId}`,
    "storageBucket": `${environment.firebaseConfig.storageBucket}`,
    "apiKey": `${environment.firebaseConfig.apiKey}`,
    "authDomain": `${environment.firebaseConfig.authDomain}`,
    "messagingSenderId": `${environment.firebaseConfig.messagingSenderId}`,
    "measurementId": `${environment.firebaseConfig.measurementId}`
  })),
  provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule { }