'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Calculator, Target, AlertTriangle, Lightbulb, DollarSign, PieChart } from 'lucide-react';

export default function Section3() {
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
            Section III
          </div>
          <Link href="/quiz" className="flex items-center gap-2 text-green-600 hover:text-green-800 transition-colors">
            Quiz
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Barre de progression */}
        <div className="bg-white rounded-full p-1 mb-8 shadow-sm">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
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
              <h1 className="text-3xl font-bold text-gray-800">Section III - Cas Pratiques Avancés</h1>
              <p className="text-gray-600">Valorisation complète par DCF et calculs de flux</p>
            </div>
          </div>

          {/* Objectifs */}
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-800">Objectifs de cette section</h3>
            </div>
            <ul className="space-y-2 text-green-700">
              <li>• Construire des prévisions de flux de trésorerie sur 5 ans</li>
              <li>• Calculer la Valeur d&apos;Entreprise (VE) et la Valeur Terminale (VT)</li>
              <li>• Maîtriser les hypothèses de croissance et ratios financiers</li>
              <li>• Appliquer la méthode DCF complète</li>
            </ul>
          </div>

          {/* Contenu */}
          <div className="prose max-w-none space-y-8">
            
            {/* A. Construction des prévisions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-green-600" />
                A. Construction des Prévisions
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Données de base (année N)</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Compte de résultat :</strong></p>
                    <ul className="space-y-1 text-blue-700">
                      <li>• CA : 120 M€</li>
                      <li>• EBE : 15 M€ (12,5% du CA)</li>
                      <li>• Dotations : 3 M€</li>
                      <li>• REX : 12 M€</li>
                      <li>• IS (25%) : 3 M€</li>
                      <li>• RN : 9 M€</li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Bilan :</strong></p>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Immobilisations : 30 M€</li>
                      <li>• BFR : 18 M€ (15% du CA)</li>
                      <li>• Investissements annuels : 4 M€</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hypothèses de prévision</h3>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <ul className="space-y-2 text-yellow-700">
                  <li>• <strong>Croissance du CA :</strong> 5% par an</li>
                  <li>• <strong>EBE :</strong> maintien du ratio 12,5% du CA</li>
                  <li>• <strong>Dotations :</strong> 2,5% du CA</li>
                  <li>• <strong>BFR :</strong> maintien du ratio 15% du CA</li>
                  <li>• <strong>Investissements :</strong> 3% du CA</li>
                  <li>• <strong>Taux d&apos;IS :</strong> 25%</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tableau de prévision des FCD</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Éléments (M€)</th>
                      <th className="border border-gray-300 px-3 py-2 text-center">N+1</th>
                      <th className="border border-gray-300 px-3 py-2 text-center">N+2</th>
                      <th className="border border-gray-300 px-3 py-2 text-center">N+3</th>
                      <th className="border border-gray-300 px-3 py-2 text-center">N+4</th>
                      <th className="border border-gray-300 px-3 py-2 text-center">N+5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">CA</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">126,0</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">132,3</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">138,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">145,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">153,2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">EBE (12,5%)</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">15,8</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">16,5</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">17,4</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">18,2</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">19,2</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Dotations (2,5%)</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,2</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,3</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,5</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,6</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,8</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">REX</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">12,6</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">13,2</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">13,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">14,6</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">15,4</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">IS (25%)</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,2</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,3</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,5</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,6</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,8</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="border border-gray-300 px-3 py-2 font-semibold">NOPAT</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">9,5</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">9,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">10,4</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">11,0</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-semibold">11,5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Investissements (3%)</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">3,8</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">4,0</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">4,2</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">4,4</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">4,6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Δ Immobilisations</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">1,6</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">0,7</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">0,7</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">0,8</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">0,8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">BFR (15%)</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">18,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">19,8</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">20,8</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">21,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">23,0</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">Δ BFR</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">0,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">0,9</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">1,0</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">1,1</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">1,1</td>
                    </tr>
                    <tr className="bg-orange-100">
                      <td className="border border-gray-300 px-3 py-2 font-bold">FCD</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold">7,4</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold">7,8</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold">8,3</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold">8,5</td>
                      <td className="border border-gray-300 px-3 py-2 text-center font-bold">9,1</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-2">📐 Formule du FCD</h4>
                <div className="text-center mb-3">
                  <div className="text-lg font-mono bg-white p-3 rounded border inline-block">
                    FCD = NOPAT - Δ Immobilisations - Δ BFR
                  </div>
                </div>
                <p className="text-purple-700 text-sm mt-2">
                  <strong>Exemple N+1 :</strong> FCD = 9,5 - 1,6 - 0,9 = 7,4 M€
                </p>
              </div>

              {/* Exercice supplémentaire : Tableau comparatif EBE vs Dotations */}
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-gray-600" />
                  📊 Exercice d'application : Analyse comparative
                </h4>
                
                <p className="text-gray-700 mb-4">
                  <strong>Énoncé :</strong> Comparez l&apos;évolution de l&apos;EBE et des dotations aux amortissements sur la période de prévision.
                </p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-3 py-2 text-left">Indicateur</th>
                        <th className="border border-gray-300 px-3 py-2 text-center">N+1</th>
                        <th className="border border-gray-300 px-3 py-2 text-center">N+2</th>
                        <th className="border border-gray-300 px-3 py-2 text-center">N+3</th>
                        <th className="border border-gray-300 px-3 py-2 text-center">N+4</th>
                        <th className="border border-gray-300 px-3 py-2 text-center">N+5</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-3 py-2 font-semibold">EBE (M€)</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">15,8</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">16,5</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">17,4</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">18,2</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">19,2</td>
                      </tr>
                      <tr className="bg-orange-50">
                        <td className="border border-gray-300 px-3 py-2 font-semibold">Dotations (M€)</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">3,2</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">3,3</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">3,5</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">3,6</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">3,8</td>
                      </tr>
                      <tr className="bg-green-50">
                        <td className="border border-gray-300 px-3 py-2 font-semibold">Ratio Dotations/EBE</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">20,3%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">20,0%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">20,1%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">19,8%</td>
                        <td className="border border-gray-300 px-3 py-2 text-center">19,8%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
                  <p className="text-yellow-800 text-sm">
                    <strong>💡 Analyse :</strong> Le ratio dotations/EBE reste stable autour de 20%, ce qui indique une politique d&apos;amortissement cohérente avec la croissance de l&apos;activité. Cette stabilité facilite les prévisions à long terme.
                  </p>
                </div>
              </div>
            </section>

            {/* B. Calcul de la Valeur d'Entreprise */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                B. Calcul de la Valeur d&apos;Entreprise
              </h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Valeur Terminale (VT)</h3>
              
              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg">
                <h4 className="font-semibold text-orange-800 mb-3">Hypothèses pour la VT</h4>
                <ul className="space-y-2 text-orange-700">
                  <li>• Croissance perpétuelle : g = 2%</li>
                  <li>• CMPC = 8,5% (calculé précédemment)</li>
                  <li>• FCD de l&apos;année N+6 = FCD N+5 × (1 + g)</li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-orange-800 mb-2">📐 Calcul de la VT</h4>
                <div className="space-y-2 text-sm font-mono">
                  <p>FCD N+6 = 9,1 × (1 + 2%) = 9,28 M€</p>
                  <p>VT = FCD N+6 / (CMPC - g)</p>
                  <p>VT = 9,28 / (8,5% - 2%) = 142,8 M€</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Actualisation des flux</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Année</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">FCD (M€)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Facteur d&apos;actualisation</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Valeur actualisée</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">N+1</td>
                      <td className="border border-gray-300 px-3 py-2">7,4</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,085)¹ = 0,922</td>
                      <td className="border border-gray-300 px-3 py-2 bg-blue-50">6,8</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">N+2</td>
                      <td className="border border-gray-300 px-3 py-2">7,8</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,085)² = 0,850</td>
                      <td className="border border-gray-300 px-3 py-2 bg-blue-50">6,6</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">N+3</td>
                      <td className="border border-gray-300 px-3 py-2">8,3</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,085)³ = 0,784</td>
                      <td className="border border-gray-300 px-3 py-2 bg-blue-50">6,5</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">N+4</td>
                      <td className="border border-gray-300 px-3 py-2">8,5</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,085)⁴ = 0,722</td>
                      <td className="border border-gray-300 px-3 py-2 bg-blue-50">6,1</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">N+5</td>
                      <td className="border border-gray-300 px-3 py-2">9,1</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,085)⁵ = 0,665</td>
                      <td className="border border-gray-300 px-3 py-2 bg-blue-50">6,1</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="border border-gray-300 px-3 py-2 font-bold">VT en N+5</td>
                      <td className="border border-gray-300 px-3 py-2 font-bold">142,8</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,085)⁵ = 0,665</td>
                      <td className="border border-gray-300 px-3 py-2 font-bold">95,0</td>
                    </tr>
                    <tr className="bg-green-100">
                      <td className="border border-gray-300 px-3 py-2 font-bold" colSpan={3}>VALEUR D&apos;ENTREPRISE (VE)</td>
                      <td className="border border-gray-300 px-3 py-2 font-bold text-lg">127,1 M€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Passage à la valeur des capitaux propres</h3>
              
              <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-teal-800 mb-3">Données du bilan (en M€)</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Actif :</strong></p>
                    <ul className="space-y-1 text-teal-700">
                      <li>• Immobilisations : 25</li>
                      <li>• BFR : 15</li>
                      <li>• Trésorerie : 5</li>
                      <li><strong>Total : 45</strong></li>
                    </ul>
                  </div>
                  <div>
                    <p><strong>Passif :</strong></p>
                    <ul className="space-y-1 text-teal-700">
                      <li>• Capitaux propres : 18</li>
                      <li>• Dettes financières : 27</li>
                      <li><strong>Total : 45</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-2">📐 Calcul de la valeur des CP</h4>
                <div className="space-y-2 text-sm font-mono">
                  <p>Valeur des CP = VE + Trésorerie - Dettes financières</p>
                  <p>Valeur des CP = 127,1 + 5 - 27 = 105,1 M€</p>
                </div>
                <div className="mt-3 p-3 bg-white rounded border">
                  <p className="text-green-800 font-semibold">Valeur comptable des CP : 18 M€</p>
                  <p className="text-green-800 font-semibold">Plus-value latente : 105,1 - 18 = 87,1 M€</p>
                </div>
              </div>
            </section>

            {/* C. Cas particulier : entreprise non endettée */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <PieChart className="w-6 h-6 text-green-600" />
                C. Cas Particulier : Entreprise Non Endettée
              </h2>
              
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-6 rounded-r-lg">
                <h4 className="font-semibold text-indigo-800 mb-3">Hypothèses modifiées</h4>
                <ul className="space-y-2 text-indigo-700">
                  <li>• Entreprise 100% financée par capitaux propres</li>
                  <li>• CMPC = ρ = 10% (coût des CP non endettés)</li>
                  <li>• Pas d&apos;économie d&apos;impôt sur la dette</li>
                </ul>
              </div>

              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-indigo-800 mb-2">📐 Calcul de la VT non endettée</h4>
                <div className="space-y-2 text-sm font-mono">
                  <p>VT = FCD N+6 / (ρ - g)</p>
                  <p>VT = 9,28 / (10% - 2%) = 116 M€</p>
                </div>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 bg-white text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-3 py-2 text-left">Année</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">FCD (M€)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">Facteur (10%)</th>
                      <th className="border border-gray-300 px-3 py-2 text-left">VA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2">N+1 à N+5</td>
                      <td className="border border-gray-300 px-3 py-2">Identiques</td>
                      <td className="border border-gray-300 px-3 py-2">Taux 10%</td>
                      <td className="border border-gray-300 px-3 py-2">30,5</td>
                    </tr>
                    <tr className="bg-indigo-50">
                      <td className="border border-gray-300 px-3 py-2 font-bold">VT en N+5</td>
                      <td className="border border-gray-300 px-3 py-2 font-bold">116</td>
                      <td className="border border-gray-300 px-3 py-2">1/(1,10)⁵ = 0,621</td>
                      <td className="border border-gray-300 px-3 py-2 font-bold">72,0</td>
                    </tr>
                    <tr className="bg-indigo-100">
                      <td className="border border-gray-300 px-3 py-2 font-bold" colSpan={3}>VE NON ENDETTÉE</td>
                      <td className="border border-gray-300 px-3 py-2 font-bold text-lg">102,5 M€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">💡 Comparaison des valorisations</h4>
                <div className="space-y-2 text-yellow-700">
                  <p><strong>VE endettée :</strong> 127,1 M€</p>
                  <p><strong>VE non endettée :</strong> 102,5 M€</p>
                  <p><strong>Économie d&apos;impôt :</strong> 127,1 - 102,5 = 24,6 M€</p>
                </div>
                <p className="text-yellow-700 text-sm mt-3">
                  L&apos;endettement crée de la valeur grâce aux économies d&apos;impôt (théorie M&M avec fiscalité).
                </p>
              </div>
            </section>

            {/* Remarques importantes */}
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-red-800">Points clés à retenir</h4>
              </div>
              <ul className="space-y-2 text-red-700">
                <li>• Les dotations aux amortissements n&apos;impactent pas les FCD (déjà dans le NOPAT)</li>
                <li>• Les investissements de maintien sont inclus dans Δ Immobilisations</li>
                <li>• La VT représente souvent 70-80% de la valeur totale</li>
                <li>• Toujours vérifier la cohérence : VE endettée &gt; VE non endettée</li>
                <li>• Le taux de croissance g doit être &lt; CMPC pour éviter les valeurs infinies</li>
              </ul>
            </div>

            {/* Moyen mnémotechnique */}
            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mt-6">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-5 h-5 text-purple-600" />
                <h4 className="font-semibold text-purple-800">💭 Moyen mnémotechnique</h4>
              </div>
              <div className="text-purple-700">
                <p className="font-semibold mb-2">&quot;NAVI&quot; pour les étapes DCF :</p>
                <ul className="space-y-1">
                  <li><strong>N</strong>OPAT : résultat opérationnel après impôt</li>
                  <li><strong>A</strong>ctualisation : des flux futurs au CMPC</li>
                  <li><strong>V</strong>aleur Terminale : croissance perpétuelle</li>
                  <li><strong>I</strong>nvestissements : soustraire Δ Immobilisations et Δ BFR</li>
                </ul>
              </div>
            </div>

            {/* Méthodes alternatives de valorisation */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">🔄 Méthodes alternatives de valorisation</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-700 mb-3">1. Méthode des multiples</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="font-semibold">Multiples de résultat :</p>
                      <ul className="list-disc list-inside text-xs space-y-1">
                        <li>P/E = Prix / BPA</li>
                        <li>EV/EBITDA</li>
                        <li>EV/EBIT</li>
                        <li>Price/Book</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="font-semibold">Multiples de CA :</p>
                      <ul className="list-disc list-inside text-xs space-y-1">
                        <li>EV/CA</li>
                        <li>Price/Sales</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-700 mb-3">2. Méthode patrimoniale</h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="font-semibold">Actif Net Comptable (ANC) :</p>
                      <p className="text-xs">Capitaux propres comptables</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="font-semibold">Actif Net Réévalué (ANR) :</p>
                      <p className="text-xs">ANC + Plus-values latentes</p>
                    </div>
                    <div className="bg-purple-50 p-2 rounded">
                      <p className="font-semibold">Valeur de liquidation :</p>
                      <p className="text-xs">Valeur de cession des actifs</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-white p-4 rounded border">
                <h4 className="font-semibold text-purple-700 mb-3">📋 Synthèse des approches</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="p-2 text-left">Méthode</th>
                        <th className="p-2 text-left">Avantages</th>
                        <th className="p-2 text-left">Inconvénients</th>
                        <th className="p-2 text-left">Usage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">DCF</td>
                        <td className="p-2">Valeur intrinsèque, prospective</td>
                        <td className="p-2">Sensible aux hypothèses</td>
                        <td className="p-2">Valorisation principale</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-semibold">Multiples</td>
                        <td className="p-2">Rapide, marché</td>
                        <td className="p-2">Dépend des comparables</td>
                        <td className="p-2">Validation, négociation</td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Patrimoniale</td>
                        <td className="p-2">Plancher de valeur</td>
                        <td className="p-2">Ignore la rentabilité</td>
                        <td className="p-2">Holding, immobilier</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between mt-8">
          <Link href="/section-2" className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Section II
          </Link>
          <Link href="/quiz" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
            Quiz Interactif
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}