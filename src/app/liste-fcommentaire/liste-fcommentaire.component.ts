import {Component, Input, OnInit} from '@angular/core';
import {Commentaire} from "../shared/commentaire";
import {CommentaireService} from "../services/commentaire.service";
import {MatchService} from "../services/match.service";
import {Match} from '../shared/match';

@Component({
  selector: 'app-liste-fcommentaire',
  templateUrl: './liste-fcommentaire.component.html',
  styleUrls: ['./liste-fcommentaire.component.css']
})
export class ListeFCommentaireComponent implements OnInit {
    @Input() idmatch: number ;
    @Input() oChild: Match;
    @Input() cChild: Commentaire ;
    ListCommentaire: Commentaire[];
  constructor(private commentaireService: CommentaireService, private matchService: MatchService) { }

  ngOnInit(): void {
    console.log(this.oChild);
      this.commentaireService.getListCom(this.idmatch).subscribe(
          (data: Commentaire[]) => {
              this.ListCommentaire = data;
          }
      );
  }
    save(c: Commentaire, idmatch: number ) {
        console.log(c);
        c.idmatch = idmatch ;
        this.commentaireService.postCommentaire(c).subscribe(
        () => this.ListCommentaire = [c, ...this.ListCommentaire]     );
        this.ngOnInit();
    }
}
