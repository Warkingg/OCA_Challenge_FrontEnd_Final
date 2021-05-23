import { Component, OnInit } from '@angular/core';
import {Topic} from '../../model/topic';
import {TopicService} from '../../service/topic/topic.service';
import {LevelService} from '../../service/level/level.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {error} from 'util';
import {Level} from '../../model/level';

@Component({
  selector: 'app-topic-details',
  templateUrl: './topic-details.component.html',
  styleUrls: ['./topic-details.component.css']
})
export class TopicDetailsComponent implements OnInit {
  levelList: Level[] = [];
  topicId: number;
  sub: Subscription;

  constructor(private topicService : TopicService,
              private levelService : LevelService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.topicId = +paramMap.get("id");
      this.getLevelList();
    });
  }

  getLevelList() {
    this.levelService.getLevelsByTopic(this.topicId).subscribe(result => {
      this.levelList = result;
    }, error => {
      console.log(error);
    })
  }

}
