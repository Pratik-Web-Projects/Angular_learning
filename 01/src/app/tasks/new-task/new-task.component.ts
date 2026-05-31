import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() cancel = new EventEmitter();
  // @Output() add = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  constructor(private taskService : TaskService){};

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    this.taskService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.cancel.emit();
  }

  // onSubmit(){
  //   this.add.emit({
  //     title: this.enteredTitle,
  //     summary: this.enteredSummary,
  //     date: this.enteredDate
  //   })
  // }
}
