"use client";
import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "../data/events";

type Props = {
  event: EventItem;
  index?: number;
};

export default function EventCard({ event, index = 0 }: Props) {
  const animationDelay = `${index * 100}ms`;

  return (
    <article
      className="group relative overflow-hidden rounded-3xl glass-card card-hover"
      style={{ animationDelay }}
    >
      <Link
        href={`/events/${event.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View details for ${event.title}`}
      ></Link>

      {/* Event Image */}
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={event.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={index < 3}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Live Badge */}
        {index < 2 && (
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
            <span className="text-xs font-medium text-foreground/80">LIVE</span>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400"></div>
          <span className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
            {new Date(event.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
          {event.title}
        </h3>

        <div className="flex items-center gap-2 mb-4">
          <svg
            className="w-4 h-4 text-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-sm text-foreground/60">{event.location}</span>
        </div>

        <p className="text-sm text-foreground/70 line-clamp-3 mb-6 leading-relaxed">
          {event.shortDescription}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
              <span className="text-xs font-bold text-white">
                {event.title.charAt(0)}
              </span>
            </div>
            <div>
              <div className="text-xs text-foreground/50">Event by</div>
              <div className="text-xs font-medium text-foreground/70">
                Tech Community
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium group-hover:gap-3 transition-all duration-300">
            <span className="text-sm">Explore</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-1 group-hover:scale-110"
              aria-hidden
            >
              <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </article>
  );
}
