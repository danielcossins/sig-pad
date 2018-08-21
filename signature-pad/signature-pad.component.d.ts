import { EventEmitter, OnInit, ElementRef } from '@angular/core';
export declare class SignaturePadComponent implements OnInit {
    private _el;
    onSave: EventEmitter<{}>;
    onClear: EventEmitter<{}>;
    private _fromDataURL;
    private _fromData;
    _width: number;
    _height: number;
    _hideFooter: boolean;
    _label: string;
    private _canvas;
    private _signaturePad;
    constructor(_el: ElementRef);
    ngOnInit(): void;
    width: number;
    height: number;
    formDataURL: string;
    fromData: string;
    hideFooter: boolean;
    label: string;
    ngAfterViewInit(): void;
    onClearClick(): void;
    onSaveClick(): void;
}
