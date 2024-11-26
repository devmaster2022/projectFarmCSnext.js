import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
  image: string;
  crop: string;
}

export default function ReviewCard({ name, location, rating, review, image, crop }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{location}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-2">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <p className="text-gray-600 mb-4">{review}</p>
      
      <div className="flex items-center justify-between text-sm">
        <span className="text-green-600 font-medium">Crop: {crop}</span>
      </div>
    </div>
  );
}