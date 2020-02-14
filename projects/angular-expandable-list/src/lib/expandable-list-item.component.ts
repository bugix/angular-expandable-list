import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'expandable-list-item',
  host: {
    '[class.expandable-list-item]': 'true',
  },
  templateUrl: './expandable-list-item.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ExpandableListItemComponent implements AfterViewInit, OnChanges {
  public marginTop: string;

  @Output()
  public onExpanded: EventEmitter<boolean>;

  private elHeight: number;

  @ViewChild('contentEl')
  private elementView: ElementRef;

  @HostBinding('attr.disabled')
  public isDisabled: boolean;

  @HostBinding('attr.is-expanded')
  public expanded = false;

  @Input('isExpanded')
  get isExpanded() { return this.expanded; }
  set isExpanded(value: boolean) {
    this.expanded = (value !== null && `${value}` !== 'false');
  }

  @Input('disabled')
  get disabled() { return this.isDisabled; }
  set disabled(value: boolean) {
    this.isDisabled = (value !== null && `${value}` !== 'false') ? true : null;
  }

  public ngAfterViewInit() {
    this.elHeight = this.elementView.nativeElement.offsetHeight;
  }

  constructor() {
    this.onExpanded = new EventEmitter<boolean>();
  }

  public ngOnChanges(changes: SimpleChanges) {
    if ('isExpanded' in changes) {
      this.updateMarginTop();
    }
  }

  public onClick() {
    if (this.disabled) {
      return;
    }

    this.isExpanded = !this.isExpanded;

    this.updateMarginTop();
  }

  private updateMarginTop() {
    if (!this.isExpanded) {
      this.marginTop = `-${this.elHeight}px`;
    } else {
      this.marginTop = '0';
    }

    this.onExpanded.emit(this.isExpanded);
  }
}
