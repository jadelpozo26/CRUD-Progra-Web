import { Injectable } from '@angular/core';

import{ Task } from '../models/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];
  constructor() { 
    this.tasks =[
    //  {Nombre: 'Lorenzo', Apellido: 'Insigne', Nacimiento: 'Napoles', Fecha: '1999', Equipo:'SSC Napoli'}
    ];

  }

  getTask()
  {
    if(localStorage.getItem('tasks') === null)
    {
      return this.tasks
    } 
    else
    {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }
    
  }

  addTask(task: Task){
    this.tasks.push(task);
    let tasks = [];
    if(localStorage.getItem('tasks') === null)
    {
      
      tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    else
    {
      tasks = JSON.parse(localStorage.getItem('tasks'));
      tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    
  }

  deleteTask(task: Task)
  {
    for(let i = 0; i < this.tasks.length; i++)
    {
      if(task == this.tasks[i])
      {
        this.tasks.splice(i,1);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
      }
    }
  }
}
