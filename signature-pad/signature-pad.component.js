import { Component, Output, Input, EventEmitter, ElementRef } from '@angular/core';
import * as SignaturePad from 'signature_pad';
var SignaturePadComponent = (function () {
    function SignaturePadComponent(_el) {
        this._el = _el;
        this.onSave = new EventEmitter();
        this.onClear = new EventEmitter();
        this._width = 200;
        this._height = 200;
        this._label = 'Sign above';
    }
    SignaturePadComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(SignaturePadComponent.prototype, "width", {
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePadComponent.prototype, "height", {
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePadComponent.prototype, "formDataURL", {
        set: function (value) {
            this._fromDataURL = value;
            this._signaturePad.fromDataURL(this._fromDataURL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePadComponent.prototype, "fromData", {
        set: function (value) {
            this._fromData = value;
            this._signaturePad.fromData(this._fromData);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePadComponent.prototype, "hideFooter", {
        set: function (value) {
            this._hideFooter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignaturePadComponent.prototype, "label", {
        set: function (value) {
            this._label = value;
        },
        enumerable: true,
        configurable: true
    });
    SignaturePadComponent.prototype.ngAfterViewInit = function () {
        this._canvas = this._el.nativeElement.querySelector("canvas");
        this._signaturePad = new SignaturePad.default(this._canvas);
    };
    SignaturePadComponent.prototype.onClearClick = function () {
        this._signaturePad.clear();
        this.onClear.emit();
    };
    SignaturePadComponent.prototype.onSaveClick = function () {
        this.onSave.emit(this._signaturePad.toDataURL());
    };
    return SignaturePadComponent;
}());
export { SignaturePadComponent };
SignaturePadComponent.decorators = [
    { type: Component, args: [{
                selector: 'signature-pad,[SignaturePad]',
                template: "\n    <div id=\"signature-pad\" class=\"m-signature-pad\" [style.width.px]=\"_width\" [style.height.px]=\"_height\">\n    <div class=\"m-signature-pad--body\" [style.width.px]=\"_width-40\" [style.height.px]=\"_height-40\">\n       <canvas [width]=\"_width-40\" [height]=\"_height-40\" style=\"touch-action: none;\"></canvas>\n    </div>\n    <div class=\"m-signature-pad--footer\" [hidden]=\"_hideFooter\">\n      <div class=\"description\">{{_label}}</div>\n      <button type=\"button\" class=\"button clear\" data-action=\"clear\" (click)=\"onClearClick()\">Clear</button>\n      <button type=\"button\" class=\"button save\" data-action=\"save\" (click)=\"onSaveClick()\">Save</button>\n    </div>\n  </div>\n ",
                styles: ["\n.m-signature-pad {\n  position: relative;\n  font-size: 10px;\n  border: 1px solid #e8e8e8;\n  background-color: #fff;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.27), 0 0 40px rgba(0, 0, 0, 0.08) inset;\n  border-radius: 4px;\n}\n\n.m-signature-pad:before, \n.m-signature-pad:after {\n\tposition: absolute;\n  z-index: -1;\n  content: \"\";\n\twidth: 40%;\n\theight: 10px;\n\tleft: 20px;\n\tbottom: 10px;\n\tbackground: transparent;\n\t-webkit-transform: skew(-3deg) rotate(-3deg);\n\t-moz-transform: skew(-3deg) rotate(-3deg);\n\t-ms-transform: skew(-3deg) rotate(-3deg);\n\t-o-transform: skew(-3deg) rotate(-3deg);\n\ttransform: skew(-3deg) rotate(-3deg);\n\tbox-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);\n}\n\n.m-signature-pad:after {\n\tleft: auto;\n\tright: 20px;\n\t-webkit-transform: skew(3deg) rotate(3deg);\n\t-moz-transform: skew(3deg) rotate(3deg);\n\t-ms-transform: skew(3deg) rotate(3deg);\n\t-o-transform: skew(3deg) rotate(3deg);\n\ttransform: skew(3deg) rotate(3deg);\n}\n\n.m-signature-pad--body {\n  padding: 20px;\n  // border: 1px solid #f4f4f4;\n}\n\n.m-signature-pad--body\n  canvas {\n    border-radius: 4px;\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;\n  }\n\n.m-signature-pad--footer {\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  bottom: 20px;\n  height: 40px;\n}\n\n.m-signature-pad--footer\n  .description {\n    color: #C3C3C3;\n    text-align: center;\n    font-size: 1.2em;\n    margin-top: 1.8em;\n  }\n\n.m-signature-pad--footer\n  .button {\n    position: absolute;\n    bottom: 0;\n  }\n\n.m-signature-pad--footer\n  .button.clear {\n    left: 0;\n  }\n\n.m-signature-pad--footer\n  .button.save {\n    right: 0;\n  }\n\n// @media screen and (max-width: 1024px) {\n//   .m-signature-pad {\n//     // top: 0;\n//     // left: 0;\n//     // right: 0;\n//     // bottom: 0;\n//     // width: auto;\n//     // height: auto;\n//     // min-width: 250px;\n//     // min-height: 140px;\n//     // margin: 5%;\n//   }\n//   #github {\n//     display: none;\n//   }\n// }\n\n// @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {\n//   .m-signature-pad {\n//     margin: 10%;\n//   }\n// }\n\n// @media screen and (max-height: 320px) {\n//   .m-signature-pad--body {\n//     left: 0;\n//     right: 0;\n//     top: 0;\n//     bottom: 32px;\n//   }\n//   .m-signature-pad--footer {\n//     left: 20px;\n//     right: 20px;\n//     bottom: 4px;\n//     height: 28px;\n//   }\n//   .m-signature-pad--footer\n//     .description {\n//       font-size: 1em;\n//       margin-top: 1em;\n//     }\n// }\n\n  "]
            },] },
];
/** @nocollapse */
SignaturePadComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
SignaturePadComponent.propDecorators = {
    'onSave': [{ type: Output },],
    'onClear': [{ type: Output },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'formDataURL': [{ type: Input },],
    'fromData': [{ type: Input },],
    'hideFooter': [{ type: Input },],
    'label': [{ type: Input },],
};
//# sourceMappingURL=signature-pad.component.js.map