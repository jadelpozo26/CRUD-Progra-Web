import { Injectable } from '@angular/core';

import{ Task } from '../models/Task';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];
  constructor(private http:HttpClient) {

    this.tasks =[
    //  {Nombre: 'Lorenzo', Apellido: 'Insigne', Nacimiento: 'Napoles', Fecha: '1999', Equipo:'SSC Napoli'}
    ];

  }

  getTask()
  {

    return this.http.get('http://localhost:3000/api/v1/read');

    
    /*if(localStorage.getItem('tasks') === null)
    {
      return this.tasks
    } 
    else
    {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
      return this.tasks;
    }*/
    
  }

  addTask(task: Task){

      return this.http.post('http://localhost:3000/api/v1/create', task);
  
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
