import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { RouterModule } from "@angular/router";
import { environment } from '../../../environments/environment';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProfileService } from '../../services/ProfileService';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotAuthorizedDialogComponent } from '../dialogs/not-authorized-dialog/not-authorized-dialog';
import { SubmissionCompleteDialogComponent } from '../dialogs/submission-complete-dialog/submission-complete-dialog';
import { PrivacyPolicyDialogComponent } from '../dialogs/privacy-policy-dialog/privacy-policy-dialog';
import { TermsServiceDialogComponent } from '../dialogs/terms-service-dialog/terms-service-dialog';

interface Profile {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    FormsModule,
    CommonModule,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  profiles: Profile[] = [];
  selectedProfileId: number | null = null;
  profileName: string = 'James Logan';
  showCreateProfileModal: boolean = false;
  newProfileName: string = '';

  constructor(private profileService: ProfileService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadProfiles();
  }

  showNotAuthorizedDialog(): void {
    const dialogRef = this.dialog.open(NotAuthorizedDialogComponent, {
      width: '350px',
      disableClose: true,
      hasBackdrop: true
    });
  }

  showDialog(event: Event): void {
    event.preventDefault();
    const dialogRef = this.dialog.open(SubmissionCompleteDialogComponent, {
      width: '450px',
      disableClose: true,
      hasBackdrop: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The submission dialog was closed');
    });
  }

  loadProfiles(): void {
    this.profileService.getAllProfiles().subscribe(
      (profiles: Profile[]) => {
        this.profiles = profiles;
        if (profiles.length > 0) {
          this.selectedProfileId = profiles[0].id;
          this.updateProfileName();
        }
      },
      error => {
        console.error('Error fetching profiles:', error);
      }
    );
  }

  updateProfileName(): void {
    const selectedProfile = this.profiles.find(profile => profile.id === this.selectedProfileId);
    this.profileName = selectedProfile ? selectedProfile.name : 'Guest';
  }

  // onProfileSelect(): void {
  //   this.updateProfileName();
  // }

  onProfileSelect(): void {
    const selectedProfile = this.profiles.find(profile => profile.id === this.selectedProfileId);
    if (selectedProfile) {
      this.profileName = selectedProfile.name;
    }
  }

  openCreateProfileModal(): void {
    this.showCreateProfileModal = true;
  }

  closeCreateProfileModal(): void {
    this.showCreateProfileModal = false;
    this.newProfileName = '';
  }

  // createProfile(): void {
  //   if (this.newProfileName.trim()) {
  //     this.profileService.createProfile({ name: this.newProfileName }).subscribe(
  //       (newProfile: Profile) => {
  //         this.profiles.push(newProfile);
  //         this.selectedProfileId = newProfile.id;
  //         this.updateProfileName();
  //         this.closeCreateProfileModal();
  //       },
  //       error => {
  //         console.error('Error creating profile:', error);
  //       }
  //     );
  //   }
  // }

  toggleProject(project: any) {
    project.expanded = !project.expanded;
  }

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
