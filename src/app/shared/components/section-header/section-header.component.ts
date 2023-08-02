import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/models/breadcrumb';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  breadcrumbs$: Observable<Breadcrumb[]>; 
 
  constructor(public bcService:BreadcrumbService) { 
  } 
}
