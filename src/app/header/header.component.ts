import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor() { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
  }
}
