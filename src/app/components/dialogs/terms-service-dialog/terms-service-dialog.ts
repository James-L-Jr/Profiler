import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'terms-service-dialog',
  template: `
    <h2 mat-dialog-title>Terms of Service</h2>
    <mat-dialog-content>ProfileMe claims no ownership over displayed assets from our web view. ProfileMe reserves rights under 'Fair Use.' Furthermore, the user understands this project is not sponsored or affiliated with any genuine company or identity.</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Close</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  styleUrl: './terms-service-dialog.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [MatDialogModule, MatButtonModule]
})
export class TermsServiceDialogComponent {
  constructor(public dialogRef: MatDialogRef<TermsServiceDialogComponent>) {}
}