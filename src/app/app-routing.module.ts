import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormMatchComponent} from "./form-match/form-match.component";
import {RouterModule, Routes} from '@angular/router';
import {ListeOffreComponent} from "./liste-offre/liste-offre.component";

const ROUTES: Routes = [
    {path: 'ajout_offre_match', component: FormMatchComponent},
    { path: 'edit/:id', component: FormMatchComponent },
    {path: '', component: ListeOffreComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(ROUTES)

  ],
    exports:
        [RouterModule
        ]
})
export class AppRoutingModule { }
