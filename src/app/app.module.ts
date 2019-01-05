import { BrowserModule } from '@angular/platform-browser';
import { ServiceModule } from "./services/service.module";
import { NgModule } from '@angular/core';

//Rutaas
import { APP_ROUTES} from "./app.routes";

//Modulos
import { pagesModule } from "./pages/pages.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { FormsModule } from '@angular/forms';
import { Services } from '@angular/core/src/view';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    pagesModule,
    FormsModule,
    ServiceModule,
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
