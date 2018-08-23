import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Competition, CompetitionsServerResponse} from './models/competition.interface';
import {map} from 'rxjs/operators';

// Key for the football.org api
import {app_key} from '../../../aux/app_key';


@Injectable()
export class CompetitionDashboardService {

    header: HttpHeaders = new HttpHeaders();
    constructor(private http: HttpClient) {

    }
    
    getCompetitions(): Observable<Competition[]> {

        this.header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.header.append('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
        this.header.append('X-Auth-Token', app_key.key);
        //console.dir(header)
        return this.http.get('/v2/competitions', { headers: this.header})
        .pipe(
            map((response: CompetitionsServerResponse) => {
                console.log('Response Competionisn Object', response);
                return response.competitions
            })
        )
    }
}
