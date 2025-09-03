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
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <label
          htmlFor="location"
          className="text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Location
        </label>
        <select
          id="location"
          name="location"
          className="w-full sm:w-64 rounded-xl border border-gray-300 dark:border-white/15 bg-white/80 dark:bg-white/5 px-3 py-2 text-sm text-gray-900 dark:text-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
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
      </div>
    </section>
  );
}
