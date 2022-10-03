import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BooksModule } from './books/books.module';


import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing module';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    
    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BooksModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
