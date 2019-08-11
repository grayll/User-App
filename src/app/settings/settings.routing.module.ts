import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {GoogleAuthenticatorComponent} from './security/two-FA-enable/google-authenticator/google-authenticator.component';
import {ScanQrCodeTwoFaComponent} from './security/two-FA-enable/scan-qr-code-two-fa/scan-qr-code-two-fa.component';
import {SaveBackupKeyTwoFaComponent} from './security/two-FA-enable/save-backup-key-two-fa/save-backup-key-two-fa.component';
import {EnableTwoFaLastStepComponent} from './security/two-FA-enable/enable-two-fa-last-step/enable-two-fa-last-step.component';
import {DisableTwoFaComponent} from './security/two-FA-enable/disable-two-fa/disable-two-fa.component';
import {DisableMultisignatureComponent} from './security/multisignature-transactions/disable-multisignature/disable-multisignature.component';

const popupRoutes: Routes = [
  {
    path: 'google-authenticator',
    component: GoogleAuthenticatorComponent,
    outlet: 'popup'
  },
  {
    path: 'scan-qr-code',
    component: ScanQrCodeTwoFaComponent,
    outlet: 'popup'
  },
  {
    path: 'save-backup-key',
    component: SaveBackupKeyTwoFaComponent,
    outlet: 'popup'
  },
  {
    path: 'enable-two-fa',
    component: EnableTwoFaLastStepComponent,
    outlet: 'popup'
  },
  {
    path: 'disable-two-fa',
    component: DisableTwoFaComponent,
    outlet: 'popup'
  },
  {
    path: 'disable-multisignature',
    component: DisableMultisignatureComponent,
    outlet: 'popup'
  }
];

const routes: Routes = [
  {
    path: 'profile',
    component: SettingsComponent,
    children: [
      ...popupRoutes
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SettingsRoutingModule {}
