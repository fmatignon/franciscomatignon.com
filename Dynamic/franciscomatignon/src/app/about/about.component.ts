import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    // -- MAKE RESPONSIVE
    mobile: boolean = false
    tablet: boolean = false
    desktop: boolean = false
    resizeObservable$: Observable<Event>
    resizeSubscription$: Subscription
    // -- MAKE RESPONSIVE END
  
    name: string ="";
    email: string ="";
    subject: string ="";
    message: string ="";
    
    serviceID ="service_7pvvwqm"
    templateID ="template_4za1b1j"
    publicKey ="GnFFybdLoElFXsyEy"
    params ={
      'name': '',
      'email': '',
      'subject': '',
      'message': ''
    }
    public sendEmail() {
      emailjs.send(this.serviceID,this.templateID, this.params, this.publicKey).then(
        res => {
          this.params.name = "";
          this.params.email ="";
          this.params.subject = "";
          this.params.message = "";
          console.log(res);
          alert("Message sent");
        })
    }

  constructor() { }

  ngOnInit(): void {
        // -- MAKE RESPONSIVE
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
        // -- MAKE RESPONSIVE END
  }

}
