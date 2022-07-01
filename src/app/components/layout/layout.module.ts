import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { OffcanvasComponent } from './navbar-top/offcanvas/offcanvas.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.mudule';
import { AlertNotificationService } from 'src/app/shared/services/alert-notification/alert-notification.services';

@NgModule({
  declarations: [
    NavbarTopComponent, NavbarLeftComponent, OffcanvasComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    PopoverModule.forRoot(),
    TranslateModule,
    SharedModule
  ],
  exports: [
    NavbarTopComponent, NavbarLeftComponent,
  ],
  providers: [AlertNotificationService],
})
export class LayoutModule { }
