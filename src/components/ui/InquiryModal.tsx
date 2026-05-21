import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close } from "../icons";
import { Button } from "./Button";
import { brand, whatsappWith } from "../../data/site";
import { services } from "../../data/services";
import { EASE_PREMIUM } from "../../lib/motion";

/**
 * Shared "Get in touch" enquiry form. Mounted once at the app root; any CTA can
 * open it via `useInquiry().open()`. On submit it composes the answers into a
 * pre-filled WhatsApp message to the primary line (+971 52 158 9011) — so the
 * studio "receives the WhatsApp message once the client fills the form".
 */

interface InquiryContextValue {
  open: () => void;
  close: () => void;
}

const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry(): InquiryContextValue {
  const ctx = useContext(InquiryContext);
  if (!ctx) throw new Error("useInquiry must be used within <InquiryProvider>");
  return ctx;
}

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock body scroll + close on Escape while the dialog is open.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close]);

  return (
    <InquiryContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && <InquiryDialog onClose={close} />}
      </AnimatePresence>
    </InquiryContext.Provider>
  );
}

function InquiryDialog({ onClose }: { onClose: () => void }) {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      `Hi ${brand.name}, I'd like to get in touch.`,
      "",
      `Name: ${name}`,
      phone && `Contact: ${phone}`,
      service && `Interested in: ${service}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

    setSubmitting(true);
    // Hand off to WhatsApp (primary line) with the enquiry pre-filled.
    window.open(whatsappWith(lines.join("\n")), "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-strong/55 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        className="relative w-full max-w-lg overflow-hidden rounded-[28px] border border-line bg-white shadow-[var(--shadow-panel)]"
      >
        {/* Branded header */}
        <div className="relative overflow-hidden bg-brand px-7 py-7 text-white sm:px-9">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-10 -right-8 size-40 rounded-full bg-white/15 blur-2xl"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close form"
            className="absolute top-5 right-5 grid size-9 place-items-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
          >
            <Close className="size-5" />
          </button>
          <h2 id="inquiry-title" className="text-2xl font-semibold">
            Get in touch
          </h2>
          <p className="mt-1.5 max-w-sm text-sm font-light text-white/85">
            Tell us a little about your brand — we'll continue the conversation
            on WhatsApp and reply within one business day.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-7 py-7 sm:px-9"
        >
          <Field label="Your name" htmlFor="inq-name">
            <input
              id="inq-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Doe"
              className={inputClass}
            />
          </Field>

          <Field label="Phone or email" htmlFor="inq-phone">
            <input
              id="inq-phone"
              name="phone"
              type="text"
              required
              placeholder="+971 50 000 0000"
              className={inputClass}
            />
          </Field>

          <Field label="What can we help with?" htmlFor="inq-service">
            <select
              id="inq-service"
              name="service"
              defaultValue=""
              className={inputClass}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
              <option value="Something else">Something else</option>
            </select>
          </Field>

          <Field label="Message (optional)" htmlFor="inq-message">
            <textarea
              id="inq-message"
              name="message"
              rows={3}
              placeholder="A few words about your project…"
              className={`${inputClass} resize-none`}
            />
          </Field>

          <Button type="submit" size="lg" withArrow className="mt-1 w-full">
            {submitting ? "Opening WhatsApp…" : "Send on WhatsApp"}
          </Button>
          <p className="text-center text-xs font-light text-ink-muted">
            Or message us directly at +971 52 158 9011
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

const inputClass =
  "w-full rounded-2xl border border-line bg-[#f9f9f7] px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-teal focus:bg-white";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-medium tracking-wide text-ink/80">
        {label}
      </span>
      {children}
    </label>
  );
}
