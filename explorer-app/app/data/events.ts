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
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "webperf-summit",
    title: "Web Performance Summit",
    date: "2025-10-05",
    location: "Bengaluru, IN",
    shortDescription: "Everything about speeding up the web.",
    description:
      "Industry experts share strategies and tools for measuring and improving Core Web Vitals, code-splitting, and caching.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
  },
  {
    id: "oss-meetup",
    title: "Open Source Meetup",
    date: "2025-09-28",
    location: "Mumbai, IN",
    shortDescription: "Collaborate on open-source projects.",
    description:
      "A community meetup for maintainers and first-time contributors. Bring your laptop and enthusiasm!",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    id: "ai-devdays",
    title: "AI Dev Days",
    date: "2025-11-12",
    location: "Remote",
    shortDescription: "Build AI-powered apps end-to-end.",
    description:
      "From prompt engineering to productionization. Talks and workshops from leading practitioners.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "design-systems",
    title: "Design Systems Conference",
    date: "2025-12-01",
    location: "Pune, IN",
    shortDescription: "Scale your UI with systems thinking.",
    description:
      "Case studies on building robust, accessible, and themeable component libraries without heavy UI kits.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
  },
  {
    id: "cloud-native-camp",
    title: "Cloud Native Camp",
    date: "2025-10-20",
    location: "Hyderabad, IN",
    shortDescription: "Kubernetes, serverless, and edge.",
    description:
      "Deep dive into modern cloud-native architectures, observability, and cost optimization techniques.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  },
  {
    id: "sec-secureweb",
    title: "Secure Web Bootcamp",
    date: "2025-11-05",
    location: "Chennai, IN",
    shortDescription: "Practical web security for devs.",
    description:
      "OWASP Top 10, supply chain risks, and hands-on threat modeling tailored for frontend engineers.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "js-fest",
    title: "JavaScript Fest",
    date: "2025-12-15",
    location: "Remote",
    shortDescription: "Celebrate the JS ecosystem.",
    description:
      "Talks, lightning sessions, and live coding challenges covering frameworks, tooling, and the future of JS.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
];

export function getAllLocations(): string[] {
  return Array.from(new Set(events.map((e) => e.location)));
}

export function getEventById(id: string): EventItem | undefined {
  return events.find((e) => e.id === id);
}
