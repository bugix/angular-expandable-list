import {
  Component,
  Directive,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'expandable-list',
  styleUrls: ['./expandable-list.component.css'],
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None
})
export class ExpandableListComponent { }

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 */
@Directive({
  selector: 'expandable-list',
  host: {
    '[class.expandable-list]': 'true'
  }
})
export class ExpandableListStyler { }

@Directive({
  selector: 'expandable-list-divider',
  host: {
    '[class.expandable-list-divider]': 'true'
  }
})
export class ExpandableListDividerStyler { }


