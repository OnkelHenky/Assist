import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {  Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navigation-renderer',
  templateUrl: './navigation-renderer.component.html',
  styleUrls: ['./navigation-renderer.component.css']
})

export class NavigationRendererComponent implements OnInit {

  @Output()
  navbarClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  /**
   * Navigation entries for fav menu items
   * TODO: Move details to proper interface implementation
   */
  fav_navigation = [
    {
      link: '/teams',
      name: 'My Teams',
      icon: 'group',
      exact: true
    },
    {
      link: '/my_competitions',
      name: 'My Competitions',
      icon: 'view_list',
      exact: true
    }
  ];

  /**
   * Navigation entries for all other menu entries
   * TODO: Move details to proper interface implementation
   */
  navigation = [
    {
      link: '/competitions',
      name: 'Competitions',
      icon: '',
      exact: true
    },
    {
      link: '/games',
      name: 'Games',
      icon: '',
      exact: true
    },
    {
      link: '/tickets',
      name: 'Tickets',
      icon: '',
      exact: true
    }
  ];

  constructor(private router: Router) {
    router.events.subscribe((evt) => {
       if (evt instanceof NavigationEnd) {
          this.navbarClicked.emit(true);
        }
      });
  }

  ngOnInit() {
  }

}
