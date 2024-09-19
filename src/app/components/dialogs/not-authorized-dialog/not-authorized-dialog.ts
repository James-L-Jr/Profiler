import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-not-authorized-dialog',
  template: `
    <h2 mat-dialog-title>Not Authorized</h2>
    <mat-dialog-content>You are not authorized to perform this action.</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="true">Close</button>
    </mat-dialog-actions>
  `,
  standalone: true,
  styleUrl: './not-authorized-dialog.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [MatDialogModule, MatButtonModule]
})
export class NotAuthorizedDialogComponent {
  constructor(public dialogRef: MatDialogRef<NotAuthorizedDialogComponent>) {}
}