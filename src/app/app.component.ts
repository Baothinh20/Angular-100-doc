import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { AuthorListComponent } from "./author-list/author-list.component";
import { AuthorDetailComponent } from "./author-detail/author-detail.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloComponent, ProgressBarComponent, AuthorListComponent, AuthorDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular100-doc';
}
