import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/classes/project';
import { Route } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  constructor() { }
  @Input() project: any;
  ngOnInit(): void {
  }
}