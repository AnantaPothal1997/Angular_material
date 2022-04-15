import { Component } from '@angular/core';





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

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
  colors: any = ['red', 'green', 'yellow', 'blue'];
  data = ELEMENT_DATA;
  
  parentData: string = 'parent';

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

  updateParentData(data: any) {
    console.log(data);
    this.parentData = data;
  }

}
