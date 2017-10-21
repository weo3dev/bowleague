import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  template: `
    <div class="door">
      <ng-content></ng-content>
    </div>
  `
})
export class TabContentComponent {
  
}

