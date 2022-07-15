import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostsComponent {
  posts: any;
  private url=('https://jsonplaceholder.typicode.com/posts');

  constructor(private http: HttpClient) {
     http.get(this.url)
     .subscribe((response): void => {
      this.posts = response;
     });
 }
  createPost(input: HTMLInputElement) {
    let post = { title: input.value}; 

    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
    console.log(response);  
    });
  }
}
