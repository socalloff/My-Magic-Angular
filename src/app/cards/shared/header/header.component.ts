import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-magic-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
