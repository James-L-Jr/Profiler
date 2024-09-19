import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-submission-complete-dialog',
  template: `
    <h2 mat-dialog-title>Submission Complete</h2>
    <mat-dialog-content>Your feedback has been submitted successfully!</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Close</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  styleUrl: './submission-complete-dialog.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [MatDialogModule, MatButtonModule]
})
export class SubmissionCompleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<SubmissionCompleteDialogComponent>) {}
}