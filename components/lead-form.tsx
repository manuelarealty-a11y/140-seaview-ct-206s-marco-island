"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

// Lead form, same mailto pattern as the 1066 Ruppert Rd and 1268 6th Ave
// listing sites: submitting opens the visitor's own email app with a
// pre-filled message to Manuela. There is no server endpoint, so there
// is nothing for a bot to abuse — no captcha needed.
export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const body = [
      `Name: ${name}`,
      phone ? `Phone: ${phone}` : null,
      `Email: ${email}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:manuelarealty@gmail.com?subject=${encodeURIComponent(
      "New inquiry — 140 Seaview Ct #206S, Marco Island"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-xl gap-4 rounded-2xl bg-white/10 p-6 text-left backdrop-blur sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm text-white/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm text-white/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
            placeholder="(optional)"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-white/80">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-white/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          defaultValue="I'm interested in 140 Seaview Ct #206S, Marco Island. Please contact me with more information."
          className="w-full resize-none rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-white placeholder-white/40 outline-none focus:border-emerald-300"
        />
      </div>

      <button
        type="submit"
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-8 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
      >
        <Send className="h-4 w-4" />
        Request Information
      </button>

      {submitted && (
        <p className="text-sm text-emerald-300">
          Opening your email app with this message pre-filled — just hit
          send. If nothing opened, please email manuelarealty@gmail.com
          directly.
        </p>
      )}
    </form>
  );
}
