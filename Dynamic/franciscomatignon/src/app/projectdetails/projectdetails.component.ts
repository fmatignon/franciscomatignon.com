import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';
import { DatabaseService } from '../database.service';
import { Title } from '@angular/platform-browser';

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
  
  activeProject: any;
  ngOnInit(): void {
    console.log(this.activeProjectLink)
    this.activeProject = this.database.getProjectByLink(this.activeProjectLink)
    this.title.setTitle(`Francisco Matignon - ${this.activeProject.name}`)
  }
  activeProjectLink: any = this.route.snapshot.paramMap.get('project')
  projectsArray = [];
  makeProjectsList(): void {
    for (let project in projects) {
      console.log(project)
    }
  }
}
