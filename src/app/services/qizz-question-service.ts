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
            title: "Quelle est la limite de température à ne pas dépasser, selon le GIEC ?",
            answers: ["1 °C", "1.5 °C", "2 °C", "2.5 °C"],
            correctAnswer: "2 °C",
            choosedAnswer: "",

        },
        {
            id: 2,
            title: "Qui dois agir pour lutter contre le réchauffement climatique ?",
            answers: ["Les personnes aisées", "Le gouvernement", "Vous", "Tout le monde"],
            correctAnswer: "Tout le monde",
            choosedAnswer: "",
        },
        {
            id: 3,
            title: "Quel est l'aliment le plus polluant à produire ?",
            answers: ["Les légumes", "La volaille", "La viande de boeuf", "Les poissons"],
            correctAnswer: "La viande de boeuf",
            choosedAnswer: "",
        },
        {
            id: 4,
            title: "Quelle action contribue le plus à la réduction des émissions de gaz à effet de serre au quotidien ?",
            answers: ["Éteindre la wifi lorsque l'on ne l'utilise pas", "Utiliser des ampoules LED", "Réduire la consommation de viande", "Prendre des douches plus courtes"],
            correctAnswer: "Réduire la consommation de viande",
            choosedAnswer: "",
        },
        {
            id: 5,
            title: "Quelle est la principale source d'émissions de gaz à effet de serre dans le secteur des transports ?",
            answers: ["Voitures particulières", "Avions", "Transports en commun", "Cyclistes"],
            correctAnswer: "Voitures particulières",
            choosedAnswer: "",
        },
        {
            id: 6,
            title: "La situation est-elle désespérée ?",
            answers: ["Oui", "Non"],
            correctAnswer: "Non",
            choosedAnswer: "",
        },
            
    ]

    questionSecondQuiz: Question[] = [
        {

            id: 1,
            title: "L'écologie c'est mal",
            answers: ["oui", "non"],
            correctAnswer: "oui",
            choosedAnswer: "",

        },
        {
            id: 2,
            title: "Le CO2 c'est bon pour la santé",
            answers: ["je crois pas ", "oui"],
            correctAnswer: "oui",
            choosedAnswer: "",
        },
        {
            id: 3,
            title: "De combien de degré la température moyenne ne doit-elle pas augmenter ? ",
            answers: ["3", "2", "103"],
            correctAnswer: "2",
            choosedAnswer: "",
        },

    ]

    getFirstQuestionsArray() {
        return this.questionsFirstQuiz;
    }

}
