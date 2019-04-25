import { Component, OnInit, Injectable } from '@angular/core';
import { FormGroup, FormGroupDirective, Validators, NgForm, FormArray, FormControl } from '@angular/forms';
import { logging } from 'protractor';
import { homedir } from 'os';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  tabTodos;

  todo: FormGroup;

  constructor() {
    this.todo = new FormGroup({
      email: new FormControl(''),
      task: new FormControl(''),

    })
    this.tabTodos =new Array({
      id :'',
      email : '',
    task :'',
    })
    this.tabTodos = JSON.parse(localStorage.getItem("tabTodos")) || [];

  }

  ngOnInit() {
  }
  addTodo() {
    let ide =Math.random();
    this.tabTodos = JSON.parse(localStorage.getItem("tabTodos")) || [];
   
    this.tabTodos.push({
      id :ide,
      email : this.todo.value.email,
    task :this.todo.value.task,

    });
    localStorage.setItem("tabTodos",JSON.stringify(this.tabTodos));
  }

  DeleteTask(eml)
  { 
   for(var i=0 ; i< this.tabTodos.length;i++)
   {if (this.tabTodos[i].id == eml )
    {
      this.tabTodos.splice(i, 1)
      console.log(this.tabTodos[i]);
    }
   
   }
  }

  Updatetask(key)
  { 
    for(var i=0 ; i< this.tabTodos.length;i++)
    {if (this.tabTodos[i].id == key )
     {
      
       console.log(this.tabTodos[i].id);
       
     }
    
    }
   }
}

