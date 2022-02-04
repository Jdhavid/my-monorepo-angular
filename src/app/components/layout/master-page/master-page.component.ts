import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrls: ['./master-page.component.css']
})
export class MasterPageComponent implements OnInit {
  public isCollapsed: boolean = false;
  constructor() { }

  ngOnInit() { }

  public onToggeNav(toggle: boolean): void {
    this.isCollapsed = toggle;
    console.log(this.isCollapsed);
  }

}
