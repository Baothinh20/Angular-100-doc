import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Author } from '../authors';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit {
  @Input() author!: Author;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
