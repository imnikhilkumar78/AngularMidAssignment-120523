import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { CollegeSearchComponent } from './college-search/college-search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ParentComponent, CollegeSearchComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
