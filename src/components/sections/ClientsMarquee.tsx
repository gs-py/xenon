import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../lib/cn";
import { clients, type Client } from "../../data/clients";

export function ClientsMarquee() {
  return (
    <section aria-labelledby="clients-heading" className="py-16 lg:py-20">
      <Container>
        <SectionHeading titleId="clients-heading" title="Our Clients" />
      </Container>

      {/* Auto-scrolls on desktop; on mobile it's a swipeable horizontal scroll. */}
      <div className="group relative mt-12 overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:none] lg:overflow-hidden [&::-webkit-scrollbar]:hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Two equal-width copies + per-item margin → translateX(-50%) loops
            seamlessly on desktop. The duplicate is hidden on mobile, where the
            single set scrolls manually. */}
        <ul className="flex w-max items-center [--marquee-duration:75s] lg:animate-marquee lg:hover:[animation-play-state:paused]">
          {clients.map((c) => (
            <ClientLogo key={c.id} client={c} />
          ))}
          {clients.map((c) => (
            <ClientLogo key={`dup-${c.id}`} client={c} dup />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClientLogo({
  client,
  dup,
}: {
  client: Client;
  /** Duplicate copy — powers the desktop loop; hidden on mobile. */
  dup?: boolean;
}) {
  return (
    <li
      aria-hidden={dup || undefined}
      className={cn("mr-8 shrink-0 sm:mr-12", dup && "max-lg:hidden")}
    >
      {/* Borderless: trimmed logos sit directly on the section, centered. */}
      <div className="grid h-20 w-40 place-items-center px-2 transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 sm:h-24 sm:w-48">
        <img
          src={client.logo}
          alt={dup ? "" : client.name}
          loading="lazy"
          // Absolute max-height (matching the box) caps portrait logos like
          // fresho. A percentage `max-h-full` is ignored inside this auto-height
          // grid track, so tall logos overflowed and got clipped by the marquee.
          className="max-h-20 max-w-full object-contain sm:max-h-24"
        />
      </div>
    </li>
  );
}
