import {Commentaire} from '../shared/commentaire';
import {CommentaireService} from "../services/commentaire.service";
import {Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';

@Component({
  selector: 'app-form-commentaire',
  templateUrl: './form-commentaire.component.html',
  styleUrls: ['./form-commentaire.component.css']
})
export class FormCommentaireComponent implements OnInit {
commentaire: Commentaire;
    @Input() idmatch: number;
//  @Input() listecommentaire: Commentaire[];
    @Output() saveEvent = new EventEmitter<Commentaire>();

    constructor() { }

  ngOnInit(): void {
      this.commentaire = new Commentaire();
      this.commentaire.date = new Date();
  }
    OnDestroy(): void{
    }
  notify(){
        this.saveEvent.emit(this.commentaire);
        this.ngOnInit();
    }
}
