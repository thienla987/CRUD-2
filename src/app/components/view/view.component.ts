import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Post } from 'src/app/post/post';
import { PostService } from 'src/app/post/post.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id! :number ;
  post!:Post;

  constructor(
    public postService : PostService,
    private route : ActivatedRoute,

  ){}
  ngOnInit(): void {
      this.id = this.route.snapshot.params['id']

      this.postService.find(this.id).subscribe((data:Post)=>{
        this.post = data;
      })
  }

}
