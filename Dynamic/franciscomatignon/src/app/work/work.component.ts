import { Component, OnInit} from '@angular/core';
import projects from '../../assets/database/projects.json'
import { Project } from '../../classes/project'
import { DatabaseService } from '../database.service';
import { fromEvent, Observable, Subscription } from "rxjs";

import { NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import mobileCoversjson from '../../assets/database/mobileCovers.json'
import tabletCoversjson from '../../assets/database/tabletCovers.json'
import desktopCoversjson from '../../assets/database/desktopCovers.json'

import { ReversePipe } from 'ngx-pipes';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  providers: [ReversePipe]
})

export class WorkComponent implements OnInit {
  // -- MAKE RESPONSIVE
  mobile: boolean = false
  tablet: boolean = false
  desktop: boolean = false
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription
  // -- MAKE RESPONSIVE END

  // -- CAROUSEL PARAMETERS
  showNavigationArrows = false;
  showNavigationIndicators = false;
  animation = false

  // Initialize projects array
  projects: Project[] = []
  // Initialize covers arrays
  mobileCovers: string[] = mobileCoversjson
  tabletCovers: string[] = tabletCoversjson
  desktopCovers: string[] = desktopCoversjson

  constructor(private database: DatabaseService, private reversePipe: ReversePipe) { }
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
    
    // Populate projects array
    this.projects = this.database.projects
  }
}
