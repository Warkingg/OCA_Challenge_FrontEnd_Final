import { Component, OnInit } from '@angular/core';
import {Topic} from '../model/topic';
import {TopicService} from '../service/topic/topic.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  topic: Topic[] = [];
  t: Topic = {}
  openCreateForm: boolean = false;

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.getAllTopic();
  }

  getAllTopic(){
    this.topicService.getAllTopic().subscribe(topic=>{
      this.topic = topic;
    })
  }

  addTopic() {
    this.openCreateForm = !this.openCreateForm;
  }

  addTopicNew(form: NgForm) {
    let newTopic = form.value;
    this.topicService.createTopic(newTopic).subscribe(topc=>{
      this.t = topc;
      console.log("Susscess")
      this.openCreateForm = false;
    },error => {
      console.log("fail")
    })
  }
}
