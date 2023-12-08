import { Component } from '@angular/core';
import {QuizComponentComponent} from '../quiz-component/quiz-component.component'

@Component({
  selector: 'app-debunk-page',
  standalone: true,
  imports: [QuizComponentComponent],
  templateUrl: './debunk-page.component.html',
  styleUrl: './debunk-page.component.css'
})
export class DebunkPageComponent {
  indexForQuiz !: number ;
  ngOnInit(){
    this.indexForQuiz = 1;
  }

}
