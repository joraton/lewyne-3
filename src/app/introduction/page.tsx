'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Rocket, BookOpen, Target, Lightbulb } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour plan du cours
          </Link>
          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            Introduction
          </div>
          <Link href="/section-1" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            Section I
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Barre de progression */}
        <div className="bg-white rounded-full p-1 mb-8 shadow-sm">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '16.67%' }}></div>
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
            <div className="bg-blue-100 rounded-full p-3">
              <Rocket className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Introduction</h1>
              <p className="text-gray-600">Concepts fondamentaux des décisions de financement</p>
            </div>
          </div>

          {/* Objectifs d&apos;apprentissage */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-800">Objectifs d&apos;apprentissage</h3>
            </div>
            <ul className="space-y-2 text-blue-700">
              <li>• Comprendre les enjeux des décisions de financement</li>
              <li>• Maîtriser les concepts de coût du capital et structure financière</li>
              <li>• Identifier les différents types de risques financiers</li>
              <li>• Appréhender l&apos;impact de la fiscalité sur les décisions</li>
            </ul>
          </div>

          {/* Contenu */}
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Qu&apos;est-ce qu&apos;une décision de financement ?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Les <strong>décisions de financement</strong> constituent l&apos;un des trois piliers de la gestion financière d&apos;entreprise, 
              aux côtés des décisions d&apos;investissement et de distribution. Elles concernent le choix des sources de financement 
              optimales pour l&apos;entreprise et l&apos;impact de ces choix sur sa valeur.
            </p>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-green-600" />
                <h4 className="font-semibold text-green-800">Définition clé</h4>
              </div>
              <p className="text-green-700">
                Une décision de financement détermine la <strong>structure financière optimale</strong> d&apos;une entreprise, 
                c&apos;est-à-dire la répartition entre capitaux propres et dettes qui maximise la valeur de l&apos;entreprise 
                tout en minimisant le coût du capital.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Les enjeux fondamentaux</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3">🎯 Optimisation du coût du capital</h4>
                <p className="text-purple-700 text-sm">
                  Trouver le mix optimal entre financement par capitaux propres (plus cher) 
                  et financement par dette (moins cher grâce à la déductibilité fiscale).
                </p>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3">⚖️ Gestion du risque financier</h4>
                <p className="text-orange-700 text-sm">
                  Équilibrer les avantages de l&apos;endettement avec les risques de surendettement 
                  et de difficultés financières.
                </p>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-800 mb-3">💰 Maximisation de la valeur</h4>
                <p className="text-indigo-700 text-sm">
                  Utiliser la structure financière comme levier pour augmenter 
                  la valeur de l&apos;entreprise et la richesse des actionnaires.
                </p>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-800 mb-3">🏛️ Optimisation fiscale</h4>
                <p className="text-teal-700 text-sm">
                  Exploiter les avantages fiscaux de l&apos;endettement (déductibilité des intérêts) 
                  pour réduire la charge fiscale globale.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4">Concepts clés à retenir</h3>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-semibold text-gray-800 mb-2">Coût du Capital (K ou CMPC)</h4>
                <p className="text-gray-700 text-sm">
                  Taux de rendement minimum exigé par les investisseurs, calculé comme moyenne pondérée 
                  du coût des capitaux propres et du coût de la dette.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-semibold text-gray-800 mb-2">Risque Industriel vs Risque Financier</h4>
                <p className="text-gray-700 text-sm">
                  Le risque industriel est lié à l&apos;activité de l&apos;entreprise, tandis que le risque financier 
                  provient de l&apos;utilisation de l&apos;endettement dans la structure de financement.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                <h4 className="font-semibold text-gray-800 mb-2">Valeur d&apos;Entreprise (VE)</h4>
                <p className="text-gray-700 text-sm">
                  Valeur totale des actifs opérationnels de l&apos;entreprise, indépendamment de leur mode de financement. 
                  Elle se calcule par actualisation des flux de trésorerie futurs.
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-3">🧠 Moyen mnémotechnique</h4>
              <p className="text-yellow-700 mb-2">
                Pour retenir les trois piliers de la finance d&apos;entreprise, pensez à <strong>&quot;FID&quot;</strong> :
              </p>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li><strong>F</strong>inancement : Comment financer l&apos;entreprise ?</li>
                <li><strong>I</strong>nvestissement : Dans quoi investir ?</li>
                <li><strong>D</strong>istribution : Comment rémunérer les actionnaires ?</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between mt-8">
          <Link href="/" className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Plan du cours
          </Link>
          <Link href="/section-1" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
            Section I - Théories de M&M
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}