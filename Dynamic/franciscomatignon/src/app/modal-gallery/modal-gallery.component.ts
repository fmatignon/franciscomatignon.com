import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Project } from 'src/classes/project';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css']
})
export class ModalGalleryComponent implements OnInit {
  @Input() title = '';
  @ViewChild('modalBackground') modalBackground: ElementRef;
  @ViewChild('slideWrapper') slideWrapper: ElementRef;
  @ViewChild('slideWrapper') slideWrapper2: ElementRef;
  @ViewChild('carousel') carousel: ElementRef;
  show = false;
  hideGallery(): void {
    this.show = false;
  }
  currentProject: any;
  showGallery(projectLink: string){
    let plString = String(projectLink)
    this.currentProject = this.database.getProjectByLink(plString)
    console.log(this.currentProject)
    this.show = true
  }

  constructor(private renderer: Renderer2, private database: DatabaseService) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.modalBackground && (e.target === this.modalBackground.nativeElement || e.target === this.slideWrapper.nativeElement || e.target === this.carousel.nativeElement|| e.target === this.slideWrapper2.nativeElement)) {
        this.hideGallery()
      }
      console.log(e.target)
    })
  }

  ngOnInit(): void {
  }

}
