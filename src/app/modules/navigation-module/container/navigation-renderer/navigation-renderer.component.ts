import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule, Routes, Resolve, Router, NavigationEnd, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-navigation-renderer',
  templateUrl: './navigation-renderer.component.html',
  styleUrls: ['./navigation-renderer.component.css']
})

export class NavigationRendererComponent implements OnInit {

  @Output()
   navbarClicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  fav_navigation = [
    {
      link: '/',
      name: 'My Teams',
      icon: 'group',
      exact: true
    },
    {
      link: '/',
      name: 'My Competitions',
      icon: 'view_list',
      exact: true
    }
  ];

  navigation = [
    {
      link: '/competitions',
      name: 'Competitions',
      icon: '',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Games',
      icon: '',
      exact: true
    },
    {
      link: '/passengers',
      name: 'Tickets',
      icon: '',
      exact: true
    }
  ];

  constructor(private router: Router) {
    router.events
      .subscribe((evt) => {
        if (evt instanceof NavigationStart) {
          console.log("Route Change Start!");
        } else if (evt instanceof NavigationEnd) {
          console.log("Route Change End!");
          this.navbarClicked.emit(true);
        }
      });
  }

  ngOnInit() {
  }

}
