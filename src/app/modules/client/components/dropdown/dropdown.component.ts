import { Component, Input } from '@angular/core';
import { NavType } from 'src/app/types/nav-type';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {


  @Input()
  id:string;

  @Input()
  ariaLabelId!: string;
  
  @Input()
  navLinks:NavType[];

  public get _ariaLabelId():string{
    return this.ariaLabelId;
  }

}
