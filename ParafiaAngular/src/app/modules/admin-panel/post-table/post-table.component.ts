import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
})
export class PostTableComponent implements OnInit {
  posts: Post[] = [];
  constructor(private readonly service: CommonService) {}

  ngOnInit(): void {
    this.getUserPosts();
  }

  getUserPosts(): void {
    this.service.getUserPosts().subscribe((posts) => (this.posts = posts));
  }

  deletePost(postId: string): void {
    if (window.confirm('Czy napewno chcesz usunąć tego posta?')) {
      this.service.deletePost(postId).subscribe({
        complete: () => {
          alert('Usunięto');
          this.getUserPosts();
        },
      });
    } else {
      alert('Anulowano usuwanie');
    }
  }
}
