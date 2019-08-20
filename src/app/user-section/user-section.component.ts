import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.less']
})
export class UserSectionComponent implements OnInit {
  @Input() public isUserLoggedIn: boolean;

  constructor() { }

  ngOnInit() {
  }

}
