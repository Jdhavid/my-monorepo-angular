import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs/internal/Subscription';
import { AlertNotificationService } from 'src/app/shared/services/alert-notification/alert-notification.services';
import { ExampleModalComponent } from '../example-modal/example-modal.component';
import { IExampleModal } from '../example-modal/interfaces/i-example-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private bsModalRef?: BsModalRef;
  private translateSubscription?: Subscription;
  constructor(
    private modalService: BsModalService,
    private alertNotificationService: AlertNotificationService,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  async openModalWithComponent(): Promise<void> {

    this.openModal2();


  }

  private async openModal1(): Promise<void> {
    const initialStateExample: Partial<IExampleModal> = {
      list: [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ],
      title: 'Modal with component'
    }
    let o = { dic: <{ [name: string]: number }>{ 'a': 1, 'b': 2 } }
    const initialState: ModalOptions = {
      class: 'modal-lg',
      ignoreBackdropClick: true
    };
    this.bsModalRef = this.modalService.show(ExampleModalComponent, initialState);
    this.bsModalRef.content.exampleModal = initialStateExample;
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.variableOutput.subscribe((valor: String) => { console.log(valor) });
  }

  private openModal2(): void {
    let messageTitle: string;
    this.translateSubscription = this.translate.get('AUTHORIZATION.REVIEW_AUTORIZATION.ID_AUTHORIZATION').subscribe(
      (result: string) => { messageTitle = result }
    );

    this.alertNotificationService.showDialog('titulo', 'estamos uno a', true, 'aceptar', 'cancelar');

    this.alertNotificationService.result.subscribe(resul => console.log(resul));


    //this.alertNotificationService.result.subscribe(resul => console.log(resul));

  }


}
