import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutaas
import { APP_ROUTES} from "./app.routes";

//Modulos
import { pagesModule } from "./pages/pages.module";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { FormsModule } from '@angular/forms';


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
