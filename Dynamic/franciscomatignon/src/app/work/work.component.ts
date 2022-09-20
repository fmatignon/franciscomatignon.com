import { Component, OnInit } from '@angular/core';
import projects from '../../assets/database/projects.json'
import { Project } from 'src/classes/project';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects: Project[] = projects;
}
