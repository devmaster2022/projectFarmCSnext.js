import React from 'react';
import { Activity, Droplets, Leaf, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: 'Real-Time Data',
    description: 'Monitor soil moisture, temperature, and humidity with instant updates from field sensors.',
    Icon: Activity
  },
  {
    title: 'Smart Irrigation',
    description: 'Automated watering schedules based on real-time soil conditions and weather forecasts.',
    Icon: Droplets
  },
  {
    title: 'Precision Fertilization',
    description: 'Optimize nutrient delivery with smart fertilizer dispensing system.',
    Icon: Leaf
  },
  {
    title: 'Advanced Protection',
    description: 'Built-in fire detection and bird deterrence systems for crop safety.',
    Icon: Shield
  }
];

export default function FeaturesPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Smart Features for Modern Farming
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover how FarmCS revolutionizes agriculture with cutting-edge technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}