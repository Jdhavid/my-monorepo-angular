import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { Observable, Subject } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { ConfigurationService } from "../configuration/configuration.service";
import { AlertNotificationComponent } from "./alert-notification-component/alert-notification.component";

@Injectable({
  providedIn: 'root'
})
export class AlertNotificationService {

  private bsModalRef?: BsModalRef;
  //public result: EventEmitter<boolean> = new EventEmitter<boolean>();
  private result2 = new Subject<boolean>();

  /**
   * Contruct Methos
   * @param _http HttpClient Injection
   * @param _config Configuration Service Injection
   * @param modalService Modal Service Injection
   * @param _authService Auth Service Injection
   */
  constructor(
    private _http: HttpClient,
    private _config: ConfigurationService,
    private modalService: BsModalService,
    private _authService: AuthService
  ) { }


  /**
   * Open a modal dialog showing a message
   * @param title Title to show in modal
   * @param message Message to show in modal
   * @param showCancel Flag to indicates if show cancel button
   * @param acceptBtnText Text in accept button
   * @param cancelBtnText Text in cancel button
   * @param showThirdButton Flag to indicates if show third button
   * @param thirdText Text in third button
   * @param showFourthbutton Flag to indicates if show fourth button
   * @param fourthText Text in fourth button
   * @param closeWindow Flag to indicates if ok button close window
   */
  public showDialog(title: string, message: string,
    showCancel?: boolean, acceptBtnText?: string,
    cancelBtnText?: string, showThirdButton?: boolean,
    thirdText?: any, showFourthbutton?: boolean,
    fourthText?: any, closeWindow?: boolean): void {

    const initialState: ModalOptions = {
      class: 'modal-lg',
      ignoreBackdropClick: true
    };

    this.bsModalRef = this.modalService.show(AlertNotificationComponent, initialState);

    this.bsModalRef.content.title = title;
    this.bsModalRef.content.message = message;
    this.bsModalRef.content.showBtnCancel = showCancel ? showCancel : false;
    this.bsModalRef.content.acceptBtnText = acceptBtnText ? acceptBtnText : 'APP.BUTTON.CONTINUE_BTN';
    this.bsModalRef.content.cancelBtnText = cancelBtnText ? cancelBtnText : 'APP.BUTTON.CANCEL_BTN';
    //this.bsModalRef.content.showThirdButton = showThirdButton ? showThirdButton : false;
    //this.bsModalRef.content.thirdText = thirdText;
    //this.bsModalRef.content.showFourthButton = showFourthbutton ? showFourthbutton : false;
    //this.bsModalRef.content.fourthText = fourthText;
    this.bsModalRef.content.closeWindow = closeWindow ? closeWindow : false;

    this.bsModalRef?.content.resul.subscribe((response: boolean) => this.result2.next(response));
  }

  public get result(): Observable<boolean> {
    return this.result2.asObservable();
  }

}