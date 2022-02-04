import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { NavbarLeftComponent } from './navbar-left/navbar-left.component';
import { OffcanvasComponent } from './navbar-top/offcanvas/offcanvas.component';

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
  ],
  exports: [
    NavbarTopComponent, NavbarLeftComponent,
  ]
})
export class LayoutModule { }
