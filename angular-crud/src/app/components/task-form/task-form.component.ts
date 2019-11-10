import { Component, OnInit } from '@angular/core';

import {TaskService} from '../../services/task.service'
import { Task } from 'src/app/models/Task';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task;

  constructor(
    public taskservice: TaskService
    
  ) { }

  ngOnInit() {

    this.task = {
      _id: '',
      Nombre: '' ,
      Apellido: '',
      Nacimiento: '',
      Fecha:'',
      Equipo:''

    }
  }

  addTask(){
    this.taskservice.addTask(this.task).subscribe((res) => {}
     

    );
  }

}
