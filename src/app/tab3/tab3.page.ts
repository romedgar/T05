import { Component } from '@angular/core';
import { TaskService } from "../task.service";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public tasks: string[];
  

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getImportantTasks();
  
  }


  public removeTask(pos: number) {
    this.taskService.removeImportantTask(pos);
    this.tasks = this.taskService.getImportantTasks();
  }

  public unImportantTask(pos: number) {
    this.taskService.unImportantTask(pos);
    this.tasks = this.taskService.getImportantTasks();
  }

}