import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/post/post';
import { PostService } from 'src/app/post/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id!: number;
  post!: Post;
  form!: FormGroup;

  constructor(
    public postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.find(this.id).subscribe((data: Post)=>{
      this.post = data;
      console.log(this.id);
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.postService.update(this.id, this.form.value).subscribe(res => {
         alert('Post updated successfully!');
         this.router.navigateByUrl('index');
    })
  }

}
