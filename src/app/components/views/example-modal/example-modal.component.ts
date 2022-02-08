import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-example-modal',
  templateUrl: './example-modal.component.html',
  styleUrls: ['./example-modal.component.css']
})
export class ExampleModalComponent implements OnInit {

  title?: string;
  closeBtnName?: string;
  list: any[] = [];

  @Output()
  public variableOutput: EventEmitter<string> = new EventEmitter<string>();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void { }

  closeModal(): void {
    this.variableOutput.emit('desde aqui del modal');
    this.bsModalRef.hide();
  }

}
