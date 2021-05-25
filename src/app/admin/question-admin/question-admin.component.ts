import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic';
import {Level} from '../../model/level';
import {TopicService} from '../../service/topic/topic.service';
import {ActivatedRoute} from '@angular/router';
import {LevelService} from '../../service/level/level.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-question-admin',
  templateUrl: './question-admin.component.html',
  styleUrls: ['./question-admin.component.css']
})
export class QuestionAdminComponent implements OnInit {
  topic: Topic[] = [];
  t: Topic = {}
  l: Level[] = []
  id = -1;
  openCreateForm: boolean = false;

  constructor(private topicService: TopicService,
              private activatedRoute: ActivatedRoute,
              private levelService: LevelService) {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      const id = +paramMap.get("id");
      this.id = id;
      this.getLevelByIdTopic(id);
    })
  }

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

  getLevelByIdTopic(id: number){
    this.levelService.getLevelsByTopic(id).subscribe(levelss=>{
      this.l = levelss;
    })
  }
}
