import { Component, OnInit } from '@angular/core';
import {Level} from '../../model/level';
import {LevelService} from '../../service/level/level.service';

@Component({
  selector: 'app-level-list',
  templateUrl: './level-list.component.html',
  styleUrls: ['./level-list.component.css']
})
export class LevelListComponent implements OnInit {

  levels: Level[] = [];

  constructor(private levelService: LevelService) { }

  ngOnInit() {
    this.getAllLevel();
  }

  getAllLevel() {
    this.levelService.listLevel().subscribe(levels => {
      this.levels = levels;
    });
  }
}
