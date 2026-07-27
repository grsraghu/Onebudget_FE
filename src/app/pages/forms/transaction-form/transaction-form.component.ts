import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

// Angular Material Imports
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ApiService } from '../../../services/api/api.service';
import{Category} from '../../../models/Category/catergory';
import { Subcategory } from '../../../models/Category/subcategory';

@Component({
  selector: 'app-transaction-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css'
})
export class TransactionFormComponent implements OnInit {
  private fb = inject(FormBuilder); // Inject FormBuilder for reactive forms. Declare 
  private dialogRef = inject(MatDialogRef<TransactionFormComponent>);
  private apiService = inject(ApiService);

  selectedCategory: Category | null = null; // To hold the selected category for subcategory filtering
  selectedIndex: number | null = null; // To hold the index of the selected category for subcategory filtering

  // Mock Category Dropdown Options
  categories: string[] = [
    'Housing & Utilities',
    'Food & Dining',
    'Transportation',
    'Personal & Lifestyle',
    'Health & Medical',
    'Financial & Savings'
  ];

  categoriesList: Category[] = new Array<Category>();

  // Main Form Group containing the FormArray
  transactionFormGroup: FormGroup = this.fb.group({records: this.fb.array([])});

  // Getter for easy template access
  // Similar  to C# property, this getter allows us to access the FormArray in the template
  get records(): FormArray {
    return this.transactionFormGroup.get('records') as FormArray;
  }

  ngOnInit(): void {
    // Fetch categories from the API when the component initializes
    this.getCategories();
    // Add one initial row when form opens
    this.addItem();
  }

  // Create individual row Form Group
  createRowGroup(): FormGroup {
    return this.fb.group({
      category: ['', Validators.required],
      subCategory: [''],
      amount: [null, [Validators.required, Validators.min(0.01)]],
      date: [new Date(), Validators.required]
    });
  }

  getCategories(): void {
    // This method would typically call the ApiService to fetch categories from the backend
    // For now, we are using mock data defined in the categories array above
   this.apiService.getCategories().subscribe((data: Category[]) => {
      this.categoriesList = data;
    });
    
  }

  getSubCategories(categoryID:number): Subcategory[] 
  {
    return this.categoriesList.find(cat=>cat.id === categoryID)?.subcategories || [];
  }

  // Add new row to the FormArray
  addItem(): void {
    this.records.push(this.createRowGroup());
  }

  // Remove specific row
  removeItem(index: number): void {
    if (this.records.length > 1) {
      this.records.removeAt(index);
    }
  }

onCategoryChange(index: number, event: MatSelectChange) : void 
{
  if (!event.value) {
    this.selectedCategory = null;
    return;
  }

  const selectedValue = event.value as Category;
  const selectedIndex = event.source.tabIndex;

  this.selectedCategory = selectedValue;

}

  // Form Submission
  onSubmit(): void {
    if (this.transactionFormGroup.valid) {
      console.log('Submitted Payload:', this.transactionFormGroup.value.records);
      this.dialogRef.close(this.transactionFormGroup.value.records);
    } else {
      this.transactionFormGroup.markAllAsTouched();
    }
  }

  // Form Cancellation
  onCancel(): void {
    this.dialogRef.close();
  }
}