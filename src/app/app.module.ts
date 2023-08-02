import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './modules/client/components/button/button.component';
import { CardComponent } from './modules/client/components/card/card.component';
import { TypeheadComponent } from './modules/client/components/typehead/typehead.component';
import { TabComponent } from './modules/client/components/tab/tab.component';
import { AlertComponent } from './modules/client/components/alert/alert.component';
import { DatetimepickerComponent } from './modules/client/components/datetimepicker/datetimepicker.component';
import { DropdownComponent } from './modules/client/components/dropdown/dropdown.component';
import { LayoutModule } from './modules/client/layout/layout.module';
import { RegisterModule } from './modules/client/pages/register/register.module';
import { LoginModule } from './modules/client/pages/login/login.module';
import { TestErrorComponent } from './shared/pages/test-error/test-error.component';
import { NotFoundErrorComponent } from './shared/pages/not-found-error/not-found-error.component';
import { MaintenanceComponent } from './shared/pages/maintenance/maintenance.component';
import { ErrorInterceptor } from './shared/interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    TypeheadComponent,
    TabComponent,
    AlertComponent,
    DatetimepickerComponent,
    DropdownComponent,
    TestErrorComponent,
    NotFoundErrorComponent,
    MaintenanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RegisterModule,
    NgxSpinnerModule.forRoot({type: 'ball-atom'}),
    LoginModule,
    BrowserAnimationsModule,
    LayoutModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot({
      preventDuplicates:true,
      positionClass:'toast-bottom-right'
      
    }), // ToastrModule added
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: "baseUrl", useValue: "https://localhost:5000/api/",multi:true},
    { provide: "baseUrlForFiles", useValue: "https://localhost:5000/api/", multi: true },
    {provide: HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide: HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
