import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;
 
  constructor(private service: PostService) {
   
  }
  ngOnInit() {
     this.service.getPosts()
    .subscribe((response): void => {
      this.posts = response;
    });
  }
  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = '';

    this.service.createPosts(post)
   .subscribe((response) => {
      post.id = response;
      this.posts.splice(0, 0, post);
    });
  }
  // updatePost(post: { id: string }) {
  //   this.service.updatePosts(post)
  //   .subscribe((response): void => {
  //     this.posts = response;
  //   });
  // }
  // deletePost(post: { id: string; }): void{
  //   this.service.deletePosts(post)
  //   .subscribe(response => {
  //     let index = this.posts.indexOf(post);
  //     this.posts.splice(index, 1);

  //   })
  // }
   
}
