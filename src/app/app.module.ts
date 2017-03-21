import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RunningClockComponent } from './components/running-clock/running-clock.component'
import { HomeComponent } from './pages/home/home.component';

import { StickDirective } from './directives/stick-directive';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    RunningClockComponent,
    HomeComponent,
    StickDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
