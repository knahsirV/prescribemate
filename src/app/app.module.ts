import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';

import { OffCounterComponent } from './off-counter/off-counter.component';

import { HttpClientModule } from '@angular/common/http';
import { OvercounterService } from 'src/app/overcounter.service';
import { FdaDrugInfoComponent } from './fda-drug-info/fda-drug-info.component';
import { LandingComponent } from './landing/landing.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    OffCounterComponent,
    FdaDrugInfoComponent,
    LandingComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [
    ThemeService,
    OvercounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
