import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { DatabaseService } from '../database.service';
import { Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';
import { fromEvent, Observable, Subscription } from "rxjs";

import { Project } from 'src/classes/project';

import projects from '../../assets/database/projects.json'

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Location: Location,
    private database: DatabaseService,
    private title: Title
    ) {      }
  mobile: boolean = false
  tablet: boolean = false
  desktop: boolean = false
  activeProjectLink: any = this.route.snapshot.paramMap.get('project')
  activeProjectLinkId: number = this.database.getProjectIdByLink(this.activeProjectLink)
  activeProject: any = this.database.projects[this.activeProjectLinkId]

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

    this.activeProject = this.database.projects[this.activeProjectLinkId]
    if (this.activeProjectLinkId == 0) {
      this.router.navigateByUrl('404')
    }
    this.title.setTitle(`Francisco Matignon - ${this.activeProject.name}`)
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
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe()
}

  activeImage = this.activeProject.images[0]
  imageCounter: number = 0
  lastProject:boolean = this.activeProjectLinkId == this.database.projects.length - 1
  firstProject: boolean = this.activeProjectLinkId == 1
  checkFirstandLast() {
  this.lastProject = this.activeProjectLinkId == this.database.projects.length - 1
  this.firstProject = this.activeProjectLinkId == 1
  }
  nextImage() {
    if (this.imageCounter == this.activeProject.images.length - 1) {
      if (this.activeProjectLinkId < this.database.projects.length - 1) {
        this.router.navigateByUrl(`/${this.database.projects[this.activeProjectLinkId+1].link}`)
        this.activeProjectLinkId +=1
        this.activeProject = this.database.projects[this.activeProjectLinkId]
        this.checkFirstandLast()
        this.imageCounter = 0
      }
      else {
        this.lastProject= true;
      }
    }
    else {
      this.imageCounter +=1
    }
    this.activeImage = this.activeProject.images[this.imageCounter]
  }
  previousImage() {
    if (this.imageCounter == 0) {
      if (this.activeProjectLinkId > 1) {
        this.router.navigateByUrl(`/${this.database.projects[this.activeProjectLinkId-1].link}`)
        this.activeProjectLinkId -= 1
        this.activeProject = this.database.projects[this.activeProjectLinkId]
        this.checkFirstandLast()
        this.imageCounter = 0
      }
      else {
        this.firstProject == true
      }
      
    }
    else {
      this.imageCounter -=1
    }
    this.activeImage = this.activeProject.images[this.imageCounter]
  }
  projectsArray = [];
  makeProjectsList(): void {
    for (let project in projects) {
      console.log(project)
    }
  }
  toTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    })}
}
