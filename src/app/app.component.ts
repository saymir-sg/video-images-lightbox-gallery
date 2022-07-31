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
      path: 'https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-743.jpg'
    },
    {
      type: 'image',
      path: 'https://img.freepik.com/free-vector/java-developer-smartphone-software-javascript-coding-writing-application-css-programming-html-source-code-tampering-mobile-program-vector-isolated-concept-metaphor-illustration_335657-4297.jpg'
    }
  ];

  
}
