import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TopicService} from '../../service/topic/topic.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-topic-update',
  templateUrl: './topic-update.component.html',
  styleUrls: ['./topic-update.component.css']
})
export class TopicUpdateComponent implements OnInit {

  topicForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });
  id: number = -1;

  constructor(private topicService: TopicService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get("id");
      this.id = id;
    })
  }

  ngOnInit() {
  }

  getTopicById(id: number) {
    this.topicService.getTopicById(id).subscribe(topic => {
      this.topicForm = new FormGroup({
        id: new FormControl(topic.id),
        name: new FormControl(topic.name),
      })
    })
  }

  updateTopic(id: number){
    let thisTopic = this.topicForm.value;
    this.topicService.updateTopic(thisTopic, id).subscribe(() => {
      console.log("ắp đết sắc xét phu ny")
    }, error => {
      console.log(error)
    })
  }

}
