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

/** A section is a heading plus an ordered run of paragraphs and bullet lists. */
type Block =
  | { type: "p"; text: ReactNode }
  | { type: "list"; items: string[] };

const sections: { title: string; blocks: Block[] }[] = [
  {
    title: "What We Collect",
    blocks: [
      {
        type: "p",
        text: "We collect information you provide directly to us, including your name, email address, phone number, company details, and any other information shared while enquiring about or engaging our services.",
      },
      {
        type: "p",
        text: "When you visit our website or interact with our platforms, we may also collect standard usage information such as IP address, browser type, device information, and pages visited through analytics and tracking tools.",
      },
    ],
  },
  {
    title: "Why We Collect It",
    blocks: [
      { type: "p", text: "We use your information to:" },
      {
        type: "list",
        items: [
          "Respond to enquiries and service requests",
          "Deliver agreed creative and marketing services",
          "Share proposals, invoices, and project updates",
          "Improve our services and communication processes",
          "Maintain internal business records",
        ],
      },
      {
        type: "p",
        text: "We do not use your information for unsolicited marketing communications without your consent.",
      },
    ],
  },
  {
    title: "What We Don’t Do",
    blocks: [
      {
        type: "p",
        text: "We do not sell, rent, or share your personal information with third parties for their marketing purposes.",
      },
      {
        type: "p",
        text: "We do not store payment card or banking details directly. Payments are processed through secure third-party payment providers where applicable.",
      },
    ],
  },
  {
    title: "Third-Party Tools",
    blocks: [
      {
        type: "p",
        text: "To deliver our services efficiently, we may use trusted third-party platforms such as Google Workspace, Meta platforms, WhatsApp, cloud storage services, project management tools, and analytics platforms.",
      },
      {
        type: "p",
        text: "These platforms operate under their own privacy policies. We only share the minimum information necessary for project communication and delivery.",
      },
    ],
  },
  {
    title: "Data Retention",
    blocks: [
      {
        type: "p",
        text: "We retain client and project-related information for the duration of the engagement and for a reasonable period afterward for operational, legal, accounting, and record-keeping purposes.",
      },
      {
        type: "p",
        text: "You may request deletion of your personal information at any time, subject to legal or contractual obligations that may require retention.",
      },
    ],
  },
  {
    title: "Your Rights",
    blocks: [
      {
        type: "p",
        text: "Depending on applicable laws in India and the United Arab Emirates, you may have the right to:",
      },
      {
        type: "list",
        items: [
          "Access the personal information we hold about you",
          "Request corrections to inaccurate information",
          "Request deletion of your data",
          "Withdraw consent for specific communications",
        ],
      },
      {
        type: "p",
        text: "To exercise these rights, please contact us using the details below.",
      },
    ],
  },
  {
    title: "Security",
    blocks: [
      {
        type: "p",
        text: "We take reasonable technical and organisational measures to protect your information against unauthorised access, misuse, disclosure, or loss. However, no online transmission or storage system can be guaranteed as completely secure.",
      },
    ],
  },
  {
    title: "Changes to This Policy",
    blocks: [
      {
        type: "p",
        text: "We may update this Privacy Policy periodically to reflect operational, legal, or regulatory changes. The effective date at the top indicates the latest version of this policy.",
      },
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="How XONE13 STUDIOS collects, uses, retains, and protects your information across India and the UAE — and the rights you have over your data."
        canonical="https://xone13.com/privacy"
      />
      <SchemaMarkup
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy" },
        ])}
      />

      <section className="scroll-mt-24 pt-32 pb-10 lg:pt-40">
        <Container>
          {/* Title */}
          <Reveal as="h1" className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="text-ink-strong">Privacy Policy </span>
            <span className="text-brand">XONE13 STUDIOS</span>
          </Reveal>
          <Reveal
            as="p"
            delay={0.06}
            className="mt-5 inline-block rounded-full border border-teal px-4 py-1.5 text-sm font-light text-ink"
          >
            Effective: April 2025
          </Reveal>

          {/* Intro lead */}
          <Reveal
            as="p"
            delay={0.1}
            className="mt-10 max-w-4xl text-base font-light leading-relaxed text-pretty text-ink/80 sm:text-lg"
          >
            <Brand /> is committed to handling your information responsibly and
            with care. This Privacy Policy explains what information we collect,
            why we collect it, and how it is used.
          </Reveal>

          {/* Sections */}
          <div className="mt-14 flex flex-col gap-12">
            {sections.map((section) => (
              <Reveal as="section" key={section.title} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-ink-strong sm:text-3xl">
                  {section.title}
                </h2>
                {section.blocks.map((block, i) =>
                  block.type === "p" ? (
                    <p
                      key={i}
                      className="max-w-4xl text-base font-light leading-relaxed text-pretty text-ink/80 sm:text-lg"
                    >
                      {block.text}
                    </p>
                  ) : (
                    <ul
                      key={i}
                      className="ml-1 flex max-w-4xl list-disc flex-col gap-2 pl-5 text-base font-light leading-relaxed text-ink/80 marker:text-teal sm:text-lg"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ),
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
