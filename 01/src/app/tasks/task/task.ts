import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './task.model';
import { DatePipe } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  standalone: true,
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) task! : TaskType;
  @Output() completeTask = new EventEmitter();
  
  constructor(private taskService: TaskService){};


  onTaskComplete(){
    // this.completeTask.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }
}
