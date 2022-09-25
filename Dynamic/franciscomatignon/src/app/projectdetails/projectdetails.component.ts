import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { DatabaseService } from '../database.service';
import { Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

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
    ) {  }

  mobile: boolean = false
  tablet: boolean = false
  desktop: boolean = false
  activeProjectLink: any = this.route.snapshot.paramMap.get('project')
  activeProject: any = this.database.getProjectByLink(this.activeProjectLink)
  activeImage = this.activeProject.images[0]
  ngOnInit(): void {
    this.activeProject = this.database.getProjectByLink(this.activeProjectLink)
    this.title.setTitle(`Francisco Matignon - ${this.activeProject.name}`)
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
  imageCounter: number = 0
  nextImage() {
    if (this.imageCounter == this.activeProject.images.length - 1) {
      this.imageCounter = 0;
    }
    else {
      this.imageCounter +=1
    }
    this.activeImage = this.activeProject.images[this.imageCounter]
  }
  previousImage() {
    if (this.imageCounter == 0) {
      this.imageCounter = this.activeProject.images.length - 1;
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
}
