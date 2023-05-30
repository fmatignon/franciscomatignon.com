import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DatabaseService } from '../database.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-gallery',
  templateUrl: './modal-gallery.component.html',
  styleUrls: ['./modal-gallery.component.css'],
})
export class ModalGalleryComponent implements OnInit {
  @Input() title = '';
  @ViewChild('modalBackground') modalBackground: ElementRef;
  @ViewChild('slideWrapper') slideWrapper: ElementRef;
  @ViewChild('carousel') carousel: ElementRef;
  show = false;
  hideGallery(): void {
    this.show = false;
  }
  currentProject: any;
  showGallery(projectLink: string){
    let plString = String(projectLink)
    this.currentProject = this.database.getProjectByLink(plString)
    this.show = true
  }

  constructor(private renderer: Renderer2, private database: DatabaseService, private carouselConfig: NgbCarouselConfig) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (this.slideWrapper && ((e.target as HTMLDivElement).classList.contains('slide-wrapper') || (e.target as HTMLDivElement).classList.contains('modal-container'))) {
          this.hideGallery()
      }
    })
    this.carouselConfig.interval = 999999;
    this.carouselConfig.keyboard = true;
    this.carouselConfig.animation = false;
  }

  ngOnInit(): void {
  }

}
