import { Component, Input } from '@angular/core';
import { Question } from '../models/question.models';
import {QuizQuestions} from '../services/qizz-question-service'
 @Component({
  selector: 'app-quiz-question',
  standalone: true,
  imports: [],
  templateUrl: './quiz-question.component.html',
  styleUrl: './quiz-question.component.css'
})
export class QuizQuestionComponent {
  constructor(private quizQuestionService: QuizQuestions){}

  @Input() question !: Question;
}
