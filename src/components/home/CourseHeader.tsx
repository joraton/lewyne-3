'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Clock, BookOpen, Award } from 'lucide-react';

export default function CourseHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 text-white shadow-2xl"
    >
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
        {/* Icône du cours */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 sm:p-4 flex-shrink-0 self-center sm:self-start">
          <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
        </div>

        {/* Contenu principal */}
        <div className="flex-1 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
          >
            Les Décisions de Financement
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-sm sm:text-base lg:text-lg text-blue-100 mb-4 sm:mb-6 leading-relaxed"
          >
            Maîtrisez les théories fondamentales de Modigliani & Miller, la formule d&apos;Hamada et les applications pratiques
            de valorisation d&apos;entreprise. Un cours complet avec exemples détaillés et exercices d&apos;application.
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4"
          >
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Niveau Expert</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">4h 15min</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">3 sections</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}