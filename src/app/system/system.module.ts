import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system.routing.module';
import {SharedModule} from '../shared/shared.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {SystemHeaderBoxesComponent} from './system-header-boxes/system-header-boxes.component';
import {CancelAlgoPositionsComponent} from '../shared/system-activity/cancel-algo-positions/cancel-algo-positions.component';
import {PopupModule} from '../shared/popup/popup.module';
import {FormsModule} from '@angular/forms';
import {CountdownModule} from 'ngx-countdown';

@NgModule({
  declarations: [
    SystemComponent,
    SystemHeaderBoxesComponent,
    CancelAlgoPositionsComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule,
    FontAwesomeModule,
    NgbTabsetModule,
    PopupModule,
    CountdownModule,
    FormsModule
  ]
})
export class SystemModule { }
