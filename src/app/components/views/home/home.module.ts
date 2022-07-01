import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertNotificationService } from 'src/app/shared/services/alert-notification/alert-notification.services';

const routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes),
    ModalModule.forRoot()
  ],
  providers: [AlertNotificationService],
})
export class HomeModule { }
