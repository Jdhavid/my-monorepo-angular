import { CommonModule } from "@angular/common";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from "@angular/core";
import { TranslateModule } from '@ngx-translate/core';
import { AlertNotificationComponent } from "./services/alert-notification/alert-notification-component/alert-notification.component";
import { AlertNotificationService } from "./services/alert-notification/alert-notification.services";

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [
        AlertNotificationComponent
    ],
    exports: [
        AlertNotificationComponent
    ],
    entryComponents: [
        AlertNotificationComponent
    ],
    providers: [AlertNotificationService],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule
        }
    }
}