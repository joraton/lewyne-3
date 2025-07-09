'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calculator, AlertTriangle, BookOpen, Lightbulb, Target, TrendingUp } from 'lucide-react';

export default function Section2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Navigation */}
        <nav className="flex items-center justify-between mb-8">
          <Link href="/" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Retour plan du cours
          </Link>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
            Section II
          </div>
          <Link href="/section-3" className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors">
            Section III
            <ArrowRight className="w-4 h-4" />
          </Link>
        </nav>

        {/* Barre de progression */}
        <div className="bg-white rounded-full p-1 mb-8 shadow-sm">
          <div className="bg-purple-600 h-2 rounded-full" style={{ width: '50%' }}></div>
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
              <Calculator className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Section II - Formule d'Hamada et Applications</h1>
              <p className="text-gray-600">Calcul du bêta et valorisation pratique</p>
            </div>
          </div>

          {/* Objectifs */}
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold text-purple-800">Objectifs de cette section</h3>
            </div>
            <ul className="space-y-2 text-purple-700">
              <li>• Maîtriser la formule d'Hamada pour le calcul du bêta</li>
              <li>• Appliquer la méthodologie DCF sur sociétés non cotées</li>
              <li>• Résoudre des exercices complets de valorisation</li>
              <li>• Calculer le CMPC et vérifier les résultats</li>
            </ul>
          </div>

          {/* Contenu */}
          <div className="prose max-w-none space-y-8">
            
            {/* A. Formule d'Hamada */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-600" />
                A. La Formule d'Hamada
              </h2>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Principe</h4>
                </div>
                <p className="text-blue-700">
                  La formule d'Hamada permet de calculer le bêta d'une entreprise endettée 
                  à partir du bêta d'une entreprise non endettée du même secteur.
                </p>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-purple-800 mb-3">📐 Formule d'Hamada</h4>
                <div className="text-center py-4">
                  <div className="text-lg font-mono bg-white p-4 rounded border inline-block">
                    βᵢ = βᵢ* + (βᵢ* - βd)(1 - τ) × D/CP
                  </div>
                </div>
                <div className="text-center py-2">
                  <div className="text-sm text-purple-600">ou si βd = 0 :</div>
                  <div className="text-lg font-mono bg-white p-4 rounded border inline-block mt-2">
                    βᵢ = βᵢ* × [1 + D(1-τ)/CP]
                  </div>
                </div>
                <div className="text-sm text-purple-700 mt-3">
                  <p><strong>Où :</strong></p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>βᵢ = bêta de l'entreprise endettée</li>
                    <li>βᵢ* = bêta de l'entreprise non endettée</li>
                    <li>βd = bêta de la dette (souvent = 0)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* B. DCF sur société non cotée */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                B. DCF sur une Société Non Cotée
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Méthodologie en 4 étapes :</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li><strong>Constitution d'un référentiel</strong> de sociétés cotées comparables</li>
                  <li><strong>Calcul du βᵢ* désendetté</strong> pour chaque comparable</li>
                  <li><strong>Calcul du β sectoriel</strong> (moyenne des β désendettés)</li>
                  <li><strong>Réendettement du β</strong> par la formule d'Hamada</li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-800 mb-3">📐 Formule de désendettement</h4>
                <div className="text-center py-4">
                  <div className="text-lg font-mono bg-white p-4 rounded border inline-block">
                    βᵢ* = βᵢ / [1 + D(1-τ)/CP]
                  </div>
                </div>
                <p className="text-yellow-700 text-sm mt-3">
                  <strong>Note :</strong> CP = capitalisation boursière pour les sociétés cotées
                </p>
              </div>
            </section>

            {/* Exemple complet */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-purple-600" />
                Exemple Complet de Valorisation
              </h2>
              
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6 rounded-r-lg">
                <h4 className="font-semibold text-green-800 mb-3">📋 Énoncé</h4>
                <p className="text-green-700 mb-3">
                  On cherche à valoriser la société S non cotée. Référentiel de sociétés comparables : A, B et C.
                  Taux d'IS = 25%.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">1. Calcul du β sectoriel</h3>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Sociétés</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">CB (M€)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">D (M€)</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">βᵢ</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">βᵢ*</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">A</td>
                      <td className="border border-gray-300 px-4 py-2">1 000</td>
                      <td className="border border-gray-300 px-4 py-2">200</td>
                      <td className="border border-gray-300 px-4 py-2">1,3</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50">1,13</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">B</td>
                      <td className="border border-gray-300 px-4 py-2">2 000</td>
                      <td className="border border-gray-300 px-4 py-2">500</td>
                      <td className="border border-gray-300 px-4 py-2">1,4</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50">1,18</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-medium">C</td>
                      <td className="border border-gray-300 px-4 py-2">3 000</td>
                      <td className="border border-gray-300 px-4 py-2">400</td>
                      <td className="border border-gray-300 px-4 py-2">1,1</td>
                      <td className="border border-gray-300 px-4 py-2 bg-blue-50">1,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">Calculs détaillés :</h4>
                <div className="space-y-2 text-sm text-blue-700 font-mono">
                  <p>βₐ* = 1,3 / [1 + 200(1-25%)/1000] = 1,3 / 1,15 = 1,13</p>
                  <p>βᵦ* = 1,4 / [1 + 500(1-25%)/2000] = 1,4 / 1,1875 = 1,18</p>
                  <p>βᶜ* = 1,1 / [1 + 400(1-25%)/3000] = 1,1 / 1,1 = 1,00</p>
                </div>
                <div className="mt-3 p-3 bg-white rounded border">
                  <strong className="text-blue-800">β sectoriel = (1,13 + 1,18 + 1,00) / 3 = 1,10</strong>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">2. Coût du capital non endetté</h3>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-gray-700 mb-2"><strong>Données :</strong></p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Taux OAT 10 ans (rf) = 3,4%</li>
                  <li>• Prime de risque du marché = 6%</li>
                </ul>
                <div className="mt-3 p-3 bg-white rounded border">
                  <p className="font-mono">ρ = rf + β* × (E(Rm) - rf)</p>
                  <p className="font-mono">ρ = 3,4% + 1,10 × 6% = 10%</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">3. Données de la société S</h3>
              
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
                <ul className="text-yellow-700 space-y-1">
                  <li>• Financement : 60% par dette</li>
                  <li>• Coût de la dette = 4%</li>
                  <li>• Ratio D/(CP+D) = 60% → D/CP = 0,6/0,4 = 1,5</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">4. Calcul du β de la dette</h3>
              
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-6">
                <p className="text-purple-700 mb-2">D'après le MEDAF :</p>
                <div className="font-mono text-sm space-y-1">
                  <p>i = rf + βd × [E(Rm) - rf]</p>
                  <p>βd = (i - rf) / [E(Rm) - rf]</p>
                  <p>βd = (4% - 3,4%) / 6% = 0,1</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">5. Calcul du β réendetté</h3>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <div className="font-mono text-sm space-y-1">
                  <p>βᵢ = β* + (β* - βd)(1 - τ) × D/CP</p>
                  <p>βᵢ = 1,1 + (1,1 - 0,1)(1 - 25%) × 1,5</p>
                  <p>βᵢ = 1,1 + 1,0 × 0,75 × 1,5 = 2,225</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">6. Coût des capitaux propres</h3>
              
              <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg mb-6">
                <div className="font-mono text-sm space-y-1">
                  <p>k = rf + βᵢ × [E(Rm) - rf]</p>
                  <p>k = 3,4% + 2,225 × 6% = 16,75%</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">7. Vérification avec M&M</h3>
              
              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg mb-6">
                <div className="font-mono text-sm space-y-1">
                  <p>k = ρ + (ρ - i)(1 - τ) × D/CP</p>
                  <p>k = 10% + (10% - 4%)(1 - 25%) × 1,5</p>
                  <p>k = 10% + 6% × 0,75 × 1,5 = 16,75% ✓</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">8. CMPC</h3>
              
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg mb-6">
                <div className="font-mono text-sm space-y-1">
                  <p>CMPC = k × CP/(CP+D) + i(1-τ) × D/(CP+D)</p>
                  <p>CMPC = 16,75% × 40% + 4% × 75% × 60%</p>
                  <p>CMPC = 6,7% + 1,8% = 8,5%</p>
                </div>
                <div className="mt-3 p-2 bg-white rounded border">
                  <p className="text-sm"><strong>Vérification :</strong></p>
                  <p className="font-mono text-sm">K = ρ × [1 - Dτ/(CP+D)] = 10% × [1 - 60% × 25%] = 8,5% ✓</p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h4 className="font-semibold text-red-800">Points clés à retenir</h4>
                </div>
                <ul className="space-y-2 text-red-700">
                  <li>• Le β désendetté représente le risque industriel pur</li>
                  <li>• La formule d'Hamada ajoute le risque financier</li>
                  <li>• Toujours vérifier les calculs avec les formules M&M</li>
                  <li>• Le CMPC diminue avec l'endettement (effet fiscal)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">📊 Ratios financiers et indicateurs de performance</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-blue-700 mb-3">Ratios de structure financière</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ratio d'endettement :</span>
                        <span className="font-mono">Dettes / Capitaux propres</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ratio d'autonomie :</span>
                        <span className="font-mono">CP / Total bilan</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Couverture des intérêts :</span>
                        <span className="font-mono">EBIT / Charges financières</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Capacité de remboursement :</span>
                        <span className="font-mono">Dette nette / EBITDA</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-blue-700 mb-3">Ratios de rentabilité</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>ROE :</span>
                        <span className="font-mono">Résultat net / CP</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROA :</span>
                        <span className="font-mono">Résultat net / Total actif</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ROIC :</span>
                        <span className="font-mono">NOPAT / Capital investi</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Marge EBITDA :</span>
                        <span className="font-mono">EBITDA / CA</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-700 mb-3">🎯 Indicateurs de création de valeur</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-blue-600">EVA (Economic Value Added)</p>
                      <p className="font-mono text-xs">NOPAT - (CMPC × Capital investi)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">ROIC vs CMPC</p>
                      <p className="text-xs">Si ROIC &gt; CMPC → Création de valeur</p>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-600">Free Cash Flow Yield</p>
                      <p className="font-mono text-xs">FCF / Valeur d'entreprise</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>

        {/* Navigation bas */}
        <div className="flex justify-between mt-8">
          <Link href="/section-1" className="flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-gray-800">
            <ArrowLeft className="w-4 h-4" />
            Section I
          </Link>
          <Link href="/section-3" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all">
            Section III - Cas Pratiques
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}