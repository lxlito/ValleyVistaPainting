"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  propertyType: "Residential" | "Commercial" | "";
  service: string;
  details: string;
  timeline: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  propertyType: "",
  service: "",
  details: "",
  timeline: "",
};

const serviceOptions = [
  "Interior painting",
  "Exterior painting",
  "Cabinet refinishing",
  "Commercial repaint",
  "Color consultation",
  "Other / not sure",
];

const timelineOptions = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Flexible / planning",
];

function validate(state: FormState): Errors {
  const errors: Errors = {};
  if (!state.name.trim()) errors.name = "Name is required.";
  if (!state.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email))
    errors.email = "Enter a valid email address.";
  if (!state.phone.trim()) errors.phone = "Phone is required.";
  if (!state.propertyType) errors.propertyType = "Select a property type.";
  if (!state.service) errors.service = "Select a service.";
  if (!state.details.trim() || state.details.trim().length < 10)
    errors.details = "Tell us a little about the project (at least 10 characters).";
  return errors;
}

export function QuoteForm() {
  const [state, setState] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const prefersReduced = useReducedMotion();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate(state);
    if (Object.keys(v).length) {
      setErrors(v);
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setState(empty);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-gold/30 bg-cream-light p-10 text-center shadow-editorial"
        role="status"
      >
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-4 font-display text-3xl font-bold text-navy">
          Thank you — we'll be in touch.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base text-charcoal/70">
          Your request landed in our queue. We typically reply within one business
          day with next steps and an on-site visit window.
        </p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8">
          Submit another request
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="grid gap-5 rounded-3xl border border-navy/10 bg-cream-light p-6 shadow-editorial md:p-10"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" id="name" error={errors.name}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={state.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.name}
          />
        </Field>
        <Field label="Email" id="email" error={errors.email}>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={state.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.email}
          />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Phone" id="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={state.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.phone}
          />
        </Field>
        <Field label="Property type" id="propertyType" error={errors.propertyType}>
          <div className="flex gap-2">
            {(["Residential", "Commercial"] as const).map((opt) => {
              const active = state.propertyType === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => update("propertyType", opt)}
                  className={`flex-1 rounded-full border px-4 py-3 text-sm font-semibold transition-colors ${
                    active
                      ? "border-navy bg-navy text-cream"
                      : "border-navy/20 bg-white text-navy hover:border-navy/60"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Service needed" id="service" error={errors.service}>
          <select
            id="service"
            value={state.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass}
            aria-invalid={!!errors.service}
          >
            <option value="">Select a service…</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred timeline" id="timeline">
          <select
            id="timeline"
            value={state.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            className={inputClass}
          >
            <option value="">No preference</option>
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project details" id="details" error={errors.details}>
        <textarea
          id="details"
          rows={5}
          value={state.details}
          onChange={(e) => update("details", e.target.value)}
          placeholder="Square footage, rooms, surfaces, colors you're considering, anything else we should know."
          className={inputClass}
          aria-invalid={!!errors.details}
        />
      </Field>

      <div className="mt-2 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-xs text-charcoal/60">
          By submitting, you agree to be contacted about your project. We never share your info.
        </p>
        <Button
          type="submit"
          variant="gold"
          size="lg"
          withArrow
          disabled={status === "submitting"}
        >
          {status === "submitting" ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </span>
          ) : (
            "Request my free quote"
          )}
        </Button>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
            role="alert"
          >
            Something went wrong sending your request. Please try again or call us
            directly.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-navy placeholder:text-muted shadow-sm transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 aria-[invalid=true]:border-red-400";

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="mb-2 inline-block text-sm font-semibold text-navy">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 inline-block text-xs font-medium text-red-600">
          {error}
        </span>
      )}
    </label>
  );
}
