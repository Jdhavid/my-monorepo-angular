import { Component, EventEmitter, Output } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";


@Component({
    selector: 'app-alert-notification',
    templateUrl: './alert-notification.component.html',
    styleUrls: ['./alert-notification.component.css']
})
export class AlertNotificationComponent {
        
    public result: EventEmitter<boolean> = new EventEmitter<boolean>();
    public title: string = '';
    public message: string = '';
    public acceptBtnText: string = '';
    public cancelBtnText: string = '';
    public showBtnCancel: boolean = true;
    public closeWindow: boolean = false;

    constructor(
        public bsModalRef: BsModalRef
    ) { }

    public btnAccept(): void {
        this.result.emit(true);
        this.bsModalRef.hide();
        if (this.closeWindow) {
            window.close();
        }
    }

    public btnCancel(): void {
        this.result.emit(false);
        this.bsModalRef.hide();
    }

}