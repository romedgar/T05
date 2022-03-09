import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks:string[]=[];
  private completedTasks: string[] =[];
  private importantTasks: string[] =[];


  constructor() { 
    this.tasks.push("Tarea1","Tarea 2")
    this.completedTasks.push("Tarea 4","Tarea 24")
    this.importantTasks.push("Tarea importante")
  }
  public addTask(task:string){
    this.tasks.push(task)
  }

  public removeTask(pos:number){
    this.tasks.splice(pos,1);
  }

  public getTasks(){
    return this.tasks;
  }

  public completeTask(pos:number){
    this.completedTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public importantTask(pos:number){
    this.importantTasks.push(this.tasks[pos]);
    this.removeTask(pos);
  }

  public getCompletedTasks(){
    return this.completedTasks;
  }

  public getImportantTasks(){
    return this.importantTasks;
  }

  public removeCompleteTask(pos:number){
    this.completedTasks.splice(pos,1);
  }

  public removeImportantTask(pos:number){
    this.importantTasks.splice(pos,1);
  }

  public unCompleteTask(pos:number){
    this.tasks.push(this.completedTasks[pos])
    this.removeCompleteTask(pos);
  }

  public unImportantTask(pos:number){
    this.tasks.push(this.importantTasks[pos])
    this.removeImportantTask(pos);
  }

}