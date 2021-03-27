import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { CoreHttpService } from '@core/services/http/http.service';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  providers: [CoreHttpService]
})
export class CoreModule { }
