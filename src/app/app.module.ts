import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatSliderModule } from '@angular/material/slider';
import { TableComponent } from './table/table.component';

import { MatTableModule } from '@angular/material/table';

import { ChildComponent } from './child/child.component';
import { FullNamePipe } from './pipes/full-name.pipe';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

import {ReactiveFormsModule} from '@angular/forms';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { AdminModule } from './modules/admin/admin.module';       //eager loading  while importing a module direct in app.module.ts
import { ProductModule } from './modules/product/product.module';
// import { UserModule } from './modules/user/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ChildComponent,
    FullNamePipe,
    ReactiveFormsComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    ReactiveFormsModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
