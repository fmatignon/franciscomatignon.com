import { Injectable } from '@angular/core';

// import project class
import { Project } from '../classes/project';
//import database and array

import PROJECTS from '../assets/database/projects.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor() { }
  projects: Project[] = PROJECTS;
  getProjectByLink(link: any){
    for (let project of this.projects) {
      if (project.link == link) {
        return project
      }
    }
    return null
  }
  getProjectIdByLink(link: any){
    let counter = 0;
    for (let project of this.projects) {
      if (project.link == link) {
        return counter
      }
      else {
        counter +=1
      }
    }
    return 0
  }
}
