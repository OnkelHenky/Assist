import { Component, OnDestroy,ViewChild} from '@angular/core';

import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title:string = 'Assist';
  over:string = 'side';

  opened:boolean = true;
  isSmallDevice:boolean = false;

  watcher: Subscription;

  // Reference to the side navigation from the template.
  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((mediaChange: MediaChange) => {
      if ( 'sm'  === mediaChange.mqAlias || 'xs' === mediaChange.mqAlias) {
        this.opened = false; // side bar is not visible
        this.isSmallDevice = true;
        this.over = 'over';
      } else {
        this.opened = true; // side bar is visible
        this.isSmallDevice = false;
        this.over = 'side';
      }
    });
  }

  /**
   * Handle the toggle of the side navigation
   * If the application is running on an small device
   * than the side navigation should be hidden after
   * the user selected (clicked) on an option.
   *
   * But, if the application is running on a large screen device
   * than the side navigation should always be visible.
   *
   */
  handleSideNavToggle (){
      if (this.isSmallDevice){
          this.sidenav.toggle();
      }
   }


  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
