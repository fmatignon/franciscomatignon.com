import { Component, OnInit } from '@angular/core';
import projects from '../../assets/database/projects.json'
import { Project } from 'src/classes/project';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private database: DatabaseService) { }
  projects = this.database.projects
  ngOnInit(): void {
  }
}
