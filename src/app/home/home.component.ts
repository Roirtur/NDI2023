import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuizComponentComponent} from '../quiz-component/quiz-component.component'
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, QuizComponentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  indexForQuiz !: number ;
  ngOnInit(){
    this.indexForQuiz = 0;
  }

}
