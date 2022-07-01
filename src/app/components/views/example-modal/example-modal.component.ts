import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IExampleModal } from './interfaces/i-example-modal';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.css']
})
export class ExampleModalComponent implements OnInit {
  @Input()
  public exampleModal: Partial<IExampleModal> = {};
  public closeBtnName?: string;

  @Output()
  public variableOutput: EventEmitter<string> = new EventEmitter<string>();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void { }

  closeModal(): void {
    this.variableOutput.emit('desde aqui del modal');
    this.bsModalRef.hide();
  }

}
