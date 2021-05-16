import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
url: string;
  constructor(private location: Location) { }

  ngOnInit(): void {
      this.url = this.location.path();
      console.log(this.url);
  }

}
