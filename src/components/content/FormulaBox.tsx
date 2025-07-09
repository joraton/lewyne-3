'use client';

import { Calculator } from 'lucide-react';

interface FormulaBoxProps {
  title: string;
  formula: string;
  description?: string;
  variables?: { symbol: string; description: string }[];
  example?: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

export default function FormulaBox({ 
  title, 
  formula, 
  description, 
  variables, 
  example,
  color = 'blue' 
}: FormulaBoxProps) {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    red: 'bg-red-50 border-red-200 text-red-800'
  };

  const iconColorClasses = {
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600',
    orange: 'text-orange-600',
    red: 'text-red-600'
  };

  return (
    <div className={`border rounded-lg p-6 ${colorClasses[color]}`}>
      <div className="flex items-center gap-2 mb-4">
        <Calculator className={`w-5 h-5 ${iconColorClasses[color]}`} />
        <h4 className="font-semibold">{title}</h4>
      </div>
      
      {/* Formule principale */}
      <div className="text-center py-4 mb-4">
        <div className="text-lg font-mono bg-white p-4 rounded border inline-block shadow-sm">
          {formula}
        </div>
      </div>

      {/* Description */}
      {description && (
        <p className="text-sm mb-4">{description}</p>
      )}

      {/* Variables */}
      {variables && variables.length > 0 && (
        <div className="mb-4">
          <p className="font-medium text-sm mb-2">Où :</p>
          <ul className="text-sm space-y-1">
            {variables.map((variable, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="font-mono font-semibold">{variable.symbol}</span>
                <span>=</span>
                <span>{variable.description}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Exemple */}
      {example && (
        <div className="bg-white bg-opacity-50 rounded p-3">
          <p className="font-medium text-sm mb-1">Exemple :</p>
          <p className="text-sm font-mono">{example}</p>
        </div>
      )}
    </div>
  );
}