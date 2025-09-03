export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO date string
  location: string;
  shortDescription: string;
  description: string;
  image: string; // public path
};

export const events: EventItem[] = [
  {
    id: "nxjs-101",
    title: "Next.js Fundamentals Workshop",
    date: "2025-09-20",
    location: "New Delhi, IN",
    shortDescription: "Hands-on intro to Next.js 15 and React 19.",
    description:
      "A practical, hands-on workshop covering App Router, data fetching patterns, and performance best practices in Next.js 15 with React 19.",
    image: "/images/next-workshop.svg",
  },
  {
    id: "webperf-summit",
    title: "Web Performance Summit",
    date: "2025-10-05",
    location: "Bengaluru, IN",
    shortDescription: "Everything about speeding up the web.",
    description:
      "Industry experts share strategies and tools for measuring and improving Core Web Vitals, code-splitting, and caching.",
    image: "/images/perf-summit.svg",
  },
  {
    id: "oss-meetup",
    title: "Open Source Meetup",
    date: "2025-09-28",
    location: "Mumbai, IN",
    shortDescription: "Collaborate on open-source projects.",
    description:
      "A community meetup for maintainers and first-time contributors. Bring your laptop and enthusiasm!",
    image: "/images/oss-meetup.svg",
  },
  {
    id: "ai-devdays",
    title: "AI Dev Days",
    date: "2025-11-12",
    location: "Remote",
    shortDescription: "Build AI-powered apps end-to-end.",
    description:
      "From prompt engineering to productionization. Talks and workshops from leading practitioners.",
    image: "/images/ai-devdays.svg",
  },
  {
    id: "design-systems",
    title: "Design Systems Conference",
    date: "2025-12-01",
    location: "Pune, IN",
    shortDescription: "Scale your UI with systems thinking.",
    description:
      "Case studies on building robust, accessible, and themeable component libraries without heavy UI kits.",
    image: "/images/design-systems.svg",
  },
  {
    id: "cloud-native-camp",
    title: "Cloud Native Camp",
    date: "2025-10-20",
    location: "Hyderabad, IN",
    shortDescription: "Kubernetes, serverless, and edge.",
    description:
      "Deep dive into modern cloud-native architectures, observability, and cost optimization techniques.",
    image: "/images/cloud-native.svg",
  },
  {
    id: "sec-secureweb",
    title: "Secure Web Bootcamp",
    date: "2025-11-05",
    location: "Chennai, IN",
    shortDescription: "Practical web security for devs.",
    description:
      "OWASP Top 10, supply chain risks, and hands-on threat modeling tailored for frontend engineers.",
    image: "/images/secure-web.svg",
  },
  {
    id: "js-fest",
    title: "JavaScript Fest",
    date: "2025-12-15",
    location: "Remote",
    shortDescription: "Celebrate the JS ecosystem.",
    description:
      "Talks, lightning sessions, and live coding challenges covering frameworks, tooling, and the future of JS.",
    image: "/images/js-fest.svg",
  },
];

export function getAllLocations(): string[] {
  return Array.from(new Set(events.map((e) => e.location)));
}

export function getEventById(id: string): EventItem | undefined {
  return events.find((e) => e.id === id);
}
