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
import { Check, Close } from "../icons";
import { brand, whatsappWith } from "../../data/site";
import { useRegion } from "../../hooks/useRegion";
import { EASE_PREMIUM } from "../../lib/motion";

/**
 * Shared "Get in touch" enquiry form (design from Figma node 75:167 — a dark
 * frosted-glass panel). Mounted once at the app root; any CTA opens it via
 * `useInquiry().open()`. On submit it composes the answers into a pre-filled
 * WhatsApp message to the primary line (+971 52 158 9011).
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
  // India visitors get a +91 dial code; everyone else defaults to the UAE line.
  const { isIndia } = useRegion();
  const dialCode = isIndia ? "+91" : "+971";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      `Hi ${brand.name}, I'd like to get in touch.`,
      "",
      `Name: ${name}`,
      email && `Email: ${email}`,
      phone && `Phone: ${dialCode} ${phone}`,
      message && `Message: ${message}`,
    ].filter(Boolean);

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
        className="absolute inset-0 bg-ink-strong/25 backdrop-blur-[3px]"
        onClick={onClose}
        aria-hidden
      />

      {/* Premium frosted-glass panel (Apple-style vibrancy) */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: EASE_PREMIUM }}
        className="relative max-h-[90vh] w-full max-w-[480px] overflow-y-auto rounded-[32px] border border-white/15 bg-gradient-to-b from-white/[0.16] to-white/[0.04] px-6 py-7 text-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.65)] ring-1 ring-white/10 backdrop-blur-2xl backdrop-saturate-150 sm:px-8 sm:py-8"
      >
        {/* Dark vibrancy base so text stays legible over any backdrop */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-gradient-to-b from-[rgba(28,28,32,0.55)] to-[rgba(10,10,12,0.62)]"
        />
        {/* Top sheen highlight (kept behind content so it never washes out text) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 rounded-t-[32px] bg-gradient-to-b from-white/10 to-transparent"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close form"
          className="absolute top-5 right-5 grid size-9 place-items-center rounded-full border border-white/20 bg-white/5 text-white/80 transition-colors hover:border-white/50 hover:text-white"
        >
          <Close className="size-5" />
        </button>

        <h2
          id="inquiry-title"
          className="relative z-10 max-w-[16ch] text-[22px] font-bold leading-tight text-white [text-shadow:0_1px_14px_rgba(0,0,0,0.45)] sm:text-[26px]"
        >
          Receive a call within seconds
        </h2>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3.5">
          <Field label="Full Name*" htmlFor="inq-name">
            <input
              id="inq-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={pillClass}
            />
          </Field>

          <Field label="E-Mail*" htmlFor="inq-email">
            <input
              id="inq-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={pillClass}
            />
          </Field>

          <Field label="Phone*" htmlFor="inq-phone">
            <div className="flex h-12 items-center rounded-full border border-white/20 bg-white/[0.06] px-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors focus-within:border-white/45 focus-within:bg-white/[0.1]">
              <span className="font-semibold text-white">{dialCode}</span>
              <span className="mx-4 h-5 w-px bg-white/30" />
              <input
                id="inq-phone"
                name="phone"
                type="tel"
                required
                placeholder={isIndia ? "98765 43210" : "50 000 0000"}
                className="h-full flex-1 bg-transparent text-white outline-none placeholder:text-white/40"
              />
            </div>
          </Field>

          <Field label="Message" htmlFor="inq-message">
            <textarea
              id="inq-message"
              name="message"
              rows={2}
              className={`${pillClass} h-auto resize-none rounded-[20px] py-3`}
            />
          </Field>

          {/* Consent */}
          <label className="flex cursor-pointer items-start gap-3">
            <input type="checkbox" name="consent" className="peer sr-only" />
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-[5px] border border-white/70 text-transparent transition-colors peer-checked:border-white peer-checked:bg-white peer-checked:text-ink-strong">
              <Check className="size-3.5" />
            </span>
            <span className="text-sm font-light leading-relaxed text-white/85">
              I agree to receive information about offers, deals and services
              from this website (optional).
            </span>
          </label>

          <button
            type="submit"
            className="mt-0.5 inline-flex h-12 w-full items-center justify-center rounded-full bg-brand text-sm font-semibold tracking-[0.14em] text-white shadow-[var(--shadow-button)] transition-[filter] duration-300 hover:brightness-[1.07] sm:w-auto sm:self-start sm:px-12"
          >
            SUBMIT
          </button>

          <p className="text-xs font-light leading-relaxed text-white/60">
            By clicking the submit button, I accept and provide my personal
            information, and agree to the XONE13 STUDIOS{" "}
            <span className="text-white/90 underline">Privacy Policy</span>,
            applicable data protection laws, and{" "}
            <span className="text-white/90 underline">Terms of Use</span>.
          </p>
        </form>
      </motion.div>
    </motion.div>
  );
}

const pillClass =
  "h-12 w-full rounded-full border border-white/20 bg-white/[0.06] px-5 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] outline-none transition-colors placeholder:text-white/40 focus:border-white/45 focus:bg-white/[0.1]";

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
      <span className="text-sm font-medium text-white/90">{label}</span>
      {children}
    </label>
  );
}
