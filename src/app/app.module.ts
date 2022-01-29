import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { TemplateDrivenFormComponent } from './tdform/tdform.component';
import { ReactiveFormComponent } from './rform/rform.component';
import { EditTableComponent } from './table/edittable/edittable.component';
import { DevxGridComponent } from './devxgrid/devxgrid.component';
import { NavComponent } from './header/nav/nav.component';

const appRoute: Routes = [
  {
    path: 'table',
    component: TableComponent,
    children: [{ path: ':id', component: EditTableComponent }],
  },
  { path: 'tdform', component: TemplateDrivenFormComponent },
  { path: 'rform', component: ReactiveFormComponent },
  { path: 'devxgrid', component: DevxGridComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    EditTableComponent,
    DevxGridComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    ReactiveFormsModule,
    DxDataGridModule,
    MatToolbarModule,
    MatListModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
