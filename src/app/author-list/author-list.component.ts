import { Component, OnInit } from '@angular/core';
import { Author, authors } from '../authors';
import { AuthorDetailComponent } from "../author-detail/author-detail.component";

@Component({
  selector: 'app-author-list',
  standalone: true,
  imports: [AuthorDetailComponent],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit {
  authors = authors;
  constructor() {}
  ngOnInit() {}
  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}
