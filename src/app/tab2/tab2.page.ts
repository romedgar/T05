import { Component } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tasks: string[];
  

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getCompletedTasks();
  
  }


  public removeTask(pos: number) {
    this.taskService.removeCompleteTask(pos);
    this.tasks = this.taskService.getCompletedTasks();
  }

  public unCompleteTask(pos: number) {
    this.taskService.unCompleteTask(pos);
    this.tasks = this.taskService.getCompletedTasks();
  }

}