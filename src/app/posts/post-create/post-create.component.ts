import { Component } from "@angular/core";
import { NgForm} from "@angular/forms";
// import { Post } from '../post.model';
import { PostsService } from "../posts.service";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
    enteredTitle = '';
    enteredContent = '';
    //@Output() postCreated = new EventEmitter<Post>();
    
    constructor(public postsService: PostsService){};

    onAddPost(form: NgForm) {
        if (form.invalid){
            return;
        }
        // const post: Post = {
        //     title: form.value.title, 
        //     content: form.value.content
        // };
        this.postsService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }
}
