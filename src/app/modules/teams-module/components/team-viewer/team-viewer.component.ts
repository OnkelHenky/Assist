import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router'
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

/*
 * For testing only
 * TODO: Move to dedicated file.
 */
interface Team {
  name: string;
  id: number

}

@Component({
  selector: 'app-team-viewer',
  templateUrl: './team-viewer.component.html',
  styleUrls: ['./team-viewer.component.css']
})
export class TeamViewerComponent implements OnInit {

  params$: Observable<Team>; //Team-Observable, used in the HTML template with async pipe

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
   this.params$ = this.route.params
     .pipe(
       map((data : any) =>  {
         return {
           name: 'Foo Team',
           id: data.id
         }
       })
     );
  }

}
