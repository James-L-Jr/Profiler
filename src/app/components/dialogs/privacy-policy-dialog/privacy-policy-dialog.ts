import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'privacy-policy-dialog',
  template: `
    <h2 mat-dialog-title>Terms of Service</h2>
    <mat-dialog-content>ProfileMe collects no data from our users. Don't collect ours. Usage of this site infers understanding of our terms of service.</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Close</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  styleUrl: './privacy-policy-dialog.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [MatDialogModule, MatButtonModule]
})
export class PrivacyPolicyDialogComponent {
  constructor(public dialogRef: MatDialogRef<PrivacyPolicyDialogComponent>) {}
}