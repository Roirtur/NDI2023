//Contain datas for the question

import { Injectable } from "@angular/core";
import { Question } from '../models/question.models';


@Injectable({
    providedIn: 'root'
})

export class QuizQuestions {
    questionsFirstQuiz: Question[] = [

        {

            id: 1,
            title: "L'écologie c'est mal",
            answers: ["oui", "non"],
            correctAnswer: "oui",

        },
        {
            id: 2,
            title: "Le CO2 c'est bon pour la santé",
            answers: ["je crois pas ", "oui"],
            correctAnswer: "oui",
        },
        {
            id: 3,
            title: "De combien de degré la température moyenne ne doit-elle pas augmenter ? ",
            answers: ["3", "2", "103"],
            correctAnswer: "2",
        },
    ]

    questionSecondQuiz: Question[] = [
        {

            id: 1,
            title: "L'écologie c'est mal",
            answers: ["oui", "non"],
            correctAnswer: "oui",

        },
        {
            id: 2,
            title: "Le CO2 c'est bon pour la santé",
            answers: ["je crois pas ", "oui"],
            correctAnswer: "oui",
        },
        {
            id: 3,
            title: "De combien de degré la température moyenne ne doit-elle pas augmenter ? ",
            answers: ["3", "2", "103"],
            correctAnswer: "2",
        },

    ]

    getFirstQuestionsArray() {
        return this.questionsFirstQuiz;
    }

}
