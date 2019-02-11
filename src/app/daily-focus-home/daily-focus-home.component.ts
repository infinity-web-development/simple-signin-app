import { Component, OnInit } from '@angular/core';
import { FocusGeneratorService } from '../services/focus-generator.service';

@Component({
  selector: 'app-daily-focus-home',
  templateUrl: './daily-focus-home.component.html',
  styleUrls: ['./daily-focus-home.component.scss']
})
export class DailyFocusHomeComponent implements OnInit {
  currentFocus; 
  constructor(private focusGenerator: FocusGeneratorService) { 
    this.currentFocus = focusGenerator.generateFocus();
    console.log('this is the current focus : ', this.currentFocus);
  }

  ngOnInit() {
  }

  refocus() {
    this.currentFocus = this.focusGenerator.generateFocus();
  }
}
