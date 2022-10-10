import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { CreatepostComponent } from '../createpost/createpost.component';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.scss']
})
export class PostFeedComponent implements OnInit {

  constructor(public d:Dialog) { }

  ngOnInit(): void {
    this.d.open(CreatepostComponent);
  }

}
