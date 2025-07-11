'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';
import SectionBlock from './SectionBlock';

const sections = [
  {
    id: 'introduction',
    title: 'Introduction',
    description: 'Concepts fondamentaux et définitions des décisions de financement',
    icon: 'rocket',
    color: 'blue',
    href: '/introduction'
  },
  {
    id: 'section-1',
    title: 'Section I - Théories de Modigliani & Miller',
    description: 'Modèles sans et avec fiscalité, coût du capital et structure financière',
    icon: 'chart',
    color: 'green',
    href: '/section-1'
  },
  {
    id: 'section-2',
    title: 'Section II - Formule d&apos;Hamada et Applications',
    description: 'Calcul du bêta, DCF sur sociétés non cotées et valorisation pratique',
    icon: 'calculator',
    color: 'purple',
    href: '/section-2'
  },
  {
    id: 'section-3',
    title: 'Section III - Cas Pratiques Avancés',
    description: 'Exercices complets de valorisation et applications DSCG',
    icon: 'briefcase',
    color: 'indigo',
    href: '/section-3'
  },
  {
    id: 'quiz',
    title: 'Quiz Interactif',
    description: 'Évaluez vos connaissances avec des questions ciblées',
    icon: 'quiz',
    color: 'orange',
    href: '/quiz'
  },
  {
    id: 'questions-dscg',
    title: 'Cas pratiques',
    description: 'Exercices d&apos;application pratique et méthodologie d&apos;examen',
    icon: 'certificate',
    color: 'violet',
    href: '/questions-dscg'
  }
];

export default function CoursePlan() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg"
    >
      {/* Titre de la section */}
      <div className="text-center mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <div className="bg-blue-100 rounded-full p-2 sm:p-3">
            <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Plan du cours</h2>
        </div>
        <p className="text-gray-600 text-base sm:text-lg px-4 sm:px-0">
          Suivez un parcours structuré pour maîtriser les décisions de financement
        </p>
      </div>

      {/* Blocs des sections */}
      <div className="space-y-3 sm:space-y-4">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
          >
            <SectionBlock {...section} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}