import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Marquee } from "../ui/Marquee";
import { clients, type Client } from "../../data/clients";

export function ClientsMarquee() {
  return (
    <section aria-labelledby="clients-heading" className="py-16 lg:py-20">
      <Container>
        <SectionHeading titleId="clients-heading" title="Our Clients" />
      </Container>

      {/* Auto-scrolls continuously; drag (mouse) or swipe (touch) to scroll. */}
      <Marquee
        ariaLabel="Our clients"
        wrapperClassName="mt-12"
        className="items-center py-3"
        speed={40}
        items={clients}
        renderItem={(c, dup) => (
          <ClientLogo key={dup ? `dup-${c.id}` : c.id} client={c} dup={dup} />
        )}
      />
    </section>
  );
}

function ClientLogo({
  client,
  dup,
}: {
  client: Client;
  /** Duplicate copy that powers the seamless loop. */
  dup?: boolean;
}) {
  return (
    <li aria-hidden={dup || undefined} className="mr-8 shrink-0 sm:mr-12">
      {/* Borderless: trimmed logos sit directly on the section, centered. */}
      <div className="grid h-20 w-40 place-items-center px-2 transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 sm:h-24 sm:w-48">
        <img
          src={client.logo}
          alt={dup ? "" : client.name}
          loading="lazy"
          draggable={false}
          // Absolute max-height (matching the box) caps portrait logos like
          // fresho. A percentage `max-h-full` is ignored inside this auto-height
          // grid track, so tall logos overflowed and got clipped by the marquee.
          className="max-h-20 max-w-full object-contain sm:max-h-24"
        />
      </div>
    </li>
  );
}
