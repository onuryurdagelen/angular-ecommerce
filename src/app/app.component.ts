import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ECommerce.Angular';

  /**
   *
   */
  constructor(public loaderService: LoaderService) {
      setTheme('bs5');
    
  }
  
}
