import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";


import { PostsService } from '../posts.service';
import { Post } from '../post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
    // posts = [
    //     {title: 'First Post', content: 'This is the first post\'s content'},
    //     {title: 'Second Post', content: 'This is the second post\'s content'},
    //     {title: 'Third Post', content: 'This is the third post\'s content'},
    // ];
    @Input() posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {}
    
    ngOnInit() {
        this.posts = this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener().subscribe(
            (posts: Post[]) => {
                this.posts = posts;
            }
        );
    }
    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }
}