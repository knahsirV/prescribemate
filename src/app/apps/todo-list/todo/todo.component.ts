import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OvercounterService } from 'src/app/overcounter.service';
import { FilterPipe } from 'src/app/filter.pipe';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  form;
  todoArray = [
    { task : 'OMEPRAZOLE' , completed : false },
    { task : 'ADVIL COLD AND SINUS' , completed : false },
    { task : 'NEW DAY' , completed : false },
    { task : 'NEXIUM 24HR' , completed : false },
    { task : 'FLUTICASONE PROPIONATE' , completed : false }
  ];

  constructor(fb: FormBuilder, private overcounterService: OvercounterService) {
    this.form = fb.group({
      todoitem : ['', Validators.required]
    });

  }

  oMeds: Array<any>;

  ngOnInit() {
    this.overcounterService.fetchSearchMeds().subscribe(data => this.oMeds = data['results']);
  }

  addTodo() {
    let newTodoList = { task: '' , completed: false };
    newTodoList.task= this.form.value.todoitem;
    this.todoArray.push(newTodoList);
    this.form.reset();
  }
  removeTodoItem(item) {
   for(let i=0; i<=this.todoArray.length; i++) {
     if(item === this.todoArray[i]) {
       this.todoArray.splice(i, 1);
     }
   } 
  }
  changeTodoStatus(event,index) {
    if(event.target.checked) {
    this.todoArray[index]['completed'] = true; 
    } else {
      this.todoArray[index]['completed'] = false;
    }
  }

}