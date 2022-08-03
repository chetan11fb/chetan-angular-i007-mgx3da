import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Products/product-list.componet';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, 
    MatMenuModule,
    MatButtonModule, FormsModule],
  declarations: [AppComponent, ProductListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
