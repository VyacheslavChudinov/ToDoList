import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.less']
})
export class UserSectionComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean;
  @Output() public onLogoutClick = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  logout(){
    this.onLogoutClick.emit();
  }

}
