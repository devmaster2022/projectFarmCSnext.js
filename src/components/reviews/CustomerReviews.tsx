import React from 'react';
import { Star } from 'lucide-react';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    id: 1,
    name: 'Rajesh Patel',
    location: 'Gujarat',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150',
    review: 'FarmCS has transformed my farming practices. The smart irrigation system helped me reduce water usage by 40% while improving crop yield.',
    crop: 'Cotton'
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    location: 'Karnataka',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150',
    review: 'The real-time monitoring features are incredible. I can now manage my fields remotely and get instant alerts about any issues.',
    crop: 'Rice'
  },
  {
    id: 3,
    name: 'Surinder Singh',
    location: 'Punjab',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150',
    review: 'The fire detection system saved my wheat field last season. FarmCS is not just a product, it\'s a complete farming solution.',
    crop: 'Wheat'
  }
];

export default function CustomerReviews() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Farmers Across India
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            See how FarmCS is helping farmers revolutionize their agricultural practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}