import { Component} from '@angular/core';

/**
 * Generic Not Found  Error Page for testing
 */
@Component({
  selector: 'not-found',
  template: `
    <section>
       <div>
        This is not the data you are looking for.
        Catch all unimplemented routes ... for testing only 
        <a routerLink="/">Got back home</a>
       </div>
    </section>
  `
})
export class NotFoundComponent{
  constructor(){

  }
}
