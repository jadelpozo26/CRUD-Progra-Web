import { Component, OnInit, HostBinding } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

import {TaskService} from '../../services/task.service'
import { Task } from 'src/app/models/Task';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @HostBinding('class') classes='row';

  task: Task  = {
    _id: '',
    Nombre: '' ,
    Apellido: '',
    Nacimiento: '',
    Fecha:'',
    Equipo:''

    
  };

  edit: boolean = false;

  constructor(
    public taskservice: TaskService,
    private router:Router,
    private activateRoute: ActivatedRoute
    
  ) { }

  ngOnInit() {

    const params = this.activateRoute.snapshot.params;
    if(params.id)
    {
      this.taskservice.getOneTask(params.id)
      .subscribe(
        res => {
          this.task._id = res[0]["_id"]
          this.task.Nombre= res[0]["Nombre"];
          this.task.Apellido = res[0]["Apellido"];
          this.task.Nacimiento = res[0]["Nacimiento"];
          this.task.Fecha = res[0]["Fecha"];
          this.task.Equipo = res[0]["Equipo"];

          this.edit = true;

      },
      err => console.error(err)
      )
    }
  }

  addTask(){

    
      this.taskservice.addTask(this.task).subscribe
      ((res) => 
        {
          this.router.navigate(['/futbolistas']);
        } 
      );
    }
  

  updateTask()
  {
    console.log(this.task.Fecha);
    console.log("no funciono")
    console.log(this.task._id)

    this.taskservice.actualizarTask(this.task._id, this.task)
    .subscribe(res =>{

    },
    err => console.log(err)
    )
    {

    }
  }

}
