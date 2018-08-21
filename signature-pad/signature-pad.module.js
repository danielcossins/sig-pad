import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignaturePadComponent } from './signature-pad.component';
import { SignaturePadService } from './signature-pad.service';
var SignaturePadModule = (function () {
    function SignaturePadModule() {
    }
    return SignaturePadModule;
}());
export { SignaturePadModule };
SignaturePadModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [SignaturePadComponent],
                providers: [SignaturePadService],
                exports: [SignaturePadComponent],
                entryComponents: [SignaturePadComponent]
            },] },
];
/** @nocollapse */
SignaturePadModule.ctorParameters = function () { return []; };
//# sourceMappingURL=signature-pad.module.js.map