import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public router: Router) { }
  mobile: boolean = false
  tablet: boolean = false
  desktop: boolean = false
  ngOnInit(): void {
    if (window.screen.width >= 1200) {
      this.desktop = true
    }
    else if (window.screen.width >= 768 ) {
      this.tablet = true
    }
    else {
      this.mobile = true
    }
  }
  toTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    })
  }
}
