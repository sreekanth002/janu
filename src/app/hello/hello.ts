 import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 

@Component({
  selector: 'app-hello',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './hello.html',
  styleUrls: ['./hello.css']
})
export class HelloComponent {

  message: string = '';

  showMessage() {
    this.message = 'Button clicked successfully!';
    console.log('Button clicuuuuked');
  }

}