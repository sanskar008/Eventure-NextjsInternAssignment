import Image from "next/image";
import { notFound } from "next/navigation";
import Layout from "@/app/components/Layout";
import { events, getEventById } from "@/app/data/events";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return events.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  const event = getEventById(id);
  const title = event
    ? `${event.title} | Events Explorer`
    : "Event | Events Explorer";
  const description =
    event?.shortDescription || "Event details and information.";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function EventPage({ params }: Params) {
  const { id } = await params;
  const event = getEventById(id);
  if (!event) return notFound();

  return (
    <Layout>
      <article className="grid lg:grid-cols-2 gap-8 items-start">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/5 bg-white/50 dark:bg-white/5">
          <Image
            src={event.image}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{event.title}</h1>
          <p className="mt-2 text-gray-700 dark:text-gray-200">
            <span>{new Date(event.date).toLocaleDateString()}</span>
            <span className="mx-2">•</span>
            <span>{event.location}</span>
          </p>
          <p className="mt-6 text-base leading-7 text-gray-800 dark:text-gray-100">
            {event.description}
          </p>
        </div>
      </article>
    </Layout>
  );
}
