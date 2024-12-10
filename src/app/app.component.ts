import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';


}
