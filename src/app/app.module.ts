import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {BrowserEventExperimentsComponent} from './browser-event-experiments/browser-event-experiments.component';

import {AngularFireModule} from '@angular/fire';
import {RouterModule} from '@angular/router';

import {firebaseConfig} from "../environments/firebase.config";
import {AngularFireDatabaseModule} from "@angular/fire/database";


@NgModule({
    declarations: [
        AppComponent,
        BrowserEventExperimentsComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        ReactiveFormsModule,
        AngularFireDatabaseModule
    ],
    providers: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}






