/**
 * angular-expandable-list
 *
 * Copyright 2017, @andreasonny83, All rights reserved.
 *
 * @author: @andreasonny83 <andreasonny83@gmail.com>
 */

import {
  TestBed,
  async,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  Component,
  DebugElement,
} from '@angular/core';

import { ExpandableListModule } from '../../../angular-expandable-list/src/lib/expandable-list.module';

describe('ExpandableListModule', () => {
  let fixture;
  let listDe: DebugElement;
  let listItemDe: DebugElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ExpandableListModule],
      declarations: [
        TestApp,
        TestApp2,
      ],
    });

    TestBed.compileComponents(); // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestApp);
    listDe = fixture.debugElement.query(By.css('expandable-list'));
    listItemDe = fixture.debugElement.query(By.css('expandable-list-item'));
  });

  // General tests
  it('should render the ExpandableList element on the page', () => {
    fixture.detectChanges();

    expect(listDe.nativeElement.classList.contains('expandable-list')).toBe(true);
  });

  it('should contain a title and an item-content element', () => {
    fixture.detectChanges();
    const itemTitle = listItemDe.nativeElement.querySelector('.expandable-list-item-title');
    const itemContent = listItemDe.nativeElement.querySelector('.expandable-list-item-content');

    expect(itemTitle).toBeTruthy();
    expect(itemContent).toBeTruthy();
  });

  it('the title should contain a label and a drop-down button', () => {
    fixture.detectChanges();
    const itemTitle = listItemDe.query(By.css('.expandable-list-item-title .expandable-list-item--title'));
    const titleLabel = itemTitle.query(By.css('span'));
    const dropDown = listItemDe.nativeElement.querySelector('.expandable-list-item__dropdown');

    expect(itemTitle).toBeTruthy();
    expect(titleLabel.nativeElement.getAttribute('title'))
      .toBe('', 'Expect title attribute');
    expect(titleLabel.nativeElement.textContent).toEqual('Title');
    expect(dropDown).toBeTruthy();
  });

  it('disable attribute', () => {
    const testComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(listItemDe.nativeElement.getAttribute('disabled'))
      .toBeNull('list item element enabled');

    testComponent.listDisabled = true;
    fixture.detectChanges();

    expect(listItemDe.nativeElement.getAttribute('disabled'))
      .toBe('true', 'list item element disabled');
  });

  it('expanded attribute', () => {
    const testComponent = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    expect(listItemDe.nativeElement.getAttribute('is-expanded'))
      .toBe('false', 'list item element collapsed');

    testComponent.listExpanded = true;
    fixture.detectChanges();

    expect(listItemDe.nativeElement.getAttribute('is-expanded'))
      .toBe('true', 'list item element expanded');
  });

  it('user interaction', () => {
    const testComponent: TestApp = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    const itemTitle = listItemDe.query(By.css('.expandable-list-item-title'));

    expect(listItemDe.nativeElement.getAttribute('is-expanded'))
      .toBe('false', 'list item element collapsed');

    itemTitle.nativeElement.click();
    fixture.detectChanges();

    expect(listItemDe.nativeElement.getAttribute('is-expanded'))
      .toBe('true', 'list item element expanded');

    itemTitle.nativeElement.click();
    testComponent.listDisabled = true;

    fixture.detectChanges();

    expect(listItemDe.nativeElement.getAttribute('is-expanded'))
      .toBe('false', 'list item element collapsed');
  });

  it('should trigger an event when the status change', () => {
    const testComponent: TestApp = fixture.debugElement.componentInstance;
    const itemTitle = listItemDe.query(By.css('.expandable-list-item-title'));

    fixture.detectChanges();

    expect(testComponent.listExpanded).toBe(false);

    itemTitle.nativeElement.click();
    fixture.detectChanges();

    expect(testComponent.listExpanded).toBe(true);
  });

  it('user interaction on a disabled list', () => {
    const fixture2 = TestBed.createComponent(TestApp2);
    const listItem2De = fixture2.debugElement.query(By.css('expandable-list-item'));
    const itemTitle = listItem2De.query(By.css('.expandable-list-item-title'));

    fixture2.detectChanges();

    expect(listItem2De.nativeElement.getAttribute('is-expanded'))
      .toBe('false', 'list item element collapsed');

    itemTitle.nativeElement.click();
    fixture2.detectChanges();

    expect(listItem2De.nativeElement.getAttribute('is-expanded'))
      .toBe('false', 'list item element still collapsed');
  });

});

/** Test component that contains an list element. */
@Component({
  selector: 'test-app',
  template: `
  <expandable-list class="expandable-list">
  <expandable-list-item [isExpanded]="listExpanded"
                        [disabled]="listDisabled"
                        (onExpanded)="listExpanded = $event">
    <span title>Title</span>
    <span secondary>secondary</span>
    <a href="http://www.goo.gl">Something else</a>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>
    <a item href="http://www.goo.gl">Google</a>

    <expandable-list-divider></expandable-list-divider>

    <a item href="http://www.goo.gl">Google</a>
  </expandable-list-item>
  </expandable-list>
  `
})
class TestApp {
  listExpanded: boolean = false;
  listDisabled: boolean = false;
}

@Component({
  selector: 'test-app',
  template: `
  <expandable-list class="expandable-list">
  <expandable-list-item disabled>
    <span title>Title</span>
    <a item href="http://www.goo.gl">Google</a>
  </expandable-list-item>
  </expandable-list>
  `
})
class TestApp2 { }
