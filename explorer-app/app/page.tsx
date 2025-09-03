"use client";
import { useMemo, useState } from "react";
import Layout from "./components/Layout";
import EventCard from "./components/EventCard";
import FilterBar from "./components/FilterBar";
import { events, getAllLocations } from "./data/events";

export default function Home() {
  const locations = useMemo(() => getAllLocations().sort(), []);
  const [locationFilter, setLocationFilter] = useState<string>("");

  const filtered = useMemo(() => {
    if (!locationFilter) return events;
    return events.filter((e) => e.location === locationFilter);
  }, [locationFilter]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse"></span>
          <span className="text-sm font-medium text-foreground/70">
            Live Events
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          <span className="text-gradient">Discover Amazing</span>
          <br />
          <span className="text-foreground">Tech Events</span>
        </h1>

        <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Explore cutting-edge technology events, connect with industry leaders,
          and stay ahead of the curve in the digital world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <div className="glass-card px-6 py-3 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-foreground/60">Total Events</div>
                <div className="font-bold text-foreground">{events.length}</div>
              </div>
            </div>
          </div>

          <div className="glass-card px-6 py-3 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-secondary-500 to-secondary-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
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
              </div>
              <div className="text-left">
                <div className="text-sm text-foreground/60">Locations</div>
                <div className="font-bold text-foreground">
                  {locations.length}
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card px-6 py-3 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-accent-500 to-accent-600 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm text-foreground/60">Live Now</div>
                <div className="font-bold text-foreground">2</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FilterBar locations={locations} onChange={setLocationFilter} />

      <section aria-label="Event list" className="mt-12" role="region">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-100 to-secondary-100 flex items-center justify-center">
              <svg
                className="w-8 h-8 text-primary-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467.881-6.078 2.327C8.162 17.327 10.34 16 12.5 16c2.485 0 4.69 1.149 6.078 2.327.39-.288.76-.608 1.09-.963L12 3 4.854 9.146a9.99 9.99 0 00-.146 14.146L9 18.646"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              No events found
            </h3>
            <p className="text-foreground/60">
              No events match this location. Try selecting a different location.
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}
