import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';
import { AlertNotificationComponent } from "./services/alert-notification/alert-notification-component/alert-notification.component";
import { AlertNotificationService } from "./services/alert-notification/alert-notification.services";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatepickerWrapperComponent } from "./components/custom-datepicker-wrapper/datepicker-wrapper";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        BsDatepickerModule.forRoot(),
    ],
    declarations: [
        AlertNotificationComponent, DatepickerWrapperComponent
    ],
    exports: [
        AlertNotificationComponent, DatepickerWrapperComponent
    ],
    providers: [AlertNotificationService]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedModule,
        };
    }
}