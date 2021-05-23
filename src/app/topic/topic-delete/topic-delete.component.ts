import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic';
import {TopicService} from '../../service/topic/topic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-delete',
  templateUrl: './topic-delete.component.html',
  styleUrls: ['./topic-delete.component.css']
})
export class TopicDeleteComponent implements OnInit {

  topic: Topic = {};
  id = -1;

  constructor(private topicService: TopicService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.id = id;
      this.getTopicById(id);
    })
  }

  ngOnInit() {
  }

  private getTopicById(id: number) {
    this.topicService.getTopicById(id).subscribe(topic => {
      this.topic = topic;
    })
  }

  deleteTopic(id: number) {
    this.topicService.deleteTopic(id).subscribe(() => {
      console.log("Đi lít sắc xét phu ly ")
    }, error => {
      console.log(error)
    })
  }

}
