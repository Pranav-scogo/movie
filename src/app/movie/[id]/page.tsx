'use client';

import { movies } from '@/data/movies';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default function MovieDetails({ params }: { params: { id: string } }) {
  const router = useRouter();
  const movie = movies.find((m) => m.id === parseInt(params.id));

  if (!movie) {
    notFound();
  }

  const handleBooking = () => {
    router.push(`/booking/${movie.id}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="relative md:w-1/2 h-[400px]">
            <Image
              src={movie.imageUrl}
              alt={movie.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <p className="text-gray-600 mb-4">{movie.description}</p>
            <div className="space-y-2 mb-6">
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> {movie.duration}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Genre:</span> {movie.genre}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Price:</span> ${movie.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleBooking}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              aria-label={`Book tickets for ${movie.title}`}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 