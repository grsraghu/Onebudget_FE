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
import { ApiService } from '../../../services/api/api.service';

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
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<TransactionFormComponent>);
  // private apiService = inject(ApiService);

  // Mock Category Dropdown Options
  categories: string[] = [
    'Housing & Utilities',
    'Food & Dining',
    'Transportation',
    'Personal & Lifestyle',
    'Health & Medical',
    'Financial & Savings'
  ];

  // Main Form Group containing the FormArray
  transactionFormGroup: FormGroup = this.fb.group({
    records: this.fb.array([])
  });

  // Getter for easy template access
  get records(): FormArray {
    return this.transactionFormGroup.get('records') as FormArray;
  }

  ngOnInit(): void {
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

  // Add new row to FormArray
  addItem(): void {
    this.records.push(this.createRowGroup());
  }

  // Remove specific row
  removeItem(index: number): void {
    if (this.records.length > 1) {
      this.records.removeAt(index);
    }
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