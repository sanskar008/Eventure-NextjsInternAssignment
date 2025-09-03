"use client";
import Image from "next/image";
import Link from "next/link";
import type { EventItem } from "../data/events";

type Props = {
  event: EventItem;
};

export default function EventCard({ event }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white/60 backdrop-blur shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:bg-white/5">
      <Link
        href={`/events/${event.id}`}
        className="absolute inset-0"
        aria-label={`View details for ${event.title}`}
      ></Link>
      <div className="aspect-[16/9] relative">
        <Image
          src={event.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
          {event.title}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
          <span>{new Date(event.date).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span>{event.location}</span>
        </p>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-200 line-clamp-3">
          {event.shortDescription}
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium">
            View details
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
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
          </span>
        </div>
      </div>
    </article>
  );
}
