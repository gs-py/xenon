import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { clients, type Client } from "../../data/clients";

export function ClientsMarquee() {
  return (
    <section aria-labelledby="clients-heading" className="py-16 lg:py-20">
      <Container>
        <SectionHeading titleId="clients-heading" title="Our Clients" />
      </Container>

      <div className="group relative mt-12 overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent sm:w-32" />

        {/* Two equal-width copies + per-item margin → translateX(-50%) loops seamlessly. */}
        <ul className="animate-marquee flex w-max items-center [--marquee-duration:75s] hover:[animation-play-state:paused]">
          {clients.map((c) => (
            <ClientLogo key={c.id} client={c} />
          ))}
          {clients.map((c) => (
            <ClientLogo key={`dup-${c.id}`} client={c} aria-hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}

function ClientLogo({
  client,
  ...rest
}: {
  client: Client;
  "aria-hidden"?: boolean;
}) {
  return (
    <li {...rest} className="mr-8 shrink-0 sm:mr-12">
      {/* Borderless: trimmed logos sit directly on the section, centered. */}
      <div className="grid h-20 w-40 place-items-center px-2 transition-transform duration-300 ease-[var(--ease-premium)] hover:-translate-y-1 sm:h-24 sm:w-48">
        <img
          src={client.logo}
          alt={rest["aria-hidden"] ? "" : client.name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    </li>
  );
}
