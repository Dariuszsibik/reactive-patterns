import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit, Observer {

  lessons: Lesson[];

  constructor() {

    globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);

  }

  ngOnInit() {
  }

  notify(data: Lesson[]) {

    this.lessons = data;

  }

}
