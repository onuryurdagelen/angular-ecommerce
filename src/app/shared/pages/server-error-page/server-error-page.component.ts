import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-error-page',
  templateUrl: './server-error-page.component.html',
  styleUrls: ['./server-error-page.component.scss']
})
export class ServerErrorPageComponent {
  error:any;

  constructor(private router:Router){

    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.['state'];
    console.log(this.error);
    console.log(navigation);

  }
}
