import {Component, Input, OnInit} from '@angular/core';
import {Commentaire} from '../shared/commentaire';
@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
ListCommentaire: Commentaire;
    @Input() cChild: Commentaire;

    constructor() { }

  ngOnInit(): void {
  }

}
