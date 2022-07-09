import { Component, EventEmitter, forwardRef, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";

@Component({
    selector: 'app-datepicker-wrapper',
    templateUrl: './datepicker-wrapper.html',
    providers: [
        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatepickerWrapperComponent), multi: true },
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => DatepickerWrapperComponent), multi: true }
    ]
})
export class DatepickerWrapperComponent implements OnInit, OnChanges {

    public isOpen: boolean = false;

    constructor(private translate: TranslateService) { }

    ngOnInit(): void {
    }
    
    ngOnChanges(changes: SimpleChanges) {
    }


}