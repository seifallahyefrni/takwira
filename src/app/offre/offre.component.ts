import {Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import {Match} from '../shared/match';
import {Commentaire} from "../shared/commentaire";
import {CommentaireService} from "../services/commentaire.service";
import {MatchService} from "../services/match.service";

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
    @Output() deleteEvent = new EventEmitter<Match>();

    @Input() oChild: Match;
    @Input() titre: string;
    ListCommentaire: Commentaire[];
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
  }
    notify() {
        this.deleteEvent.emit(this.oChild);
    }
    participer(oChild: Match){
      const value = oChild;
      const id = oChild.id;
      oChild.participant = oChild.participant + 1 ;
      this.matchService.incrementparticipant(id, oChild).subscribe();
          }
}
