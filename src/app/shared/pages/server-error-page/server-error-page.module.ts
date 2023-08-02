import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerErrorPageComponent } from './server-error-page.component';



@NgModule({
  declarations: [ServerErrorPageComponent],
  imports: [
    CommonModule
  ],
  exports:[ServerErrorPageComponent]
})
export class ServerErrorPageModule { }
