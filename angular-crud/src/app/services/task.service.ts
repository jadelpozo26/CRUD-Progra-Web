import { Injectable } from '@angular/core';

import{ Task } from '../models/Task';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  API_URL = environment.url;

  tasks: Task[];
  constructor(private http:HttpClient) {

    this.tasks =[
    //  {Nombre: 'Lorenzo', Apellido: 'Insigne', Nacimiento: 'Napoles', Fecha: '1999', Equipo:'SSC Napoli'}
    ];

  }

  getTask()
  {
    console.log(environment.url);
    console.log('entre al read');
    return this.http.get( this.API_URL + '/read');

    
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

  getOneTask(_id: string)
  {
    return this.http.get( this.API_URL + '/read/' + _id);
  }

  addTask(task: Task){

      return this.http.post(this.API_URL + '/create', task);
  
  }

  deleteTask(task: Task)
  {
    console.log(task._id);
    return this.http.delete( this.API_URL + '/delete/'+ task._id)
  }

  actualizarTask(id: string, task:Task)
  {
    console.log(id);
    const nombre = task.Nombre;
    const apellido = task.Apellido;
    const nacimiento = task.Nacimiento;
    const fecha = task.Fecha;
    const equipo = task.Equipo;

    var sendBody = {
      "Nombre": nombre,
      "Apellido": apellido,
      "Nacimiento": nacimiento,
      "Fecha": fecha,
      "Equipo": equipo
    }


    return this.http.put(this.API_URL + '/update/' + id, sendBody);
  }
}
