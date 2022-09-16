import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[]= [];
   newTodo:string;
   saveTodo() {
    if(this.newTodo)
    {
      let td=new Todo();
      td.name=this.newTodo;
      td.isCompleted=true;
      this.todos.push(td);
      this.newTodo='';

    }
    else 
    {
      alert('Please enter Todo');
    }
   }
   done(id:number) {
    this.todos[id].isCompleted=!this.todos[id].isCompleted;
}
remove(id:number) {
  this.todos =this.todos.filter((v,i)=> i !== id);
}
}