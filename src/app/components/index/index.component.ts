import { Component } from '@angular/core';
import { PostService } from 'src/app/post/post.service';
import { Post } from 'src/app/post/post';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  posts: Post[] = [];

  constructor(public postService: PostService){}

  ngOnInit(): void {
    this.postService.getAllData().subscribe((data: Post[])=>{
      this.posts = data;
      console.log(this.posts);
    })
  }
  deletePost(id:number){
    this.postService.delete(id).subscribe(res => {
         this.posts = this.posts.filter(item => item.id !== id);
         alert('Post deleted successfully!');
    })
  }
}
