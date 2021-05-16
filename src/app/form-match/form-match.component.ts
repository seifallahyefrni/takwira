import { Component, OnInit } from '@angular/core';
import {Match} from '../shared/match';
import {MatchService} from "../services/match.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-form-match',
  templateUrl: './form-match.component.html',
  styleUrls: ['./form-match.component.css']
})
export class FormMatchComponent implements OnInit {
match: Match;
    id: string;
    isAddMode: boolean;

  constructor(private MatchService: MatchService, private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
      this.match = new Match();
      this.id = this.activatedRoute.snapshot.params.id;
      this.isAddMode = !this.id;
      console.log(this.isAddMode);
      if (!this.isAddMode) {
          this.MatchService.getById(+this.id).subscribe(
              (data: Match) => {
                  this.match = data;
              }
          );
      }

  }
  edit(){
      this.MatchService.editMatch(+this.id, this.match).subscribe();
      this.router.navigate(['/']);  }
save(){
    console.log(this.match.date);
    this.match.participant = 0;
    this.MatchService.postMatch(this.match).subscribe();
    this.router.navigate(['/']);

}
}
