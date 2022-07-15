import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent {
  posts: any;

  constructor(http: HttpClient) {
     http.get('https://jsonplaceholder.typicode.com/posts')
     .subscribe((response): void => {
      this.posts = response;
     });
   }

  

}
