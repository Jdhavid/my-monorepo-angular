import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ExampleModalComponent } from '../example-modal/example-modal.component';
import { IExampleModal } from '../example-modal/interfaces/i-example-modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModalWithComponent(): void {
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
      //initialState: initialStateExample,
      class: 'modal-lg',
      ignoreBackdropClick: true
    };
    this.bsModalRef = this.modalService.show(ExampleModalComponent, initialState);
    this.bsModalRef.content.iExampleModal = initialStateExample;
    this.bsModalRef.content.closeBtnName = 'Close';
    this.bsModalRef.content.variableOutput.subscribe((valor: String) => { console.log(valor) });

  }
}