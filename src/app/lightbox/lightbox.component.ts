import { animate, style, transition, trigger, AnimationEvent } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  type: string;
  src: string;
  alt: string;
}

@Component({
  selector: 'app-lightbox-gallery',
  templateUrl: './lightbox.component.html',
  styleUrls: [ './lightbox.component.css' ]
  // animations: [
  //   trigger('animation', [
  //     transition('void => visible', [
  //       style({transform: 'scale(0.5)'}),
  //       animate('150ms', style({transform: 'scale(1)'}))
  //     ]),
  //     transition('visible => void', [
  //       style({transform: 'scale(1)'}),
  //       animate('150ms', style({transform: 'scale(0.5)'}))
  //     ])
  //   ])
  // ]
})
export class LightboxComponent implements OnInit  {

  @Input() galleryData: Item[] = [];
  @Input() slidesToShow: number;

  previewVisible = false;
  showMask = false;
  currentIndex = 0;
  currentLightboxItem: Item = this.galleryData[0];
  controls = true;
  totalItemsCount = 0;

  constructor() {}

  ngOnInit(){
    this.totalItemsCount = this.galleryData.length;
    console.log(this.currentLightboxItem)
  }

  previewGalleryItem(index: number) {
    this.showMask = true;
    this.previewVisible = true;
    this.currentIndex = index;
    this.currentLightboxItem = this.galleryData[index];
  }

  // onAnimationEnd(event: AnimationEvent) {
  //   if(event.toState === 'void') {
  //     this.showMask = false;
  //   }
  // }

  onClosePreview(){
    this.previewVisible = false;
  }
  
}
