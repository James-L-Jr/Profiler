import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { PrivacyPolicyDialogComponent } from '../dialogs/privacy-policy-dialog/privacy-policy-dialog';
import { TermsServiceDialogComponent } from '../dialogs/terms-service-dialog/terms-service-dialog';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule
  ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
  constructor(private dialog: MatDialog) { }

  openPrivacyPolicyDialog(event: Event): void {
    event.preventDefault();
    this.dialog.open(PrivacyPolicyDialogComponent, {
      width: '450px'
    });
  }

  openTermsServiceDialog(event: Event): void {
    event.preventDefault();
    this.dialog.open(TermsServiceDialogComponent, {
      width: '450px'
    });
  }
}
