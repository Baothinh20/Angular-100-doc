import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = "";
  @Input() progressColor: string = "";
  @Input() progress = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if ('progress' in changes) {
      if (typeof changes['progress'].currentValue !== 'number') {
        const progress = Number(changes['progress'].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  ngOnInit() {}
}
