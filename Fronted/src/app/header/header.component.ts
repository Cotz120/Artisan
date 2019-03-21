import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exitsSession: boolean = true;

  constructor() {
    if(localStorage.getItem('session')){
      this.exitsSession = false;
    }
   }

  ngOnInit() {
  }

}
