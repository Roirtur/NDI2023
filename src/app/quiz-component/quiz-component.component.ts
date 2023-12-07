import { Component, Input } from '@angular/core';
import { Question } from '../models/question.models';
import {QuizQuestions} from '../services/qizz-question-service'
import {QuizQuestionComponent} from '../quiz-question/quiz-question.component'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quiz-component',
  standalone: true,
  imports: [QuizQuestionComponent,CommonModule],
  templateUrl: './quiz-component.component.html',
  styleUrl: './quiz-component.component.css'
})
export class QuizComponentComponent {
  @Input() quizIndex !: number;
  currentQuestion !: Question ;
  score: number = 0;
  indexQuestion: number = 0;
  choosedAnswerTab: any = [];
  totalNumberOfQuestions  !: number;

  constructor(private quizQuestions: QuizQuestions){}
  questions: Question[] = []
  ngOnInit() {
    console.log(this.quizIndex)
    if(this.quizIndex=== 0){
      this.questions = this.quizQuestions.getFirstQuestionsArray();
    }
  
    this.currentQuestion = this.questions[this.indexQuestion];
    console.log(this.currentQuestion)
    this.totalNumberOfQuestions = this.questions.length;

  }

  

  onPrev() {
    this.currentQuestion = this.questions[--this.indexQuestion]
  }

  onNext() {
    this.currentQuestion = this.questions[++this.indexQuestion]
  }
  
}
