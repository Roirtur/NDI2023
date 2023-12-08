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
            answers: ["+1 °C", "+1.5 °C", "+2 °C", "+2.5 °C"],
            correctAnswer: "+2 °C",
            choosedAnswer: "",

        },
        {
            id: 2,
            title: "Qui doit agir pour lutter contre le réchauffement climatique ?",
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
        {
            id: 7,
            title: "Quel gaz est le plus abondant dans l'effet de serre naturel de la Terre ?",
            answers: ["Dioxyde de carbone (CO2)", "Méthane (CH4)", "Ozone (O3)", "Vapeur d'eau (H2O)"],
            correctAnswer: "Dioxyde de carbone (CO2)",
            choosedAnswer: "",
        },
        {
            id: 8,
        title: "Quel secteur contribue le plus aux émissions de méthane, un gaz à effet de serre puissant ?",
            answers: ["Agriculture", "Industrie", "Énergie", "Déchets"],
            correctAnswer: "Agriculture",
            choosedAnswer: "",
        },
        {
            id: 9,
            title: "Quelle est la principale cause de la déforestation mondiale ?",
            answers: ["Exploitation minière", "Expansion urbaine", "Agriculture", "Incendies de forêt"],
            correctAnswer: "Agriculture",
            choosedAnswer: "",
        },
        {
            id: 10,
            title: "Quelle est la durée de vie moyenne d'un sac en plastique dans l'environnement avant de se décomposer ?",
            answers: ["80 ans", "400 ans", "1200 ans", "Indéfini"],
            correctAnswer: "400 ans",
            choosedAnswer: "",
        },
        {
            id: 11,
            title: "Quel est l'impact environnemental de la production de viande comparé à la production de légumes ?",
            answers: ["Moins d'impact", "Équivalent", "Plus d'impact", "Aucun impact"],
            correctAnswer: "Plus d'impact",
            choosedAnswer: "",
        },
        {
            id: 12,
            title: "Quel est le principal avantage des énergies renouvelables par rapport aux combustibles fossiles en termes d'émissions de gaz à effet de serre ?",
            answers: ["Aucune émission", "Émissions plus élevées", "Émissions équivalentes", "Émissions moins élevées"],
            correctAnswer: "Émissions moins élevées",
            choosedAnswer: "",
        }
        
            
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
