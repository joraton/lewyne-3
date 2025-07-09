'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, RotateCcw, Trophy, Target, Brain, Lightbulb } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  category: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Selon la théorie de Modigliani & Miller (1958), dans un monde sans fiscalité :",
    options: [
      "La structure financière influence la valeur de l'entreprise",
      "La valeur de l'entreprise est indépendante de sa structure financière",
      "L'endettement augmente toujours la valeur",
      "Les capitaux propres sont toujours préférables"
    ],
    correct: 1,
    explanation: "En 1958, M&M démontrent que sans fiscalité, la valeur de l'entreprise est indépendante de sa structure financière. Le coût du capital reste constant.",
    category: "Théorie M&M"
  },
  {
    id: 2,
    question: "La formule d'Hamada permet de calculer :",
    options: [
      "Le coût de la dette",
      "Le bêta d'une entreprise endettée à partir du bêta non endetté",
      "La valeur terminale",
      "Le CMPC directement"
    ],
    correct: 1,
    explanation: "La formule d'Hamada : βᵢ = βᵢ* × [1 + D(1-τ)/CP] permet de passer du bêta désendetté au bêta endetté.",
    category: "Formule d'Hamada"
  },
  {
    id: 3,
    question: "Dans la théorie M&M avec fiscalité (1963), l'endettement crée de la valeur grâce à :",
    options: [
      "La réduction du risque",
      "L'augmentation des flux de trésorerie",
      "Les économies d'impôt sur les intérêts",
      "La diminution du coût des capitaux propres"
    ],
    correct: 2,
    explanation: "Avec la fiscalité, les intérêts de la dette sont déductibles, créant un bouclier fiscal qui augmente la valeur de l'entreprise.",
    category: "Théorie M&M"
  },
  {
    id: 4,
    question: "Pour calculer le FCD (Flux de Trésorerie Disponible), on utilise :",
    options: [
      "EBIT - Impôts - Investissements - Δ BFR",
      "NOPAT - Δ Immobilisations - Δ BFR",
      "Résultat net + Dotations",
      "CA - Charges - Impôts"
    ],
    correct: 1,
    explanation: "FCD = NOPAT - Δ Immobilisations - Δ BFR. Le NOPAT est le résultat opérationnel après impôt.",
    category: "Valorisation DCF"
  },
  {
    id: 5,
    question: "Si βᵢ* = 1,2, D/CP = 1,5 et τ = 25%, alors βᵢ (avec βd = 0) vaut :",
    options: [
      "1,2",
      "1,575",
      "2,55",
      "1,95"
    ],
    correct: 3,
    explanation: "βᵢ = βᵢ* × [1 + D(1-τ)/CP] = 1,2 × [1 + 1,5 × 0,75] = 1,2 × 2,125 = 2,55",
    category: "Calculs pratiques"
  },
  {
    id: 6,
    question: "La valeur terminale dans une méthode DCF représente :",
    options: [
      "La valeur de liquidation de l'entreprise",
      "La valeur actualisée des flux au-delà de l'horizon de prévision",
      "La valeur comptable des actifs",
      "La valeur de marché actuelle"
    ],
    correct: 1,
    explanation: "La VT capture la valeur de tous les flux futurs au-delà de la période de prévision explicite, actualisée à la fin de cette période.",
    category: "Valorisation DCF"
  },
  {
    id: 7,
    question: "Pour passer de la Valeur d'Entreprise à la valeur des capitaux propres :",
    options: [
      "VE + Dettes - Trésorerie",
      "VE - Dettes + Trésorerie",
      "VE × (1 - D/(D+CP))",
      "VE / (1 + D/CP)"
    ],
    correct: 1,
    explanation: "Valeur des CP = VE - Dettes financières + Trésorerie. On soustrait les dettes et ajoute la trésorerie.",
    category: "Valorisation DCF"
  },
  {
    id: 8,
    question: "Le CMPC (Coût Moyen Pondéré du Capital) se calcule comme :",
    options: [
      "k × CP + i × D",
      "k × CP/(CP+D) + i(1-τ) × D/(CP+D)",
      "(k + i) / 2",
      "k × (1-τ) + i"
    ],
    correct: 1,
    explanation: "CMPC = k × CP/(CP+D) + i(1-τ) × D/(CP+D), où i(1-τ) reflète l'économie d'impôt sur la dette.",
    category: "Coût du capital"
  },
   {
     id: 11,
     question: "Selon la théorie moderne, quelle est la formule complète de la valeur d'entreprise ?",
     options: [
       "VE = VE non endettée + Économies d'impôt",
       "VE = VE non endettée - Coûts de détresse financière",
       "VE = VE non endettée + Économies d'impôt - Coûts de détresse financière",
       "VE = VE non endettée × (1 + Taux d'endettement)"
     ],
     correct: 2,
     explanation: "La théorie moderne intègre les coûts de détresse financière qui limitent les bénéfices de l'endettement : VE = VE non endettée + Économies d'impôt - Coûts de détresse financière.",
     category: "Théorie M&M"
   },
   {
     id: 12,
     question: "Quel ratio indique la capacité d'une entreprise à rembourser sa dette ?",
     options: [
       "ROE (Return on Equity)",
       "Dette nette / EBITDA",
       "EBITDA / Chiffre d'affaires",
       "Capitaux propres / Total bilan"
     ],
     correct: 1,
     explanation: "Le ratio Dette nette / EBITDA indique en combien d'années l'entreprise peut rembourser sa dette avec son EBITDA. Un ratio < 3-4 est généralement considéré comme sain.",
     category: "Ratios financiers"
   },
   {
     id: 13,
     question: "Quelle méthode de valorisation est la plus appropriée pour une société holding ?",
     options: [
       "DCF (Discounted Cash Flow)",
       "Méthode des multiples",
       "Méthode patrimoniale (ANR)",
       "Méthode des dividendes actualisés"
     ],
     correct: 2,
     explanation: "Pour une société holding, la méthode patrimoniale (Actif Net Réévalué) est la plus appropriée car elle valorise les participations détenues à leur juste valeur.",
     category: "Méthodes de valorisation"
   },
   {
     id: 14,
     question: "Que signifie un ROIC supérieur au CMPC ?",
     options: [
       "L'entreprise détruit de la valeur",
       "L'entreprise crée de la valeur",
       "L'entreprise est surendettée",
       "L'entreprise doit augmenter ses investissements"
     ],
     correct: 1,
     explanation: "Quand ROIC > CMPC, l'entreprise génère un rendement supérieur à son coût du capital, ce qui crée de la valeur pour les actionnaires.",
     category: "Création de valeur"
   }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (selectedAnswer === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return 'Excellent ! Vous maîtrisez parfaitement les concepts.';
    if (percentage >= 60) return 'Bien ! Quelques révisions vous permettront d\'atteindre l\'excellence.';
    return 'Il est recommandé de revoir le cours avant de passer aux cas pratiques.';
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-orange-100 rounded-full p-4">
                <Trophy className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Terminé !</h1>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className={`text-4xl font-bold mb-2 ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <div className="text-lg text-gray-600 mb-4">
                Score : {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-gray-700">{getScoreMessage()}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="font-semibold text-green-800">Bonnes réponses</span>
                </div>
                <div className="text-2xl font-bold text-green-600">{score}</div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  <span className="font-semibold text-red-800">Erreurs</span>
                </div>
                <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                Recommencer
              </button>
              
              <Link
                href="/questions-dscg"
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Cas pratiques
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour plan du cours
          </Link>
          <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
            Quiz Interactif
          </div>
          <Link href="/questions-dscg" className="flex items-center gap-2 text-orange-600 hover:text-orange-800 transition-colors">
            Cas pratiques
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Barre de progression */}
        <div className="bg-white rounded-full p-1 mb-8 shadow-sm">
          <div 
            className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Contenu principal */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-orange-100 rounded-full p-3">
              <Brain className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Question {currentQuestion + 1} sur {questions.length}
              </h1>
              <p className="text-gray-600">{questions[currentQuestion].category}</p>
            </div>
          </div>

          {/* Score actuel */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-gray-50 rounded-lg px-4 py-2">
              <span className="text-sm text-gray-600">Score actuel : </span>
              <span className="font-semibold text-gray-800">{score}/{currentQuestion}</span>
            </div>
            <div className="bg-orange-50 rounded-lg px-4 py-2">
              <span className="text-sm text-orange-600">Catégorie : </span>
              <span className="font-semibold text-orange-800">{questions[currentQuestion].category}</span>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? showResult
                        ? index === questions[currentQuestion].correct
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : 'border-orange-500 bg-orange-50 text-orange-800'
                      : showResult && index === questions[currentQuestion].correct
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-200 bg-gray-50 hover:border-orange-300 hover:bg-orange-50 text-gray-700'
                  }`}
                  whileHover={{ scale: showResult ? 1 : 1.02 }}
                  whileTap={{ scale: showResult ? 1 : 0.98 }}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-semibold ${
                      selectedAnswer === index
                        ? showResult
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-500 bg-green-500 text-white'
                            : 'border-red-500 bg-red-500 text-white'
                          : 'border-orange-500 bg-orange-500 text-white'
                        : showResult && index === questions[currentQuestion].correct
                        ? 'border-green-500 bg-green-500 text-white'
                        : 'border-gray-300 bg-white text-gray-600'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option}</span>
                    {showResult && index === questions[currentQuestion].correct && (
                      <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                    )}
                    {showResult && selectedAnswer === index && index !== questions[currentQuestion].correct && (
                      <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Explication */}
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Explication</h4>
                </div>
                <p className="text-blue-700">{questions[currentQuestion].explanation}</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bouton suivant */}
          <div className="flex justify-end">
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null || showResult}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                selectedAnswer === null
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : showResult
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-orange-600 hover:bg-orange-700 text-white shadow-sm hover:shadow-md'
              }`}
            >
              {currentQuestion === questions.length - 1 ? 'Terminer' : 'Suivant'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between mt-8">
          <Link href="/section-3" className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Section III
          </Link>
          <div className="text-sm text-gray-500">
            Question {currentQuestion + 1} sur {questions.length}
          </div>
        </div>
      </div>
    </div>
  );
}