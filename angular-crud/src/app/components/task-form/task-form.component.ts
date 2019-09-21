import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../services/task.service'
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(
    public taskservice: TaskService
  ) { }

  ngOnInit() {
  }

  addTask(newNombre: HTMLInputElement,newApellido:HTMLInputElement,newNacimiento:HTMLInputElement,newFecha:HTMLInputElement,newEquipo:HTMLInputElement){
    console.log('agregando' , newNombre.value,newApellido.value,newNacimiento.value,newFecha.value,newEquipo.value); 
    this.taskservice.addTask({
      Nombre: newNombre.value, 
      Apellido: newApellido.value,
      Nacimiento: newNacimiento.value,
      Fecha: newFecha.value,
      Equipo: newEquipo.value

    });
    return false;
  }

}
