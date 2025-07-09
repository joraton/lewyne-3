'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeft, ArrowRight, GraduationCap, Calculator, FileText, CheckCircle, AlertTriangle, Lightbulb, Target, TrendingUp, BarChart3 } from 'lucide-react';

interface Exercise {
  id: number;
  title: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  duration: string;
  description: string;
  statement: string;
  solution: string;
  tips: string[];
  category: string;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Calcul du bêta par la méthode des comparables",
    difficulty: "Moyen",
    duration: "20 min",
    description: "Application de la formule d'Hamada pour valoriser une société non cotée",
    category: "Formule d'Hamada",
    statement: `La société ALPHA (non cotée) souhaite être valorisée. Vous disposez des données suivantes :

**Référentiel de sociétés comparables :**
- Société X : CB = 800 M€, Dette = 200 M€, βᵢ = 1,4
- Société Y : CB = 1200 M€, Dette = 400 M€, βᵢ = 1,6
- Société Z : CB = 600 M€, Dette = 100 M€, βᵢ = 1,2

**Données de la société ALPHA :**
- Financement : 70% par dette, 30% par capitaux propres
- Taux d'IS = 25%
- Taux sans risque = 3%
- Prime de risque du marché = 6%
- Coût de la dette = 4,5%

**Travail à faire :**
1. Calculer le β sectoriel désendetté
2. Calculer le β de la dette d'ALPHA
3. Calculer le β réendetté d'ALPHA
4. Déterminer le coût des capitaux propres d'ALPHA`,
    solution: `**1. Calcul du β sectoriel désendetté**

Pour chaque société comparable :
- βₓ* = 1,4 / [1 + 200(1-25%)/800] = 1,4 / 1,1875 = 1,18
- βᵧ* = 1,6 / [1 + 400(1-25%)/1200] = 1,6 / 1,25 = 1,28
- βᵤ* = 1,2 / [1 + 100(1-25%)/600] = 1,2 / 1,125 = 1,07

β sectoriel = (1,18 + 1,28 + 1,07) / 3 = **1,18**

**2. Calcul du β de la dette d'ALPHA**

D'après le MEDAF :
βd = (i - rf) / [E(Rm) - rf] = (4,5% - 3%) / 6% = **0,25**

**3. Calcul du β réendetté d'ALPHA**

Ratio D/CP = 70%/30% = 2,33

βᵢ = β* + (β* - βd)(1 - τ) × D/CP
βᵢ = 1,18 + (1,18 - 0,25)(1 - 25%) × 2,33
βᵢ = 1,18 + 0,93 × 0,75 × 2,33 = **3,80**

**4. Coût des capitaux propres d'ALPHA**

k = rf + βᵢ × [E(Rm) - rf]
k = 3% + 3,80 × 6% = **25,8%**`,
    tips: [
      "Toujours désendetter les β des comparables avant de calculer la moyenne",
      "Le ratio D/CP se calcule à partir des proportions de financement",
      "Vérifier que le β de la dette est cohérent avec son coût",
      "Un β élevé (>2) indique un fort effet de levier financier"
    ]
  },
  {
    id: 2,
    title: "Valorisation DCF complète",
    difficulty: "Difficile",
    duration: "45 min",
    description: "Valorisation d'une entreprise par la méthode des flux de trésorerie actualisés",
    category: "Valorisation DCF",
    statement: `La société BETA souhaite être valorisée par la méthode DCF. Données disponibles :

**Compte de résultat année N (en M€) :**
- Chiffre d'affaires : 150
- EBIT : 18 (12% du CA)
- Taux d'IS : 25%

**Bilan année N (en M€) :**
- Immobilisations nettes : 45 (30% du CA)
- BFR : 22,5 (15% du CA)
- Trésorerie : 8
- Capitaux propres : 35
- Dettes financières : 40,5

**Hypothèses de prévision :**
- Croissance du CA : 4% par an sur 5 ans
- Maintien des ratios EBIT/CA, Immobilisations/CA, BFR/CA
- Croissance perpétuelle après N+5 : 2%
- CMPC : 9%

**Travail à faire :**
1. Établir les prévisions de FCD sur 5 ans
2. Calculer la valeur terminale
3. Déterminer la valeur d'entreprise
4. Calculer la valeur des capitaux propres`,
    solution: `**1. Prévisions de FCD sur 5 ans**

| Année | N+1 | N+2 | N+3 | N+4 | N+5 |
|-------|-----|-----|-----|-----|-----|
| CA | 156,0 | 162,2 | 168,7 | 175,5 | 182,5 |
| EBIT | 18,7 | 19,5 | 20,2 | 21,1 | 21,9 |
| IS (25%) | 4,7 | 4,9 | 5,1 | 5,3 | 5,5 |
| NOPAT | 14,0 | 14,6 | 15,2 | 15,8 | 16,4 |
| Immobilisations | 46,8 | 48,7 | 50,6 | 52,6 | 54,8 |
| BFR | 23,4 | 24,3 | 25,3 | 26,3 | 27,4 |
| Δ Immobilisations | 1,8 | 1,9 | 1,9 | 2,0 | 2,2 |
| Δ BFR | 0,9 | 0,9 | 1,0 | 1,0 | 1,1 |
| **FCD** | **11,3** | **11,8** | **12,3** | **12,8** | **13,1** |

**2. Calcul de la valeur terminale**

FCD N+6 = 13,1 × (1 + 2%) = 13,36 M€
VT = 13,36 / (9% - 2%) = **190,9 M€**

**3. Valeur d'entreprise**

| Année | FCD | Facteur d'actualisation | VA |
|-------|-----|------------------------|----|
| N+1 | 11,3 | 1/(1,09)¹ = 0,917 | 10,4 |
| N+2 | 11,8 | 1/(1,09)² = 0,842 | 9,9 |
| N+3 | 12,3 | 1/(1,09)³ = 0,772 | 9,5 |
| N+4 | 12,8 | 1/(1,09)⁴ = 0,708 | 9,1 |
| N+5 | 13,1 | 1/(1,09)⁵ = 0,650 | 8,5 |
| VT | 190,9 | 1/(1,09)⁵ = 0,650 | 124,1 |

**VE = 171,5 M€**

**4. Valeur des capitaux propres**

Valeur des CP = VE + Trésorerie - Dettes financières
Valeur des CP = 171,5 + 8 - 40,5 = **139,0 M€**

Plus-value latente = 139,0 - 35 = **104,0 M€**`,
    tips: [
      "Maintenir les ratios constants simplifie les prévisions",
      "La VT représente souvent 70-80% de la valeur totale",
      "Vérifier que g < CMPC pour éviter les valeurs infinies",
      "La trésorerie s'ajoute, les dettes se soustraient de la VE"
    ]
  },
  {
    id: 3,
    title: "Optimisation de la structure financière",
    difficulty: "Moyen",
    duration: "30 min",
    description: "Application des théories M&M pour optimiser le financement",
    category: "Théorie M&M",
    statement: `La société GAMMA étudie différentes structures de financement. Données :

**Situation actuelle :**
- Valeur d'entreprise non endettée : 100 M€
- Financement : 100% capitaux propres
- Coût des capitaux propres non endettés : 12%
- Taux d'IS : 25%

**Projets de financement étudiés :**
- Option A : 20% de dette au taux de 5%
- Option B : 40% de dette au taux de 6%
- Option C : 60% de dette au taux de 8%

**Travail à faire :**
1. Calculer la valeur d'entreprise pour chaque option (théorie M&M avec fiscalité)
2. Déterminer le coût des capitaux propres pour chaque option
3. Calculer le CMPC pour chaque option
4. Recommander la structure optimale`,
    solution: `**1. Valeur d'entreprise selon M&M avec fiscalité**

VE = VE₀ + VAN(bouclier fiscal) = VE₀ + D × τ

- Option A : VE = 100 + (20 × 25%) = **105 M€**
- Option B : VE = 100 + (40 × 25%) = **110 M€**
- Option C : VE = 100 + (60 × 25%) = **115 M€**

**2. Coût des capitaux propres**

k = ρ + (ρ - i)(1 - τ) × D/CP

- Option A : k = 12% + (12% - 5%)(1 - 25%) × 20/80 = **13,3%**
- Option B : k = 12% + (12% - 6%)(1 - 25%) × 40/60 = **15,0%**
- Option C : k = 12% + (12% - 8%)(1 - 25%) × 60/40 = **16,5%**

**3. CMPC pour chaque option**

CMPC = k × CP/(CP+D) + i(1-τ) × D/(CP+D)

- Option A : CMPC = 13,3% × 80% + 5% × 75% × 20% = **11,4%**
- Option B : CMPC = 15,0% × 60% + 6% × 75% × 40% = **10,8%**
- Option C : CMPC = 16,5% × 40% + 8% × 75% × 60% = **10,2%**

**4. Recommandation**

L'option C (60% de dette) présente :
- La VE la plus élevée (115 M€)
- Le CMPC le plus faible (10,2%)

**Recommandation : Option C**, sous réserve que l'entreprise puisse supporter le risque financier associé à un endettement de 60%.

*Note : En pratique, il faut considérer les coûts de détresse financière qui limitent l'endettement optimal.*`,
    tips: [
      "Plus d'endettement = plus d'économies d'impôt = plus de valeur",
      "Le coût des CP augmente avec l'endettement (risque financier)",
      "Le CMPC diminue grâce au bouclier fiscal",
      "Attention aux coûts de détresse financière non modélisés ici"
    ]
  },
  {
    id: 4,
    title: "Analyse de sensibilité d'une valorisation DCF",
    difficulty: "Difficile",
    duration: "35 min",
    description: "Étude de l'impact des paramètres clés sur la valeur d'entreprise",
    category: "Valorisation DCF",
    statement: `La société DELTA a été valorisée à 150 M€ par la méthode DCF avec les hypothèses de base suivantes :

**Paramètres de base :**
- CMPC : 9%
- Taux de croissance perpétuelle (g) : 2%
- FCD année N+5 : 12 M€
- Valeur terminale : 80% de la valeur totale
- Horizon de prévision : 5 ans

**Scénarios à analyser :**

**Scénario 1 - Variation du CMPC :**
- CMPC optimiste : 8%
- CMPC pessimiste : 10%

**Scénario 2 - Variation du taux de croissance :**
- Croissance optimiste : 2,5%
- Croissance pessimiste : 1,5%

**Scénario 3 - Variation des FCD :**
- FCD optimiste : +10% sur tous les flux
- FCD pessimiste : -10% sur tous les flux

**Travail à faire :**
1. Calculer la valeur terminale pour chaque scénario
2. Estimer l'impact sur la valeur d'entreprise totale
3. Identifier le paramètre le plus sensible
4. Proposer des recommandations`,
    solution: `**Calculs préliminaires :**

VT de base = 12 × (1+2%) / (9%-2%) = 175,4 M€
VA des flux explicites = 150 - (175,4 × 0,665) = 33,4 M€
(Facteur d'actualisation en N+5 : 1/(1,09)⁵ = 0,665)

**1. Calcul des valeurs terminales**

**Scénario 1 - Variation du CMPC :**
- CMPC 8% : VT = 12,24 / (8%-2%) = **204,0 M€**
- CMPC 10% : VT = 12,24 / (10%-2%) = **153,0 M€**

**Scénario 2 - Variation de g :**
- g = 2,5% : VT = 12,30 / (9%-2,5%) = **189,2 M€**
- g = 1,5% : VT = 12,18 / (9%-1,5%) = **162,4 M€**

**Scénario 3 - Variation des FCD :**
- FCD +10% : VT = 13,46 / (9%-2%) = **192,3 M€**
- FCD -10% : VT = 11,02 / (9%-2%) = **157,4 M€**

**2. Impact sur la VE totale**

| Scénario | VT (M€) | VA de la VT | VE totale | Variation |
|----------|---------|-------------|-----------|----------|
| Base | 175,4 | 116,6 | 150,0 | - |
| CMPC 8% | 204,0 | 135,7 | 169,1 | +12,7% |
| CMPC 10% | 153,0 | 101,7 | 135,1 | -9,9% |
| g = 2,5% | 189,2 | 125,8 | 159,2 | +6,1% |
| g = 1,5% | 162,4 | 108,0 | 141,4 | -5,7% |
| FCD +10% | 192,3 | 127,9 | 161,3 | +7,5% |
| FCD -10% | 157,4 | 104,7 | 138,1 | -7,9% |

**3. Analyse de sensibilité**

**Paramètre le plus sensible : CMPC**
- Variation de ±1% → Impact de +12,7% à -9,9%
- Élasticité élevée due à l'effet d'actualisation

**Classement par sensibilité :**
1. **CMPC** : ±11,3% en moyenne
2. **FCD** : ±7,7% en moyenne  
3. **Taux de croissance g** : ±5,9% en moyenne

**4. Recommandations**

**Priorités d'analyse :**
- **Affiner l'estimation du CMPC** (bêta, prime de risque)
- Réaliser une analyse de scénarios multiples
- Considérer une approche par somme des parties

**Gestion des risques :**
- Établir des fourchettes de valorisation
- Documenter les hypothèses clés
- Prévoir des clauses d'ajustement de prix

**Validation :**
- Comparer avec des multiples de marché
- Analyser la cohérence historique des paramètres
- Effectuer des tests de stress sur les hypothèses`,
    tips: [
      "La VT représente souvent 70-80% de la valeur : sa sensibilité est critique",
      "Le CMPC a un impact exponentiel via l'actualisation",
      "Toujours tester plusieurs scénarios pour encadrer la valeur",
      "Documenter les sources et la logique de chaque hypothèse clé"
    ]
  }
];

export default function QuestionsDSCG() {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-100 text-green-800 border-green-200';
      case 'Moyen': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Difficile': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Formule d\'Hamada': return <Calculator className="w-5 h-5" />;
      case 'Valorisation DCF': return <TrendingUp className="w-5 h-5" />;
      case 'Théorie M&M': return <BarChart3 className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  if (selectedExercise !== null) {
    const exercise = exercises[selectedExercise];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Navigation */}
          <nav className="flex items-center justify-between mb-8">
            <button 
              onClick={() => {
                setSelectedExercise(null);
                setShowSolution(false);
              }}
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux exercices
            </button>
            <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Exercice {exercise.id}
            </div>
            <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
              Accueil
              <ArrowRight className="w-4 h-4" />
            </Link>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {/* Header de l'exercice */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-purple-100 rounded-full p-3">
                {getCategoryIcon(exercise.category)}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{exercise.title}</h1>
                <p className="text-gray-600 mb-4">{exercise.description}</p>
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(exercise.difficulty)}`}>
                    {exercise.difficulty}
                  </span>
                  <span className="text-sm text-gray-500">⏱️ {exercise.duration}</span>
                  <span className="text-sm text-gray-500">📂 {exercise.category}</span>
                </div>
              </div>
            </div>

            {/* Énoncé */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-600" />
                Énoncé
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {exercise.statement}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-yellow-600" />
                Conseils méthodologiques
              </h3>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {exercise.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-yellow-800">
                      <Target className="w-4 h-4 mt-0.5 text-yellow-600 flex-shrink-0" />
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bouton solution */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setShowSolution(!showSolution)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  showSolution 
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    : 'bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:shadow-md'
                }`}
              >
                {showSolution ? (
                  <>
                    <ArrowLeft className="w-4 h-4" />
                    Masquer la solution
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Voir la solution
                  </>
                )}
              </button>
            </div>

            {/* Solution */}
            {showSolution && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="border-t border-gray-200 pt-8"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Solution détaillée
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                    {exercise.solution}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour plan du cours
          </Link>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            Questions DSCG
          </div>
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            Accueil
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Barre de progression */}
        <div className="bg-white rounded-full p-1 mb-8 shadow-sm">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
        </div>

        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-purple-100 rounded-full p-3">
              <GraduationCap className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Cas pratiques</h1>
              <p className="text-gray-600">Exercices d'application pratique pour l'examen</p>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-800">Objectifs de cette section</h3>
            </div>
            <ul className="space-y-2 text-purple-700">
              <li>• Appliquer les concepts théoriques à des cas concrets</li>
              <li>• Maîtriser la méthodologie des calculs financiers</li>
              <li>• Se préparer aux questions d'examen DSCG</li>
              <li>• Développer une approche structurée de résolution</li>
            </ul>
          </div>

          {/* Liste des exercices */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Exercices disponibles</h2>
            
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedExercise(index)}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full p-3">
                    {getCategoryIcon(exercise.category)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-800">{exercise.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(exercise.difficulty)}`}>
                        {exercise.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{exercise.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>⏱️ {exercise.duration}</span>
                      <span>📂 {exercise.category}</span>
                      <span className="ml-auto text-purple-600 font-medium">Commencer →</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Conseils généraux */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">Conseils pour réussir</h3>
            </div>
            <ul className="space-y-2 text-blue-700 text-sm">
              <li>• Lisez attentivement l'énoncé et identifiez les données clés</li>
              <li>• Structurez votre démarche avant de commencer les calculs</li>
              <li>• Vérifiez la cohérence de vos résultats (ordres de grandeur)</li>
              <li>• Utilisez les conseils méthodologiques fournis</li>
              <li>• Entraînez-vous régulièrement pour acquérir les automatismes</li>
            </ul>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between mt-8">
          <Link href="/quiz" className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Quiz
          </Link>
          <Link href="/" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
            Retour à l'accueil
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}