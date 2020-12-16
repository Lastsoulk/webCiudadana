(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XlM":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/conversations.service */ "c8hb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");






const _c0 = ["message"];
const _c1 = ["scrollMe"];
const _c2 = ["messageContainer"];
function ChatComponent_div_5_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mensaje_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mensaje_r9.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, mensaje_r9.timestamp * 1000, "HH:mm"));
} }
function ChatComponent_div_5_div_3_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mensaje_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", mensaje_r9.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, mensaje_r9.timestamp * 1000, "HH:mm"));
} }
function ChatComponent_div_5_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChatComponent_div_5_div_3_ng_template_3_div_0_Template, 6, 5, "div", 13);
} if (rf & 2) {
    const mensaje_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r9.sender_user == "user");
} }
function ChatComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatComponent_div_5_div_3_div_2_Template, 6, 5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_5_div_3_ng_template_3_Template, 1, 1, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mensaje_r9 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", mensaje_r9.sender_user == "admin")("ngIfElse", _r12);
} }
function ChatComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ChatComponent_div_5_div_3_Template, 5, 2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.conversaciones);
} }
function ChatComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NO TIENES MENSAJES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_input_13_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ChatComponent_input_13_Template_input_valueChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.mensaje = $event; })("keyup", function ChatComponent_input_13_Template_input_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.toogle_buton($event); })("change", function ChatComponent_input_13_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.toogle_buton($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r3.mensaje);
} }
function ChatComponent_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 31);
} }
function ChatComponent_div_15_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Mensaje...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ChatComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatComponent_div_15_label_1_Template, 2, 0, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.disabled);
} }
function ChatComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChatComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enviar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r6.disabled);
} }
class ChatComponent {
    constructor(elementRef, Service) {
        this.elementRef = elementRef;
        this.Service = Service;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.conversaciones = [];
        this.mensaje = "";
        this.disabled = true;
    }
    statusConversations(status) {
        let payloadObjectConversation = { status: status };
        this.status = status;
        this.Service.statusChat(payloadObjectConversation, this.Id);
    }
    getStatusChat() {
        this.Service.getStatusChat(this.Id).subscribe((estado) => {
            this.status = estado.payload.data()["status"];
        });
    }
    getConversations() {
        this.Service.getMessages(this.Id).snapshotChanges().subscribe((mensajes) => {
            this.conversaciones = [];
            mensajes.forEach((mensaje) => {
                var mensaje = mensaje.payload.doc.data();
                this.conversaciones.push(mensaje);
                console.log(mensaje);
            });
        });
    }
    ngOnInit() {
        console.log("soy el chat ");
        console.log(this.chat);
        this.Id = this.chat.Id;
        this.type = this.chat.type;
        this.getConversations();
        this.getStatusChat();
    }
    ngAfterViewInit() {
        this.scrollToBottom(); // carga antes
        this.messageContainers.changes.subscribe((list) => {
            this.scrollToBottom(); // al añadir
        });
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    toogle_buton(event) {
        this.mensaje = event.target.value;
        if (this.mensaje) {
            this.disabled = false;
        }
        else {
            this.disabled = true;
        }
    }
    sendMessage() {
        this.messageEvent.emit(this.mensaje);
        this.mensaje = "";
        this.inputElement.nativeElement.focus();
    }
}
ChatComponent.ɵfac = function ChatComponent_Factory(t) { return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_1__["ConversationsService"])); };
ChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatComponent, selectors: [["app-chat"]], viewQuery: function ChatComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messageContainers = _t);
    } }, inputs: { chat: "chat" }, outputs: { messageEvent: "messageEvent" }, decls: 20, vars: 6, consts: [["rel", "stylesheet", "href", "https://fonts.googleapis.com/icon?family=Material+Icons"], ["rel", "stylesheet", "href", "https://code.getmdl.io/1.1.3/material.orange-indigo.min.css"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&lang=en"], ["id", "messages-card-container", 1, "mdl-cell", "mdl-cell--12-col", "mdl-grid"], ["style", "width: 100%;min-height:10px;max-height: 300px; overflow-y: scroll;", 4, "ngIf", "ngIfElse"], ["elsechat", ""], ["id", "messages-card", 1, "mdl-card", "mdl-shadow--2dp", "mdl-cell", "mdl-cell--12-col", "mdl-cell--6-col-tablet", "mdl-cell--12-col-desktop"], [1, "mdl-card__supporting-text", "mdl-color-text--grey-600"], ["id", "messages"], ["id", "message-form", "action", "#"], [1, "mdl-textfield", "mdl-js-textfield", "mdl-textfield--floating-label"], ["class", "mdl-textfield__input", "type", "text", "id", "message", "autocomplete", "off", 3, "value", "valueChange", "keyup", "change", 4, "ngIf"], ["disabled", "", "class", "mdl-textfield__input", "type", "text", "id", "message", "autocomplete", "off", 4, "ngIf"], [4, "ngIf"], ["id", "submit", "type", "submit", "class", "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect", 3, "disabled", "click", 4, "ngIf"], ["id", "must-signin-snackbar", 1, "mdl-js-snackbar", "mdl-snackbar"], [1, "mdl-snackbar__text"], ["type", "button", 1, "mdl-snackbar__action"], [2, "width", "100%", "min-height", "10px", "max-height", "300px", "overflow-y", "scroll"], ["scrollMe", ""], [1, "container", "darker"], [4, "ngFor", "ngForOf"], ["messageContainer", ""], [4, "ngIf", "ngIfElse"], ["elsemensaje", ""], [1, "menssage-left"], [1, "time-left"], [1, "menssage-right"], [1, "time-right"], ["type", "text", "id", "message", "autocomplete", "off", 1, "mdl-textfield__input", 3, "value", "valueChange", "keyup", "change"], ["message", ""], ["disabled", "", "type", "text", "id", "message", "autocomplete", "off", 1, "mdl-textfield__input"], ["class", "mdl-textfield__label", "for", "message", 4, "ngIf"], ["for", "message", 1, "mdl-textfield__label"], ["id", "submit", "type", "submit", 1, "mdl-button", "mdl-js-button", "mdl-button--raised", "mdl-js-ripple-effect", 3, "disabled", "click"]], template: function ChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ChatComponent_div_5_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ChatComponent_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ChatComponent_input_13_Template, 2, 1, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ChatComponent_input_14_Template, 1, 0, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ChatComponent_div_15_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ChatComponent_button_16_Template, 2, 1, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.conversaciones.length != 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    font-family: 'Roboto', 'Helvetica', sans-serif;\r\n  }\r\n\r\n main[_ngcontent-%COMP%], #messages-card[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    padding-bottom: 0;\r\n  }\r\n\r\n #messages-card-container[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    \r\n  }\r\n\r\n #messages-card[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n\r\n .mdl-layout__header-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 15px;\r\n    margin-top: 17px;\r\n  }\r\n\r\n .mdl-grid[_ngcontent-%COMP%] {\r\n    max-width: 1024px;\r\n    margin: auto;\r\n  }\r\n\r\n .material-icons[_ngcontent-%COMP%] {\r\n    font-size: 36px;\r\n    top: 8px;\r\n    position: relative;\r\n  }\r\n\r\n .mdl-layout__header-row[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0 auto;\r\n  }\r\n\r\n .mdl-card__supporting-text[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    height: 100%;\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n  }\r\n\r\n #messages[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    margin-bottom: 10px;\r\n    height: calc(100% - 80px);\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n\r\n #message-filler[_ngcontent-%COMP%] {\r\n    flex-grow: 1;\r\n  }\r\n\r\n .message-container[_ngcontent-%COMP%]:first-of-type {\r\n    border-top-width: 0;\r\n  }\r\n\r\n .message-container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-top: 10px;\r\n    border-top: 1px solid #f3f3f3;\r\n    padding-top: 10px;\r\n    opacity: 0;\r\n    transition: opacity 1s ease-in-out;\r\n  }\r\n\r\n .message-container.visible[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n  }\r\n\r\n .message-container[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\r\n    background-image: url('/images/profile_placeholder.png');\r\n    background-repeat: no-repeat;\r\n    width: 30px;\r\n    height: 30px;\r\n    background-size: 30px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n .message-container[_ngcontent-%COMP%]   .spacing[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    vertical-align: top;\r\n  }\r\n\r\n .message-container[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\r\n    display: table-cell;\r\n    width: calc(100% - 40px);\r\n    padding: 5px 0 5px 10px;\r\n  }\r\n\r\n .message-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    padding-left: 40px;\r\n    color: #bbb;\r\n    font-style: italic;\r\n    font-size: 12px;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n #message-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: calc(100% - 48px);\r\n    float: left;\r\n  }\r\n\r\n #image-form[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row;\r\n    width: 48px;\r\n    float: right;\r\n  }\r\n\r\n #message-form[_ngcontent-%COMP%]   .mdl-textfield[_ngcontent-%COMP%] {\r\n    width: calc(100% - 100px);\r\n  }\r\n\r\n #message-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], #image-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100px;\r\n    margin: 15px 0 0 10px;\r\n  }\r\n\r\n .mdl-card[_ngcontent-%COMP%] {\r\n    min-height: 0;\r\n  }\r\n\r\n .mdl-card[_ngcontent-%COMP%] {\r\n    background: linear-gradient(white, #f9f9f9);\r\n    justify-content: space-between;\r\n  }\r\n\r\n #user-container[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: row;\r\n    top: 22px;\r\n    width: 100%;\r\n    right: 0;\r\n    padding-left: 10px;\r\n    justify-content: flex-end;\r\n    padding-right: 10px;\r\n  }\r\n\r\n #user-container[_ngcontent-%COMP%]   #user-pic[_ngcontent-%COMP%] {\r\n    top: -3px;\r\n    position: relative;\r\n    display: inline-block;\r\n    background-image: url('/images/profile_placeholder.png');\r\n    background-repeat: no-repeat;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-size: 40px;\r\n    border-radius: 20px;\r\n  }\r\n\r\n #user-container[_ngcontent-%COMP%]   #user-name[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    line-height: 36px;\r\n    padding-right: 10px;\r\n    padding-left: 20px;\r\n  }\r\n\r\n #image-form[_ngcontent-%COMP%]   #submitImage[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    padding: 0 6px 0 1px;\r\n    min-width: 0;\r\n  }\r\n\r\n #image-form[_ngcontent-%COMP%]   #submitImage[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    top: -1px;\r\n  }\r\n\r\n .message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    max-height: 200px;\r\n  }\r\n\r\n #mediaCapture[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n\r\n @media screen and (max-width: 610px) {\r\n    header[_ngcontent-%COMP%] {\r\n      height: 113px;\r\n      padding-bottom: 80px !important;\r\n    }\r\n    #user-container[_ngcontent-%COMP%] {\r\n      top: 72px;\r\n      background-color: rgb(3,155,229);\r\n      height: 38px;\r\n      padding-top: 3px;\r\n      padding-right: 2px;\r\n    }\r\n    #user-container[_ngcontent-%COMP%]   #user-pic[_ngcontent-%COMP%] {\r\n      top: 2px;\r\n      width: 33px;\r\n      height: 33px;\r\n      background-size: 33px;\r\n    }\r\n  }\r\n\r\n .mdl-textfield__label[_ngcontent-%COMP%]:after {\r\n    background-color: #0288D1;\r\n  }\r\n\r\n .mdl-textfield--floating-label.is-focused[_ngcontent-%COMP%]   .mdl-textfield__label[_ngcontent-%COMP%] {\r\n    color: #0288D1;\r\n  }\r\n\r\n .mdl-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n    top: -1px;\r\n    margin-right: 5px;\r\n  }\r\n\r\n .container[_ngcontent-%COMP%] {\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  display: grid;\r\n}\r\n\r\n .darker[_ngcontent-%COMP%] {\r\n  border-color: #ccc;\r\n  background-color: #ddd;\r\n}\r\n\r\n .menssage-right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n .menssage-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n  border: 2px solid #dedede;\r\n  background-color: #f1f1f1;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n}\r\n\r\n .time-right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  color: #aaa;\r\n  padding-left: 2px;\r\n}\r\n\r\n .envio[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\r\n\r\n .mensaje[_ngcontent-%COMP%]{\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0VBY0U7O0NBRUQ7SUFDRyw4Q0FBOEM7RUFDaEQ7O0NBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0VBQ25COztDQUNBO0lBQ0UsaUJBQWlCOztFQUVuQjs7Q0FDQTtJQUNFLGdCQUFnQjtFQUNsQjs7Q0FDQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7O0NBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztDQUNBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixrQkFBa0I7RUFDcEI7O0NBQ0E7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjs7Q0FDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7Q0FDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0NBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0NBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0NBQ0E7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGtDQUFrQztFQUNwQzs7Q0FDQTtJQUNFLFVBQVU7RUFDWjs7Q0FDQTtJQUNFLHdEQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztDQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7Q0FDQTtJQUNFLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsdUJBQXVCO0VBQ3pCOztDQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0VBQ3hCOztDQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsV0FBVztFQUNiOztDQUNBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztDQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztDQUNBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2Qjs7Q0FDQTtJQUNFLGFBQWE7RUFDZjs7Q0FDQTtJQUNFLDJDQUEyQztJQUMzQyw4QkFBOEI7RUFDaEM7O0NBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjs7Q0FDQTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHdEQUF3RDtJQUN4RCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsbUJBQW1CO0VBQ3JCOztDQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0VBQ3BCOztDQUNBO0lBQ0UsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixZQUFZO0VBQ2Q7O0NBQ0E7SUFDRSxTQUFTO0VBQ1g7O0NBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztDQUNBO0lBQ0UsYUFBYTtFQUNmOztDQUNBO0lBQ0U7TUFDRSxhQUFhO01BQ2IsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSxTQUFTO01BQ1QsZ0NBQWdDO01BQ2hDLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsa0JBQWtCO0lBQ3BCO0lBQ0E7TUFDRSxRQUFRO01BQ1IsV0FBVztNQUNYLFlBQVk7TUFDWixxQkFBcUI7SUFDdkI7RUFDRjs7Q0FDQTtJQUNFLHlCQUF5QjtFQUMzQjs7Q0FDQTtJQUNFLGNBQWM7RUFDaEI7O0NBQ0E7SUFDRSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztDQUdGO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7Q0FDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7O0NBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztDQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7Q0FDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztDQUVBO0VBQ0UsWUFBWTtBQUNkOztDQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuXHJcbiBodG1sLCBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIG1haW4sICNtZXNzYWdlcy1jYXJkIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAjbWVzc2FnZXMtY2FyZC1jb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBcclxuICB9XHJcbiAgI21lc3NhZ2VzLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLm1kbC1sYXlvdXRfX2hlYWRlci1yb3cgc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiAgfVxyXG4gIC5tZGwtZ3JpZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbiAgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAubWRsLWxheW91dF9faGVhZGVyLXJvdyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIC5tZGwtY2FyZF9fc3VwcG9ydGluZy10ZXh0IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICB9XHJcbiAgI21lc3NhZ2VzIHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAjbWVzc2FnZS1maWxsZXIge1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gIH1cclxuICAubWVzc2FnZS1jb250YWluZXI6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItdG9wLXdpZHRoOiAwO1xyXG4gIH1cclxuICAubWVzc2FnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmM2YzZjM7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAubWVzc2FnZS1jb250YWluZXIudmlzaWJsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAubWVzc2FnZS1jb250YWluZXIgLnBpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9pbWFnZXMvcHJvZmlsZV9wbGFjZWhvbGRlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIC5tZXNzYWdlLWNvbnRhaW5lciAuc3BhY2luZyB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5tZXNzYWdlIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgICBwYWRkaW5nOiA1cHggMCA1cHggMTBweDtcclxuICB9XHJcbiAgLm1lc3NhZ2UtY29udGFpbmVyIC5uYW1lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAjbWVzc2FnZS1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ4cHgpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gICNpbWFnZS1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gICNtZXNzYWdlLWZvcm0gLm1kbC10ZXh0ZmllbGQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICB9XHJcbiAgI21lc3NhZ2UtZm9ybSBidXR0b24sICNpbWFnZS1mb3JtIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwIDEwcHg7XHJcbiAgfVxyXG4gIC5tZGwtY2FyZCB7XHJcbiAgICBtaW4taGVpZ2h0OiAwO1xyXG4gIH1cclxuICAubWRsLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHdoaXRlLCAjZjlmOWY5KTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgI3VzZXItY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgdG9wOiAyMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAjdXNlci1jb250YWluZXIgI3VzZXItcGljIHtcclxuICAgIHRvcDogLTNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2ltYWdlcy9wcm9maWxlX3BsYWNlaG9sZGVyLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICB9XHJcbiAgI3VzZXItY29udGFpbmVyICN1c2VyLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuICAjaW1hZ2UtZm9ybSAjc3VibWl0SW1hZ2Uge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDZweCAwIDFweDtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICB9XHJcbiAgI2ltYWdlLWZvcm0gI3N1Ym1pdEltYWdlIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICB0b3A6IC0xcHg7XHJcbiAgfVxyXG4gIC5tZXNzYWdlIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gICNtZWRpYUNhcHR1cmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgIGhlaWdodDogMTEzcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjdXNlci1jb250YWluZXIge1xyXG4gICAgICB0b3A6IDcycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzLDE1NSwyMjkpO1xyXG4gICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcclxuICAgIH1cclxuICAgICN1c2VyLWNvbnRhaW5lciAjdXNlci1waWMge1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgICAgd2lkdGg6IDMzcHg7XHJcbiAgICAgIGhlaWdodDogMzNweDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAzM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubWRsLXRleHRmaWVsZF9fbGFiZWw6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAyODhEMTtcclxuICB9XHJcbiAgLm1kbC10ZXh0ZmllbGQtLWZsb2F0aW5nLWxhYmVsLmlzLWZvY3VzZWQgLm1kbC10ZXh0ZmllbGRfX2xhYmVsIHtcclxuICAgIGNvbG9yOiAjMDI4OEQxO1xyXG4gIH1cclxuICAubWRsLWJ1dHRvbiAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgdG9wOiAtMXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgfVxyXG5cclxuICBcclxuLmNvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuLmRhcmtlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuLm1lbnNzYWdlLXJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5tZW5zc2FnZS1sZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuLnRpbWUtcmlnaHQge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogI2FhYTtcclxuICBwYWRkaW5nLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmVudmlvIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZW5zYWple1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat',
                templateUrl: './chat.component.html',
                styleUrls: ['./chat.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_1__["ConversationsService"] }]; }, { inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['message']
        }], messageEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], chat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollMe']
        }], messageContainers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["messageContainer"]
        }] }); })();


/***/ }),

/***/ "+eSH":
/*!*********************************************************!*\
  !*** ./src/app/campanas/campanas/campanas.component.ts ***!
  \*********************************************************/
/*! exports provided: Campana */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Campana", function() { return Campana; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _services_fire_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fire-base.service */ "z58/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "PDjf");











function Campana_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Campana_mat_grid_tile_4_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const key_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.redirectCampaignDetail({ campaignId: key_r1.campaignId }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", key_r1.campaignPic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Followers: ", key_r1.numFollowers, "");
} }
class Campana {
    constructor(firestore, firestoreService, router, AuthService) {
        this.firestore = firestore;
        this.firestoreService = firestoreService;
        this.router = router;
        this.AuthService = AuthService;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.myArray = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.dataSource2 = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.campaigns = [];
        this.campaigns2 = [];
        this.categories = [];
        this.producto = [{ name: 'campana adam', numFollowers: 2 }];
        this.doFilter = (value) => {
            this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
    }
    getCampaigns() {
        this.firestoreService.getCampanasActivas().subscribe((campaignsSnapshot) => {
            this.campaigns = [];
            this.categories = [];
            campaignsSnapshot.forEach((campaign) => {
                this.campaigns.push({
                    campaignInfo: campaign.payload.doc.data(),
                    campaignPic: campaign.payload.doc.data().campaignPic,
                    category: campaign.payload.doc.data().categories,
                    //campaignId: campaign.payload.doc.data().campaignId,
                    //campaignUpdateId: campaign.payload.doc.id,
                    campaignId: campaign.payload.doc.id,
                    name: campaign.payload.doc.data().name,
                    description: campaign.payload.doc.data().description,
                    promoter: campaign.payload.doc.data().promoter,
                    categories: campaign.payload.doc.data().categories,
                    dateStart: campaign.payload.doc.data().dateStart,
                    numFollowers: campaign.payload.doc.data().numFollowers,
                    state: campaign.payload.doc.data().state,
                });
            });
            //console.log("this.campaigns", this.campaigns);
            // this.dataSource.data = this.campaigns as Campaign[];
        }), (error) => {
            console.log("Error al cargar las campañas", error);
        };
    }
    crearCampaign() {
        console.log('Aqui llamaremos');
        console.log(this.producto);
        this.firestoreService.crearCampaña(this.producto);
        // .subscribe(
        //   (response)=>console.log(response),
        //   (error)=>{
        //       console.log('error de crear1');
        //       console.log(error);
        //   }
        // )
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getCampaigns();
            this.crearCampaign();
        });
    }
    redirectCampaignDetail(value) {
        let campaignId = value.campaignId;
        //  console.log("aqui abajo",bandera)
        let navigationExtras = {
            queryParams: {
                "camp": JSON.stringify(campaignId),
                "misCampanas": false,
                "estadoCampana": false
                // "estadoNegado": bandera,
            }
        };
        this.router.navigate(["detalleCampana"], navigationExtras);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
Campana.ɵfac = function Campana_Factory(t) { return new (t || Campana)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fire_base_service__WEBPACK_IMPORTED_MODULE_4__["FireBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
Campana.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Campana, selectors: [["campanas"]], decls: 5, vars: 1, consts: [["id", "campa\u00F1areciente"], [2, "width", "240px", "height", "5px", "background", "#00A6FF", "margin-left", "1.5em"], ["cols", "3", "rowHeight", "600px", 2, "margin-bottom", "1em"], [4, "ngFor", "ngForOf"], [1, "example-card", "tarjeta", 2, "margin-right", "2em", 3, "click"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/images.jpg)"], [1, "container", 2, "margin-top", "5%", "padding-left", "0", "padding-right", "0", "text-align", "center"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", "width", "367.737", "height", "294.188", 3, "src"], [1, "content"], [2, "font-size", "17.2px"], ["id", "divAbajo"]], template: function Campana_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Campa\u00F1as Cerca de Ti");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Campana_mat_grid_tile_4_Template, 16, 5, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.campaigns);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_7__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardImage"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n  }\r\n  \r\n  #fila1[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-bottom: 0.5em;\r\n  margin-left: 2em;\r\n  margin-right: 2em;\r\n  }\r\n  \r\n  #campa\u00F1areciente[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.5em;\r\n  margin-block-start: 0.83em;\r\n  margin-inline-start: 0px;\r\n  margin-inline-end: 0px;\r\n  margin-left: 1em;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n  width: 100%;\r\n  }\r\n  \r\n  .mat-card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer), .mat-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer) {\r\n  margin-top: 1.5em;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    border-radius: 5%;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    margin-top: 2.5%;\r\n    margin-bottom: 2.5%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .tarjeta[_ngcontent-%COMP%]{\r\n    border: 2px solid red;\r\n    border-radius: 25px;\r\n  }\r\n  \r\n  #divAbajo[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    border-radius: 15px;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFuYXMvY2FtcGFuYXMvY2FtcGFuYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtFQUNBLG1GQUFtRjtFQUNuRixzQkFBc0I7RUFDdEI7O0VBQ0E7RUFDQSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakI7O0VBQ0E7RUFDQSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQjs7RUFFQTtFQUNBLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYOztFQUVBO0VBQ0EsaUJBQWlCO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFuYXMvY2FtcGFuYXMvY2FtcGFuYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAjZmlsYTEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgfVxyXG4gICNjYW1wYcOxYXJlY2llbnRlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtY2FyZD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3RlciksIC5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XHJcbiAgbWFyZ2luLXRvcDogMS41ZW07XHJcbiAgfVxyXG5cclxuICAuYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweCAzMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA0cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50YXJqZXRhe1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcblxyXG4gICNkaXZBYmFqb3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Campana, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'campanas',
                templateUrl: './campanas.component.html',
                styleUrls: ['./campanas.component.css'],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _services_fire_base_service__WEBPACK_IMPORTED_MODULE_4__["FireBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lfmon\Desktop\Proyecto Comunitarias\ProyectoComunitarias\src\main.ts */"zUnb");


/***/ }),

/***/ "05UE":
/*!***************************************************************!*\
  !*** ./src/app/campanas/misCampanas/misCampanas.component.ts ***!
  \***************************************************************/
/*! exports provided: misCampanas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "misCampanas", function() { return misCampanas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _services_fire_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/fire-base.service */ "z58/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "PDjf");














function misCampanas_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", estado_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", estado_r3, " ");
} }
function misCampanas_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Lo sentimos, no hay campa\u00F1as registradas a\u00FAn.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function misCampanas_mat_grid_list_13_mat_grid_tile_1_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado: Negada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function misCampanas_mat_grid_list_13_mat_grid_tile_1_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado: Pendiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function misCampanas_mat_grid_list_13_mat_grid_tile_1_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado: Aprobada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function misCampanas_mat_grid_list_13_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function misCampanas_mat_grid_list_13_mat_grid_tile_1_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const key_r5 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.redirectCampaignDetail({ campaignId: key_r5.campaignId, estadoCampana: key_r5.state.rejected }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, misCampanas_mat_grid_list_13_mat_grid_tile_1_p_16_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, misCampanas_mat_grid_list_13_mat_grid_tile_1_p_17_Template, 2, 0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, misCampanas_mat_grid_list_13_mat_grid_tile_1_p_18_Template, 2, 0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", key_r5.campaignPic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](key_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Followers: ", key_r5.numFollowers, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", key_r5.state.rejected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", key_r5.state.waiting);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", key_r5.state.running);
} }
function misCampanas_mat_grid_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-grid-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, misCampanas_mat_grid_list_13_mat_grid_tile_1_Template, 19, 8, "mat-grid-tile", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.campaigns);
} }
class misCampanas {
    constructor(firestore, firestoreService, router, AuthService) {
        this.firestore = firestore;
        this.firestoreService = firestoreService;
        this.router = router;
        this.AuthService = AuthService;
        this.condicioncampanavacia = false;
        this.myArray = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.campaigns = [];
        this.categories = [];
        this.estadoCampana = "";
        this.arregloEstados = ["negadas", "pendientes", "aprobadas", "todas"];
        // public usuario;
        // public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
        this.user$ = this.AuthService.afAuth.user;
        this.doFilter = (value) => {
            this.dataSource.filter = value.trim().toLocaleLowerCase();
        };
        this.ciudades = [
            { value: 'ciudad-0', viewValue: 'Guayaquil' },
            { value: 'ciudad-1', viewValue: 'Quito' },
            { value: 'ciudad-2', viewValue: 'Cuenca' }
        ];
    }
    getCampaigns(estado) {
        // estado.subscribe(res=>{
        //     this.estadoCampana = estado;
        this.firestoreService.getCampañasUsuario(estado, this.datosUsuario).subscribe((campaignsSnapshot) => {
            this.campaigns = [];
            this.categories = [];
            campaignsSnapshot.forEach((campaign) => {
                this.campaigns.push({
                    campaignInfo: campaign.payload.doc.data(),
                    campaignPic: campaign.payload.doc.data().campaignPic,
                    category: campaign.payload.doc.data().categories,
                    campaignId: campaign.payload.doc.id,
                    //campaignUpdateId: campaign.payload.doc.id,
                    name: campaign.payload.doc.data().name,
                    description: campaign.payload.doc.data().description,
                    promoter: campaign.payload.doc.data().promoter,
                    categories: campaign.payload.doc.data().categories,
                    dateStart: campaign.payload.doc.data().dateStart,
                    numFollowers: campaign.payload.doc.data().numFollowers,
                    state: campaign.payload.doc.data().state,
                });
            });
            console.log("this.campaigns", this.campaigns);
            console.log(this.campaigns.length);
            console.log("aplicado el filtro");
            if (this.campaigns.length == 0) {
                this.condicioncampanavacia = true;
            }
            else {
                this.condicioncampanavacia = false;
            }
            // this.dataSource.data = this.campaigns as Campaign[];
        }, (error) => {
            console.log("Error al cargar las campañas", error);
        });
        // });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.AuthService.getCurrentUser();
            this.datosUsuario = user.uid;
            console.log('user: ', this.datosUsuario);
            this.getCampaigns(this.estadoCampana);
            // const user = await this.AuthService.getCurrentUser();
            //     this.user$.subscribe(res=>{
            //     this.usuario = res;
            //     }
            //)
            this.dataSource.filterPredicate = (data, filter) => {
                const dataStr = Object.keys(data).reduce((currentTerm, key) => {
                    console.log(data[key]);
                    return (currentTerm + data[key]);
                }, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                const transformedFilter = filter.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                return dataStr.indexOf(transformedFilter) != -1;
            };
        });
    }
    redirectCampaignDetail(value) {
        let campaignId = value.campaignId;
        let estadoCampana = value.estadoCampana;
        console.log('aca: ', estadoCampana);
        let navigationExtras = {
            queryParams: {
                "camp": JSON.stringify(campaignId),
                "estadoCampana": estadoCampana,
            }
        };
        this.router.navigate(["detalleCampana"], navigationExtras);
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    cambiarPestana(pestana) {
        //     let campaignId = value.campaignId;
        //   //  let campaignUpdateId = value.campaignUpdateId;
        //     let data = {'camp':campaignId}//'upd':campaignUpdateId}
        let navigationExtras = {
            queryParams: {
                pestana: pestana,
            }
        };
        this.router.navigate([pestana], navigationExtras);
    }
}
misCampanas.ɵfac = function misCampanas_Factory(t) { return new (t || misCampanas)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fire_base_service__WEBPACK_IMPORTED_MODULE_4__["FireBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
misCampanas.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: misCampanas, selectors: [["mis-campanas"]], decls: 14, vars: 3, consts: [["id", "campa\u00F1areciente"], [1, "example-container", 2, "display", "flex", "margin-top", "1em"], [2, "font-size", "larger", "margin-top", "1em", "margin-right", "1em", "margin-left", "1em"], ["appearance", "fill"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "divBoton"], [1, "button", 3, "click"], [2, "width", "35%", "height", "5px", "background", "#00A6FF", "margin-left", "1.5em"], ["style", "text-align: center;", 4, "ngIf"], ["cols", "3", "rowHeight", "600px", "style", "margin-bottom: 1em;", 4, "ngIf"], [3, "value"], [2, "text-align", "center"], [2, "font-size", "xx-large", "color", "#00A6FF", "margin-top", "2em"], ["width", "622px!important", "height", "378px", "src", "assets/img/search-concept-landing-page.jpg", 2, "width", "622px!important"], ["cols", "3", "rowHeight", "600px", 2, "margin-bottom", "1em"], [4, "ngFor", "ngForOf"], [1, "example-card", "tarjeta", 2, "margin-right", "2em", 3, "click"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/images.jpg)"], [1, "container", 2, "margin-top", "5%", "padding-left", "0", "padding-right", "0", "text-align", "center"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", "width", "367.737", "height", "294.188", 3, "src"], [1, "content"], [2, "font-size", "17.2px"], ["id", "divAbajo"], ["style", "font-size: 17.2px; color:red ", 4, "ngIf"], ["style", "font-size: 17.2px; color: yellow", 4, "ngIf"], ["style", "font-size: 17.2px; color: green", 4, "ngIf"], [2, "font-size", "17.2px", "color", "red"], [2, "font-size", "17.2px", "color", "yellow"], [2, "font-size", "17.2px", "color", "green"]], template: function misCampanas_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mis Campa\u00F1as");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Selecciona un estado de la campa\u00F1a:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function misCampanas_Template_mat_select_selectionChange_6_listener($event) { return ctx.getCampaigns($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, misCampanas_mat_option_7_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function misCampanas_Template_button_click_9_listener() { return ctx.cambiarPestana("crearCampana"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Crear campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, misCampanas_div_12_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, misCampanas_mat_grid_list_13_Template, 2, 1, "mat-grid-list", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.arregloEstados);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.condicioncampanavacia);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.condicioncampanavacia);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_11__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardImage"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n  }\r\n  \r\n  #fila1[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-bottom: 0.5em;\r\n  margin-left: 2em;\r\n  margin-right: 2em;\r\n  }\r\n  \r\n  #campa\u00F1areciente[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.5em;\r\n  margin-block-start: 0.83em;\r\n  margin-inline-start: 0px;\r\n  margin-inline-end: 0px;\r\n  margin-left: 1em;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n  width: 100%;\r\n  }\r\n  \r\n  .mat-card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer), .mat-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer) {\r\n  margin-top: 1.5em;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    border-radius: 5%;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    margin-top: 2.5%;\r\n    margin-bottom: 2.5%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .tarjeta[_ngcontent-%COMP%]{\r\n    border: 2px solid black;\r\n    border-radius: 25px;\r\n  }\r\n  \r\n  #divAbajo[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    border-radius: 15px;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    margin-right: 150px;\r\n    border-radius: 4px;\r\n    background-color: #f4511e;\r\n    margin-left: 150px;\r\n    \r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 21px;\r\n    padding: 10px;\r\n    width: 200px;\r\n    \r\n    margin: 5px;\r\n  }\r\n  \r\n  #divBoton[_ngcontent-%COMP%]{\r\n    margin-left: 5%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFuYXMvbWlzQ2FtcGFuYXMvbWlzQ2FtcGFuYXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtFQUNBLG1GQUFtRjtFQUNuRixzQkFBc0I7RUFDdEI7O0VBQ0E7RUFDQSxvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakI7O0VBQ0E7RUFDQSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQjs7RUFFQTtFQUNBLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYOztFQUVBO0VBQ0EsaUJBQWlCO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixjQUFjO0VBQ2hCOztFQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFlBQVk7SUFDWjtzQkFDa0I7SUFDbEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFHRjs7Ozs7Ozs7Ozs7OztHQWFHOztFQUVIOzs7Ozs7Ozs7MkVBUzJFOztFQUUzRTs7Ozs7Ozs7Ozs7Ozs7SUFjSSIsImZpbGUiOiJzcmMvYXBwL2NhbXBhbmFzL21pc0NhbXBhbmFzL21pc0NhbXBhbmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgI2ZpbGExIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gIH1cclxuICAjY2FtcGHDsWFyZWNpZW50ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQ+Omxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpLCAubWF0LWNhcmQtY29udGVudD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFyamV0YXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcblxyXG4gICNkaXZBYmFqb3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1yaWdodDogMTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICovXHJcbiAgICBtYXJnaW46IDVweDtcclxuICB9XHJcblxyXG4gICNkaXZCb3RvbntcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICB9XHJcblxyXG4gIFxyXG4vKiAuYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59ICovXHJcblxyXG4vKiAuYnV0dG9uIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5idXR0b24gc3BhbjphZnRlciB7XHJcblxyXG5jb250ZW50OiAnXFwwMGJiJzsgIC8qIEVudGlkYWRlcyBDU1MuIFBhcmEgdXNhciBlbnRpZGFkZXMgSFRNTCwgdXNlICYjODU5NDsqL1xyXG5cclxuLyogcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAtMjBweDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyIHNwYW4ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgb3BhY2l0eTogMTtcclxuICByaWdodDogMDtcclxufSAgKi9cclxuXHJcblxyXG4gIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](misCampanas, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mis-campanas',
                templateUrl: './misCampanas.component.html',
                styleUrls: ['./misCampanas.component.css'],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _services_fire_base_service__WEBPACK_IMPORTED_MODULE_4__["FireBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "1Rba":
/*!*****************************************************!*\
  !*** ./src/app/eventos/eventos/evento.component.ts ***!
  \*****************************************************/
/*! exports provided: Eventos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Eventos", function() { return Eventos; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fire-base.service */ "z58/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");








function Eventos_mat_grid_tile_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Eventos_mat_grid_tile_4_Template_mat_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const key_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.redirectEventDetail({ eventId: key_r1.eventId }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", key_r1.eventPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dia: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 5, key_r1.dateEvent, "yyyy/MM/dd"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Direccion: ", key_r1.address, "");
} }
class Eventos {
    constructor(firestore, firestoreService, router) {
        this.firestore = firestore;
        this.firestoreService = firestoreService;
        this.router = router;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.events = [];
        this.categories = [];
    }
    redirectEventDetail(value) {
        let eventId = value.eventId;
        let navigationExtras = {
            queryParams: {
                "eventId": JSON.stringify(eventId),
            }
        };
        this.router.navigate(["detalleEvento"], navigationExtras);
    }
    getEvents() {
        this.firestoreService.getEvents().subscribe((eventsSnapshot) => {
            this.events = [];
            this.categories = [];
            eventsSnapshot.forEach((event) => {
                this.events.push({
                    name: event.payload.doc.data().name,
                    address: event.payload.doc.data().address,
                    description: event.payload.doc.data().description,
                    eventId: event.payload.doc.id,
                    eventPic: event.payload.doc.data().eventPic,
                    state: event.payload.doc.data().state,
                    dateEvent: event.payload.doc.data().dateEvent,
                });
            });
            console.log("this.events", this.events);
            // this.dataSource.data = this.campaigns as Campaign[];
        }, (error) => {
            console.log("Error al cargar los eventos", error);
        });
    }
    ngOnInit() {
        this.getEvents();
    }
}
Eventos.ɵfac = function Eventos_Factory(t) { return new (t || Eventos)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__["FireBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
Eventos.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Eventos, selectors: [["events"]], decls: 5, vars: 1, consts: [["id", "campa\u00F1areciente"], [2, "width", "240px", "height", "5px", "background", "#00A6FF", "margin-left", "1.5em"], ["cols", "3", "rowHeight", "600px", 2, "margin-bottom", "1em"], [4, "ngFor", "ngForOf"], [1, "example-card", "tarjeta", 2, "margin-right", "2em", 3, "click"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/images.jpg)"], [1, "container", 2, "margin-top", "5%", "padding-left", "0", "padding-right", "0", "text-align", "center"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", "width", "367.737", "height", "294.188", 3, "src"], [1, "content"], [2, "font-size", "17.2px"], ["id", "divAbajo"]], template: function Eventos_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Eventos disponibles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-grid-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Eventos_mat_grid_tile_4_Template, 17, 8, "mat-grid-tile", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 400px;\r\n  }\r\n  \r\n  .example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n  }\r\n  \r\n  #fila1[_ngcontent-%COMP%] {\r\n  display: inline-flex;\r\n  margin-bottom: 0.5em;\r\n  margin-left: 2em;\r\n  margin-right: 2em;\r\n  }\r\n  \r\n  #campa\u00F1areciente[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 1.5em;\r\n  margin-block-start: 0.83em;\r\n  margin-inline-start: 0px;\r\n  margin-inline-end: 0px;\r\n  margin-left: 1em;\r\n  }\r\n  \r\n  img[_ngcontent-%COMP%] {\r\n  vertical-align: middle;\r\n  border-style: none;\r\n  width: 100%;\r\n  }\r\n  \r\n  .mat-card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer), .mat-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer) {\r\n  margin-top: 1.5em;\r\n  }\r\n  \r\n  .button[_ngcontent-%COMP%]{\r\n    background-color: #4CAF50;\r\n    border-radius: 5%;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 4px 2px;\r\n    cursor: pointer;\r\n    margin-top: 2.5%;\r\n    margin-bottom: 2.5%;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .tarjeta[_ngcontent-%COMP%]{\r\n    border: 2px solid green;\r\n    border-radius: 25px;\r\n  }\r\n  \r\n  #divAbajo[_ngcontent-%COMP%]{\r\n    border: 1px solid black;\r\n    border-radius: 15px;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRvcy9ldmVudG9zL2V2ZW50by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0VBQ0EsbUZBQW1GO0VBQ25GLHNCQUFzQjtFQUN0Qjs7RUFDQTtFQUNBLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQjs7RUFDQTtFQUNBLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCOztFQUVBO0VBQ0Esc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1g7O0VBRUE7RUFDQSxpQkFBaUI7RUFDakI7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGNBQWM7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ldmVudG9zL2V2ZW50b3MvZXZlbnRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcbiAgI2ZpbGExIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICBtYXJnaW4tbGVmdDogMmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gIH1cclxuICAjY2FtcGHDsWFyZWNpZW50ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDAuODNlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG4gIH1cclxuICBcclxuICBpbWcge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAubWF0LWNhcmQ+Omxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpLCAubWF0LWNhcmQtY29udGVudD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3Rlcikge1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNHB4IDJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDIuNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG5cclxuICAudGFyamV0YXtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZWVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcblxyXG4gICNkaXZBYmFqb3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Eventos, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'events',
                templateUrl: './evento.component.html',
                styleUrls: ['./evento.component.css'],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _services_fire_base_service__WEBPACK_IMPORTED_MODULE_2__["FireBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "37gU":
/*!***********************************************************!*\
  !*** ./src/app/campanas/crearCampana/dialog.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogContentExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogContentExampleDialog", function() { return DialogContentExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-animations */ "6Z0Z");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _components_successicon_success_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/successicon/success-icon.component */ "Swk/");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");






class DialogContentExampleDialog {
    constructor() {
        this.animationState = false;
    }
    animate() {
        this.animationState = !this.animationState;
    }
    ngAfterViewInit() {
        this.animate();
    }
}
DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
DialogContentExampleDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogContentExampleDialog, selectors: [["dialog-content"]], decls: 9, vars: 2, consts: [[1, "container"], ["mat-dialog-title", ""], [1, "mat-typography"], [1, "angular-img-wrapper", 2, "text-align", "center"], ["align", "center"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A1Campa\u00F1a Creada Exitosamente y en espera de Aprobaci\u00F3n!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-angular-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Continuar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@bounce", ctx.animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _components_successicon_success_icon_component__WEBPACK_IMPORTED_MODULE_3__["AngularImgComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhbmFzL2NyZWFyQ2FtcGFuYS9kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */"], data: { animation: [
            Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["bounceAnimation"])(),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogContentExampleDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dialog-content',
                templateUrl: 'dialog.component.html',
                styleUrls: ['dialog.component.css'],
                animations: [
                    Object(angular_animations__WEBPACK_IMPORTED_MODULE_1__["bounceAnimation"])(),
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5QkE":
/*!***********************************************************************!*\
  !*** ./src/app/cuenta/registrarUsuario/registrarUsuario.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrarUsuario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarUsuario", function() { return RegistrarUsuario; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");



/**
 * @title Card with multiple sections
 */
class RegistrarUsuario {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
}
RegistrarUsuario.ɵfac = function RegistrarUsuario_Factory(t) { return new (t || RegistrarUsuario)(); };
RegistrarUsuario.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegistrarUsuario, selectors: [["registrar-usuario"]], decls: 27, vars: 0, consts: [["id", "titulo"], ["for", "fname", 1, "text"], ["type", "text", "id", "fname", "name", "firstname", "placeholder", "Usuario"], ["type", "text", "id", "fname", "name", "firstname", "placeholder", "Contrase\u00F1a del usuario"], ["type", "text", "id", "fname", "name", "firstname", "placeholder", "Nombre del usuario"], ["for", "lname", 1, "text"], ["type", "text", "id", "lname", "name", "lastname", "placeholder", "Apellido del usuario"], ["type", "text", "id", "lname", "name", "lastname", "placeholder", "Direccion del usaurio"], ["for", "country", 1, "text"], ["type", "text", "id", "lname", "name", "lastname", "placeholder", "Telefono del usuario"], ["for", "img", 1, "text"], ["type", "file", "id", "img", "name", "img", "accept", "image/*"], ["id", "boton"], ["type", "submit", "value", "Registrar Usuario"]], template: function RegistrarUsuario_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Registrar Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apellido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Direccion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Telefono");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Seleccionar imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=file][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n\r\n  \r\n  input[type=submit][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background-color: #45a049;\r\n  }\r\n  \r\n\r\n  \r\n  div[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    background-color: #f2f2f2;\r\n    padding: 20px;\r\n    width: 62%;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n\r\n  \r\n  .text[_ngcontent-%COMP%]{\r\n      margin-top: 1.5%;\r\n  }\r\n  \r\n\r\n  \r\n  #titulo[_ngcontent-%COMP%]{\r\n      margin-top: 2.5%;\r\n      margin-bottom: 2.5%;\r\n      text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n  #boton[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  width: 25%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VlbnRhL3JlZ2lzdHJhclVzdWFyaW8vcmVnaXN0cmFyVXN1YXJpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7OztFQUlBO0lBQ0UsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtFQUNwQjs7OztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOzs7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsY0FBYztFQUNoQjs7OztFQUVBO01BQ0ksZ0JBQWdCO0VBQ3BCOzs7O0VBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLGtCQUFrQjtFQUN0Qjs7OztFQUNGO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jdWVudGEvcmVnaXN0cmFyVXN1YXJpby9yZWdpc3RyYXJVc3VhcmlvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW5wdXRbdHlwZT10ZXh0XSxpbnB1dFt0eXBlPWZpbGVdLCBzZWxlY3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbiAgfVxyXG4gIFxyXG4gIGRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHdpZHRoOiA2MiU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50ZXh0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gIH1cclxuXHJcbiAgI3RpdHVsb3tcclxuICAgICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMi41JTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuI2JvdG9ue1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrarUsuario, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'registrar-usuario',
                templateUrl: './registrarUsuario.component.html',
                styleUrls: ['./registrarUsuario.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: CardFancyExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFancyExample", function() { return CardFancyExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");









function CardFancyExample_ngb_carousel_122_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "First slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nulla vitae elit libero, a pharetra augue mollis interdum.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardFancyExample_ngb_carousel_122_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Second slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r2.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardFancyExample_ngb_carousel_122_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Third slide label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Praesent commodo cursus magna, vel scelerisque nisl consectetur.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CardFancyExample_ngb_carousel_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardFancyExample_ngb_carousel_122_ng_template_1_Template, 7, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardFancyExample_ngb_carousel_122_ng_template_2_Template, 7, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardFancyExample_ngb_carousel_122_ng_template_3_Template, 7, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
/**
 * @title Card with multiple sections
 */
class CardFancyExample {
    constructor(firestore, router) {
        this.firestore = firestore;
        this.router = router;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.myArray = [];
        this.events = [];
    }
    ngOnInit() {
        this.firestore
            .collection("campaigns")
            .get()
            .subscribe((ss) => {
            ss.docs.forEach((doc) => {
                this.myArray.push(doc.data());
            });
        });
        this.firestore
            .collection("events")
            .get()
            .subscribe((ss) => {
            ss.docs.forEach((doc) => {
                this.events.push(doc.data());
            });
        });
    }
    moveToSelectedTab(tabName) {
        for (let i = 0; i < document.querySelectorAll('.mat-tab-label-content').length; i++) {
            if (document.querySelectorAll('.mat-tab-label-content')[i].innerText == tabName) {
                document.querySelectorAll('.mat-tab-label')[i].click();
            }
        }
    }
    cambiarPestana(pestana) {
        //     let campaignId = value.campaignId;
        //   //  let campaignUpdateId = value.campaignUpdateId;
        //     let data = {'camp':campaignId}//'upd':campaignUpdateId}
        let navigationExtras = {
            queryParams: {
                pestana: pestana,
            }
        };
        this.router.navigate([pestana], navigationExtras);
    }
}
CardFancyExample.ɵfac = function CardFancyExample_Factory(t) { return new (t || CardFancyExample)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CardFancyExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardFancyExample, selectors: [["card-fancy-example"]], decls: 123, vars: 25, consts: [["id", "campa\u00F1areciente"], [2, "width", "230px", "height", "5px", "background", "#00A6FF", "margin-left", "4.5em"], ["ng-repeat", "(key, value) in myArray", 2, "display", "flex", "margin-left", "5em", "margin-right", "5em", "margin-top", "1em", "margin-bottom", "1em"], [1, "col-md-4", 2, "margin-right", "2em"], [1, "example-card", 2, "margin-right", "2em"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/images.jpg)"], [1, "container", 2, "margin-top", "0", "padding-left", "0", "padding-right", "0", "text-align", "center"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", "width", "367.737", "height", "294.188", 3, "src"], [1, "content"], [2, "font-size", "12px"], [2, "color", "#13CE66"], [1, "content2"], ["mat-icon-button", "", "aria-label", "Example icon button with a heart icon", 2, "position", "absolute", "top", "0", "color", "white"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/lady.jpg)"], [1, "container", 2, "margin-top", "0", "padding-left", "0", "padding-right", "0", "text-align", "center", 3, "click"], ["mat-icon-button", "", "color", "warn", "aria-label", "Example icon button with a heart icon", 2, "position", "absolute", "top", "0", "left", "20"], [2, "height", "100%"], [1, "example-card", 2, "margin-right", "2em", "height", "100%", "width", "100%", "background", "darkgrey"], [2, "font-size", "xxx-large", "color", "white", "display", "flex", "text-align", "center"], [2, "float", "none", "text-align", "center"], ["mat-raised-button", "", 2, "width", "20em", "height", "3em", "font-size", "medium", 3, "click"], [2, "width", "230px", "height", "5px", "background", "#00A6FF", "margin-left", "4em", "margin-bottom", "0.5em"], [2, "display", "flex", "padding", "2em", "padding-top", "0.5em"], [1, "example-card", 2, "margin-left", "2em", "margin-right", "1em"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/169346.jpg)"], ["mat-card-image", "", "width", "282.400", "height", "211.800", "alt", "Photo of a Shiba Inu", 3, "src"], [2, "display", "flex"], ["mat-button", "", 2, "color", "#00A6FF", "margin-right", "8em"], [2, "font-size", "25px"], [1, "content3", 2, "display", "flex"], ["mat-icon-button", "", "aria-label", "Example icon button with a heart icon", 2, "position", "absolute", "color", "#f44336"], [1, "example-card", 2, "margin-right", "2em", "margin-left", "1em"], ["mat-card-avatar", "", 1, "example-header-image", 2, "background-image", "url(../../assets/img/lady2.jpg)"], [1, "content3"], ["mat-card-avatar", "", 1, "example-header-image"], ["style", "margin-top: 1em;", 4, "ngIf"], [2, "margin-top", "1em"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "Random first slide", 3, "src"], [1, "carousel-caption"], ["alt", "Random second slide", 3, "src"], ["alt", "Random third slide", 3, "src"]], template: function CardFancyExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Campa\u00F1as Recientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFancyExample_Template_div_click_33_listener() { return ctx.moveToSelectedTab("detalleCampana"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u00BFQuieres saber que campa\u00F1as est\u00E1n cerca de ti? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-card-actions", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFancyExample_Template_button_click_53_listener() { return ctx.router.navigate(["/campanas"]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Desc\u00FAbrelo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Eventos Destacados");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-card", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-card-actions", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ver m\u00E1s..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-card-actions", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Ver m\u00E1s..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-card", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-card-actions", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Ver m\u00E1s..");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, CardFancyExample_ngb_carousel_122_Template, 4, 0, "ngb-carousel", 35);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myArray[2].promoter.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ubicaci\u00F3n: ", ctx.myArray[2].zone.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.myArray[2].campaignPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myArray[2].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myArray[2].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.myArray[2].numFollowers, " followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myArray[0].promoter.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ubicaci\u00F3n: ", ctx.myArray[0].zone.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.myArray[0].campaignPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myArray[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.myArray[0].description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.myArray[0].numFollowers, " followers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.events[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.events[0].type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.events[0].eventPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.events[0].description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.events[4].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.events[4].type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.events[4].eventPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.events[4].description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.events[6].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.events[6].type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.events[6].eventPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.events[6].description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\nbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\nbackground-size: cover;\r\n}\r\n\r\n#fila1[_ngcontent-%COMP%] {\r\ndisplay: inline-flex;\r\nmargin-bottom: 0.5em;\r\nmargin-left: 2em;\r\nmargin-right: 2em;\r\n}\r\n\r\n#campa\u00F1areciente[_ngcontent-%COMP%] {\r\ndisplay: block;\r\nfont-size: 1.5em;\r\nmargin-block-start: 0.83em;\r\nmargin-inline-start: 0px;\r\nmargin-inline-end: 0px;\r\nmargin-left: 3em;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\nvertical-align: middle;\r\nborder-style: none;\r\nwidth: 100%;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer), .mat-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer) {\r\nmargin-top: 1.5em;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%]{\r\n  margin-top: 0%;\r\n  height: 100%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {vertical-align: middle;\r\n  padding-top: 1em;}\r\n\r\n.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  background: rgb(0, 0, 0); \r\n  background: rgba(0, 0, 0, 0.6); \r\n  color: #f1f1f1;\r\n  width: 50%;\r\n  padding: 20px;\r\n  height: 75%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .content2[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 0;\r\n  padding: 30px;\r\n  margin-left: 65%;\r\n}\r\n\r\n.material-icons[_ngcontent-%COMP%]{\r\n  font-size: 75px;\r\n}\r\n\r\n.content3[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{\r\n  margin-bottom: 1em;\r\n  font-size: 50px;\r\n}\r\n\r\n.mat-card-image[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7QUFDQSxtRkFBbUY7QUFDbkYsc0JBQXNCO0FBQ3RCOztBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsaUJBQWlCO0FBQ2pCOztBQUNBO0FBQ0EsY0FBYztBQUNkLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLFdBQVc7QUFDWDs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUEsZ0JBQWdCLHNCQUFzQjtFQUNwQyxnQkFBZ0IsQ0FBQzs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLHdCQUF3QixFQUFFLG1CQUFtQjtFQUM3Qyw4QkFBOEIsRUFBRSxzQ0FBc0M7RUFDdEUsY0FBYztFQUNkLFVBQVU7RUFDVixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG5iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4jZmlsYTEge1xyXG5kaXNwbGF5OiBpbmxpbmUtZmxleDtcclxubWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbm1hcmdpbi1sZWZ0OiAyZW07XHJcbm1hcmdpbi1yaWdodDogMmVtO1xyXG59XHJcbiNjYW1wYcOxYXJlY2llbnRlIHtcclxuZGlzcGxheTogYmxvY2s7XHJcbmZvbnQtc2l6ZTogMS41ZW07XHJcbm1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xyXG5tYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbm1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XHJcbm1hcmdpbi1sZWZ0OiAzZW07XHJcbn1cclxuXHJcbmltZyB7XHJcbnZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbmJvcmRlci1zdHlsZTogbm9uZTtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY2FyZD46bGFzdC1jaGlsZDpub3QoLm1hdC1jYXJkLWZvb3RlciksIC5tYXQtY2FyZC1jb250ZW50PjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSB7XHJcbm1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcblxyXG4ubWF0LWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lciBpbWcge3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZy10b3A6IDFlbTt9XHJcblxyXG4uY29udGFpbmVyIC5jb250ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCAwLjUgb3BhY2l0eSAqL1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDc1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuY29udGVudDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICBtYXJnaW4tbGVmdDogNjUlO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnN7XHJcbiAgZm9udC1zaXplOiA3NXB4O1xyXG59XHJcblxyXG4uY29udGVudDMgLm1hdGVyaWFsLWljb25ze1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardFancyExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'card-fancy-example',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AUQW":
/*!*********************************************************************!*\
  !*** ./src/app/campanas/detalleCampana/detalleCampana.component.ts ***!
  \*********************************************************************/
/*! exports provided: DetalleCampana */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCampana", function() { return DetalleCampana; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_fire_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fire-base.service */ "z58/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/conversations.service */ "c8hb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../chat/chat.component */ "+XlM");










function DetalleCampana_div_25_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalleCampana_div_25_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r3.mostrar_chat = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mostrar Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetalleCampana_div_25_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetalleCampana_div_25_ng_container_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r5.mostrar_chat = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ocultar Chat");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-chat", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("messageEvent", function DetalleCampana_div_25_ng_container_2_Template_app_chat_messageEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.sendMessageToConversation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chat", ctx_r2.conversation);
} }
function DetalleCampana_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetalleCampana_div_25_button_1_Template, 2, 0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DetalleCampana_div_25_ng_container_2_Template, 4, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.mostrar_chat);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.mostrar_chat);
} }
// import {firestore} from "@angular/fire/firestore"
// import { firestore } from 'firebase';
// import * as fir from 'firebase/firestore';
//import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase';
// import firestore from "../../../../node_modules/firebase";
// import firestore from "../../../../node_modules/firebase";
/**
 * @title Card with multiple sections
 */
class DetalleCampana {
    constructor(firestoreService, router, route, conversationsService) {
        this.firestoreService = firestoreService;
        this.router = router;
        this.route = route;
        this.conversationsService = conversationsService;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.originalCampaign = undefined;
        this.lastCampaignUpdate = undefined;
        this.categoriesUpdate = [];
        this.categoriesOriginal = [];
        this.conversation = {};
        this.mostrar_chat = false;
        this.miCampanaNegada = false;
    }
    getRouteParams() {
        console.log('aca');
        this.route.queryParams.subscribe(params => {
            this.params = params;
        });
        this.campaignId = this.params.camp.replace("\"", "");
        this.campaignId = this.campaignId.toString().substring(0, this.campaignId.length - 1);
        this.miCampanaNegada = this.params.estadoCampana;
        // this.misCampanas = this.params.misCampanas;
        //console.log("detalle campana hola: ",this.miCampanaNegada);
        // this.campaignUpdateId = this.params.upd;
        //  this.campaignUpdateId = this.params.upd.replace("\"","");   
        //  this.campaignUpdateId = this.campaignUpdateId.toString().substring(0,this.campaignUpdateId.length-1)
        console.log("this.campaignId", this.campaignId);
        console.log("estamos con el valor de aca: ", this.miCampanaNegada);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('aqui');
            this.getRouteParams();
            this.datosconversations();
            // this.getLastCampaignUpdateById(JSON.parse(this.params.upd));
            this.getOriginalCampaignById(JSON.parse(this.params.camp));
            //this.miCampanaNegada = this.misCampanas;
        });
    }
    getOriginalCampaignById(campaignId) {
        this.firestoreService.getOriginalCampaignById(campaignId).subscribe((campaignSnapshot) => {
            this.originalCampaign = campaignSnapshot.payload.data();
            console.log("this.originalCampaign", this.originalCampaign);
        }, (error) => {
            console.log(error);
        });
    }
    sendMessageToConversation($event) {
        console.log('aqi');
        const mensaje_chat = $event;
        console.log(mensaje_chat);
        this.createMessage(mensaje_chat, true);
    }
    ChangexistStatusChat(Id) {
        this.conversationsService.getStatusChat(Id).subscribe((estado) => {
            let status = estado.payload.data()["status"];
            if (status) {
                this.statusConversations(false);
            }
        });
    }
    statusConversations(status) {
        let payloadObjectConversation = { status: status };
        this.conversationsService.statusChat(payloadObjectConversation, this.campaignId);
    }
    createMessage(mensaje, actualizar) {
        //const emisor = this.user$.uid
        //const receptor = this.originalCampaign.promoter.id
        let payloadObject = {
            sender_user: "user",
            message: mensaje,
            timestamp: firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp(),
            receiver_user: "admin",
            check: false
        };
        console.log(payloadObject);
        console.log(this.campaignId);
        // if(!actualizar){
        //   this.conversationsService.createConversation(payloadObject, this.campaignId)
        //   this.statusConversations(true)
        // }else
        this.conversationsService.updateConversation(payloadObject, this.campaignId);
    }
    datosconversations() {
        this.conversation = {
            Id: this.campaignId,
            type: "campaign"
        };
    }
}
DetalleCampana.ɵfac = function DetalleCampana_Factory(t) { return new (t || DetalleCampana)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fire_base_service__WEBPACK_IMPORTED_MODULE_3__["FireBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_5__["ConversationsService"])); };
DetalleCampana.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetalleCampana, selectors: [["detalle-campana"]], decls: 26, vars: 14, consts: [["id", "titulo"], ["id", "mainCampana"], ["id", "campanaFoto"], ["mat-card-image", "", "id", "fotoPerfil", "alt", "Photo of a Shiba Inu", 3, "src"], ["id", "descripcion"], [1, "titulos"], [1, "textoDetalle"], ["id", "divChat", 4, "ngIf"], ["id", "divChat"], ["id", "botonChat", 3, "click", 4, "ngIf"], [4, "ngIf"], ["id", "botonChat", 3, "click"], [3, "click"], [3, "chat", "messageEvent"]], template: function DetalleCampana_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Detalle de campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Promotor de la campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Numero de seguidores");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Inicio-Fin de la campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, DetalleCampana_div_25_Template, 3, 2, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.originalCampaign.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.originalCampaign.campaignPic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.originalCampaign.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.originalCampaign.promoter.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.originalCampaign.numFollowers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](23, 8, ctx.originalCampaign.dateStart.seconds * 1000, "yyyy/MM/dd"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 11, ctx.originalCampaign.dateEnd.seconds * 1000, "yyyy/MM/dd"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.miCampanaNegada);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardImage"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["#titulo[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin-top: 2%;\r\n    margin-bottom: 1.5%;\r\n}\r\n\r\n#campanaFoto[_ngcontent-%COMP%]{\r\n\r\n    width: 32%;\r\n    height: 550px;\r\n    border-radius: 7.5%;\r\n    margin-top: 1.5%;\r\n    \r\n    margin-right: 2;\r\n}\r\n\r\n#fotoPerfil[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n    height: 85%;\r\n    border-radius: 7.5%;\r\n    \r\n}\r\n\r\n#mainCampana[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    display: flex; \r\n    flex-direction: row; \r\n    align-items: center;\r\n    width: 95%;\r\n    justify-content: center;\r\n    align-content: center;\r\n    height: 75%;\r\n    \r\n    \r\n    \r\n\r\n}\r\n\r\n.titulos[_ngcontent-%COMP%]{\r\n    align-items: left;\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n}\r\n\r\n.textoDetalle[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    text-align: left;\r\n}\r\n\r\n#descripcion[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n\r\n#divChat[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    margin: 0 auto;\r\n    margin-top: 1%;\r\n}\r\n\r\n#botonChat[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFuYXMvZGV0YWxsZUNhbXBhbmEvZGV0YWxsZUNhbXBhbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsdUJBQXVCOzs7QUFHM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUciLCJmaWxlIjoic3JjL2FwcC9jYW1wYW5hcy9kZXRhbGxlQ2FtcGFuYS9kZXRhbGxlQ2FtcGFuYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNSU7XHJcbn1cclxuXHJcbiNjYW1wYW5hRm90b3tcclxuXHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbn1cclxuXHJcbiNmb3RvUGVyZmlse1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy41JTtcclxuICAgIFxyXG59XHJcblxyXG4jbWFpbkNhbXBhbmF7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA3LjUlOyAqL1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGl0dWxvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnRleHRvRGV0YWxsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwY2lvbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI2RpdkNoYXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuI2JvdG9uQ2hhdHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi8qIFxyXG5cclxuXHJcbiN0ZXh0b0RldGFsbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41JTtcclxufVxyXG5cclxuI0luZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG59ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetalleCampana, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'detalle-campana',
                templateUrl: './detalleCampana.component.html',
                styleUrls: ['./detalleCampana.component.css'],
            }]
    }], function () { return [{ type: _services_fire_base_service__WEBPACK_IMPORTED_MODULE_3__["FireBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_conversations_service__WEBPACK_IMPORTED_MODULE_5__["ConversationsService"] }]; }, null); })();


/***/ }),

/***/ "AcOK":
/*!*******************************************************************************!*\
  !*** ./src/app/campanas/crearCampana/components/symptom/symptom.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SymptomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymptomComponent", function() { return SymptomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");









function SymptomComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor, ingresa un nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SymptomComponent {
    constructor() {
        this.selectedItems = [];
        this.selectedUnit = 'celsius';
    }
    handleSelection(selectedItems) {
        this.selectedItems = selectedItems;
    }
}
SymptomComponent.ɵfac = function SymptomComponent_Factory(t) { return new (t || SymptomComponent)(); };
SymptomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SymptomComponent, selectors: [["app-symptom"]], inputs: { modelGroupName: "modelGroupName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                useFactory: (container) => container,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]],
            }])], decls: 16, vars: 3, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2702769239797460498$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_SYMPTOM_SYMPTOM_COMPONENT_TS_1 = goog.getMsg("Descripci\u00F3n");
        i18n_0 = MSG_EXTERNAL_2702769239797460498$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_SYMPTOM_SYMPTOM_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟b0e611b2bfac70d1af43295307e558cbf9f48e57␟2702769239797460498:Descripción`;
    } return [[3, "ngModelGroup"], [2, "color", "#2a3eb1", "font-size", "medium", "margin-bottom", "0.2em"], ["fxFlex", "45", 2, "width", "50%"], ["matInput", "", "name", "descriptionCampaign", "required", "", "ngModel", "", "maxlength", "200", 6, "placeholder"], ["descriptionCampaign", ""], ["placeholder", i18n_0], [4, "ngIf"], ["align", "end"], [1, "example-button-row"], ["matStepperNext", "", "mat-raised-button", "", 2, "background-color", "#3f51b5", "color", "white"], ["matStepperPrevious", "", "mat-button", "", "color", "warn", 2, "margin-left", "2em"]]; }, template: function SymptomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "A\u00F1ada una descripci\u00F3n corta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SymptomComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModelGroup", ctx.modelGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 200");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModelGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperNext"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhbmFzL2NyZWFyQ2FtcGFuYS9jb21wb25lbnRzL3N5bXB0b20vc3ltcHRvbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SymptomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-symptom',
                templateUrl: './symptom.component.html',
                styleUrls: ['./symptom.component.css'],
                viewProviders: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                        useFactory: (container) => container,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]],
                    }]
            }]
    }], null, { modelGroupName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: "AIzaSyB-D7Ud9yH5wNAQxgXFmBxBxsB40-u86GQ",
    authDomain: "test-cd786.firebaseapp.com",
    databaseURL: "https://test-cd786.firebaseio.com",
    projectId: "test-cd786",
    storageBucket: "test-cd786.appspot.com",
    messagingSenderId: "1053659899538",
    appId: "1:1053659899538:web:b8649a1493dfde16eaa84b",
    measurementId: "G-145285H13N"
};
const firebaseConfig = {
    apiKey: "AIzaSyB-D7Ud9yH5wNAQxgXFmBxBxsB40-u86GQ",
    authDomain: "test-cd786.firebaseapp.com",
    databaseURL: "https://test-cd786.firebaseio.com",
    projectId: "test-cd786",
    storageBucket: "test-cd786.appspot.com",
    messagingSenderId: "1053659899538",
    appId: "1:1053659899538:web:d031424e7feb5c25eaa84b",
    measurementId: "G-VBBL73XFWV"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Evwa":
/*!**************************************!*\
  !*** ./src/app/tab/tab.component.ts ***!
  \**************************************/
/*! exports provided: TabGroupAlignExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabGroupAlignExample", function() { return TabGroupAlignExample; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "9vUh");
/* harmony import */ var _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campanas/campanas/campanas.component */ "+eSH");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../perfil/perfil.component */ "nNO8");






/**
 * @title Tab group with aligned labels
 */
class TabGroupAlignExample {
}
TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
TabGroupAlignExample.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 10, vars: 0, consts: [["mat-align-tabs", "end", "animationDuration", "2000ms"], ["label", "Home"], ["label", "Donaciones"], ["label", "Campa\u00F1ass"], ["label", "Eventos"], ["label", "Perfil"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "card-fancy-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "campanas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "campanas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["CardFancyExample"], _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_3__["Campana"], _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_4__["Perfil"]], styles: [".mat-tab-group {\r\n    margin-bottom: 48px;\r\n}\r\n\r\n.mat-tab-group.mat-primary .mat-ink-bar {\r\n    background-color: #00A6FF;\r\n}\r\n\r\n.mat-card-image {\r\n    margin: 0!important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiL3RhYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdGFiL3RhYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMEE2RkY7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgICBtYXJnaW46IDAhaW1wb3J0YW50O1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabGroupAlignExample, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tab-group-align-example',
                templateUrl: './tab.component.html',
                styleUrls: ['./tab.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();


/***/ }),

/***/ "GXDB":
/*!************************************************************!*\
  !*** ./src/app/page-component/page-component.component.ts ***!
  \************************************************************/
/*! exports provided: PageComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponentComponent", function() { return PageComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class PageComponentComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageComponentComponent.ɵfac = function PageComponentComponent_Factory(t) { return new (t || PageComponentComponent)(); };
PageComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponentComponent, selectors: [["app-page-component"]], decls: 5, vars: 0, consts: [["id", "wrapper", 1, "d-flex"], ["id", "page-content-wrapper"], [1, "container-fluid"]], template: function PageComponentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UtY29tcG9uZW50L3BhZ2UtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-component',
                templateUrl: './page-component.component.html',
                styleUrls: ['./page-component.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MAxx":
/*!*******************************************************************************!*\
  !*** ./src/app/campanas/crearCampana/components/address/address.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");






class AddressComponent {
}
AddressComponent.ɵfac = function AddressComponent_Factory(t) { return new (t || AddressComponent)(); };
AddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddressComponent, selectors: [["app-address"]], inputs: { modelGroupName: "modelGroupName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                useFactory: (container) => container,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]],
            }])], decls: 15, vars: 1, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_1847047605496409443$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_1 = goog.getMsg("Street");
        i18n_0 = MSG_EXTERNAL_1847047605496409443$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟2150cdcd46580c08f512eaa6d60a1f20877e971d␟1847047605496409443:Street`;
    } var i18n_2; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_4585143651785848185$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_3 = goog.getMsg("ZIP Code");
        i18n_2 = MSG_EXTERNAL_4585143651785848185$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_3;
    }
    else {
        i18n_2 = $localize `:␟dd8bc1d407c148dd846593e065b071725765ae93␟4585143651785848185:ZIP Code`;
    } var i18n_4; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_2314075913167237221$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_5 = goog.getMsg("City");
        i18n_4 = MSG_EXTERNAL_2314075913167237221$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_5;
    }
    else {
        i18n_4 = $localize `:␟5c7012b5a926b32d9e45fefdcc8a1a3cb6f023d0␟2314075913167237221:City`;
    } var i18n_6; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_516176798986294299$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_7 = goog.getMsg("Country");
        i18n_6 = MSG_EXTERNAL_516176798986294299$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_ADDRESS_ADDRESS_COMPONENT_TS_7;
    }
    else {
        i18n_6 = $localize `:␟a43f25a9ac40e8e2441ff0be7a36b8e5d15534df␟516176798986294299:Country`;
    } return [[3, "ngModelGroup"], ["fxLayout", "row", "fxLayout.lt-sm", "column", "fxLayoutGap", "20px", "fxLayoutGap.lt-md", "0px"], ["fxFlex", "100"], ["matInput", "", "name", "street", "ngModel", "", "required", "", 6, "placeholder"], ["placeholder", i18n_0], ["fxFlex", "20"], ["matInput", "", "name", "zip", "ngModel", "", "required", "", 6, "placeholder"], ["placeholder", i18n_2], ["fxFlex", "45"], ["matInput", "", "name", "city", "ngModel", "", "required", "", 6, "placeholder"], ["placeholder", i18n_4], ["fxFlex", "30"], ["matInput", "", "name", "country", "ngModel", "", 6, "placeholder"], ["placeholder", i18n_6]]; }, template: function AddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](8, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](11, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](14, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModelGroup", ctx.modelGroupName);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModelGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhbmFzL2NyZWFyQ2FtcGFuYS9jb21wb25lbnRzL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-address',
                templateUrl: './address.component.html',
                styleUrls: ['./address.component.css'],
                viewProviders: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                        useFactory: (container) => container,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]],
                    }]
            }]
    }], null, { modelGroupName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MsFU":
/*!*******************************************************************************!*\
  !*** ./src/app/campanas/crearCampana/components/contact/contact.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "UhP/");












function ContactComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor, ingresa un nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const autoridad_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", autoridad_r3.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](autoridad_r3.viewValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", autoridad_r3.posicion, "");
} }
class ContactComponent {
    constructor() {
        this.autoridades = [
            { value: 'auto-0', viewValue: 'Cecilia Paredes', posicion: 'Rectora ESPOL' },
            { value: 'auto-1', viewValue: 'Cynthia Viteri', posicion: 'Alcalde de Guayaquil' },
            { value: 'auto-2', viewValue: 'Guillermo Lasso', posicion: '' },
            { value: 'auto-3', viewValue: 'Jorge Yunda', posicion: '' },
            { value: 'auto-4', viewValue: 'Lenin Moreno', posicion: '' },
            { value: 'auto-5', viewValue: 'Nueva Autoridad', posicion: '' },
        ];
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], inputs: { modelGroupName: "modelGroupName" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([], [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                useFactory: (container) => container,
                deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]],
            }])], decls: 23, vars: 5, consts: function () { var i18n_0; if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG_EXTERNAL_7803578511539897731$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_1 = goog.getMsg("Nombre de Campa\u00F1a");
        i18n_0 = MSG_EXTERNAL_7803578511539897731$$SRC_APP_CAMPANAS_CREARCAMPANA_COMPONENTS_CONTACT_CONTACT_COMPONENT_TS_1;
    }
    else {
        i18n_0 = $localize `:␟43d59a89d3eaa48acd54a80d4e27940cb8b30f71␟7803578511539897731:Nombre de Campaña`;
    } return [[3, "ngModelGroup"], [2, "color", "#2a3eb1", "font-size", "medium", "margin-bottom", "0.2em"], ["fxFlex", "45", 2, "width", "50%"], ["matInput", "", "name", "nameCampaign", "required", "", "ngModel", "", "maxlength", "80", 6, "placeholder"], ["nameCampaign", ""], ["placeholder", i18n_0], [4, "ngIf"], ["align", "end"], [2, "color", "#2a3eb1", "font-size", "medium", "margin-top", "0.2em"], ["appearance", "fill", 2, "margin-top", "0.7em", "width", "50%"], ["required", ""], [4, "ngFor", "ngForOf"], [1, "example-button-row"], ["matStepperNext", "", "mat-raised-button", "", 2, "background-color", "#3f51b5", "color", "white"], ["mat-button", "", "color", "warn", 2, "margin-left", "2em", 3, "routerLink"], ["required", "", 2, "min-height", "48px", "line-height", "normal", "height", "auto", "padding", "10px 20px", 3, "value"], [1, "text-grey"]]; }, template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00BFC\u00F3mo quieres que se llame tu campa\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ContactComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00BFA qu\u00E9 autoridad va dirigida tu campa\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Autoridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactComponent_ng_container_17_Template, 7, 3, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("ngModelGroup", ctx.modelGroupName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r0.value.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _r0.value.length, " / 80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.autoridades);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModelGroup"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_6__["MatStepperNext"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbXBhbmFzL2NyZWFyQ2FtcGFuYS9jb21wb25lbnRzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css'],
                viewProviders: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"],
                        useFactory: (container) => container,
                        deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ControlContainer"]]],
                    }]
            }]
    }], null, { modelGroupName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "RMTz":
/*!************************************************!*\
  !*** ./src/app/nosotros/nosotros.component.ts ***!
  \************************************************/
/*! exports provided: Nosotros */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nosotros", function() { return Nosotros; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "PDjf");



/**
 * @title Card with multiple sections
 */
class Nosotros {
    constructor() {
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
}
Nosotros.ɵfac = function Nosotros_Factory(t) { return new (t || Nosotros)(); };
Nosotros.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Nosotros, selectors: [["nosotros"]], decls: 20, vars: 0, consts: [["id", "tituloPerfil"], ["id", "divFoto"], ["mat-card-image", "", "id", "fotoPerfil", "src", "https://neetwork.com/wp-content/uploads/2018/07/cms6.jpg", "alt", "Photo of a Shiba Inu"], ["id", "datosUsuario"], [1, "infoUsuario"], [1, "textoUsuario"]], template: function Nosotros_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Acerca de nosotros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "correo@correo.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Direcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Espol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Numero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "0910545451");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"]], styles: ["#tituloPerfil[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  align-items: center;\r\n  align-content: center;\r\n  margin-top: 2.5%;\r\n  }\r\n  \r\n  #fotoPerfil[_ngcontent-%COMP%]{\r\n  height: 10%;\r\n  width: 25%;\r\n  border-radius: 10%;\r\n  }\r\n  \r\n  #divFoto[_ngcontent-%COMP%]{\r\n  margin-top: 2%;\r\n  text-align: center;\r\n  }\r\n  \r\n  #datosUsuario[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  margin-top: 2.55%;\r\n  margin-bottom: 3.5%;\r\n  }\r\n  \r\n  .infoUsuario[_ngcontent-%COMP%]{\r\n  margin-top: 1.2%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm9zb3Ryb3Mvbm9zb3Ryb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0VBQ0Esa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCOztFQUVBO0VBQ0EsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEI7O0VBRUE7RUFDQSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCOztFQUVBO0VBQ0Esa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkI7O0VBRUE7RUFDQSxnQkFBZ0I7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ub3NvdHJvcy9ub3NvdHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgXHJcbiAgI3RpdHVsb1BlcmZpbHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMi41JTtcclxuICB9XHJcbiAgXHJcbiAgI2ZvdG9QZXJmaWx7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gICNkaXZGb3Rve1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgI2RhdG9zVXN1YXJpb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMi41NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMy41JTtcclxuICB9XHJcbiAgXHJcbiAgLmluZm9Vc3Vhcmlve1xyXG4gIG1hcmdpbi10b3A6IDEuMiU7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Nosotros, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nosotros',
                templateUrl: './nosotros.component.html',
                styleUrls: ['./nosotros.component.css'],
            }]
    }], null, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "SKVu":
/*!******************************************************************!*\
  !*** ./src/app/eventos/detalleEvento/detalleEvento.component.ts ***!
  \******************************************************************/
/*! exports provided: DetalleEvento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleEvento", function() { return DetalleEvento; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_fire_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/fire-base.service */ "z58/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");






/**
 * @title Card with multiple sections
 */
class DetalleEvento {
    constructor(firestoreService, router, route) {
        this.firestoreService = firestoreService;
        this.router = router;
        this.route = route;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.detalleEvento = undefined;
        this.evento = undefined;
        this.eventoId = undefined;
    }
    getRouteParams() {
        console.log('aca');
        this.route.queryParams.subscribe(params => {
            this.params = params;
        });
        this.eventoId = this.params.eventId.replace("\"", "");
        console.log('datos de: ', this.eventoId);
        this.eventoId = this.eventoId.toString().substring(0, this.eventoId.length - 1);
        // this.detalleEvento = this.params.eventoId;
        //console.log("detalle campana hola: ",this.detalleEvento);
        console.log("this.campaignId ", this.eventoId);
    }
    ngOnInit() {
        console.log('aqui');
        this.getRouteParams();
        this.getEventById(this.eventoId);
        //this.miCampanaNegada = this.misCampanas;
    }
    getEventById(eventoId) {
        this.firestoreService.getEventById(eventoId).subscribe((eventSnapshot) => {
            this.evento = eventSnapshot.payload.data();
            console.log('detalle evento: ', this.evento);
        }, (error) => {
            console.log(error);
        });
    }
}
DetalleEvento.ɵfac = function DetalleEvento_Factory(t) { return new (t || DetalleEvento)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_fire_base_service__WEBPACK_IMPORTED_MODULE_1__["FireBaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
DetalleEvento.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetalleEvento, selectors: [["detalle-evento"]], decls: 16, vars: 7, consts: [["id", "titulo"], ["id", "mainCampana"], ["id", "campanaFoto"], ["mat-card-image", "", "id", "fotoPerfil", "alt", "Photo of a Shiba Inu", 3, "src"], ["id", "descripcion"], [1, "titulos"], [1, "textoDetalle"]], template: function DetalleEvento_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Descripcion del evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dia del evento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.evento.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.evento.eventPic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.evento.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 4, ctx.evento.dateEvent, "yyyy/MM/dd"));
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["#titulo[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin-top: 2%;\r\n    margin-bottom: 1.5%;\r\n}\r\n\r\n#campanaFoto[_ngcontent-%COMP%]{\r\n\r\n    width: 32%;\r\n    height: 550px;\r\n    border-radius: 7.5%;\r\n    margin-top: 1.5%;\r\n    \r\n    margin-right: 2;\r\n}\r\n\r\n#fotoPerfil[_ngcontent-%COMP%]{\r\n    width: 85%;\r\n    height: 85%;\r\n    border-radius: 7.5%;\r\n    \r\n}\r\n\r\n#mainCampana[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n    display: flex; \r\n    flex-direction: row; \r\n    align-items: center;\r\n    width: 95%;\r\n    justify-content: center;\r\n    align-content: center;\r\n    height: 75%;\r\n    \r\n    \r\n    \r\n\r\n}\r\n\r\n.titulos[_ngcontent-%COMP%]{\r\n    align-items: left;\r\n    font-weight: bold;\r\n    font-size: 19px;\r\n}\r\n\r\n.textoDetalle[_ngcontent-%COMP%]{\r\n    font-size: 15px;\r\n    text-align: left;\r\n}\r\n\r\n#descripcion[_ngcontent-%COMP%]{\r\n    text-align: left;\r\n}\r\n\r\n#divChat[_ngcontent-%COMP%]{\r\n    display: flex; \r\n    margin: 0 auto;\r\n    margin-top: 1%;\r\n}\r\n\r\n#botonChat[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRvcy9kZXRhbGxlRXZlbnRvL2RldGFsbGVFdmVudG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCOztJQUVoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7O0lBRVgsdUJBQXVCOzs7QUFHM0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUciLCJmaWxlIjoic3JjL2FwcC9ldmVudG9zL2RldGFsbGVFdmVudG8vZGV0YWxsZUV2ZW50by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RpdHVsb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuNSU7XHJcbn1cclxuXHJcbiNjYW1wYW5hRm90b3tcclxuXHJcbiAgICB3aWR0aDogMzIlO1xyXG4gICAgaGVpZ2h0OiA1NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gICAgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI7XHJcbn1cclxuXHJcbiNmb3RvUGVyZmlse1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogODUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy41JTtcclxuICAgIFxyXG59XHJcblxyXG4jbWFpbkNhbXBhbmF7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3NSU7XHJcbiAgICBcclxuICAgIC8qIG1hcmdpbi1sZWZ0OiA3LjUlOyAqL1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4udGl0dWxvc3tcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbn1cclxuLnRleHRvRGV0YWxsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNkZXNjcmlwY2lvbntcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuI2RpdkNoYXR7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuI2JvdG9uQ2hhdHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi8qIFxyXG5cclxuXHJcbiN0ZXh0b0RldGFsbGV7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41JTtcclxufVxyXG5cclxuI0luZm97XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xyXG59ICovIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetalleEvento, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'detalle-evento',
                templateUrl: './detalleEvento.component.html',
                styleUrls: ['./detalleEvento.component.css'],
            }]
    }], function () { return [{ type: _services_fire_base_service__WEBPACK_IMPORTED_MODULE_1__["FireBaseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "SdBj":
/*!******************************************************************!*\
  !*** ./src/app/campanas/crearCampana/crear_campana.component.ts ***!
  \******************************************************************/
/*! exports provided: CrearCampana */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrearCampana", function() { return CrearCampana; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog.component */ "37gU");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "MsFU");
/* harmony import */ var _components_symptom_symptom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/symptom/symptom.component */ "AcOK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");










function CrearCampana_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Datos de la Campa\u00F1a");
} }
function CrearCampana_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Descripcion de la Campa\u00F1a");
} }
function CrearCampana_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Foto de la Campa\u00F1a");
} }
/**
 * @title Card with multiple sections
 */
class CrearCampana {
    constructor(dialog) {
        this.dialog = dialog;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    }
    onSubmit(form) {
        return;
    }
    onClick(form) {
        const json = JSON.stringify(form.value);
        console.log(json);
        const dialogRef = this.dialog.open(_dialog_component__WEBPACK_IMPORTED_MODULE_1__["DialogContentExampleDialog"]);
    }
}
CrearCampana.ɵfac = function CrearCampana_Factory(t) { return new (t || CrearCampana)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
CrearCampana.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CrearCampana, selectors: [["crear-campana"]], decls: 29, vars: 2, consts: [[1, "main-div"], [1, "example-card", 2, "background-color", "#c8e4fb"], [2, "color", "darkslateblue"], ["novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], ["linear", ""], ["ngModelGroup", "personal", 3, "completed"], ["personal", "ngModelGroup"], ["matStepLabel", ""], ["modelGroupName", "contact"], ["ngModelGroup", "health", 3, "completed"], ["health", "ngModelGroup"], ["modelGroupName", "symptoms"], [2, "color", "#2a3eb1", "font-size", "medium", "margin-top", "0.2em", "padding", "0"], ["type", "file", "id", "img", "name", "img", "accept", "image/*"], ["mat-raised-button", "", "type", "button", "color", "primary", 3, "click"], ["matStepperPrevious", "", "mat-button", "", "color", "warn", 2, "margin-left", "2em"]], template: function CrearCampana_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crear Campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Este es un simple formulario para que pueda crear su campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CrearCampana_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-vertical-stepper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-step", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CrearCampana_ng_template_13_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-contact", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-step", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CrearCampana_ng_template_17_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-symptom", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CrearCampana_ng_template_20_Template, 1, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00A1A\u00F1ade una foto a tu campa\u00F1a!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrearCampana_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onClick(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Crear Campa\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Anterior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", _r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("completed", _r3.valid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStep"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModelGroup"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepLabel"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"], _components_symptom_symptom_component__WEBPACK_IMPORTED_MODULE_7__["SymptomComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_5__["MatStepperPrevious"]], styles: ["input[type=text][_ngcontent-%COMP%], input[type=file][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n\r\n  \r\n  input[type=submit][_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n  input[type=submit][_ngcontent-%COMP%]:hover {\r\n    background-color: #45a049;\r\n  }\r\n  \r\n\r\n  \r\n  div[_ngcontent-%COMP%] {\r\n    border-radius: 5px;\r\n    padding: 20px;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n\r\n  \r\n  .text[_ngcontent-%COMP%]{\r\n      margin-top: 1.5%;\r\n  }\r\n  \r\n\r\n  \r\n  #titulo[_ngcontent-%COMP%]{\r\n      margin-top: 2.5%;\r\n      margin-bottom: 2.5%;\r\n      text-align: center;\r\n  }\r\n  \r\n\r\n  \r\n  #boton[_ngcontent-%COMP%]{\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  width: 25%;\r\n}\r\n  \r\n\r\n  \r\n  [_nghost-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 14px;\r\n  color: #333;\r\n  box-sizing: border-box;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n  \r\n\r\n  \r\n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\r\n  margin: 8px 0;\r\n}\r\n  \r\n\r\n  \r\n  p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n  \r\n\r\n  \r\n  .spacer[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n  \r\n\r\n  \r\n  .toolbar[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n}\r\n  \r\n\r\n  \r\n  .toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 0 16px;\r\n}\r\n  \r\n\r\n  \r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  margin: 0 16px;\r\n}\r\n  \r\n\r\n  \r\n  .toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n  \r\n\r\n  \r\n  .content[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 82px auto 32px;\r\n  padding: 0 16px;\r\n  max-width: 960px;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n  \r\n\r\n  \r\n  svg.material-icons[_ngcontent-%COMP%] {\r\n  height: 24px;\r\n  width: auto;\r\n}\r\n  \r\n\r\n  \r\n  svg.material-icons[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 8px;\r\n}\r\n  \r\n\r\n  \r\n  .card[_ngcontent-%COMP%]   svg.material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: #888;\r\n}\r\n  \r\n\r\n  \r\n  .card-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  margin-top: 16px;\r\n}\r\n  \r\n\r\n  \r\n  .card[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  border: 1px solid #eee;\r\n  background-color: #fafafa;\r\n  height: 40px;\r\n  width: 200px;\r\n  margin: 0 8px 16px;\r\n  padding: 16px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: all 0.2s ease-in-out;\r\n  line-height: 24px;\r\n}\r\n  \r\n\r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\r\n  margin-right: 0;\r\n}\r\n  \r\n\r\n  \r\n  .card.card-small[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 168px;\r\n}\r\n  \r\n\r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n  cursor: pointer;\r\n}\r\n  \r\n\r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: 0 4px 17px rgba(black, 0.35);\r\n}\r\n  \r\n\r\n  \r\n  .card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\r\n  fill: rgb(105, 103, 103);\r\n}\r\n  \r\n\r\n  \r\n  .card.highlight-card[_ngcontent-%COMP%] {\r\n  background-color: #1976d2;\r\n  color: white;\r\n  font-weight: 600;\r\n  border: none;\r\n  width: auto;\r\n  min-width: 30%;\r\n  position: relative;\r\n}\r\n  \r\n\r\n  \r\n  .card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  margin-left: 60px;\r\n}\r\n  \r\n\r\n  \r\n  svg#rocket[_ngcontent-%COMP%] {\r\n  width: 80px;\r\n  position: absolute;\r\n  left: -10px;\r\n  top: -24px;\r\n}\r\n  \r\n\r\n  \r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n  height: calc(100vh - 95px);\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 180px;\r\n  z-index: -10;\r\n}\r\n  \r\n\r\n  \r\n  a[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\r\n  color: #1976d2;\r\n  text-decoration: none;\r\n}\r\n  \r\n\r\n  \r\n  a[_ngcontent-%COMP%]:hover {\r\n  color: #125699;\r\n}\r\n  \r\n\r\n  \r\n  .example-card[_ngcontent-%COMP%] {\r\n  padding: 20px;\r\n  min-width: 800px;\r\n  max-width: 800px;\r\n  \r\n}\r\n  \r\n\r\n  \r\n  .circle-link[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  border-radius: 40px;\r\n  margin: 8px;\r\n  background-color: white;\r\n  border: 1px solid #eeeeee;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n  transition: 1s ease-out;\r\n}\r\n  \r\n\r\n  \r\n  .circle-link[_ngcontent-%COMP%]:hover {\r\n  transform: translateY(-0.25rem);\r\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\r\n}\r\n  \r\n\r\n  \r\n  footer[_ngcontent-%COMP%] {\r\n  margin-top: 8px;\r\n  display: flex;\r\n  align-items: center;\r\n  line-height: 20px;\r\n}\r\n  \r\n\r\n  \r\n  footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n  \r\n\r\n  \r\n  .github-star-badge[_ngcontent-%COMP%] {\r\n  color: #24292e;\r\n  display: flex;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  padding: 3px 10px;\r\n  border: 1px solid rgba(27,31,35,.2);\r\n  border-radius: 3px;\r\n  background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\r\n  margin-left: 4px;\r\n  font-weight: 600;\r\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\r\n}\r\n  \r\n\r\n  \r\n  .github-star-badge[_ngcontent-%COMP%]:hover {\r\n  background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\r\n  border-color: rgba(27,31,35,.35);\r\n  background-position: -.5em;\r\n}\r\n  \r\n\r\n  \r\n  .github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\r\n  height: 16px;\r\n  width: 16px;\r\n  margin-right: 4px;\r\n}\r\n  \r\n\r\n  \r\n  svg#clouds[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: -160px;\r\n  left: -230px;\r\n  z-index: -10;\r\n  width: 1920px;\r\n}\r\n  \r\n\r\n  \r\n  \r\n  \r\n\r\n  \r\n  @media screen and (max-width: 767px) {\r\n\r\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link), .terminal[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n  }\r\n\r\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\r\n    height: 16px;\r\n    margin: 8px 0;\r\n  }\r\n\r\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    margin-left: 72px;\r\n  }\r\n\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    right: 120px;\r\n    transform: rotate(-5deg);\r\n  }\r\n}\r\n  \r\n\r\n  \r\n  @media screen and (max-width: 575px) {\r\n  svg#rocket-smoke[_ngcontent-%COMP%] {\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n  \r\n\r\n  \r\n  .main-div[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFuYXMvY3JlYXJDYW1wYW5hL2NyZWFyX2NhbXBhbmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7Ozs7RUFJQTtJQUNFLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7RUFDcEI7Ozs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7OztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCOzs7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7Ozs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsa0JBQWtCO0VBQ3RCOzs7O0VBQ0Y7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFVBQVU7QUFDWjs7OztFQUVBO0VBQ0UsMEpBQTBKO0VBQzFKLGVBQWU7RUFDZixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7Ozs7RUFFQTs7Ozs7O0VBTUUsYUFBYTtBQUNmOzs7O0VBRUE7RUFDRSxTQUFTO0FBQ1g7Ozs7RUFFQTtFQUNFLE9BQU87QUFDVDs7OztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOzs7O0VBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7O0VBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7OztFQUVBO0VBQ0UsWUFBWTtBQUNkOzs7O0VBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7OztFQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7OztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7O0VBRUE7RUFDRSxVQUFVO0FBQ1o7Ozs7RUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7OztFQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COzs7O0VBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7O0VBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOzs7O0VBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7O0VBRUE7RUFDRSwyQkFBMkI7RUFDM0Isd0NBQXdDO0FBQzFDOzs7O0VBRUE7RUFDRSx3QkFBd0I7QUFDMUI7Ozs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7OztFQUVBO0VBQ0UsaUJBQWlCO0FBQ25COzs7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7Ozs7RUFFQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0FBQ2Q7Ozs7RUFFQTs7O0VBR0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7OztFQUVBO0VBQ0UsY0FBYztBQUNoQjs7OztFQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0FBRWxCOzs7O0VBR0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0VBQXdFO0VBQ3hFLHVCQUF1QjtBQUN6Qjs7OztFQUVBO0VBQ0UsK0JBQStCO0VBQy9CLDJDQUEyQztBQUM3Qzs7OztFQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COzs7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOzs7O0VBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0lBQWtJO0FBQ3BJOzs7O0VBRUE7RUFDRSw4REFBOEQ7RUFDOUQsZ0NBQWdDO0VBQ2hDLDBCQUEwQjtBQUM1Qjs7OztFQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7Ozs7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0FBQ2Y7Ozs7RUFHQSxzQkFBc0I7Ozs7RUFDdEI7O0VBRUU7O0lBRUUsV0FBVztFQUNiOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFlBQVk7SUFDWix3QkFBd0I7RUFDMUI7QUFDRjs7OztFQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0Y7Ozs7RUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFuYXMvY3JlYXJDYW1wYW5hL2NyZWFyX2NhbXBhbmEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9ZmlsZV0sIHNlbGVjdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcblxyXG4gIFxyXG4gIGlucHV0W3R5cGU9c3VibWl0XSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxuICB9XHJcbiAgXHJcbiAgZGl2IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC50ZXh0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gIH1cclxuXHJcbiAgI3RpdHVsb3tcclxuICAgICAgbWFyZ2luLXRvcDogMi41JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMi41JTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuI2JvdG9ue1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNiB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogNjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnRvb2xiYXIgaW1nIHtcclxuICBtYXJnaW46IDAgMTZweDtcclxufVxyXG5cclxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbyB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMCAxNnB4O1xyXG59XHJcblxyXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIG1heC13aWR0aDogOTYwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5zdmcubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgZmlsbDogIzg4ODtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbjogMCA4cHggMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2FyZC5jYXJkLXNtYWxsIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2OHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcclxuICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbn1cclxuXHJcbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxuICBtaW4td2lkdGg6IDMwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbnN2ZyNyb2NrZXQge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTBweDtcclxuICB0b3A6IC0yNHB4O1xyXG59XHJcblxyXG5zdmcjcm9ja2V0LXNtb2tlIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA5NXB4KTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHJpZ2h0OiAxODBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbn1cclxuXHJcbmEsXHJcbmE6dmlzaXRlZCxcclxuYTpob3ZlciB7XHJcbiAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzEyNTY5OTtcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4uY2lyY2xlLWxpbmsge1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5mb290ZXIge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmZvb3RlciBhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgY29sb3I6ICMyNDI5MmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAzcHggMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2ZhZmJmYywjZWZmM2Y2IDkwJSk7XHJcbiAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxIZWx2ZXRpY2EsQXJpYWwsc2Fucy1zZXJpZixBcHBsZSBDb2xvciBFbW9qaSxTZWdvZSBVSSBFbW9qaSxTZWdvZSBVSSBTeW1ib2w7XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsI2YwZjNmNiwjZTZlYmYxIDkwJSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbn1cclxuXHJcbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGhlaWdodDogMTZweDtcclxuICB3aWR0aDogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxufVxyXG5cclxuc3ZnI2Nsb3VkcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogLTE2MHB4O1xyXG4gIGxlZnQ6IC0yMzBweDtcclxuICB6LWluZGV4OiAtMTA7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxufVxyXG5cclxuXHJcbi8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluaykgLFxyXG4gIC50ZXJtaW5hbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MnB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICByaWdodDogMTIwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLWRpdntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrearCampana, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'crear-campana',
                templateUrl: './crear_campana.component.html',
                styleUrls: ['./crear_campana.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Swk/":
/*!****************************************************************************************!*\
  !*** ./src/app/campanas/crearCampana/components/successicon/success-icon.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AngularImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularImgComponent", function() { return AngularImgComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");



class AngularImgComponent {
    constructor() { }
    ngOnInit() { }
}
AngularImgComponent.ɵfac = function AngularImgComponent_Factory(t) { return new (t || AngularImgComponent)(); };
AngularImgComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AngularImgComponent, selectors: [["app-angular-icon"]], decls: 2, vars: 0, consts: [[2, "color", "green", "text-align", "center", "font-size", "xxx-large", "margin-left", "0.8em"]], template: function AngularImgComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "done_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 230px;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtcGFuYXMvY3JlYXJDYW1wYW5hL2NvbXBvbmVudHMvc3VjY2Vzc2ljb24vc3VjY2Vzcy1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtFQUNBLFlBSk07QUFHUjtBQUVFO0VBQ0UsWUFOSTtBQU1SIiwiZmlsZSI6InNyYy9hcHAvY2FtcGFuYXMvY3JlYXJDYW1wYW5hL2NvbXBvbmVudHMvc3VjY2Vzc2ljb24vc3VjY2Vzcy1pY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHdpZHRoOiAyMzBweDtcclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogJHdpZHRoO1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularImgComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-angular-icon',
                templateUrl: './success-icon.component.html',
                styleUrls: ['./success-icon.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header.component */ "gOuF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");




class AppComponent {
    constructor() {
        //   //this.items = af.database
        this.title = 'Ayudar App';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "div"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_component__WEBPACK_IMPORTED_MODULE_1__["Header"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".mat-tab-group[_ngcontent-%COMP%] {\r\n  margin-bottom: 48px;\r\n}\r\n#titulo[_ngcontent-%COMP%]{\r\n  font-size: 2.07692308rem;\r\n  font-family: Arial,\"Helvetica Neue\",Helvetica,sans-serif;\r\n  line-height: 1.35;\r\n  font-weight: normal;\r\n  margin-bottom: 0;\r\n  text-align: center;\r\n  padding-top: 0.5em;\r\n  padding-bottom: 0.5em;\r\n  background-color:  #00A6FF;\r\n  color: white;\r\n}\r\nbody[_ngcontent-%COMP%] {\r\n  overflow-x: hidden;\r\n}\r\n#page-content-wrapper[_ngcontent-%COMP%] {\r\n  min-width: 100vw;\r\n}\r\n@media (min-width: 768px) {\r\n  #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: 0;\r\n  }\r\n  #page-content-wrapper[_ngcontent-%COMP%] {\r\n    min-width: 0;\r\n    width: 100%;\r\n  }\r\n  #wrapper.toggled[_ngcontent-%COMP%]   #sidebar-wrapper[_ngcontent-%COMP%] {\r\n    margin-left: -15rem;\r\n  }\r\n}\r\n#div[_ngcontent-%COMP%]{\r\n  margin-top: 95px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4Qix3REFBd0Q7RUFDeEQsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWItZ3JvdXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuI3RpdHVsb3tcclxuICBmb250LXNpemU6IDIuMDc2OTIzMDhyZW07XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLFwiSGVsdmV0aWNhIE5ldWVcIixIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS4zNTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICMwMEE2RkY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiNwYWdlLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgbWluLXdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgI3NpZGViYXItd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICB9XHJcbiAgI3BhZ2UtY29udGVudC13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjd3JhcHBlci50b2dnbGVkICNzaWRlYmFyLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbiNkaXZ7XHJcbiAgbWFyZ2luLXRvcDogOTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "l0rg");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "M9ds");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tab/tab.component */ "Evwa");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _shared_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/header.component */ "gOuF");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./perfil/perfil.component */ "nNO8");
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nosotros/nosotros.component */ "RMTz");
/* harmony import */ var _campanas_detalleCampana_detalleCampana_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./campanas/detalleCampana/detalleCampana.component */ "AUQW");
/* harmony import */ var _campanas_crearCampana_crear_campana_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./campanas/crearCampana/crear_campana.component */ "SdBj");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chat/chat.component */ "+XlM");
/* harmony import */ var _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./campanas/campanas/campanas.component */ "+eSH");
/* harmony import */ var _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./campanas/misCampanas/misCampanas.component */ "05UE");
/* harmony import */ var _Login_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Login/login.component */ "nS8V");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button-toggle */ "Ynp+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "40+f");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "ZTz/");
/* harmony import */ var _page_component_page_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./page-component/page-component.component */ "GXDB");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/fire */ "jmUF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _eventos_eventos_evento_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./eventos/eventos/evento.component */ "1Rba");
/* harmony import */ var _eventos_detalleEvento_detalleEvento_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./eventos/detalleEvento/detalleEvento.component */ "SKVu");
/* harmony import */ var _cuenta_registrarUsuario_registrarUsuario_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cuenta/registrarUsuario/registrarUsuario.component */ "5QkE");
/* harmony import */ var _campanas_crearCampana_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./campanas/crearCampana/components/contact/contact.component */ "MsFU");
/* harmony import */ var _campanas_crearCampana_components_address_address_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./campanas/crearCampana/components/address/address.component */ "MAxx");
/* harmony import */ var _campanas_crearCampana_components_symptom_symptom_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./campanas/crearCampana/components/symptom/symptom.component */ "AcOK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/input */ "e6WT");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/datepicker */ "TN/R");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/stepper */ "hzfI");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/cdk/a11y */ "YEUz");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/clipboard */ "Tr4x");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/portal */ "1z/I");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/cdk/scrolling */ "7KAL");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/cdk/stepper */ "q59W");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/cdk/table */ "GXRp");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/cdk/tree */ "y7ui");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/badge */ "8Qe2");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/checkbox */ "pMoy");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/chips */ "f44v");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/divider */ "BSbQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/expansion */ "o4Yh");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/list */ "SqCe");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/menu */ "rJgo");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/core */ "UhP/");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/paginator */ "5QHs");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/progress-bar */ "BTe0");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/progress-spinner */ "pu8Q");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/radio */ "zQhy");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/sidenav */ "q7Ft");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/slider */ "mPVK");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/slide-toggle */ "jMqV");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/snack-bar */ "zHaW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/sort */ "LUZP");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/table */ "OaSA");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/tooltip */ "ZFy/");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/tree */ "OLiY");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/cdk/overlay */ "1O3W");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _campanas_crearCampana_dialog_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ./campanas/crearCampana/dialog.component */ "37gU");
/* harmony import */ var _campanas_crearCampana_components_successicon_success_icon_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ./campanas/crearCampana/components/successicon/success-icon.component */ "Swk/");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! @angular/material/form-field */ "Q2Ze");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ./eventos/eventos.component */ "qfzT");












//import {EventDetailComponent} from './event-detail/event-detail.component';























// import { firestore } from 'firebase';








//import { ContactComponent } from './campanas/crearCampana/components/contact/contact.component';





































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__["MatDialogModule"],
            _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_41__["MatMomentDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__["MatAutocompleteModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__["AngularFireAuthModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
            //
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_48__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__["DragDropModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_50__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_51__["MatBottomSheetModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_55__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_56__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_57__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_58__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_59__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_60__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_58__["MatRippleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_63__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_65__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_67__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_68__["MatTableModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_69__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_70__["MatTreeModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_71__["OverlayModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_75__["MatFormFieldModule"]
        ], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_eventos_eventos_component__WEBPACK_IMPORTED_MODULE_76__["eventosComponent"],
        _campanas_crearCampana_components_successicon_success_icon_component__WEBPACK_IMPORTED_MODULE_74__["AngularImgComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__["TabGroupAlignExample"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_10__["CardFancyExample"],
        _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_12__["Perfil"],
        _shared_header_component__WEBPACK_IMPORTED_MODULE_11__["Header"],
        _campanas_detalleCampana_detalleCampana_component__WEBPACK_IMPORTED_MODULE_14__["DetalleCampana"],
        _campanas_crearCampana_crear_campana_component__WEBPACK_IMPORTED_MODULE_15__["CrearCampana"],
        _Login_login_component__WEBPACK_IMPORTED_MODULE_19__["Login"],
        _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_17__["Campana"],
        _page_component_page_component_component__WEBPACK_IMPORTED_MODULE_27__["PageComponentComponent"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"],
        _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_18__["misCampanas"],
        _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__["Nosotros"],
        _eventos_eventos_evento_component__WEBPACK_IMPORTED_MODULE_31__["Eventos"],
        _eventos_detalleEvento_detalleEvento_component__WEBPACK_IMPORTED_MODULE_32__["DetalleEvento"],
        _cuenta_registrarUsuario_registrarUsuario_component__WEBPACK_IMPORTED_MODULE_33__["RegistrarUsuario"],
        // EventDetailComponent
        _campanas_crearCampana_components_symptom_symptom_component__WEBPACK_IMPORTED_MODULE_36__["SymptomComponent"],
        _campanas_crearCampana_components_address_address_component__WEBPACK_IMPORTED_MODULE_35__["AddressComponent"],
        _campanas_crearCampana_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_34__["ContactComponent"],
        _campanas_crearCampana_dialog_component__WEBPACK_IMPORTED_MODULE_73__["DialogContentExampleDialog"],
        _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_18__["misCampanas"],
        _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__["MatDialogModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_41__["MatMomentDateModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__["MatAutocompleteModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__["AngularFireAuthModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
        //
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_48__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__["DragDropModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_50__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_51__["MatBottomSheetModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_55__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_56__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_57__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_58__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_59__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_60__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_58__["MatRippleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_63__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_65__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_67__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_68__["MatTableModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_69__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_70__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_71__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_75__["MatFormFieldModule"]], exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_76__["eventosComponent"],
                    _campanas_crearCampana_components_successicon_success_icon_component__WEBPACK_IMPORTED_MODULE_74__["AngularImgComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _tab_tab_component__WEBPACK_IMPORTED_MODULE_9__["TabGroupAlignExample"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_10__["CardFancyExample"],
                    _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_12__["Perfil"],
                    _shared_header_component__WEBPACK_IMPORTED_MODULE_11__["Header"],
                    _campanas_detalleCampana_detalleCampana_component__WEBPACK_IMPORTED_MODULE_14__["DetalleCampana"],
                    _campanas_crearCampana_crear_campana_component__WEBPACK_IMPORTED_MODULE_15__["CrearCampana"],
                    _Login_login_component__WEBPACK_IMPORTED_MODULE_19__["Login"],
                    _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_17__["Campana"],
                    _page_component_page_component_component__WEBPACK_IMPORTED_MODULE_27__["PageComponentComponent"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"],
                    _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_18__["misCampanas"],
                    _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__["Nosotros"],
                    _eventos_eventos_evento_component__WEBPACK_IMPORTED_MODULE_31__["Eventos"],
                    _eventos_detalleEvento_detalleEvento_component__WEBPACK_IMPORTED_MODULE_32__["DetalleEvento"],
                    _cuenta_registrarUsuario_registrarUsuario_component__WEBPACK_IMPORTED_MODULE_33__["RegistrarUsuario"],
                    // EventDetailComponent
                    _campanas_crearCampana_components_symptom_symptom_component__WEBPACK_IMPORTED_MODULE_36__["SymptomComponent"],
                    _campanas_crearCampana_components_address_address_component__WEBPACK_IMPORTED_MODULE_35__["AddressComponent"],
                    _campanas_crearCampana_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_34__["ContactComponent"],
                    _campanas_crearCampana_dialog_component__WEBPACK_IMPORTED_MODULE_73__["DialogContentExampleDialog"],
                    _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_18__["misCampanas"],
                    _chat_chat_component__WEBPACK_IMPORTED_MODULE_16__["ChatComponent"]
                ],
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__["MatDialogModule"],
                    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_41__["MatMomentDateModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_38__["MatAutocompleteModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_39__["MatDatepickerModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_40__["MatStepperModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_29__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_30__["HttpClientModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__["AngularFireAuthModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_22__["MatButtonToggleModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                    //
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_42__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_43__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_47__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_48__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_49__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_44__["DragDropModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_50__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_51__["MatBottomSheetModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_52__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_53__["MatChipsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_72__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_54__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_55__["MatExpansionModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_37__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_56__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_57__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_58__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_59__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_60__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_61__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_62__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_58__["MatRippleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_63__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_64__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_65__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_66__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_67__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_68__["MatTableModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_69__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_70__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_71__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_45__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_46__["ScrollingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_75__["MatFormFieldModule"]
                ],
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "c8hb":
/*!***************************************************!*\
  !*** ./src/app/services/conversations.service.ts ***!
  \***************************************************/
/*! exports provided: ConversationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConversationsService", function() { return ConversationsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assert */ "9lTW");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class ConversationsService {
    constructor(firestore, httpClient) {
        this.firestore = firestore;
        this.httpClient = httpClient;
        this.baseUrl = 'https://us-central1-test-cd786.cloudfunctions.net';
    }
    //Conseguir Mensajes de la conversacion
    getMessages(eventID) {
        return this.firestore.collection("conversations").doc(eventID).collection("messages", ref => ref.orderBy("timestamp", 'asc'));
        // return this.firestore.collection("conversations").doc(eventID).collection("messages",ref => ref.orderBy("timestamp', 'desc'").limit(12))
    }
    //Actualizar Conversacion
    updateConversation(payloadObject, eventID) {
        return this.firestore.collection("conversations").doc(eventID).collection("messages").add(payloadObject);
    }
    //Crear Conversacion
    createConversation(payloadObject, eventID) {
        return this.firestore.collection(`conversations/` + eventID + "/messages").add(payloadObject).then(res => { console.log(res); }, error => Object(assert__WEBPACK_IMPORTED_MODULE_1__["rejects"])(error));
    }
    //Habilitar/bloqueadar conversacion
    statusChat(payloadObject, eventID) {
        return this.firestore.collection("conversations").doc(eventID).set(payloadObject);
    }
    //Obtener el estado de la conversacion
    getStatusChat(eventID) {
        return this.firestore.collection("conversations").doc(eventID).snapshotChanges();
    }
    //Verificar si existen mensajes sin leer
    getUnreadMessages(eventID) {
        return this.firestore.collection("conversations").doc(eventID).collection("messages", ref => ref.limit(1));
    }
}
ConversationsService.ɵfac = function ConversationsService_Factory(t) { return new (t || ConversationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConversationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConversationsService, factory: ConversationsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConversationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "gOuF":
/*!********************************************!*\
  !*** ./src/app/shared/header.component.ts ***!
  \********************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "G0yt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");







function Header_li_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Mis campa\u00F1as");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Mi Perfil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Header_li_17_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cerrar sesi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.usuario == null ? null : ctx_r0.usuario.email, " ");
} }
function Header_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * @title Card with multiple sections
 */
class Header {
    constructor(AuthService, router) {
        this.AuthService = AuthService;
        this.router = router;
        this.nameUsuario = '';
        this.isCollapsed = false;
        this.logeado = false;
        this.user$ = this.AuthService.afAuth.user;
    }
    // @HostListener('click')
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.AuthService.getCurrentUser();
            this.user$.subscribe(res => {
                this.usuario = res;
            });
        });
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.AuthService.logout();
                localStorage.clear();
                this.router.navigate(['/login']);
                this.logeado = false;
                this.usuario = null;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
Header.ɵfac = function Header_Factory(t) { return new (t || Header)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
Header.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Header, selectors: [["app-header"]], decls: 19, vars: 2, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-primary", "header"], ["id", "home", "routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#mainNavbar", "aria-controls", "mainNavbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "mainNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], ["routerLink", "/campanas", 1, "nav-link", "element"], ["routerLink", "/eventos", 1, "nav-link", "element"], ["routerLink", "/nosotros", 1, "nav-link", "element"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item dropdown", 4, "ngIf"], ["class", "nav-item", 4, "ngIf"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], [1, "fa", "fa-user-circle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu", "dropdown-menu-right"], ["routerLink", "/misCampanas", 1, "dropdown-item"], ["routerLink", "/perfil", 1, "dropdown-item"], [1, "dropdown-item", 3, "click"], ["routerLink", "/login", 1, "nav-link", "element"]], template: function Header_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Campa\u00F1as ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Eventos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nosotros ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, Header_li_17_Template, 11, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, Header_li_18_Template, 3, 0, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.usuario == null);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".header[_ngcontent-%COMP%]{\r\n\r\n    height: 70px;\r\n}\r\n\r\n.element[_ngcontent-%COMP%]{\r\n    color:black;\r\n    font-size: 21px;\r\n    \r\n\r\n}\r\n\r\n#home[_ngcontent-%COMP%]{\r\n    font-size: 23px;\r\n}\r\n\r\n#mainNavbar[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTs7O0FBR25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcclxuXHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuXHJcbi5lbGVtZW50e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbiNob21le1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4jbWFpbk5hdmJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Header, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "iqUP");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "VRCc");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "iInd");


//import { User } from 'firebase';







class AuthService {
    constructor(afAuth, firestore, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.router = router;
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const result = yield this.afAuth.signInWithEmailAndPassword(email, password);
                this.router.navigate(["/home"]);
                return result;
            }
            catch (error) {
                console.log(error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Error", error.message, "error");
            }
        });
    }
    loginGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.afAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4___default.a.auth.GoogleAuthProvider());
            const email = res.user.email;
            console.log('esto es: ', res.user.uid);
            this.router.navigate(["/home"]);
        });
    }
    loginFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield this.afAuth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4___default.a.auth.FacebookAuthProvider());
            const email = res.user.email;
        });
    }
    /*  async register(email: string, password: string, payloadObject: any) {
        this.afAuth.createUserWithEmailAndPassword(email, password).then(
          (user) => {
            if (user) {
              this.updateUserData(user, payloadObject)
              Swal.fire("Registro exitoso","Se ha guardado correctamente el registro","success")
    
              this.router.navigate(['/login']);
    
            }
          }).catch(
            (err) => {
              Swal.fire("Error", err.message, "error")
              console.log(err);
            })
      }
    */
    // async updateUserData(userCredential: firebase.auth.UserCredential, payloadObject: any) {
    //   //console.log(userCredential.user.uid)
    //     if(userCredential.user.uid){
    //       this.delay(1000);
    //       const user = await this.firestore.collection('users').doc(userCredential.user.uid).snapshotChanges().subscribe(
    //         (resp:any)=>{
    //           this.firestore.doc(`users/${userCredential.user.uid}`).update(payloadObject);
    //           console.log('success')
    //         }, (error) => {
    //           console.log(error)
    //         }
    //         )
    //     }
    // }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.afAuth.signOut();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getCurrentUser() {
        return this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).toPromise();
    }
    getUsers() {
        return this.firestore.collection("users").snapshotChanges();
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "nNO8":
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/*! exports provided: Perfil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Perfil", function() { return Perfil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");
/* harmony import */ var _services_fire_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/fire-base.service */ "z58/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "PDjf");







function Perfil_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.datosUsuario.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function Perfil_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function Perfil_h6_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h6", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](user_r3 == null ? null : user_r3.email);
} }
/**
 * @title Card with multiple sections
 */
class Perfil {
    constructor(AuthService, firestoreService) {
        this.AuthService = AuthService;
        this.firestoreService = firestoreService;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.user$ = this.AuthService.afAuth.user;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.AuthService.getCurrentUser();
            this.getDatosUser(user.uid);
            // console.log(user.displayName);
        });
    }
    getDatosUser(userId) {
        this.firestoreService.getDatosUser(userId).subscribe((userSnapshot) => {
            this.datosUsuario = userSnapshot.payload.data();
            console.log("datos usuario: ", this.datosUsuario);
        }, (error) => {
            console.log(error);
        });
    }
}
Perfil.ɵfac = function Perfil_Factory(t) { return new (t || Perfil)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_fire_base_service__WEBPACK_IMPORTED_MODULE_3__["FireBaseService"])); };
Perfil.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Perfil, selectors: [["perfil"]], decls: 20, vars: 7, consts: [["id", "tituloPerfil"], ["id", "divFoto", 4, "ngIf"], ["id", "datosUsuario"], [1, "infoUsuario"], [1, "textoUsuario"], ["class", "textoUsuario", 4, "ngIf"], ["id", "divFoto"], ["mat-card-image", "", "id", "fotoPerfil", "alt", "Photo of a Shiba Inu", 3, "src"], ["mat-card-image", "", "id", "fotoPerfil", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUguex7RmISnFFKWSbxE3lHHD5r9IljJAbA&usqp=CAU", "alt", "Photo of a Shiba Inu"]], template: function Perfil_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Mi Perfil");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, Perfil_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, Perfil_div_4_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Datos Personales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Cedula");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, Perfil_h6_18_Template, 2, 1, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datosUsuario.profilePic != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.datosUsuario.profilePic == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUsuario.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.datosUsuario.cedula);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 5, ctx.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: [".example-card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\nbackground-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\nbackground-size: cover;\r\n}\r\n\r\n#fila1[_ngcontent-%COMP%] {\r\ndisplay: inline-flex;\r\nmargin-bottom: 0.5em;\r\nmargin-left: 2em;\r\nmargin-right: 2em;\r\n}\r\n\r\n#campa\u00F1areciente[_ngcontent-%COMP%] {\r\ndisplay: block;\r\nfont-size: 1.5em;\r\nmargin-block-start: 0.83em;\r\nmargin-inline-start: 0px;\r\nmargin-inline-end: 0px;\r\nmargin-left: 1em;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\nvertical-align: middle;\r\nborder-style: none;\r\nwidth: 100%;\r\n}\r\n\r\n.mat-card[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer), .mat-card-content[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:last-child:not(.mat-card-footer) {\r\nmargin-top: 1.5em;\r\n}\r\n\r\n#tituloPerfil[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nalign-items: center;\r\nalign-content: center;\r\nmargin-top: 2.5%;\r\n}\r\n\r\n#fotoPerfil[_ngcontent-%COMP%]{\r\nheight: 10%;\r\nwidth: 15%;\r\nborder-radius: 10%;\r\n}\r\n\r\n#divFoto[_ngcontent-%COMP%]{\r\nmargin-top: 2%;\r\ntext-align: center;\r\n}\r\n\r\n#datosUsuario[_ngcontent-%COMP%]{\r\ntext-align: center;\r\nmargin-top: 2.55%;\r\nmargin-bottom: 3.5%;\r\n}\r\n\r\n.infoUsuario[_ngcontent-%COMP%]{\r\nmargin-top: 1.2%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0EsbUZBQW1GO0FBQ25GLHNCQUFzQjtBQUN0Qjs7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIsZ0JBQWdCO0FBQ2hCLGlCQUFpQjtBQUNqQjs7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsMEJBQTBCO0FBQzFCLHdCQUF3QjtBQUN4QixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixXQUFXO0FBQ1g7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsbUJBQW1CO0FBQ25CLHFCQUFxQjtBQUNyQixnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BlcmZpbC9wZXJmaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbmJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiNmaWxhMSB7XHJcbmRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5tYXJnaW4tYm90dG9tOiAwLjVlbTtcclxubWFyZ2luLWxlZnQ6IDJlbTtcclxubWFyZ2luLXJpZ2h0OiAyZW07XHJcbn1cclxuI2NhbXBhw7FhcmVjaWVudGUge1xyXG5kaXNwbGF5OiBibG9jaztcclxuZm9udC1zaXplOiAxLjVlbTtcclxubWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjgzZW07XHJcbm1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxubWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxubWFyZ2luLWxlZnQ6IDFlbTtcclxufVxyXG5cclxuaW1nIHtcclxudmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuYm9yZGVyLXN0eWxlOiBub25lO1xyXG53aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jYXJkPjpsYXN0LWNoaWxkOm5vdCgubWF0LWNhcmQtZm9vdGVyKSwgLm1hdC1jYXJkLWNvbnRlbnQ+Omxhc3QtY2hpbGQ6bm90KC5tYXQtY2FyZC1mb290ZXIpIHtcclxubWFyZ2luLXRvcDogMS41ZW07XHJcbn1cclxuXHJcbiN0aXR1bG9QZXJmaWx7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYWxpZ24tY29udGVudDogY2VudGVyO1xyXG5tYXJnaW4tdG9wOiAyLjUlO1xyXG59XHJcblxyXG4jZm90b1BlcmZpbHtcclxuaGVpZ2h0OiAxMCU7XHJcbndpZHRoOiAxNSU7XHJcbmJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuI2RpdkZvdG97XHJcbm1hcmdpbi10b3A6IDIlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNkYXRvc1VzdWFyaW97XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxubWFyZ2luLXRvcDogMi41NSU7XHJcbm1hcmdpbi1ib3R0b206IDMuNSU7XHJcbn1cclxuXHJcbi5pbmZvVXN1YXJpb3tcclxubWFyZ2luLXRvcDogMS4yJTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Perfil, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'perfil',
                templateUrl: './perfil.component.html',
                styleUrls: ['./perfil.component.css'],
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _services_fire_base_service__WEBPACK_IMPORTED_MODULE_3__["FireBaseService"] }]; }, null); })();


/***/ }),

/***/ "nS8V":
/*!******************************************!*\
  !*** ./src/app/Login/login.component.ts ***!
  \******************************************/
/*! exports provided: MyErrorStateMatcher, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");







class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/**
 * @title Card with multiple sections
 */
class Login {
    constructor(router, AuthService) {
        this.router = router;
        this.AuthService = AuthService;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        //     async ngOnInit() {
        //      const user = await this.AuthService.getCurrentUser();
        //      if (user) {
        //         this.logeado = true;
        //        console.log('user->', user);
        //       }
        //    }
        this.matcher = new MyErrorStateMatcher();
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    /* onFormSubmit(form: any) {
      const login = form;
      this.ref.orderByChild('nickname').equalTo(login.nickname).once('value', snapshot => {
        if (snapshot.exists()) {
          localStorage.setItem('nickname', login.nickname);
          this.router.navigate(['/roomlist']);
        } else {
          const newUser = firebase.database().ref('users/').push();
          newUser.set(login);
          localStorage.setItem('nickname', login.nickname);
          this.router.navigate(['/roomlist']);
        }
      });
    } */
    loginGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.AuthService.loginGoogle();
        });
    }
    loginFacebook() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.AuthService.loginFacebook();
        });
    }
    onLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { email, password } = this.loginForm.value;
            console.log('holi');
            try {
                const user = yield this.AuthService.login(email, password);
                //  localStorage.setItem('usuarioLogeado',user);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    cambiarPestana(pestana) {
        //     let campaignId = value.campaignId;
        //   //  let campaignUpdateId = value.campaignUpdateId;
        //     let data = {'camp':campaignId}//'upd':campaignUpdateId}
        let navigationExtras = {
            queryParams: {
                pestana: pestana,
            }
        };
        this.router.navigate([pestana], navigationExtras);
    }
}
Login.ɵfac = function Login_Factory(t) { return new (t || Login)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
Login.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Login, selectors: [["login"]], decls: 23, vars: 1, consts: [["id", "tituloDiv"], ["id", "titulo"], ["id", "datos"], ["id", "tituloBienvenido"], ["id", "form", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "email", 1, "col-md-4", "col-form-label", "text-md-right"], [1, "col-md-6"], ["type", "text", "id", "login-username", "required", "", "autofocus", "", "formControlName", "email", 1, "form-control"], [1, "form-group", "row", 2, "margin-bottom", "15%"], ["for", "password", 1, "col-md-4", "col-form-label", "text-md-right"], ["type", "password", "id", "login-password", "formControlName", "password", "required", "", 1, "form-control"], ["type", "submit", 1, "loginBtn", "loginCorreo"], ["type", "button", 1, "loginBtn", "loginBtn--facebook", 3, "click"], ["type", "button", 1, "loginBtn", "loginBtn--google", 3, "click"]], template: function Login_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Inicio de sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Bienvenido a Ayudar-App");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function Login_Template_form_ngSubmit_6_listener() { return ctx.onLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Iniciar sesi\u00F3n ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Login_Template_button_click_19_listener() { return ctx.loginFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Login with Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Login_Template_button_click_21_listener() { return ctx.loginGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Login with Google ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["#tituloBienvenido[_ngcontent-%COMP%]{\r\n    margin-bottom: 10%;\r\n    color: white;\r\n    font-size: 28px;\r\n}\r\n#titulo[_ngcontent-%COMP%]{\r\n  font-size: 35px;\r\n  text-align: center;\r\n\r\n\r\n}\r\n#tituloDiv[_ngcontent-%COMP%]{\r\n  margin-top: 5.5%;\r\n  margin: 0 auto;\r\n}\r\n#datos[_ngcontent-%COMP%]{\r\n    background-color: #4392C6;\r\n    display: flex; \r\n    flex-direction: column; \r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35%;\r\n    padding: 3%;\r\n    height: 75%;\r\n    border-radius: 5%;\r\n    border: 2px solid #000000;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin-top: 2.75%;\r\n\r\n}\r\n#login-password[_ngcontent-%COMP%]{\r\n    margin-top: 4.5%;\r\n    margin-bottom: 4.5%;\r\n    width: 150%;\r\n    padding: 2px;\r\n}\r\n#login-username[_ngcontent-%COMP%]{\r\n    width: 150%;\r\n    padding: 2px;\r\n}\r\n.loginCorreo[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    padding: 8px;\r\n    font-weight: 500;\r\n    font-size: 17.2px;\r\n    width: 175px;\r\n    color: #ffffff;\r\n    background-color: #60E177;\r\n    border-radius: 6px;\r\n    border: 1px solid #0016b0;\r\n    margin-top: 50%;\r\n    text-align: center;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n#form[_ngcontent-%COMP%]{\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n#registro[_ngcontent-%COMP%]{\r\n  margin-top: 45%;\r\n  text-align: center;\r\n  color: green ;\r\n  justify-content: center;\r\n    align-items: center;\r\n}\r\n.loginBtn--google[_ngcontent-%COMP%] {\r\n    \r\n    background: #DD4B39;\r\n  }\r\n.loginBtn--google[_ngcontent-%COMP%]:before {\r\n    border-right: #BB3F30 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n  }\r\n.loginBtn--google[_ngcontent-%COMP%]:hover, .loginBtn--google[_ngcontent-%COMP%]:focus {\r\n    background: #E74B37;\r\n  }\r\n\r\n.loginBtn[_ngcontent-%COMP%] {\r\n    align-content: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    \r\n    width: 212px;\r\n   \r\n\r\n    padding: 0 15px 0 46px;\r\n    border: none;\r\n    text-align: left;\r\n    line-height: 34px;\r\n    white-space: nowrap;\r\n    border-radius: 0.2em;\r\n    font-size: 16px;\r\n    color: #FFF;\r\n    margin-top: 3.5%;\r\n  }\r\n.loginBtn[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 34px;\r\n    height: 100%;\r\n  }\r\n.loginBtn[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n  }\r\n.loginBtn[_ngcontent-%COMP%]:active {\r\n    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n  }\r\n\r\n.loginBtn--facebook[_ngcontent-%COMP%] {\r\n    background-color: #4C69BA;\r\n    background-image: linear-gradient(#4C69BA, #3B55A0);\r\n    \r\n    text-shadow: 0 -1px 0 #354C8C;\r\n  }\r\n.loginBtn--facebook[_ngcontent-%COMP%]:before {\r\n    border-right: #364e92 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n  }\r\n.loginBtn--facebook[_ngcontent-%COMP%]:hover, .loginBtn--facebook[_ngcontent-%COMP%]:focus {\r\n    background-color: #5B7BD5;\r\n    background-image: linear-gradient(#5B7BD5, #4864B1);\r\n  }\r\n.example-container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding: 5px;\r\n}\r\n.example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n.example-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.example-full-width[_ngcontent-%COMP%]:nth-last-child(0) {\r\n    margin-bottom: 10px;\r\n}\r\n.button-row[_ngcontent-%COMP%] {\r\n    margin: 10px 0;\r\n}\r\n.mat-flat-button[_ngcontent-%COMP%] {\r\n    margin: 5px;\r\n}\r\n.botones[_ngcontent-%COMP%]{\r\n  margin-top: 15%;\r\n  margin: 0 auto;\r\n\r\n\r\n \r\n\r\n\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvTG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjs7O0FBR3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBR0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7SUFDckIsbUJBQW1CO0FBQ3ZCO0FBR0E7SUFDSSxvREFBb0Q7SUFDcEQsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRSwrQkFBK0I7SUFDL0IsdUdBQXVHO0VBQ3pHO0FBQ0E7O0lBRUUsbUJBQW1CO0VBQ3JCO0FBR0YsV0FBVztBQUNYO0lBQ0kscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7O0lBRWQsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsWUFBWTs7O0lBR1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUNBO0lBQ0UsYUFBYTtFQUNmO0FBQ0E7SUFDRSw0Q0FBNEM7RUFDOUM7QUFHRixhQUFhO0FBQ2I7SUFDSSx5QkFBeUI7SUFDekIsbURBQW1EO0lBQ25ELCtFQUErRTtJQUMvRSw2QkFBNkI7RUFDL0I7QUFDQTtJQUNFLCtCQUErQjtJQUMvQix5R0FBeUc7RUFDM0c7QUFDQTs7SUFFRSx5QkFBeUI7SUFDekIsbURBQW1EO0VBQ3JEO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjOzs7Ozs7O0FBT2hCIiwiZmlsZSI6InNyYy9hcHAvTG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXR1bG9CaWVudmVuaWRve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbiN0aXR1bG97XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG59XHJcbiN0aXR1bG9EaXZ7XHJcbiAgbWFyZ2luLXRvcDogNS41JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG4jZGF0b3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM5MkM2O1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNSU7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyLjc1JTtcclxuXHJcbn1cclxuI2xvZ2luLXBhc3N3b3Jke1xyXG4gICAgbWFyZ2luLXRvcDogNC41JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQuNSU7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG4jbG9naW4tdXNlcm5hbWV7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuXHJcbi5sb2dpbkNvcnJlb3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE3LjJweDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwRTE3NztcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDE2YjA7XHJcbiAgICBtYXJnaW4tdG9wOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNmb3Jte1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4jcmVnaXN0cm97XHJcbiAgbWFyZ2luLXRvcDogNDUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogZ3JlZW4gO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5sb2dpbkJ0bi0tZ29vZ2xlIHtcclxuICAgIC8qZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFJvYm90bywgYXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICAgIGJhY2tncm91bmQ6ICNERDRCMzk7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6ICNCQjNGMzAgMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2dvb2dsZS5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZDogI0U3NEIzNztcclxuICB9XHJcblxyXG4gIFxyXG4vKiBTaGFyZWQgKi9cclxuLmxvZ2luQnRuIHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgICB3aWR0aDogMjEycHg7XHJcbiAgIFxyXG5cclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIG1hcmdpbi10b3A6IDMuNSU7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDM0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5sb2dpbkJ0bjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAubG9naW5CdG46YWN0aXZlIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gIH1cclxuXHJcbiAgXHJcbi8qIEZhY2Vib29rICovXHJcbi5sb2dpbkJ0bi0tZmFjZWJvb2sge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNEM2OUJBLCAjM0I1NUEwKTtcclxuICAgIC8qZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIG5ldWVcIiwgSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Ki9cclxuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xyXG4gIH1cclxuICAubG9naW5CdG4tLWZhY2Vib29rOmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmlnaHQ6ICMzNjRlOTIgMXB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xNDA4Mi9pY29uX2ZhY2Vib29rLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxyXG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVCN0JENTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgwKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxufVxyXG5cclxuLm1hdC1mbGF0LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmJvdG9uZXN7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuXHJcbiBcclxuXHJcblxyXG4gIFxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Login, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "qfzT":
/*!**********************************************!*\
  !*** ./src/app/eventos/eventos.component.ts ***!
  \**********************************************/
/*! exports provided: course, courseList, eventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "course", function() { return course; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseList", function() { return courseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventosComponent", function() { return eventosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");






function eventosComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Firmar Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("course-header ", course_r2.courseType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r2.courseType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", course_r2.Time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r2.courseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r2.Update);
} }
function eventosComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "access_time");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-actions", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Firmar Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("course-header ", course_r3.courseType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3.courseType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", course_r3.Time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3.courseName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r3.Update);
} }
class course {
    constructor() {
        this.Id = -1;
        this.courseType = '';
        this.Time = '';
        this.courseName = '';
        this.Update = '';
    }
}
const courseList = [
    {
        Id: 1,
        courseType: 'Convocatoria',
        Time: 'hace 2 dias',
        courseName: 'Minga Barrial Floresta',
        Update: 'Updated 21 Sep 2020'
    },
    {
        Id: 2,
        courseType: 'Actualizacion',
        Time: 'hace 1 dia',
        courseName: 'Reunion con el alcalde de duran',
        Update: 'Updated 25 Oct 2020'
    },
    {
        Id: 3,
        courseType: 'Convocatoria',
        Time: 'hace 5 dias',
        courseName: 'Donacion de ropa',
        Update: 'Updated 30 Nov 2020'
    },
    {
        Id: 4,
        courseType: 'Actualizacion',
        Time: 'hace 5 horas',
        courseName: 'Intervencion de concejal',
        Update: 'Updated 01 Oct 2020'
    }
];
class eventosComponent {
    constructor() {
        this.courseList = [];
        this.selectedCategory = 'All';
        this.courseList = courseList;
    }
    ngOnInit() {
    }
}
eventosComponent.ɵfac = function eventosComponent_Factory(t) { return new (t || eventosComponent)(); };
eventosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: eventosComponent, selectors: [["app-eventos"]], decls: 4, vars: 2, consts: [["fxLayout", "row", 1, "course-app", 2, "display", "flex"], ["class", "col-3", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 1, "course-app", 2, "display", "flex", "margin-top", "2em"], [1, "col-3"], [2, "margin-top", "12px!important"], [1, "course-name"], [1, "course-duration", 2, "margin-left", "5em"], [1, "m-r-10"], [1, "text-center", 2, "margin-top", "2em"], [1, "m-b-5"], [1, "text-center"], ["mat-button", ""]], template: function eventosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, eventosComponent_div_1_Template, 18, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, eventosComponent_div_3_Template, 18, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courseList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".Actualizacion[_ngcontent-%COMP%] {\r\n      background-color: #fc4b6c;\r\n    }\r\n \r\n    .Convocatoria[_ngcontent-%COMP%] {\r\n      background-color: #1e88e5;\r\n    }\r\n \r\n    .Design[_ngcontent-%COMP%] {\r\n      background-color: #26c6da;\r\n    }\r\n \r\n    .Android[_ngcontent-%COMP%] {\r\n      background-color: #ffb22b;\r\n    }\r\n \r\n    color[_ngcontent-%COMP%]:   #fff[_ngcontent-%COMP%];\r\n \r\n    .mat-card-title[_ngcontent-%COMP%] {\r\n      font-size: 15px !important;\r\n      display: flex;\r\n      align-items: center;\r\n \r\n      .course-duration {\r\n        margin-left: auto;\r\n        display: flex;\r\n        align-items: center;\r\n      }\r\n    }\r\n \r\n    .mat-card-actions[_ngcontent-%COMP%] {\r\n    border-top: 1px solid rgba(120, 130, 140, 0.13);\r\n    padding: 8px 0 !important;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRvcy9ldmVudG9zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO01BQ0UseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCOztJQUVBO01BQ0UseUJBQXlCO0lBQzNCOztJQUVBLFdBQVc7O0lBRVg7TUFDRSwwQkFBMEI7TUFDMUIsYUFBYTtNQUNiLG1CQUFtQjs7TUFFbkI7UUFDRSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtNQUNyQjtJQUNGOztJQUdGO0lBQ0UsK0NBQStDO0lBQy9DLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50b3MvZXZlbnRvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuQWN0dWFsaXphY2lvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYzRiNmM7XHJcbiAgICB9XHJcbiBcclxuICAgIC5Db252b2NhdG9yaWEge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OGU1O1xyXG4gICAgfVxyXG4gXHJcbiAgICAuRGVzaWduIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YzZkYTtcclxuICAgIH1cclxuIFxyXG4gICAgLkFuZHJvaWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjJiO1xyXG4gICAgfVxyXG4gXHJcbiAgICBjb2xvcjogI2ZmZjtcclxuIFxyXG4gICAgLm1hdC1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiBcclxuICAgICAgLmNvdXJzZS1kdXJhdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiBcclxuIFxyXG4gIC5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEyMCwgMTMwLCAxNDAsIDAuMTMpO1xyXG4gICAgcGFkZGluZzogOHB4IDAgIWltcG9ydGFudDtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](eventosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-eventos',
                templateUrl: './eventos.component.html',
                styleUrls: ['./eventos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil/perfil.component */ "nNO8");
/* harmony import */ var _eventos_eventos_evento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos/eventos/evento.component */ "1Rba");
/* harmony import */ var _eventos_detalleEvento_detalleEvento_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventos/detalleEvento/detalleEvento.component */ "SKVu");
/* harmony import */ var _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nosotros/nosotros.component */ "RMTz");
/* harmony import */ var _campanas_detalleCampana_detalleCampana_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campanas/detalleCampana/detalleCampana.component */ "AUQW");
/* harmony import */ var _campanas_crearCampana_crear_campana_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./campanas/crearCampana/crear_campana.component */ "SdBj");
/* harmony import */ var _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./campanas/campanas/campanas.component */ "+eSH");
/* harmony import */ var _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./campanas/misCampanas/misCampanas.component */ "05UE");
/* harmony import */ var _Login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Login/login.component */ "nS8V");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _cuenta_registrarUsuario_registrarUsuario_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cuenta/registrarUsuario/registrarUsuario.component */ "5QkE");
/* harmony import */ var _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./eventos/eventos.component */ "qfzT");
















const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["CardFancyExample"] },
    { path: 'campanas', component: _campanas_campanas_campanas_component__WEBPACK_IMPORTED_MODULE_8__["Campana"] },
    { path: 'perfil', component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_2__["Perfil"] },
    { path: 'crearCampana', component: _campanas_crearCampana_crear_campana_component__WEBPACK_IMPORTED_MODULE_7__["CrearCampana"] },
    { path: 'detalleCampana', component: _campanas_detalleCampana_detalleCampana_component__WEBPACK_IMPORTED_MODULE_6__["DetalleCampana"] },
    { path: 'detalleEvento', component: _eventos_detalleEvento_detalleEvento_component__WEBPACK_IMPORTED_MODULE_4__["DetalleEvento"] },
    { path: 'login', component: _Login_login_component__WEBPACK_IMPORTED_MODULE_10__["Login"] },
    { path: 'misCampanas', component: _campanas_misCampanas_misCampanas_component__WEBPACK_IMPORTED_MODULE_9__["misCampanas"] },
    { path: 'nosotros', component: _nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_5__["Nosotros"] },
    { path: 'eventos', component: _eventos_eventos_evento_component__WEBPACK_IMPORTED_MODULE_3__["Eventos"] },
    { path: 'registrarUsuario', component: _cuenta_registrarUsuario_registrarUsuario_component__WEBPACK_IMPORTED_MODULE_12__["RegistrarUsuario"] },
    { path: 'eventos', component: _eventos_eventos_component__WEBPACK_IMPORTED_MODULE_13__["eventosComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "z58/":
/*!***********************************************!*\
  !*** ./src/app/services/fire-base.service.ts ***!
  \***********************************************/
/*! exports provided: FireBaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBaseService", function() { return FireBaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "wD+u");



// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';
// import firebase from "firebase/app";




class FireBaseService {
    // public user$: Observable<firebase.User> = this.AuthService.afAuth.user;
    // public userId;
    // public datosUsuario;
    constructor(
    //private AuthService: AuthService,
    // private firestoreService: FireBaseService,
    firestore, http) {
        this.firestore = firestore;
        this.http = http;
    }
    // getCampañas() {
    //   return this.firestore.collection("Campañas").snapshotChanges();
    // }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const user = await this.AuthService.getCurrentUser();
            // this.userId = await this.AuthService.getCurrentUser();
            // console.log('aqui: ',this.userId.uid)
            //this.getDatosUser(user.uid);
            // console.log(user.displayName);
        });
    }
    getCampanasActivas() {
        console.log('luis');
        console.log(this.firestore.collection("campaigns").snapshotChanges());
        return this.firestore.collection("campaigns").snapshotChanges();
    }
    getCampañasUsuario(id = "", userId = "") {
        if (id == "todas") {
            console.log('cargando todas de: ', userId);
            return this.firestore.collection("campaigns", ref => ref.where("promoter.id", '==', userId)).snapshotChanges();
        }
        else if (id == "negadas") {
            return this.firestore.collection("campaigns", ref => ref.where("promoter.id", '==', userId).where("state.rejected", "==", true)).snapshotChanges();
        }
        else if (id == "pendientes") {
            return this.firestore.collection("campaigns", ref => ref.where("promoter.id", '==', userId).where("state.waiting", '==', true)).snapshotChanges();
        }
        else if (id == "aprobadas") {
            return this.firestore.collection("campaigns", ref => ref.where("promoter.id", '==', userId).where("state.running", '==', true)).snapshotChanges();
        }
        else {
            return this.firestore.collection("campaigns", ref => ref.where("promoter.id", '==', userId)).snapshotChanges();
        }
        //return this.firestore.collection("campaignUpdates").snapshotChanges();
    }
    crearCampaña(campaigns) {
        console.log('holita');
        console.log(campaigns);
        let body = JSON.stringify(campaigns);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        console.log('no');
        console.log(body);
        return this.http.post('https://us-central1-test-cd786.cloudfunctions.net/CreateCampaign/posts.json', body, { headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            console.log('hola aqui');
            console.log(res);
            return res;
        })); //.subscribe()
    }
    getOriginalCampaignById(campaign_id) {
        return this.firestore.collection("campaigns").doc(campaign_id).snapshotChanges();
    }
    // const racesCollection: AngularFirestoreCollection<Race>;
    // return racesCollection.snapshotChanges().map(actions => {       
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Race;
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // });
    getDatosUser(userId) {
        return this.firestore.collection("users").doc(userId).snapshotChanges();
    }
    getEventById(event_id) {
        //console.log(this.firestore.collection("events").doc(event_id).snapshotChanges());
        return this.firestore.collection("events").doc(event_id).snapshotChanges();
        //return this.firestore.collection("events", ref => ref.where("campaignId",'==',event_id)).snapshotChanges();
    }
    getEvents() {
        return this.firestore.collection("events", ref => ref.where("state.running", '==', true)).snapshotChanges();
    }
}
FireBaseService.ɵfac = function FireBaseService_Factory(t) { return new (t || FireBaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FireBaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FireBaseService, factory: FireBaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FireBaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map