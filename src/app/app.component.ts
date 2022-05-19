import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templatDrivenForm';
  constructor(){};
  ngOnInit(){}
  Ragister(regForm:any){
    console.log(regForm);
  }
}