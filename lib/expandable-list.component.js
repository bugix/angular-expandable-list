var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Directive, ViewEncapsulation, HostBinding, Input, ElementRef, ViewChild, } from '@angular/core';
var ExpandableListComponent = (function () {
    function ExpandableListComponent() {
    }
    return ExpandableListComponent;
}());
ExpandableListComponent = __decorate([
    Component({
        selector: 'expandable-list',
        styles: ['.expandable-list {  display: block;}.expandable-list .expandable-list-item {  display: block;  text-transform: capitalize;  color: #000;  background: #FFF;}.expandable-list [disabled].expandable-list-item {  background: #eeeeee;}.expandable-list .expandable-list-item + .expandable-list-item {  border-top: 1px solid #e0e0e0;}.expandable-list .expandable-list-item .expandable-list-item-title {  display: flex;  flex-flow: row wrap;  align-items: center;  box-sizing: border-box;  padding: 0 16px;  height: 52px;  font-size: 16px;  cursor: pointer;}.expandable-list [disabled].expandable-list-item .expandable-list-item-title {  cursor: default;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item--title,.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item--secondary {  flex: 1;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item--secondary {  margin-top: 3px;  max-height: 18px;  transition: max-height .2s cubic-bezier(0, 0, 0.2, 1),              opacity .2s cubic-bezier(0, 0, 0.2, 1);}.expandable-list .expandable-list-item .expandable-list-item-title.expanded .expandable-list-item--secondary {  opacity: 0;  max-height: 0;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item--title {  color: #000;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item--secondary,.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown {  color: #757575;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item-title__title {  flex: auto;  display: flex;  flex-direction: column;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown {  flex: 1;  text-align: end;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown svg {  width: 18px;  vertical-align: middle;}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown-chevron-line1,.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown-chevron-line2 {  stroke: #444;  stroke-width: 12px;  transform-origin: 50px 50px;  transition: transform 300ms cubic-bezier(0.65, 0.05, 0.36, 1);}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown-chevron-line1 {  transform: rotateZ(45deg);}.expandable-list .expandable-list-item .expandable-list-item-title.expanded .expandable-list-item__dropdown-chevron-line1 {  transform: rotateZ(-45deg);}.expandable-list .expandable-list-item .expandable-list-item-title .expandable-list-item__dropdown-chevron-line2 {  transform: rotateZ(-45deg);}.expandable-list .expandable-list-item .expandable-list-item-title.expanded .expandable-list-item__dropdown-chevron-line2 {  transform: rotateZ(45deg);}.expandable-list .expandable-list-item .expandable-list-item-content[hidden] {  display: none;}.expandable-list .expandable-list-item .expandable-list-item-overflow {  overflow: hidden;}.expandable-list .expandable-list-item .expandable-list-item-content {  margin-top: -9999em;  padding: 16px 0;  overflow: auto;  font-size: 16px;  opacity: 0;  pointer-events: none;  transition: opacity 0.15s ease-out,              margin-top 0.3s ease-out;}.expandable-list .expandable-list-item .expandable-list-item-content.expanded {  overflow: auto;  opacity: 1;  pointer-events: auto;  transition: opacity 0.3s ease-in,              margin-top 0.2s ease-in;}.expandable-list .expandable-list-item .expandable-list-item-content > [item] {  display: block;  padding: 0 16px;  line-height: 40px;  text-decoration: none;  color: #000;}.expandable-list .expandable-list-item .expandable-list-item-content > [item]:hover {  background: rgba(0,0,0,0.1);}.expandable-list .expandable-list-item .expandable-list-item-content .expandable-list-divider {  display: block;  margin: 12px 16px;  border-top: 1px solid #e0e0e0;}'],
        template: "<ng-content></ng-content>",
        encapsulation: ViewEncapsulation.None,
    })
], ExpandableListComponent);
export { ExpandableListComponent };
var ExpandableListStyler = (function () {
    function ExpandableListStyler() {
    }
    return ExpandableListStyler;
}());
ExpandableListStyler = __decorate([
    Directive({
        selector: 'expandable-list',
        host: {
            '[class.expandable-list]': 'true'
        }
    })
], ExpandableListStyler);
export { ExpandableListStyler };
var ExpandableListDividerStyler = (function () {
    function ExpandableListDividerStyler() {
    }
    return ExpandableListDividerStyler;
}());
ExpandableListDividerStyler = __decorate([
    Directive({
        selector: 'expandable-list-divider',
        host: {
            '[class.expandable-list-divider]': 'true'
        }
    })
], ExpandableListDividerStyler);
export { ExpandableListDividerStyler };
var ExpandableListItemComponent = (function () {
    function ExpandableListItemComponent() {
        this.isExpanded = false;
    }
    Object.defineProperty(ExpandableListItemComponent.prototype, "disabled", {
        get: function () { return this.isDisabled; },
        set: function (value) {
            this.isDisabled = (value !== null && "" + value !== 'false') ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    ExpandableListItemComponent.prototype.ngAfterViewInit = function () {
        this.elHeight = this.elementView.nativeElement.offsetHeight;
        this.marginTop = "-" + this.elHeight + "px";
    };
    ExpandableListItemComponent.prototype.onClick = function () {
        if (this.disabled) {
            return;
        }
        this.isExpanded = !this.isExpanded;
        if (!this.isExpanded) {
            this.marginTop = "-" + this.elHeight + "px";
        }
        else {
            this.marginTop = '0';
        }
    };
    return ExpandableListItemComponent;
}());
__decorate([
    Input('disabled'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], ExpandableListItemComponent.prototype, "disabled", null);
__decorate([
    ViewChild('contentEl'),
    __metadata("design:type", ElementRef)
], ExpandableListItemComponent.prototype, "elementView", void 0);
__decorate([
    HostBinding('attr.disabled'),
    __metadata("design:type", Boolean)
], ExpandableListItemComponent.prototype, "isDisabled", void 0);
ExpandableListItemComponent = __decorate([
    Component({
        selector: 'expandable-list-item',
        host: {
            '[class.expandable-list-item]': 'true',
        },
        template: '<div class="expandable-list-item-title" [class.expanded]="isExpanded" (click)="onClick()"><div class="expandable-list-item-title__title"><span class="expandable-list-item--title"><ng-content select="[title]"></ng-content></span><span class="expandable-list-item--secondary"><ng-content select="[secondary]"></ng-content></span></div><div class="expandable-list-item__dropdown"><svg version="1.1" viewBox="0 -60 100 220" xmlns="http://www.w3.org/2000/svg"><g class="expandable-list-item__dropdown-chevron"><line class="expandable-list-item__dropdown-chevron-line1" x1="-10" x2="55" y1="50" y2="50"></line><line class="expandable-list-item__dropdown-chevron-line2" x1="110" x2="44" y1="50" y2="50"></line></g></svg></div></div><div class="expandable-list-item-overflow"><div class="expandable-list-item-content" [class.expanded]="isExpanded" [ngStyle]="{\'margin-top\': marginTop }" [attr.aria-hidden]="!isExpanded" #contentEl><ng-content select="[item]"></ng-content></div></div>',
        encapsulation: ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [])
], ExpandableListItemComponent);
export { ExpandableListItemComponent };
//# sourceMappingURL=expandable-list.component.js.map