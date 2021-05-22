import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic';
import {TopicService} from '../../service/topic/topic.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {

  topic: Topic = {};

  constructor(private topicService: TopicService) { }

  ngOnInit() {
  }

  createTopic(form: NgForm) {
    let newTopic = form.value;
    this.topicService.createTopic(newTopic).subscribe(() => {
      console.log("Create Successfully !");
      this.topic = {}
    }, error => {
      console.log(error);
    })
  }
}
