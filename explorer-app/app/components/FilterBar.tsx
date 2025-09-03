"use client";
import { useMemo, useState } from "react";

type Props = {
  locations: string[];
  onChange: (value: string) => void;
  defaultValue?: string;
};

export default function FilterBar({
  locations,
  onChange,
  defaultValue = "",
}: Props) {
  const uniqueLocations = useMemo(
    () => ["All locations", ...locations],
    [locations]
  );
  const [value, setValue] = useState<string>(defaultValue);

  function handleChange(next: string) {
    setValue(next);
    onChange(next);
  }

  return (
    <section aria-label="Filter events" className="w-full">
      <div className="glass-card rounded-2xl p-6">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
          {/* Filter Title & Description */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-foreground mb-1">
              Filter Events
            </h2>
            <p className="text-sm text-foreground/60">
              Find events in your preferred location
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <div className="relative">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-foreground/70 mb-2"
              >
                📍 Location
              </label>
              <div className="relative">
                <select
                  id="location"
                  name="location"
                  className="appearance-none w-full sm:w-64 rounded-xl glass-card px-4 py-3 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60 transition-all duration-300 hover:shadow-md cursor-pointer"
                  value={value}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  <option value="">All locations</option>
                  {uniqueLocations
                    .filter((l) => l !== "All locations")
                    .map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                </select>

                {/* Custom dropdown arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-4 pt-6 sm:pt-0">
              <div className="text-center">
                <div className="text-lg font-bold text-gradient">
                  {value
                    ? locations.filter((l) => l === value).length
                    : locations.length}
                </div>
                <div className="text-xs text-foreground/50">
                  {value ? "Filtered" : "Total"}
                </div>
              </div>

              {value && (
                <button
                  onClick={() => handleChange("")}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-foreground/70 hover:text-foreground glass-card hover:shadow-md transition-all duration-300"
                >
                  <span>Clear</span>
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Location chips */}
        <div className="mt-6 pt-6 border-t border-foreground/10">
          <div className="flex flex-wrap gap-2">
            {uniqueLocations.slice(0, 6).map((location) => (
              <button
                key={location}
                onClick={() =>
                  handleChange(location === "All locations" ? "" : location)
                }
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  (value === "" && location === "All locations") ||
                  value === location
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg"
                    : "glass-card text-foreground/60 hover:text-foreground hover:shadow-md"
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70"></span>
                {location}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
