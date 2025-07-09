'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Rocket, 
  TrendingUp, 
  Calculator, 
  Briefcase, 
  HelpCircle, 
  Award,
  ChevronRight
} from 'lucide-react';

interface SectionBlockProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  href: string;
}

const iconMap = {
  rocket: Rocket,
  chart: TrendingUp,
  calculator: Calculator,
  briefcase: Briefcase,
  quiz: HelpCircle,
  certificate: Award
};

const colorMap = {
  blue: {
    bg: 'bg-blue-100',
    icon: 'text-blue-600',
    border: 'border-blue-200',
    hover: 'hover:border-blue-300',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  green: {
    bg: 'bg-green-100',
    icon: 'text-green-600',
    border: 'border-green-200',
    hover: 'hover:border-green-300',
    button: 'bg-green-600 hover:bg-green-700'
  },
  purple: {
    bg: 'bg-purple-100',
    icon: 'text-purple-600',
    border: 'border-purple-200',
    hover: 'hover:border-purple-300',
    button: 'bg-purple-600 hover:bg-purple-700'
  },
  indigo: {
    bg: 'bg-indigo-100',
    icon: 'text-indigo-600',
    border: 'border-indigo-200',
    hover: 'hover:border-indigo-300',
    button: 'bg-indigo-600 hover:bg-indigo-700'
  },
  orange: {
    bg: 'bg-orange-100',
    icon: 'text-orange-600',
    border: 'border-orange-200',
    hover: 'hover:border-orange-300',
    button: 'bg-orange-600 hover:bg-orange-700'
  },
  violet: {
    bg: 'bg-violet-100',
    icon: 'text-violet-600',
    border: 'border-violet-200',
    hover: 'hover:border-violet-300',
    button: 'bg-violet-600 hover:bg-violet-700'
  }
};

export default function SectionBlock({ title, description, icon, color, href }: SectionBlockProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  const colors = colorMap[color as keyof typeof colorMap];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`bg-white border-2 ${colors.border} ${colors.hover} rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <div className="flex items-center gap-6">
        {/* Icône */}
        <div className={`${colors.bg} rounded-full p-4 flex-shrink-0`}>
          <IconComponent className={`w-8 h-8 ${colors.icon}`} />
        </div>

        {/* Contenu */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Bouton */}
        <Link href={href}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.button} text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors duration-200 shadow-sm hover:shadow-md`}
          >
            Commencer
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}