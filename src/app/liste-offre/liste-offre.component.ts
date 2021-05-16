import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatchService} from "../services/match.service";
import {Match} from '../shared/match';
import {CommentaireService} from "../services/commentaire.service";
import { Commentaire} from '../shared/commentaire';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-liste-offre',
  templateUrl: './liste-offre.component.html',
  styleUrls: ['./liste-offre.component.css']
})
export class ListeOffreComponent implements OnInit {
 ListOffre: Match[];
    ListCommentaire: Commentaire[];
    titresearch: string;
    var_verif: number;
    lien: string;
  constructor(private matchService: MatchService , private router: Router ) { }

  ngOnInit(): void {
      this.matchService.getMatch().subscribe(
          (data: Match[]) => {
              this.ListOffre = data;
          }
      );


  }
  delete(offre: Match){
      const id = this.ListOffre.indexOf(offre);
      this.matchService.supprimerMatch(offre.id).subscribe(
          () => {
              this.ListOffre.splice(id, 1);
          }
      );
  }

}
