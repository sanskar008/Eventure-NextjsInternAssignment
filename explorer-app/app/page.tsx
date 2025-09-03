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
      {/* SEO handled via root metadata; could add page-specific if needed */}
      <section className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Discover Events
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Browse upcoming tech events. Filter by location.
        </p>
      </section>

      <FilterBar locations={locations} onChange={setLocationFilter} />

      <section aria-label="Event list" className="mt-6" role="region">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="mt-8 text-sm text-gray-600 dark:text-gray-300">
            No events match this location.
          </p>
        )}
      </section>
    </Layout>
  );
}
