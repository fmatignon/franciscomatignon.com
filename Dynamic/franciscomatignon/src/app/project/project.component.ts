import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/classes/project';
import { Route, Router } from '@angular/router';
import { fromEvent, Observable, Subscription } from "rxjs";
import { ModalDismissReasons, NgbModal, NgbModalConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProjectComponent implements OnInit {
  
  mobile: boolean = false
  tablet: boolean = false
  desktop: boolean = false
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  

  closeResult ='';
  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result: any) => {},
			(reason: any) => {},
		)};

  constructor(private modalService: NgbModal, config: NgbModalConfig, public router: Router) {
    config.backdrop=true;
    config.keyboard=true;
    config.centered=true;
    config.size='xl'
    config.windowClass='HOLA'
    config.scrollable=false
  }
  @Input() project: any;
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