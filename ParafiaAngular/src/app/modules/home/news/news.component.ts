import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private readonly service: CommonService) {}

  ngOnInit(): void {
    this.service.getUserPosts().subscribe((posts) => (this.posts = posts));
  }
}
