import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { OffreComponent } from './offre/offre.component';
import { FormMatchComponent } from './form-match/form-match.component';
import { ListeOffreComponent } from './liste-offre/liste-offre.component';
import {HttpClientModule} from "@angular/common/http";
import { CommentaireComponent } from './commentaire/commentaire.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {FirebaseService} from "./services/firebase.service";
import {FormsModule} from "@angular/forms";
import { FormCommentaireComponent } from './form-commentaire/form-commentaire.component';
import { ParticipantComponent } from './participant/participant.component';
import { ListeFCommentaireComponent } from './liste-fcommentaire/liste-fcommentaire.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OffreComponent,
    FormMatchComponent,
    ListeOffreComponent,
    CommentaireComponent,
    FormCommentaireComponent,
    ParticipantComponent,
    ListeFCommentaireComponent
  ],
  imports: [BrowserModule,
      AngularFireModule.initializeApp({
          apiKey: "AIzaSyCzsyWF_X_BY5Ek131-DU60VZ1Qdzo-y14",
          authDomain: "seif-1996.firebaseapp.com",
          projectId: "seif-1996",
          storageBucket: "seif-1996.appspot.com",
          messagingSenderId: "1082839480407",
          appId: "1:1082839480407:web:bc1b6df08d8420c1bf0b12"
      }),
      FormsModule,
      AppRoutingModule,
      HttpClientModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
