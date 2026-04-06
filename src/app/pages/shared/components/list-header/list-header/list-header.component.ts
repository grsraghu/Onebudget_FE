import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import{MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-header',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './list-header.component.html',
  styleUrl: './list-header.component.css'
})
export class ListHeaderComponent 
{
  @Input() searchTitle: string = '';
  @Input() searchPlaceHolder: string = '';
  @Input() addButtonText: string = '';
  @Output() search = new EventEmitter<string>(); // Event emitter for search input
  @Output() add = new EventEmitter<void>(); // Event emitter for add button click
  @Output() clear= new EventEmitter<void>(); // Event emitter for clear search button click

  searchTerm: string = '';

  clearSearch() 
  {
   this.searchTerm = '';
    this.clear.emit();
  }

  onSearchChange()
  {
    this.search.emit(this.searchTerm);
  }

  onAddClick() 
  {
    this.add.emit();
  }



}
