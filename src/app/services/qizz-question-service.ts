//Contain datas for the question

import { Injectable } from "@angular/core";
import { Question } from '../models/question.models';


@Injectable({
    providedIn: 'root'
})

export class QuizQuestions {
    questionsFirstQuiz: Question[] = []
    
}
