import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-item',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  listOfMenu = [{name:"Page 1",url: "page-1"},{name:"Page 2",url: "page-2"}];

}
