import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Route, UrlSegment } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Element } from '@angular/compiler';

import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private database: DatabaseService,
  ) {  }

  ngOnInit(): void {
  }
  projectsSection = document.getElementById('header')
  projectsScroll() {
    alert(this.projectsSection)
    this.projectsSection?.scrollIntoView({behavior:'smooth'})
  }
}
