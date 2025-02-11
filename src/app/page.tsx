'use client';

import { movies } from '@/data/movies';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Movie Booking</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            href={`/movie/${movie.id}`}
            key={movie.id}
            className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            tabIndex={0}
            aria-label={`View details for ${movie.title}`}
          >
            <div className="relative h-[400px]">
              <Image
                src={movie.imageUrl}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                {movie.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">{movie.genre}</p>
              <p className="text-gray-800 font-medium">${movie.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
