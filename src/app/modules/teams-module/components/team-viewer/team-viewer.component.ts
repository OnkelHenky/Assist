import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router'
import {Observable} from 'rxjs';
import {map } from 'rxjs/operators';

interface Team {
  name: string;
  id: number

}

@Component({
  selector: 'app-team-viewer',
  templateUrl: './team-viewer.component.html',
  styleUrls: ['./team-viewer.component.css']
})
export class TeamViewerComponent implements OnInit, OnDestroy {

  params$: Observable<Team>; //Team-Observable, used in the HTML template with async pipe

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * TODO: Add type/safety check for URL Parameter
   */
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

  ngOnDestroy(){
    //this.foo.unsubscribe();
  }
}
