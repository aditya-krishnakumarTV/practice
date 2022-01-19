import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { TemplateDrivenFormComponent } from './tdform/tdform.component';
import { ReactiveFormComponent } from './rform/rform.component';

const appRoute: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'tdform', component: TemplateDrivenFormComponent },
  { path: 'rform', component: ReactiveFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
