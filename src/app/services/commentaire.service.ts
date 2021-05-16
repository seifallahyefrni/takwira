import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Commentaire} from '../shared/commentaire';

@Injectable({
    providedIn: 'root'
})
export class CommentaireService {

    url = 'http://localhost:3000/commentaire';

    constructor(private http: HttpClient) {
    }

    getListCom(idMatch: number) {
        let params = new HttpParams().set('idmatch', idMatch.toString());
        return this.http.get<Commentaire[]>(this.url, {params :  params});
    }

    postCommentaire(c: Commentaire) {
        return this.http.post('http://localhost:3000/commentaire', c);
    }

}
