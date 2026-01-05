'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play, Tag } from 'lucide-react';

interface PoemCardProps {
  title: string;
  theme: string;
  thumbnail: string;
  videoUrl: string;
  themeColor: string;
}

function PoemCard({ title, theme, thumbnail, videoUrl, themeColor }: PoemCardProps) {
  return (
    <Link 
      href={videoUrl}
      className="group block bg-white rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500"
    >
      {/* Video Thumbnail */}
      <div className="relative aspect-video bg-neutral-100 overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${title} performance thumbnail`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white">
            <Play className="w-8 h-8 text-neutral-900 group-hover:text-white" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Theme Tag */}
        <div className="flex items-center gap-2 mb-3">
          <Tag className="w-4 h-4 text-orange-600" />
          <span className={`text-sm font-medium ${themeColor}`}>
            {theme}
          </span>
        </div>

        {/* Poem Title */}
        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-orange-600">
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default function FeaturedPoems() {
  const poems = [
    {
      title: "The Right to Learn",
      theme: "Education",
      themeColor: "text-blue-600",
      thumbnail: "/images/poem-education.jpg",
      videoUrl: "/performances#education"
    },
    {
      title: "Rising Tides, Rising Voices",
      theme: "Climate",
      themeColor: "text-green-600",
      thumbnail: "/images/poem-climate.jpg",
      videoUrl: "/performances#climate"
    },
    {
      title: "Seeds of Peace",
      theme: "Peace",
      themeColor: "text-purple-600",
      thumbnail: "/images/poem-peace.jpg",
      videoUrl: "/performances#peace"
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-3">
            Featured Performances
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-orange-500 to-orange-600"></div>
        </div>

        <p className="text-lg text-neutral-700 mb-12 max-w-3xl">
          Experience the power of spoken word poetry as I explore themes of education, 
          climate justice, and peace through performances on stages around the world.
        </p>

        {/* Poems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {poems.map((poem, index) => (
            <PoemCard
              key={index}
              title={poem.title}
              theme={poem.theme}
              themeColor={poem.themeColor}
              thumbnail={poem.thumbnail}
              videoUrl={poem.videoUrl}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/performances"
            className="inline-flex items-center justify-center px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg rounded-lg hover:from-orange-600 hover:to-orange-700"
          >
            View All Performances
          </Link>
        </div>
      </div>
    </section>
  );
}