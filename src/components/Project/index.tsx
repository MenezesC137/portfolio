import React from "react";
import Image, { StaticImageData } from "next/image";

interface IProject {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  projectUrl?: string;
  videoUrl?: string;
}

export default function Project({
  id,
  title,
  description,
  image,
  projectUrl,
  videoUrl,
}: IProject) {
  const destination = projectUrl || videoUrl;

  if (!destination) return null;

  return (
    <a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View project: ${title}`}
      className="group relative flex h-[272px] w-full max-w-[430px] overflow-hidden rounded-xl border border-gray-600 bg-[#101112] text-white transition-all duration-300 hover:border-red-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    >
      <div className="absolute inset-y-0 right-0 w-[58%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 430px"
          className="object-cover object-center opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101112] via-[#101112]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101112]/60 via-transparent to-[#101112]/20" />
      </div>
      <span className="absolute right-4 top-3 z-10 text-lg font-medium text-red-500">
        {String(id).padStart(2, "0")}
      </span>
      <div className="relative z-10 flex w-full flex-col items-start p-5 sm:p-6">
        <div className="mt-8">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>

          <p className="mt-1 max-w-[230px] text-sm text-gray-300 sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-auto inline-flex items-center gap-3 border-b-2 border-red-500 pt-4 pb-1 text-sm font-medium transition-colors group-hover:text-red-400">
          View project
          <span className="text-xl text-red-500 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}
