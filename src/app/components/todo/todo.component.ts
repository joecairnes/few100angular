import { Component, OnInit } from '@angular/core';
import { ToDoItem } from './models';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  items: ToDoItem[] = [
    { description: 'Pull Weeds in Mulch', completed: true },
    { description: 'Drink that beer', completed: false }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(descriptionEl: HTMLInputElement) {
    this.items = [{ description: descriptionEl.value, completed: false }, ...this.items];
    descriptionEl.value = '';
    descriptionEl.focus();
  }

  markComplete(item: ToDoItem) {
    item.completed = true;
  }

  get hasCompletedItems() {
    return this.items.some(item => item.completed);
  }

  removeCompletedItems() {
    this.items = this.items.filter(item => !item.completed);
  }
}
