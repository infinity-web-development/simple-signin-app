import { Injectable } from '@angular/core';

@Injectable()
export class FocusGeneratorService {

  focusPoints = [{name: "peaceful"}, {name: "thankful"}, {name: "loved"}, {name: "blessed"}, {name: "growing"}]
  currentFocus;

  constructor() { 
    this.currentFocus = this.generateFocus();
  }

  generateFocus() {
    this.currentFocus = this.focusPoints[Math.floor(Math.random()*this.focusPoints.length)];
    return this.currentFocus;
    
  }
 
}
