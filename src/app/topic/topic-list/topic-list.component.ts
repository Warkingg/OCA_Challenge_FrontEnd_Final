import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic';
import {TopicService} from '../../service/topic/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  topics: any[] = [];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
  }

  getAllTopic() {
    this.topicService.getAllTopic().subscribe(topics => {
      this.topics = topics;
    })
  }

}
