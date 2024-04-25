import {Component, model, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./hello/hello.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";
import { ToggleComponent } from "./toggle/toggle.component";
import{ ElementRef } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ProgressBarComponent,
    AuthorListComponent, AuthorDetailComponent, FormsModule,
    CommonModule, ToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Thinh Tran';
  title = 'angular100-doc';
  readonly model = model;
  @ViewChild('toggleComp') toggleComp!: ToggleComponent;
  toggleInside() {
    this.toggleComp.toggle();
  }
  @ViewChild('chartContainer') container!: ElementRef<HTMLDivElement>;
}
