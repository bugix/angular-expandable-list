import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  items: any;
  listAExpanded = false;
  listBExpanded = true;
  listCExpanded = false;

  title = 'hi';

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      title: 'Spices',
      items: [
        {
          title: 'salt',
          link: 'https://en.wikipedia.org/wiki/Salt'
        }, {
          title: 'Black pepper',
          link: 'https://en.wikipedia.org/wiki/Black_pepper'
        }
      ]
    }, {
      title: 'Cats',
      items: [
        {
          title: 'Siberian',
          link: 'https://en.wikipedia.org/wiki/Siberian_cat'
        }, {
          title: 'Maine Coon',
          link: 'https://en.wikipedia.org/wiki/Maine_Coon'
        }, {
          title: 'American Bobtail',
          link: 'https://en.wikipedia.org/wiki/American_Bobtail'
        }, {
          title: 'British Longhair',
          link: 'https://en.wikipedia.org/wiki/British_Longhair'
        }
      ]
    }];
  }

  toggleMe(): void {
    this.listAExpanded = !this.listAExpanded;
  }

  updateStatus(event: boolean) {
    console.log(event);
    this.listAExpanded = event;
  }
}
