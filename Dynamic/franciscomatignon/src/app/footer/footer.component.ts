import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from "rxjs";

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

  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize')
    this.resizeSubscription$ = this.resizeObservable$.subscribe( evt => {
      if (window.innerWidth >= 1200) {
        this.desktop = true
        this.tablet = false
        this.mobile = false
      }
      else if (window.innerWidth >= 768 ) {
        this.desktop = false
        this.tablet = true
        this.mobile = false
      }
      else {
        this.desktop = false
        this.tablet = false
        this.mobile = true
      }
    })


    if (window.innerWidth >= 1200) {
      this.desktop = true
    }
    else if (window.innerWidth >= 768 ) {
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
