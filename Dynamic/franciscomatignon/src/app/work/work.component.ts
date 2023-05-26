import { Component, OnInit } from '@angular/core';
import projects from '../../assets/database/projects.json'
import { Project } from 'src/classes/project';
import { DatabaseService } from '../database.service';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})



export class WorkComponent implements OnInit {

  mobile: boolean = false
  tablet: boolean = false
  desktop: boolean = false
  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription

  coverCounter = 1
  coverImage: string = `../../assets/Covers/Mobile/${this.coverCounter}.jpg`;
  changeCoverImage() {
    setTimeout(() => {}, 500)
    this.coverCounter = 0
  }

  constructor(private database: DatabaseService) { }
  projects = this.database.projects
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

    setInterval(this.changeCoverImage,500)
  }
}
