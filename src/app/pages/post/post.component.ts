import { CommonModule } from '@angular/common';
import { Component,inject, OnInit } from '@angular/core';

import { PostService, Posts } from 'src/app/service/postService';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postList: Posts[] = [];

  constructor(private postServ: PostService) {}
  
  ngOnInit(): void {
    this.postServ.getPosts().subscribe((data: Posts[]) => {
      this.postList = data;
      console.log('postList ', this.postList);
  });
  
  }
  
}
