import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FeatureCard({ title, description, Icon }: FeatureCardProps) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-green-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}