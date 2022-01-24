import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { TemplateDrivenFormComponent } from './tdform/tdform.component';
import { ReactiveFormComponent } from './rform/rform.component';
import { EditTableComponent } from './table/edittable/edittable.component';

const appRoute: Routes = [
  { path: 'table', component: TableComponent},
  { path: 'table/:id', component: EditTableComponent},
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
    EditTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
