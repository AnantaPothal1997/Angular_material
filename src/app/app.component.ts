import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  visible = false;
  hidden: boolean = true;
  color: string = 'red';
  selectedColor: string = '';
  colors: any = ['red', 'green','yellow', 'blue'];

  showPopup() {
    alert('popup is not ready yet');
  }
  showHiddenText() {
    this.hidden = !this.hidden;
  }
  isClicked() { 
    alert('heading clicked')
  }
  selectColor(col:string) { 
    this.selectedColor = col;
  }
}
