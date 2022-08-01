import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gallery = [
    {
      type: 'image',
      src: 'https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg',
      alt: 'JPG Image'
    },
    {
      type: 'image',
      src: 'https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-4297.jpg',
      alt: 'JPG Image 2'
    },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.mp4',
      alt: '',
      videoType: 'mp4'
    },
    {
      type: 'image',
      src: 'https://www.gstatic.com/webp/gallery/1.sm.webp',
      alt: 'webp Image'
    },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/movie.ogg',
      alt: '',
      videoType: 'ogg'
    },
    {
      type: 'video',
      src: 'https://www.w3schools.com/html/mov_bbb.webm',
      alt: '',
      videoType: 'webm'
    }
  ];

  
}
