import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SidebarComponent implements OnInit {
  public isClosed = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  public onAdd() {
    console.log(this.document?.defaultView);
    (this.document?.defaultView as any).createMore();
  }

  public onClose() {
    this.isClosed = true;
  }
}
