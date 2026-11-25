"use client";

import { useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/site";

type FormText = Dictionary["contact"]["form"];
type Field = "name" | "email" | "message";
type Status = "idle" | "sending" | "success" | "mailto" | "error";

/* Clé Web3Forms (gratuite) à mettre dans .env.local. Sans clé, le formulaire
   ouvre le logiciel de mail du visiteur avec le message déjà rempli. */
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(data: Record<Field, string>, t: FormText) {
  const errors: Partial<Record<Field, string>> = {};
  if (!data.name.trim()) errors.name = t.errName;
  if (!EMAIL_RE.test(data.email.trim())) errors.email = t.errEmail;
  if (data.message.trim().length < 10) errors.message = t.errMessage;
  return errors;
}

export function ContactForm({ t, email }: { t: FormText; email: string }) {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const found = validate(data, t);
    setErrors(found);
    const first = (Object.keys(found) as Field[])[0];
    if (first) {
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    // Champ piège à robots : un humain ne le voit pas et ne le coche pas
    if (fd.get("botcheck")) return;

    if (!ACCESS_KEY) {
      const body = `${data.message}\n\n${data.name} (${data.email})`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: ACCESS_KEY, subject: t.subject, ...data }),
      });
      const json = (await res.json()) as { success?: boolean };
      if (res.ok && json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";
  const message =
    status === "success" ? t.success : status === "mailto" ? t.mailto : status === "error" ? t.error : "";

  const fieldProps = (name: Field) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": [name === "message" ? "contact-message-help" : "", errors[name] ? `contact-${name}-error` : ""]
      .filter(Boolean)
      .join(" ") || undefined,
  });

  return (
    <form ref={formRef} className="form surface" onSubmit={onSubmit} noValidate>
      <h3 className="form__title">{t.title}</h3>

      <div className="field">
        <label htmlFor="contact-name">{t.name}</label>
        <input type="text" autoComplete="name" {...fieldProps("name")} />
        {errors.name ? (
          <p className="field__error" id="contact-name-error">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-email">{t.email}</label>
        <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
        {errors.email ? (
          <p className="field__error" id="contact-email-error">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="contact-message">{t.message}</label>
        <p className="field__help" id="contact-message-help">
          {t.messageHelp}
        </p>
        <textarea rows={5} {...fieldProps("message")} />
        {errors.message ? (
          <p className="field__error" id="contact-message-error">
            {errors.message}
          </p>
        ) : null}
      </div>

      <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} aria-hidden="true" />

      <button type="submit" className="btn btn--primary" disabled={sending} aria-busy={sending}>
        {sending ? t.sending : t.submit}
      </button>

      <p className={`form__status${status === "error" ? " form__status--error" : ""}`} role="status">
        {message}
      </p>
    </form>
  );
}
