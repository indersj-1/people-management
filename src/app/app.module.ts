import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { HomeComponent } from './home/index';
import { HeaderComponent } from './layout/index';
import { LoaderComponent } from './layout/loader/loader.component';
import { JobsComponent } from './jobs/index';
import { AuthenticationService, UserService } from './services/index';
import { AuthGuard } from './guard/index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    LoaderComponent,
    JobsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [AuthenticationService,AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
