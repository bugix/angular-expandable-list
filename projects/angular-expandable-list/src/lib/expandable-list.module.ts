import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpandableListComponent, ExpandableListDividerStyler, ExpandableListStyler } from './expandable-list.component';
import { ExpandableListItemComponent } from './expandable-list-item.component';

@NgModule({
  declarations: [
    ExpandableListComponent,
    ExpandableListItemComponent,
    ExpandableListStyler,
    ExpandableListDividerStyler
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExpandableListComponent,
    ExpandableListItemComponent,
    ExpandableListStyler,
    ExpandableListDividerStyler
  ]
})
export class ExpandableListModule { }
