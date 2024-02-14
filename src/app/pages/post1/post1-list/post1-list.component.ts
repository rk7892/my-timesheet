import { CommonModule } from '@angular/common';
import { Component,inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PostService, Posts } from 'src/app/service/postService';

@Component({
  selector: 'app-post1-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post1-list.component.html',
  styleUrls: ['./post1-list.component.scss']
})
export class Post1ListComponent implements OnInit {
  postList: Posts[] = [];

  constructor(private postServ: PostService) {}
  
  ngOnInit(): void {
    this.postServ.getPosts().subscribe((data: Posts[]) => {
      this.postList = data;
      console.log('postList ', this.postList);
  });
  
  }
  
}
