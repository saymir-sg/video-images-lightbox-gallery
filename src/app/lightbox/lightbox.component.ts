import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Input, OnInit } from '@angular/core';

interface Item {
  type: string;
  src: string;
  alt: string;
  videoType?: string;
}

@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox.component.html',
  styleUrls: [ './lightbox.component.css' ],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ])
    ]),
    trigger('animation-leave', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class LightboxComponent implements OnInit  {

  @Input() galleryData: Item[] = [];
  @Input() slidesToShow: number;
  @Input() showCount: boolean = false;

  previewVisible = false;
  showMask = false;
  currentIndex = 0;
  currentLightboxItem: Item = this.galleryData[0];
  controls = true;
  totalItemsCount = 0;
  elem: any;
  isFullScreen: boolean;
  constructor(@Inject(DOCUMENT) private document: any) {}

  ngOnInit(){
    this.totalItemsCount = this.galleryData.length;
    this.chkScreenMode();
    this.elem = document.documentElement;
  }

  previewGalleryItem(index: number) {
    this.showMask = true;
    this.previewVisible = true;
    this.currentIndex = index;
    this.currentLightboxItem = this.galleryData[index];
  }

  onAnimationEnd(event: AnimationEvent) {
    if(event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview(){
    this.previewVisible = false;
  }

  onPrev(){
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0) {
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxItem = this.galleryData[this.currentIndex];
  }

  onNext() {
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length - 1) {
      this.currentIndex = 0;
    }
    this.currentLightboxItem = this.galleryData[this.currentIndex];
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])

  fullscreenmodes(event){
    this.chkScreenMode();
  }

  chkScreenMode(){
    if(document.fullscreenElement){
      this.isFullScreen = true;
    }else{
      this.isFullScreen = false;
    }
  }

  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      this.document.msExitFullscreen();
    }
  }
  
}
