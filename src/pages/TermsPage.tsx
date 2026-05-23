import type { ReactNode } from "react";
import { Container } from "../components/ui/Container";
import { Reveal } from "../components/ui/Reveal";
import { FinalCTA } from "../components/sections/FinalCTA";
import { SEO } from "../components/seo/SEO";
import { SchemaMarkup } from "../components/seo/SchemaMarkup";
import { generateBreadcrumbSchema } from "../lib/seo/schemas";

/** Brand wordmark with the signature teal → sage gradient, reused inline. */
function Brand({ children = "XONE13 STUDIOS" }: { children?: ReactNode }) {
  return <span className="text-brand font-semibold">{children}</span>;
}

/** The numbered "General Terms" clauses, in order. */
const clauses: { title: string; body: ReactNode }[] = [
  {
    title: "Scope of Work",
    body:
      "Services are delivered as defined in the proposal or agreement issued for each engagement. Work outside the agreed scope including additional revisions, new deliverables, added platforms, or extended production requirements will be quoted and billed separately.",
  },
  {
    title: "Proposals and Confirmation",
    body:
      "Proposals are valid for 14 days from the date of issue. Work begins only upon written confirmation and receipt of the required deposit.",
  },
  {
    title: "Payment",
    body:
      "A 50% advance payment is required before work begins. The remaining balance is due upon delivery or as per the milestone schedule outlined in the proposal. Retainer fees are invoiced monthly in advance and payable within 7 days of invoice issuance. All applicable taxes, including GST or UAE VAT where applicable, are excluded unless stated otherwise.",
  },
  {
    title: "Revisions",
    body:
      "Each project includes the revision rounds specified in the proposal. A revision refers to refining an existing deliverable and does not include changes to the original brief or direction. Any major changes, additional concepts, or new requirements after project initiation will be treated as additional scope and quoted separately.",
  },
  {
    title: "Client Responsibilities",
    body: (
      <>
        The client is responsible for providing accurate briefs, timely feedback,
        required brand assets, approvals, and access where necessary. Delays
        caused by the client may affect project timelines. <Brand /> is not
        responsible for delays resulting from incomplete information or late
        approvals from the client side.
      </>
    ),
  },
  {
    title: "Intellectual Property",
    body:
      "Upon receipt of full payment, ownership of the final approved deliverables transfers to the client. XONE13 STUDIOS retains ownership of all underlying concepts, templates, production systems, frameworks, and internal processes used during execution. Unless otherwise requested in writing, we reserve the right to showcase completed work in our portfolio and marketing materials.",
  },
  {
    title: "Confidentiality",
    body:
      "Both parties agree to maintain confidentiality regarding any proprietary, business, or sensitive information shared during the engagement. This obligation continues even after the completion or termination of the project.",
  },
  {
    title: "Limitation of Liability",
    body: (
      <>
        <Brand />’ liability is limited to the total amount paid for the specific
        engagement. We are not liable for indirect, incidental, or consequential
        damages, including loss of profits, business interruption, or
        platform-related issues. We do not guarantee specific business,
        advertising, or marketing outcomes.
      </>
    ),
  },
  {
    title: "Termination",
    body:
      "Either party may terminate the engagement through written notice. Any completed work and non-refundable expenses up to the termination date will remain payable. Refunds, if applicable, are subject to the Cancellation and Refund Policy.",
  },
  {
    title: "Governing Law",
    body:
      "These terms shall be governed by and interpreted in accordance with the laws of India and the United Arab Emirates. Any disputes arising in connection with these terms shall be subject to the jurisdiction of the competent courts of Kerala, India, and Dubai, UAE, where applicable.",
  },
];

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="The terms governing engagements with XONE13 STUDIOS — scope, payment, revisions, intellectual property, liability, and governing law across India and the UAE."
        canonical="https://www.xone13.com/terms"
      />
      <SchemaMarkup
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ])}
      />

      <section className="scroll-mt-24 pt-32 pb-10 lg:pt-40">
        <Container>
          {/* Title */}
          <Reveal as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-ink-strong">Terms of Service </span>
            <span className="text-brand">XONE13 STUDIOS</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.06}
            className="mt-5 inline-block rounded-full border border-teal px-4 py-1.5 text-sm font-light text-ink"
          >
            Effective: April 2025
          </Reveal>

          {/* About */}
          <div className="mt-14 flex flex-col gap-5">
            <Reveal
              as="h2"
              className="text-2xl font-semibold text-ink-strong sm:text-3xl"
            >
              About XONE13 STUDIOS
            </Reveal>
            <Reveal
              as="p"
              delay={0.06}
              className="max-w-4xl text-base font-light leading-relaxed text-pretty text-ink/80 sm:text-lg"
            >
              <Brand /> is a creative marketing and production agency helping
              brands and businesses build a strong digital presence through
              photography, videography, branding, social media management,
              advertising, and creative strategy. We work with businesses across
              India and the United Arab Emirates, delivering structured creative
              and marketing solutions focused on long-term growth.
            </Reveal>
          </div>

          {/* General Terms */}
          <Reveal
            as="h2"
            className="mt-16 text-2xl font-semibold text-ink-strong sm:text-3xl"
          >
            General Terms
          </Reveal>

          <ol className="mt-8 flex flex-col gap-10">
            {clauses.map((clause, i) => (
              <Reveal as="li" key={clause.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-teal/40 text-lg font-semibold text-teal"
                  >
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-ink-strong sm:text-2xl">
                    {clause.title}
                  </h3>
                </div>
                <p className="max-w-4xl pl-15 text-base font-light leading-relaxed text-pretty text-ink/80 sm:text-lg">
                  {clause.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
