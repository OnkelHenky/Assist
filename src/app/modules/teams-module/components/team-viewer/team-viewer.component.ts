import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-team-viewer',
  templateUrl: './team-viewer.component.html',
  styleUrls: ['./team-viewer.component.css']
})
export class TeamViewerComponent implements OnInit {

  team_id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * TODO: Add type/safty check for URL Parameter
   */
  ngOnInit() {
    this.route.params
      .subscribe((data : any) => {
        console.log('data', data);
        this.team_id = data.id;
      });

  }

}
