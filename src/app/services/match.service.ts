import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Match} from '../shared/match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }
  getMatch(){
    return this.http.get<Match[]>('http://localhost:3000/match');
  }
  postMatch(m: Match){
console.log('save 3');
      return this.http.post('http://localhost:3000/match', m);
    }
    incrementparticipant(id: number, oChild: Match) {
        return this.http.put('http://localhost:3000/match' + '/' + id , oChild);
    }

    supprimerMatch(id: number) {

        return this.http.delete('http://localhost:3000/match' + '/' + id);
    }
    getById(id: number){
            return this.http.get('http://localhost:3000/match' + '/' + id);
}
    editMatch(id: number, c: Match) {
        return this.http.put('http://localhost:3000/match' + '/' + id , c);
    }

}
