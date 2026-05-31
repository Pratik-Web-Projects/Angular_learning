import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task/task';
import { NewTaskData } from '../tasks/task/task.model'
import { dummyTasks } from '../dymmy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTaskComponent],
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required: true}) name! : string;
  @Input({required: true}) userId!: string;
  isAddingTask : boolean = false;
  // @Output() createTaskEvent = new EventEmitter();
  // @Input() name: string | undefined;
  // @Input() name?: string;

   tasks = dummyTasks;

   constructor(private taskService: TaskService){}

  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId);
  }

  
  onStartAddTask(){
    this.isAddingTask = true;
  }
  
  onCancel(){
    this.isAddingTask = false;
  }
  
  // onTaskCompelte(id:string){
  //   // console.log(id);
  //   // this.tasks = this.tasks.filter((task) => task.id !== id);
  //    this.taskService.removeTask(id);
  // }
  // onAddTask(taskData: NewTaskData){
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   title : taskData.title,
  //   //   summary: taskData.summary,
  //   //   dueDate: taskData.date
  //   // })
  //   this.taskService.addTask(taskData, this.userId);
  //   this.isAddingTask = false;
  // }

}
