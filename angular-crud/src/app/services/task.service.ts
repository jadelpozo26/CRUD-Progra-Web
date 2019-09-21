import { Injectable } from '@angular/core';

import{ Task } from '../models/Task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[];
  constructor() { 
    this.tasks =[
      {Nombre: 'Lorenzo', Apellido: 'Insigne', Nacimiento: 'Napoles', Fecha: '1999', Equipo:'SSC Napoli'}
    ];

  }

  getTask()
  {
    return this.tasks;
  }

  addTask(task: Task){
    this.tasks.push(task);
  }
}
