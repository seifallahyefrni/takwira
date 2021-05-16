import {EventEmitter, Component, Input, OnInit, Output} from '@angular/core';
import {Match} from '../shared/match';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
@ Input() offre: Match;

  constructor() { }

  ngOnInit(): void {
}
}
