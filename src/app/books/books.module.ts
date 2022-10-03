import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from '../book/book.component';
import { BooksComponent } from './books.component';



@NgModule({
  declarations: [
    BooksComponent, 
    BookComponent],
  

  imports: [
    CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
