import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { DropdownModule } from '../../components/dropdown/dropdown.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    DropdownModule,
    RouterModule,
    BsDropdownModule.forRoot(),
  ],
  exports:[NavbarComponent]
})
export class NavbarModule { }
