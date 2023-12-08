import { Component, Input } from '@angular/core';
import { Question } from '../models/question.models';
import { CommonModule } from '@angular/common';
 @Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css'
})
export class QuizQuestionComponent {

  @Input() question !: Question;

  isAnswerCorrect(newAnswer: any): boolean {
    if(!newAnswer)
      return false;
    else{
      this.question.choosedAnswer = newAnswer.toString();
    }
    return newAnswer.toString() === this.question.correctAnswer.toString();
  }

}
