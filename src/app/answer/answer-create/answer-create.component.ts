import { Component, OnInit } from '@angular/core';
import {Answer} from '../../model/answer';
import {AnswerService} from '../../service/answer/answer.service';

@Component({
  selector: 'app-answer-create',
  templateUrl: './answer-create.component.html',
  styleUrls: ['./answer-create.component.css']
})
export class AnswerCreateComponent implements OnInit {

  answer: Answer = {};

  constructor(private answerService: AnswerService) { }

  ngOnInit() {
  }



}
