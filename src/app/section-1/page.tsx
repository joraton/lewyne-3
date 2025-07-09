'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, AlertTriangle, Calculator, BookOpen, Lightbulb, Target } from 'lucide-react';

export default function Section1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour plan du cours
          </Link>
          <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Section I
          </div>
          <Link href="/section-2" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
            Section II
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Barre de progression */}
        <div className="bg-white rounded-full p-1 mb-8 shadow-sm">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '33.33%' }}></div>
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
            <div className="bg-green-100 rounded-full p-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Section I - Théories de Modigliani & Miller</h1>
              <p className="text-gray-600">Modèles fondamentaux de la structure financière</p>
            </div>
          </div>

          {/* Objectifs */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-800">Objectifs de cette section</h3>
            </div>
            <ul className="space-y-2 text-green-700">
              <li>• Maîtriser les propositions de Modigliani & Miller (1958 et 1963)</li>
              <li>• Comprendre l'impact de la fiscalité sur la structure financière</li>
              <li>• Calculer le coût du capital et des capitaux propres</li>
              <li>• Analyser l'effet de levier financier</li>
            </ul>
          </div>

          {/* Contenu */}
          <div className="prose max-w-none space-y-8">
            
            {/* A. Modigliani & Miller 1958 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-green-600" />
                A. Modigliani & Miller en l'absence de fiscalité (1958)
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Proposition fondamentale</h4>
                </div>
                <p className="text-blue-700">
                  <strong>Le coût du capital est indépendant de la structure financière.</strong> 
                  Le coût du capital (K) est égal au taux de capitalisation (ρ) de l'espérance 
                  de revenu net de l'exploitation d'une entreprise non endettée présentant le même risque industriel.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Coût du capital = K = CMPC</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Définitions clés :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Taux de capitalisation (ρ) :</strong> Taux d'actualisation dans l'hypothèse d'une rente perpétuelle</li>
                  <li><strong>Revenu net d'exploitation :</strong> Le REX (Résultat d'Exploitation)</li>
                  <li><strong>Risque industriel :</strong> Risque lié au secteur d'activité</li>
                  <li><strong>Risque financier :</strong> Risque lié à l'endettement</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-3">📐 Formule de la Valeur d'Entreprise</h4>
                <div className="text-center py-4">
                  <div className="text-2xl font-mono bg-white p-4 rounded border inline-block">
                    VE = E(REX) / ρ
                  </div>
                </div>
                <p className="text-yellow-700 text-sm mt-3">
                  <strong>Exemple :</strong> Si le taux d'actualisation est de 10%, la VE est égale à 10 fois le REX espéré.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Coût des Capitaux Propres</h3>
              
              <p className="text-gray-700 mb-4">
                Le coût des capitaux propres (k) représente l'espérance de rendement espérée par l'actionnaire :
              </p>
              
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">📐 Formule du coût des CP</h4>
                <div className="text-center py-4">
                  <div className="text-xl font-mono bg-white p-4 rounded border inline-block">
                    k = ρ + (ρ - i) × D/CP
                  </div>
                </div>
                <div className="text-sm text-green-700 mt-3">
                  <p><strong>Où :</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>k = coût des capitaux propres</li>
                    <li>ρ = taux de capitalisation (entreprise non endettée)</li>
                    <li>i = coût de la dette</li>
                    <li>D = dette</li>
                    <li>CP = capitaux propres</li>
                  </ul>
                </div>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold text-orange-800">Remarque importante</h4>
                </div>
                <p className="text-orange-700">
                  ρ est toujours supérieur au coût de la dette (i), donc (ρ - i) est toujours positif. 
                  <strong>Conséquence :</strong> Toute augmentation du ratio d'endettement D/CP entraîne une hausse 
                  du coût des capitaux propres, mais le coût du capital reste constant.
                </p>
              </div>
            </section>

            {/* B. Modigliani & Miller 1963 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-green-600" />
                B. Modigliani & Miller en présence de fiscalité (1963)
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Le Crédit d'Impôt</h3>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Notations :</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>VE* :</strong> Valeur de l'entreprise non endettée</li>
                  <li><strong>VE :</strong> Valeur de l'entreprise endettée</li>
                  <li><strong>τ :</strong> Taux d'impôt sur les sociétés</li>
                  <li><strong>D :</strong> Dette financière nette</li>
                  <li><strong>iD :</strong> Frais financiers</li>
                  <li><strong>iDτ :</strong> Économie d'IS (rente perpétuelle)</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-purple-800 mb-3">📐 Formule avec fiscalité</h4>
                <div className="text-center py-4">
                  <div className="text-2xl font-mono bg-white p-4 rounded border inline-block">
                    VE = VE* + Dτ
                  </div>
                </div>
                <p className="text-purple-700 text-sm mt-3">
                  La valeur de l'entreprise endettée est supérieure à celle de l'entreprise non endettée 
                  du montant du crédit d'impôt (Dτ).
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Explication du crédit d'impôt</h4>
                </div>
                <p className="text-blue-700">
                  L'endettement permet de déduire les frais financiers (iD) de l'assiette imposable, 
                  générant une économie d'impôt annuelle de iDτ. La valeur actualisée de cette rente 
                  perpétuelle d'économies d'impôt est Dτ.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Coût des capitaux propres avec fiscalité</h3>
              
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">📐 Formule ajustée</h4>
                <div className="text-center py-4">
                  <div className="text-xl font-mono bg-white p-4 rounded border inline-block">
                    k = ρ + (ρ - i)(1 - τ) × D/CP
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Le coût ajusté du capital</h3>
              
              <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-indigo-800 mb-3">📐 CMPC avec fiscalité</h4>
                <div className="text-center py-4">
                  <div className="text-lg font-mono bg-white p-4 rounded border inline-block">
                    K = ρ × (1 - Dτ/(CP + D))
                  </div>
                </div>
                <p className="text-indigo-700 text-sm mt-3">
                  L'augmentation de l'endettement réduit le coût du capital, qui tend vers ρ(1 - τ).
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
                <h4 className="font-semibold text-yellow-800 mb-3">🧠 Moyen mnémotechnique</h4>
                <p className="text-yellow-700 mb-2">
                  Pour retenir l'évolution des théories M&M, pensez à <strong>"SANS-AVEC"</strong> :
                </p>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li><strong>1958 SANS</strong> fiscalité : VE indépendante de la structure</li>
                  <li><strong>1963 AVEC</strong> fiscalité : VE augmente avec l'endettement</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-800 mb-4">⚠️ Limites de la théorie M&M et coûts de détresse financière</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Hypothèses restrictives de M&M :</h4>
                    <ul className="list-disc list-inside text-red-700 space-y-1">
                      <li>Marchés parfaits (pas de coûts de transaction)</li>
                      <li>Pas de coûts de faillite</li>
                      <li>Information parfaite et symétrique</li>
                      <li>Pas de coûts d'agence</li>
                      <li>Politique d'investissement indépendante du financement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Coûts de détresse financière :</h4>
                    <div className="bg-white p-4 rounded border">
                      <p className="text-red-600 mb-2"><strong>Coûts directs :</strong></p>
                      <ul className="list-disc list-inside text-red-600 text-sm space-y-1 mb-3">
                        <li>Frais juridiques et administratifs</li>
                        <li>Honoraires des conseils</li>
                        <li>Coûts de restructuration</li>
                      </ul>
                      
                      <p className="text-red-600 mb-2"><strong>Coûts indirects (plus importants) :</strong></p>
                      <ul className="list-disc list-inside text-red-600 text-sm space-y-1">
                        <li>Perte de clients et fournisseurs</li>
                        <li>Départ des talents clés</li>
                        <li>Sous-investissement</li>
                        <li>Liquidation d'actifs à prix bradés</li>
                        <li>Perte d'opportunités commerciales</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-red-700 mb-2">📊 Structure financière optimale réelle :</h4>
                    <p className="text-red-600 text-sm mb-2">
                      <strong>VE = VE non endettée + Économies d'impôt - Coûts de détresse financière</strong>
                    </p>
                    <p className="text-red-600 text-sm">
                      L'optimum se situe au point où l'avantage fiscal marginal égale le coût de détresse marginal.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between mt-8">
          <Link href="/introduction" className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Introduction
          </Link>
          <Link href="/section-2" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
            Section II - Formule d'Hamada
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}